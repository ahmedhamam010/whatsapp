<template>
  <div class="position-relative">   

      <b-card class="" title="Courses List">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        <b-col md="4" >
          <b-form-group
              label="Type"
              label-for="type"
              >
              <v-select
                  v-model="type"
                  :options="typeOptions"
                  :clearable="false"
                  input-id="type"
                  @input="typeFilter"
              />
          </b-form-group>
        </b-col>

        <b-col md="4" >
          <b-form-group
              label="Paid"
              label-for="paid"
              >
              <v-select
                  v-model="paid"
                  :options="paidOptions"
                  :clearable="false"
                  input-id="type"
                  @input="paidFilter"
              />
          </b-form-group>
        </b-col>

        <b-col md="4" >
          <b-form-group
              label="Status"
              label-for="status"
              >
              <v-select
                  v-model="status"
                  :options="statusOptions"
                  :clearable="false"
                  input-id="type"
                  @input="statusFilter"
              />
          </b-form-group>
        </b-col>
      </b-row>  
      </b-card> 

      <b-card no-body > 

            <div class="mt-3 mb-0 ml-2 mr-2">

              <!-- Table Top -->
              <b-row class="justify-content-between">

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

                

                <!-- Search -->
                <b-col
                  cols="12"
                  md="6"
                  class="d-flex text-right"
                >
                    <b-form-input
                      v-model="searchParameter"
                      class="d-inline-block mr-1"
                      placeholder="Search..."
                      @keypress.enter="searchParameterChanged"
                    />
                    <b-button
                      variant="primary"
                      @click="redirectToAddForm()"
                    >
                      <span class="text-nowrap">Add Course</span>
                    </b-button>
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

              <template #cell(title)="data">
                  
                  {{ data.item.title.length > 25 ? data.item.title.substring(0, 35) + '.....' : data.item.title }}
              </template>

              <template #cell(title_ar)="data">
                  
                  {{ data.item.title_ar.length > 25 ? data.item.title_ar.substring(0, 35) + '.....' : data.item.title_ar }}
              </template>

              <!-- Column: Status -->
              <template #cell(price)="data">
                  {{ data.item.price ? data.item.price : 'Free' }}
              </template>

              <template #cell(currency)="data">
                  <div class="text-center">
                  {{ data.item.price && data.item.currency.name ? data.item.currency.name : '-' }}
                  </div>
              </template>

              <!-- Column: Status -->
              <template #cell(status)="data">
                <b-badge
                  pill
                  class="text-capitalize"
                >
                  {{ data.item.status ? 'Active' : 'Inactive' }}
                </b-badge>
              </template>

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

                  <b-dropdown-item :to="{ name: 'apps-courses-view', params: { id: data.item.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>
                  
                  <b-dropdown-item :to="{ name: 'apps-courses-edit', params: { id: data.item.id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>

                  <b-dropdown-item @click="confirmDeleteMsg(data.item.id)">
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

            <template v-if="isLoading">
                <div class="text-center loading-spinner" id="loading-spinner">
                    <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
                </div>
            </template>
      
      
      </b-card>
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
    BCardText, BPagination, vSelect, BBadge,BSpinner 
  
  },
  data(){
    return{
      id :'',
      name : '',
      email:'',
      phone:'',
      avatar:'',
      jobPosition:'',
      cv:'',
      consultantId : '',
      defaultImg : '/img/logo.6d3f638a.png',
      cv: '',
      about:'',
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.courseListPerPage,
      rows: null,
      fields : [
        { key: 'id' },
        { key: 'image', label : 'image' },
        { key: 'title', label : 'Title EN' },
        { key: 'title_ar', label : 'Title AR' },
        { key: 'provider', label : 'provider' },
        { key: 'type', label : 'type' },
        { key: 'price' , label : 'Paid' },
        { key: 'currency', label : 'currency' },
        { key: 'status', label : 'status' },
        { key: 'actions' },
       
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      typeOptions:[
        {label :'Online' , value : 'online'},
        {label :'Live' , value : 'live'},
        {label :'All' , value : 'all'},
      ],
      type:null,
      paidOptions:[
        {label :'Yes' , value : '1'},
        {label :'No' , value : '0'},
        {label :'All' , value : 'all'},
      ],
      paid:null,
      statusOptions:[
        {label :'Active' , value : '1'},
        {label :'Inactive' , value : '0'},
        {label :'All' , value : 'all'},
      ],
      status:null,
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
      console.log( 'this.store' , this.$store.state.appConfig.courseListPerPage )
      this.getRecords();

  },
  methods:{
    redirectToAddForm(){
      router.push({ path: '/apps/courses/add' })
    },
    deleteItem(id=0){
            
      axios.delete(`courses/${id}`, 
        {
          headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,},
        })
        .then(response => {
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
        console.log( 'delete axios response:' , response )
        
        })
        .catch(error => {
        console.log( 'delete axios error:' , error )
        });
    },

    confirmDeleteMsg(id) {
      this.deleteConfirmed = ''
      this.$bvModal
      .msgBoxConfirm('Please confirm that you want to delete this record.', {
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
      this.isLoading = true
      this.isBusy = true
      let filterPaid = this.paid ? `&paid=${this.paid.value}` : null
      let filterStatus = this.status ? `&status=${this.status.value}` : null
      let filterType = this.type ? `&type=${this.type.value}` : null
      var url = `courses?paginate=${this.perPage}&title=${this.searchParameter}&page=${this.currentPage}`
      url += filterStatus ? `${filterStatus}` : ``
      url += filterPaid ? `${filterPaid}` : ``
      url += filterType ? `${filterType}` : ``
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('courses:' , response.data )
         let data = response.data.data.data;
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
               image : data[i].image,
               title : data[i].title ? data[i].title : '' ,
               title_ar : data[i].title_ar ? data[i].title_ar : '-' ,
               provider : data[i].user ? data[i].user.username : 'Nurabi' ,
               slug : data[i].slug,
               price : data[i].price,
               currency : data[i].currency,
               status : data[i].status,
               type : data[i].is_live == 0 ? 'Online' : 'Live'
               
             })
         }
         this.isBusy = false
         this.isLoading = false
         this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
      } )
      .catch(error => {
              this.isLoading = false
              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error.response.data.msg}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })

             })
     
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.$store.state.appConfig.courseListPerPage = paginate
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
    typeFilter(value){
      this.currentPage = 1
      this.isBusy = true
      this.getRecords()
    },
    paidFilter(value){
      this.currentPage = 1
      this.isBusy = true
      this.getRecords()
    },
    statusFilter(value){
      this.currentPage = 1
      this.isBusy = true
      this.getRecords()
    }
  },
  

    
 
}
</script>

