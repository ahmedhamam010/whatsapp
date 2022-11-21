<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card title="Sessions List" > 

            <div class="mt-3 mb-0">

              <!-- Table Top -->
              <b-row>

                <!-- Per Page -->
                <b-col
                  cols="12"
                  md="3"
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

                <b-col md="4" class="ml-auto" v-if="logged_in_type == 'admin'">
                  <b-form-group
                      label="Consultant"
                      label-for="consultant"
                      >
                      <v-select
                          v-model="tableFilters.consultant"
                          :options="consultantOptions"
                          :clearable="false"
                          input-id="Consultant"
                          @input="consultantFilter"
                      />
                  </b-form-group>
                </b-col>

                <!-- <b-col md="3">
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
                </b-col> -->

                <!-- Search -->
                <b-col
                  cols="12"
                  md="4"
                  class="ml-auto"
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BCardText, BPagination, BSpinner   
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
    BCardText, BPagination, vSelect, BSpinner  
  
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
      defaultImg : 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1641086103~hmac=a9c5dc920808033471019558a26a12ec',
      cv: '',
      about:'',
      status:'',
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.sessionListPerPage,
      rows: null,
      fields : [],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      statusOptions:['All','pending', 'accepted', 'rejected'],
      consultantOptions:[],
      searchParameter: null,
      tableFilters : {
        status : null,
        consultant:'',
      },
      isBusy:false,
      isLoading:true,
      loading_msg:'',
      logged_in_type : JSON.parse(localStorage.getItem('userData')).type
    }
  },
  directives: {
    Ripple,
  },
  mounted(){
      this.getRecords();
      this.getConsultants();
  },
  methods:{
    getRecords(){
      var url = ``
      if( this.logged_in_type != 'admin'  ){
         url = `consultationSessions/user/${JSON.parse(localStorage.getItem('userData')).id}?type=consultant&paginate=${this.perPage}&page=${this.currentPage}&status=paid`
         
          this.fields = 
         [ 
            { key: 'id', label : 'id' },
            { key: 'name', label : 'name' },
            { key: 'time_from', label : 'time from' },
            { key: 'time_to', label : 'time to' },
            { key: 'price', label : 'price' },
            { key: 'time', label : 'time' },
          ]
      }else{
        url = `consultationSessions?paginate=${this.perPage}&page=${this.currentPage}&status=paid` 
        this.fields = 
         [ 
            { key: 'id', label : 'id' },
            { key: 'name', label : 'name' },
            { key: 'consultant_name', label : 'consultant name' },
            { key: 'time_from', label : 'time from' },
            { key: 'time_to', label : 'time to' },
            { key: 'price', label : 'price' },
            { key: 'time', label : 'time' },
          ]
        
      }
      url += this.searchParameter ? `&user_name=${this.searchParameter}` : '';
      url += this.tableFilters.status &&  this.tableFilters.status != 'All' ? `&search[status]=${this.tableFilters.status}` : '';
      url += this.tableFilters.consultant ? `&consultant_name=${this.tableFilters.consultant.value}` : '';
      // if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
      //    url += `&consultant_id=${JSON.parse(localStorage.getItem('userData')).consultation_info.id}` 
      // }
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('consultant sessions:' , response.data )
         let sessions = response.data.data.data;
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         this.dataMeta.from = response.data.data.from
         this.dataMeta.to = response.data.data.to
         this.dataMeta.of = response.data.data.total
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< sessions.length ; i++ ){
           this.items.push(
             { 
               id:sessions[i].id ,
               name : sessions[i].user ? sessions[i].user.username : '',
               consultant_name : sessions[i].consultant ? sessions[i].consultant.username : '',
               time_from : sessions[i].time_from ,
               time_to : sessions[i].time_to,
               price : sessions[i].price,
               time : `${sessions[i].day}-${sessions[i].month}` 
               
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
    getConsultants(){
      var url = `consultationInfos/requests?status=accepted&paginate=100`
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('accepted consultants list:' , response.data )
         this.consultantOptions.push({ label : 'All', value :''})
         for( let i=0 ; i< response.data.data.data.length ; i++ ){
           this.consultantOptions.push({ 
            label : response.data.data.data[i].user ? response.data.data.data[i].user.username : '',
            value :response.data.data.data[i].user ? response.data.data.data[i].user.username : ''})
         }
         console.log('this.consultantOptions' , this.consultantOptions)
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

             })
     
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.$store.state.appConfig.sessionListPerPage = paginate
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
    },
    consultantFilter(value){
      console.log('consultantFilter',value.value)
      this.currentPage = 1
      this.isBusy = true
      this.consultantFilter.consultant = value.value.length > 0 ? value.value : null    
      this.getRecords()
    }
  }

    
 
}
</script>

