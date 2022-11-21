<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card title="Activities List" > 

            <div class="mt-3 mb-0">

              <!-- Table Top -->
              <b-row>

                <!-- Per Page -->
                <b-col
                  cols="12"
                  md="6"
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
                  md="6"
                >
                  <div class="d-flex align-items-center justify-content-end">
                    <b-form-input
                      v-model="searchParameter"
                      class="search-name d-inline-block mr-1"
                      placeholder="Search..."
                      @keypress.enter="searchParameterChanged"
                    />
                    <b-button
                      variant="primary"
                      @click="redirectToAddForm()"
                    >
                      <span class="text-nowrap">Add Activity</span>
                    </b-button>
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

              

              <!-- Column: Actions -->
              <template #cell(actions)="data">
                <b-dropdown
                  variant="link"
                  no-caret
                  :right="$store.state.appConfig.isRTL"
                >

                  <template #button-content>
                    <feather-icon
                      icon="MoreVerticalIcon"
                      size="16"
                      class="align-middle text-body"
                    />
                  </template>

                  <b-dropdown-item :to="{ name: 'apps-tracking-system-activity-view', params: { id: data.item.id } }" :class="'details-'+ data.item.id">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>
                  
                  <b-dropdown-item :to="{ name: 'apps-tracking-system-activity-edit', params: { id: data.item.id } }" :class="'edit-'+ data.item.id">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>

                  <b-dropdown-item @click="confirmDeleteMsg(data.item.id)" :class="'delete-'+ data.item.id">
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50">Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
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
import getDomain from '@/helperFunctions/getDomain'




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
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.TrackingSystemListPerPage,
      rows: null,
      fields : [
        { key: 'id', label : 'id' },
        { key: 'name', label : 'Name EN' },
        { key: 'name_ar', label : 'Name AR' },
        { key: 'type' },
        { key: 'repetition_criteria' },
        { key: 'tracking_system' , label : 'Tracking / Initiative Name' },
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
    redirectToAddForm(){
       router.push({ path: '/apps/trackingSystem/activity/add'})
    },
    // deleteItem(id=0){
    //    var formData = { "id":id }      
    //   axios.delete(getDomain('no') + `trackingsystem/activities/delete`, formData )
    //     .then(response => {
    //     this.$toast({
    //       component: ToastificationContent,
    //       position: 'top-right',
    //       props: {
    //         title: `Deleted Successfully`,
    //         icon: 'CoffeeIcon',
    //         variant: 'success',
    //         text: '',
    //       },
    //     })  
    //     this.getRecords()
    //     console.log( 'delete axios response:' , response )
        
    //     })
    //     .catch(error => {
    //     console.log( 'delete axios error:' , error )
    //      this.$toast({
    //       component: ToastificationContent,
    //       position: 'top-right',
    //       props: {
    //         title: `${error.response.data.msg}`,
    //         icon: 'CoffeeIcon',
    //         variant: 'danger',
    //         text: '',
    //       },
    //     }) 
    //     });
    // },

    deleteItem(id=0){
      const data = { id: id };

//POST request with body equal on data in JSON format
fetch(getDomain('no') + `trackingsystem/activities/delete`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  body: JSON.stringify(data),
})
//Then with the data from the response in JSON...
.then((data) => {
  console.log(data)
  if( data.status == 404 ){
this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `can't delete this activity as it's used`,
            icon: 'CoffeeIcon',
            variant: 'danger',
            text: '',
          },
        }) 
  }else{
    this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Deleted Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
            text: '',
          },
        })  
        this.getRecords()
  }
  
})
//Then with the error genereted...
.catch((error) => {
  this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `${error.response.data.msg}`,
            icon: 'CoffeeIcon',
            variant: 'danger',
            text: '',
          },
        }) 
});
    },

    confirmDeleteMsg(id) {
      this.deleteConfirmed = ''
      this.$bvModal
      .msgBoxConfirm('Are you sure you want to delete this activity ?', {
        title: 'Please Confirm',
        size: 'sm',
        okVariant: 'primary',
        okTitle: 'Yes',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true,
      })
      .then(value => {
        this.deleteConfirmed = value
        if( this.deleteConfirmed ){ this.deleteItem(id) }
      })
    },
    getRecords(){
      this.isBusy = true
      this.isLoading = true
      this.perPage = this.perPage ? this.perPage : '10'
      var url = getDomain('no') + `trackingsystem/activities/list?flag=dash&paginate=${this.perPage}&page=${this.currentPage}`
      url +=  this.searchParameter != '' ? `&search=${this.searchParameter}` : ''
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('data:' , response.data.data )
         let data = response.data.data;
         this.rows= response.data.total
         this.perPage=response.data.per_page
         this.dataMeta.from = response.data.from
         this.dataMeta.to = response.data.to
         this.dataMeta.of = response.data.total
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].id ,
               name : data[i].name_en ,
               name_ar : data[i].name_ar_original ,
               type:data[i].track_type ? data[i].track_type : '' ,
               repetition_criteria:data[i].type.replace(/_/g, ' ') ,
               tracking_system: data[i].track_name,
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
      this.$store.state.appConfig.categoryListPerPage = paginate
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

