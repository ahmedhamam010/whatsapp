<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card title="Bank Questions List" > 

            <div class="mt-3 mb-0 ml-2 mr-2">

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

                <b-col md="3" class="d-none">
                  <b-form-group
                      label="Status"
                      label-for="status"
                      >
                      <v-select
                          v-model="tableFilters.status"
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
                  md="6"
                >
                  <div class="d-flex align-items-center justify-content-end">
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
                      <span class="text-nowrap">Add Question</span>
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

              <template #cell(question)="data">
                <p :title="data.item.question">{{ data.item.question | truncate(40) }}</p>
              </template>

              <template #cell(question_ar)="data">
                <p :title="data.item.question_ar">{{ data.item.question_ar | truncate(40) }}</p>
              </template>

              <template #cell(course)="data">
                <p :title="data.item.course">{{ data.item.question_ar | truncate(20) }}</p>
              </template>

              <template #cell(status)="data">
                {{ data.item.status ? 'Published' : 'Unpublished' }}
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

                  <b-dropdown-item :to="{ name: 'apps-bank-questions-admin-view', params: { id: data.item.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>
                  
                  <b-dropdown-item :to="{ name: 'apps-bank-questions-admin-edit', params: { id: data.item.id , redirect : 'adminList' } }">
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BCardText, BPagination ,BBadge  ,BSpinner 
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
      status:'',
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.adminBankQuestionListPerPage,
      rows: null,
      fields : [
        { key: 'id', label : 'id' },
        { key: 'question', label : 'Question EN' },
        { key: 'question_ar', label : 'Question AR' },
        { key: 'status', label : 'status' },
        { key: 'actions' },
       
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      statusOptions:['pending', 'accepted', 'rejected'],
      searchParameter: '',
      tableFilters : {
        status : null,
      },
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
       router.replace('/apps/baankQuestions/add')
    },
    deleteItem(id=0){
            
      axios.delete(`bank-questions/${id}/destroy`, 
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
      var url = `bank-questions/index?is_nurabi=1&paginate=${this.perPage}&page=${this.currentPage}`
      url +=  this.searchParameter != '' ? `&search[question]=${this.searchParameter}` : ''
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('admin bank questions:' , response.data )
         let data = response.data.data.data
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         this.dataMeta.from = response.data.data.from
         this.dataMeta.to = response.data.data.to 
         this.dataMeta.of = response.data.data.total
        //  console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].id ,
               question : data[i].question ,
               question_ar : data[i].question_ar ,
               status : data[i].is_show? data[i].is_show : '' ,
              //  course : data[i].course ? data[i].course.title : '' ,
               
             })
         }
         this.isLoading = false
         this.isBusy = false
         this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
      } )
      .catch(error => {

              this.isLoading = false
              this.isBusy = false

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
      this.$store.state.appConfig.adminBankQuestionListPerPage = paginate
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
    statusFilter(value){
      this.currentPage = 1
      this.isBusy = true
      this.statusFilter.status = value 
      this.getRecords()
    }
  },
  filters: {
        truncate: function(data,num){
          if( data != null ){
            const reqdString = data.length > num ? 
              data.split("").slice(0, num).join("") + '....' : data.split("").slice(0, num).join("") ;
            return reqdString;
            }else{
              return '-';
            }
        }
    }
  

    
 
}
</script>



