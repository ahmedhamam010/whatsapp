<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card title="Consultants Requests List" > 

            <div class="mt-3 mb-0 ml-2 mr-2">

              <!-- Table Top -->
              <b-row>

                <!-- Per Page -->
                <b-col
                  cols="12"
                  md="5"
                  class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
                >
                  <label>Show</label>
                  <v-select
                    v-model="perPage"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="perPageOptions"
                    :clearable="false"
                    class="per-page-selector d-inline-block mx-50"
                    @input="paginateChanged"
                  />
                  <label>entries</label>
                </b-col>

                
                <!-- Search -->
                <b-col
                  cols="12"
                  md="7"
                >
                  <div class="d-flex align-items-center justify-content-end">
                    <b-form-input
                      v-model="searchParameter"
                      class="d-inline-block mr-1"
                      placeholder="Search..."
                      @keypress.enter="searchParameterChanged"
                    />
                  </div>
                </b-col>

              
              </b-row>

            </div>

            
            <b-table 
              responsive
              :busy="isBusy"
              :items="items"
              class="mt-2"
              show-empty
              :empty-text="loading_msg"
              :fields="fields"
            >
            

              <template #cell(image)="data">
                <b-media vertical-align="center">
                  <template #aside>
                    <b-avatar
                      size="32"
                      :src="data.item.image"
                    />
                  </template>
                </b-media>
              </template>    

                <!-- Column: Actions -->
                <template #cell(actions)="data">

                  <b-button
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="outline-success"
                    @click="updateConsultantRequest(data.item.invitation_id , 'accepted')"
                    v-if="data.item.invitation_status == 'pending'"
                  >
                    <feather-icon icon="CheckIcon" class="mr-50" />
                    <span class="align-middle">Accept</span>
                  </b-button>
                  &nbsp;

                  <b-button
                    v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                    variant="outline-danger"
                    @click="updateConsultantRequest(data.item.invitation_id , 'rejected')"
                    v-if="data.item.invitation_status == 'pending'"
                  >
                    <feather-icon icon="XIcon" class="mr-50" />
                    <span class="align-middle">Reject</span>
                  </b-button>

                  &nbsp;
               
                  <b-button
                      v-if="data.item.consultant_info_id != 'Nurabi'"
                      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                      variant="outline-secondary"
                      :to="{ 
                        name: 'apps-consultation-view-requested-assitant', params: { 
                        id: data.item.consultant_info_id ,
                        type : 'recieve',
                        invitationId: 0
                        } 
                    
                    }"
                  >
                      <feather-icon icon="FileTextIcon" class="mr-50" />
                      <span class="align-middle">Details</span>
                  </b-button>

                
                </template>
             
            
            </b-table>
            
            <div class="mx-2 mb-2">
              <b-row>

                <b-col
                  cols="12"
                  sm="6"
                  class="d-flex align-items-center justify-content-center justify-content-sm-start"
                >
                  <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
                </b-col>
                <!-- Pagination -->
                <b-col
                  cols="12"
                  sm="6"
                  class="d-flex align-items-center justify-content-center justify-content-sm-end"
                >

                   <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                      first-number
                      last-number
                      class="mb-0 mt-1 mt-sm-0"
                      prev-class="prev-item"
                      next-class="next-item"
                      @change="pageChanged"
                    >
                      <template #prev-text>
                        <feather-icon
                          icon="ChevronLeftIcon"
                          size="18"
                        />
                      </template>
                      <template #next-text>
                        <feather-icon
                          icon="ChevronRightIcon"
                          size="18"
                        />
                      </template>
                   </b-pagination>

                </b-col>

              </b-row>
            </div>
      
      
      </b-card>

      <template v-if="isLoading">
          <div class="text-center loading-spinner" id="loading-spinner">
              <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
          </div>
      </template>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BCardText, BPagination ,BBadge, BSpinner  
} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'




export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormTextarea,
    BDropdown,
    BDropdownItem,
    BCardText, BPagination, vSelect, BBadge, BSpinner
  
  },
  data(){
    return{
      id :'',
      status:'',
      items: [],
      currentPage: 1,
      perPage: 10,
      rows: null,
      fields : [
        { key: 'image', label : 'image' },
        { key: 'username', label : 'name' },
        { key: 'actions' },
       
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      searchParameter: '',
      isBusy:false,
      deleteConfirmed: '',
      isLoading:true,
      loading_msg:'',
    }
  },
  directives: {
    Ripple,
  },
  mounted(){
      this.getRecords();
  },
  methods:{
    updateConsultantRequest(id,status){
      var formData = new FormData(); 
      formData.append("_method", "put");
      formData.append("status",status )

      var url = `consultationInfos/invitations/${id}/update`
      axios
      .post(url,formData, this.headersObj)
      .then(response => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Request Updated Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
          },
        })
        this.getRecords();
      })
      .catch(error => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Request error`,
            icon: 'CoffeeIcon',
            variant: 'danger',
          },
        })
      })
    },
    
    getRecords(){
      this.isBusy = true
      this.isLoading = true
      var url = `consultationInfos/invitations/list?invited=1&recieved=1&invitationList=1&paginate=${this.perPage}&page=${this.currentPage}`
           
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('data invite:' , response.data )
         let data = response.data.data.data;
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         this.dataMeta.from = response.data.data.from
         this.dataMeta.to = response.data.data.to
         this.dataMeta.of = response.data.data.total
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           if( data[i].invitations && data[i].invitations.length > 0 ){
            var  username = data[i].invitations[0].sender_name 
            var invitation_id = data[i].invitations[0].id
            var invitation_status = data[i].invitations[0].status
            var consultant_info_id = data[i].invitations[0].consultation_info_id
           }else{
            var  username = ''
            var invitation_id = ''
            var invitation_status = ''
            var consultant_info_id ='Nurabi'
           }
           this.items.push(
             { 
               id:data[i].id ,
               image : data[i].user.avatar,
               username ,
               user_id : data[i].user.id,
               invitation_id,
               invitation_status,
               consultant_info_id   
               
             })
         }
         this.isBusy = false
         this.isLoading = false
         this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
      } )
      .catch(error => {

              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })
                this.isLoading = false

             })
     
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.currentPage = 1
      this.isBusy = true
      this.perPage = paginate;
      this.getRecords()
    },
    searchParameterChanged(value){
      this.currentPage = 1
      this.isBusy = true
      this.searchParameter = value.target.value;;
      this.getRecords()
    },
    
  },
  

    
 
}
</script>

