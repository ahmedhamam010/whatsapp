<template>
  <div class="position-relative">
      

        <b-card no-body > 
        <div class="m-2">
        <b-row >

        <!-- Per Page -->
        <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
            <label>Show</label>
            <v-select
            
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block mx-50"
            v-model="perPage"
            @input="paginateChanged"
         
            />
            <label>entries</label>
        </b-col>    

        

        
        </b-row>
        </div>
        </b-card>
    
      <b-card title="Consultant Transactions">
       <b-table 
        responsive
        :busy="isBusy"
        :items="items" 
        :fields="fields" 
        class="mt-2"
        show-empty
        :empty-text="loading_msg"
        >
        
         <!-- Column: Actions -->
            <!-- <template #cell(actions)="data">

                <b-button
                  v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                  variant="outline-secondary"
                :to="{ name: 'apps-transaction-details', params: { id: data.item.id } }"
                >
                  <feather-icon icon="FileTextIcon" class="mr-50" />
                  <span class="align-middle">View Transactions</span>
                </b-button>

                
              </template> -->
        
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

      


      <template>
        <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
        </div>
      </template>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem,BSpinner,BPagination
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

import router from '@/router'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'







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
    BListGroup, BListGroupItem,BSpinner,vSelect,BPagination
  
  },
  directives: {
    Ripple,
  },
  data(){
    return{
     items: [],
     currentPage: 1,
     perPage: 10,
     rows: null,
     fields : [
        // { key: 'username', label : 'customer name' },
        { key: 'type', label : 'service' },
        { key: 'consultant', label : 'Service Provider' },
        { key: 'amount', label : 'price' },
        { key: 'commission', label : 'commission' },
        { key: 'fees', label : 'fees' },
        { key: 'status', label : 'status' },
        { key: 'error_msg', label : 'error type' },
        // { key: 'actions' },
       
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      searchParameter: '',
     isLoading:false,
     loading_msg:'',
     searchParameter:'',
     isBusy:false,
    }
  },
  mounted(){
    this.getRecords();
  },
  methods:{
    getRecords(){
        this.isLoading = true
        this.isBusy = true
        axios
          .get(`get-transaction-user/228?paginate=${this.perPage}&page=${this.currentPage}`)
          .then(response => {
            console.log('response.data.get-list-user',response.data.data)
            let data = response.data.data.data;
            this.rows= response.data.data.total
            this.perPage=response.data.data.per_page
            this.dataMeta.from = response.data.data.from
            this.dataMeta.to = response.data.data.to
            this.dataMeta.of = response.data.data.total
            this.items = [];
            for( let i=0 ; i< data.length ; i++ ){
              this.items.push(
                { 
                  id:data[i].id ,
                  consultant: data[i].consultation == null ? 'Nurabi' : data[i].consultation .username,
                  // username: data[i].user.username,
                  type : data[i].type,
                  amount : data[i].amount,
                  commission: data[i].commission,
                  fees: data[i].fees,
                  status: data[i].status == 'pending' ? 'failed' : data[i].status ,
                  error_msg: 'need backend'
                })
            }
            this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
            this.isLoading = false
            this.isBusy = false
            
          })
          .catch(error => {
            this.isLoading = false  
            console.log(error.response.data)
          })
    },
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.form = {
            card_number: null,
            expiry_month : null,
            expiry_year : null,
            amount: null,
          },
          this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  title: `Saved Successfully`,
                  icon: 'CoffeeIcon',
                  variant: 'success',
                },
          })
        }
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
  }

    
 
}
</script>

