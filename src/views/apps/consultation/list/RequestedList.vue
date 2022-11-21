<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card title="Consultants List" > 

            <div class="mt-3 mb-0 ml-2 mr-2">

              <!-- Table Top -->
              <b-row>

                <!-- Per Page -->
                <b-col
                  cols="12"
                  md="4"
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

                <b-col md="4">
                  <b-form-group
                      label="Status"
                      label-for="status"
                      >
                      <v-select
                          v-model="status"
                          :options="statusOptions"
                          :clearable="false"
                          input-id="Status"
                          @input="statusFilter"
                      />
                  </b-form-group>
                </b-col>

                <!-- Search -->
                <b-col
                  cols="12"
                  md="4"
                >
                <b-form-group
                      label="Search"
                      label-for="search"
                      >
                    <b-form-input
                      v-model="searchParameter"
                      class="d-inline-block mr-1"
                      placeholder="Name..."
                      @keypress.enter="searchParameterChanged"
                    />
                    </b-form-group>
                  
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

              <template #cell(status)="data">
                <b-badge
                  v-if="data.item.status == 'pending'"
                  pill
                  variant="warning"
                >
                  {{ data.item.status }}
                </b-badge>
                <b-badge
                  v-if="data.item.status == 'accepted'"
                  pill
                  variant="success"
                >
                  {{ data.item.status }}
                </b-badge>
                <b-badge
                  v-if="data.item.status == 'rejected'"
                  pill
                  variant="danger"
                >
                  {{ data.item.status }}
                </b-badge>

              </template> 

                <!-- Column: Actions -->
                <template #cell(actions)="data">
               
                <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    variant="outline-secondary"
                :to="{ name: 'apps-consultation-view-requested-assitant', params: { id: data.item.consultant_info_id ,type :data.item.status , invitationId : data.item.invitation_id } }"
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
      status:null,
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.consultantAssistantList,
      rows: null,
      fields : [
        { key: 'image', label : 'image' },
        { key: 'username', label : 'name' },
        { key: 'status', label : 'status' },
        { key: 'actions' },
       
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      statusOptions:[
        {label :'All' , value : 'All'},
        {label :'Pending' , value : 'pending'},
        {label :'Accepted' , value : 'accepted'},
        {label :'Rejected' , value : 'rejected'},
        
      ],
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
    getRecords(){
      this.isBusy = true
      this.isLoading = true
      let filterStatus = this.status == 'All' ? '' : this.status
      var url = `consultationInfos/invitations/list?invited=1&paginate=${this.perPage}&page=${this.currentPage}`
      url +=  this.searchParameter != '' ? `&name=${this.searchParameter}` : ''
      url += filterStatus ? `&status=${filterStatus}` : ''
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('data:' , response.data.data )
         let data = response.data.data.data;``
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         this.dataMeta.from = response.data.data.from
         this.dataMeta.to = response.data.data.to
         this.dataMeta.of = response.data.data.total
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           
           this.items.push(
             { 
               id:data[i].id ,
               image : data[i].user.avatar,
               username : data[i].user.username,
               user_id : data[i].user.id,
               status : data[i].invitations.length > 0 ? data[i].invitations[0].status : '-' ,
               consultant_info_id : data[i].id,
               invitation_id : data[i].invitations.length > 0 ? data[i].invitations[0].id : '-'
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
      this.$store.state.appConfig.consultantAssistantList = paginate
      this.currentPage = 1
      this.isBusy = true
      this.perPage = paginate;
      this.getRecords()
    },
    searchParameterChanged(value){
      this.currentPage = 1
      this.isBusy = true
      this.searchParameter = value.target.value;
      this.getRecords()
    },
    statusFilter(value){
      console.log(value.value)
      this.currentPage = 1
      this.isBusy = true
      this.status = value.value 
      this.getRecords()
    }
  },
  

    
 
}
</script>

