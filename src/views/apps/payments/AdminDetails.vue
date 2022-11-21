<template>
  <div class="position-relative">
      <b-row>
        <b-col md="12">
        <!--details-->
        <b-card title="Nurabi Payment Details">
        <!--new ui-->
        <!-- information content -->
              <b-list-group class="mt-2">

                <!-- :img-src="require('@/assets/images/pay/3.jpg')" -->

                 <b-list-group-item>
                    <b-row>
                      <b-col
                        cols="8"
                        md="8"
                      >
                        Pending Balance
                      </b-col>  

                      <b-col
                        cols="4"
                        md="4"
                      >
                      2000
                      </b-col>

                    </b-row>
                </b-list-group-item>
                
               
                <b-list-group-item>
                    <b-row>
                      <b-col
                        cols="8"
                        md="8"
                      >
                        Current Balance
                      </b-col>  

                      <b-col
                        cols="4"
                        md="4"
                      >
                      {{current_balance}}
                      </b-col>

                    </b-row>
                </b-list-group-item>

                <!-- <b-list-group-item>
                    <b-row>
                      <b-col
                        cols="6"
                        md="6"
                      >
                        Collection Request
                      </b-col>  

                      <b-col
                        cols="6"
                        md="6"
                      >
                    
                    <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      
                      variant="outline-primary"
                    >
                      <feather-icon icon="TrendingUpIcon" class="mr-50" />
                      <span class="align-middle">Send Request</span>
                    </b-button>


                      </b-col>

                    </b-row>
                </b-list-group-item> -->

                

                  
              </b-list-group>
        <!--new ui-->
        </b-card>
        <!--details-->
        </b-col>

       

      </b-row>

        <b-card no-body class="d-none" > 
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
            :options="['10','25','30']"
            :clearable="false"
            class="per-page-selector d-inline-block mx-50"
         
            />
            <label>entries</label>
        </b-col>    

        <!-- Search -->
        <b-col
            cols="12"
            md="6"
            class="ml-auto"
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
        </b-card>
    
      <b-card title="Purchase List">
       <b-table 
        responsive
        :items="items" 
        :fields="fields" 
        class="mt-2"
        show-empty
        :empty-text="loading_msg"
        >
        
         <!-- Column: Actions -->
            <template #cell(actions)="data">

                <b-button
                  v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                  variant="outline-secondary"
                :to="{ name: 'apps-transaction-details', params: { id: data.item.id } }"
                >
                  <feather-icon icon="FileTextIcon" class="mr-50" />
                  <span class="align-middle">Details</span>
                </b-button>

                
              </template>
        
        </b-table>
        
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem,BSpinner
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
    BListGroup, BListGroupItem,BSpinner,vSelect
  
  },
  directives: {
    Ripple,
  },
  data(){
    return{
     id : null,
     current_balance: '',
     items: [],
     fields : [
        { key: 'username', label : 'customer name' },
        { key: 'type', label : 'service' },
        { key: 'consultant', label : 'Service Provider' },
        { key: 'amount', label : 'price' },
        { key: 'commission', label : 'commission' },
        { key: 'fees', label : 'fees' },
        { key: 'status', label : 'status' },
        { key: 'error_msg', label : 'error type' },
        { key: 'actions' },
       
      ],
     isLoading:true,
     loading_msg:'',
     searchParameter:'',
    }
  },
  mounted(){
    this.current_balance = JSON.parse(localStorage.getItem('userData')).current_balance_nurabi
    this.getRecords();
  },
  methods:{
    getRecords(){
        axios
          .get(`get-transactions?&username=${this.searchParameter}`)
          .then(response => {
            console.log('response.data.category',response.data.data)
            let data = response.data.data
            // this.rows= response.data.data.total
            // this.perPage=response.data.data.per_page
            this.items = [];
            for( let i=0 ; i< data.length ; i++ ){
              this.items.push(
                { 
                  id:data[i].id ,
                  consultant: data[i].consultation == null ? 'Nurabi' : data[i].consultation .username,
                  username: data[i].user.username,
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
    searchParameterChanged(value){
    //   this.currentPage = 1
      this.searchParameter = value.target.value;;
      this.getRecords()
    },
  }

    
 
}
</script>

