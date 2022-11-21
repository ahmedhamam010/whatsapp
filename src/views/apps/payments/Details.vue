<template>
  <div class="position-relative">
      <b-row>
        <b-col md="12">
        <!--details-->
        <b-card title="Payment Details">
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
                      {{pending_balance}}
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
  
              </b-list-group>
        <!--new ui-->
        </b-card>
        <!--details-->
        </b-col>

        <b-col md="12">
          <b-card title="Send Request">
          <!--form-->
          <validation-observer ref="simpleRules">
              <b-form>
                <b-row>

                 

                  <b-col md="12">
                    <b-form-group label="Amount">
                      <validation-provider
                        #default="{ errors }"
                        name="Amount"
                        rules="required|integer"
                        mode="passive"
                      >
                        <b-form-input
                          v-model="form.amount"
                          :state="errors.length > 0 ? false:null"
                          
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                 
                  
                  <b-col cols="4">
                    <b-button
                      variant="primary"
                      type="submit"
                      @click.prevent="validationForm"
                    >
                      Submit
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
          </validation-observer>
          <!--form-->
          </b-card>
        </b-col>

        <b-col md="12">
          <payment-requests-table ref="paymentRequestsTable"></payment-requests-table>
        </b-col>


      </b-row>
    
      <b-card title="Transaction Details">
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
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem,BSpinner
} from 'bootstrap-vue'
import { required } from '@validations'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import getDomain from '@/helperFunctions/getDomain'
import Ripple from 'vue-ripple-directive'
import PaymentRequestsTable from './PaymentRequestsTable.vue'





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
    BListGroup, BListGroupItem,BSpinner,ValidationProvider,
    ValidationObserver,
    PaymentRequestsTable,
  
  },
  directives: {
    Ripple,
  },
  data(){
    return{
     id : null,
     pending_balance: '',
     current_balance: '',
     isBusy:false,
     items: [],
     fields : [
        { key: 'id', label : 'id' },
        { key: 'username', label : 'username' },
        { key: 'amount', label : 'amount' },
        { key: 'commission', label : 'commission' },
        { key: 'fees', label : 'fees' },
        { key: 'status', label : 'status' },
        { key: 'actions' },
       
      ],
     isLoading:false,
     loading_msg: '',
     required,
     form:{
      bank_name: null,
      iban_number:null,
      bank_account_number:null,
      bank_account_name:null,
      bank_account_address:null,
      amount: null,
     },

     headersObj  : { 
        headers: 
        { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Methods': 'POST,post',
        }
    
      },
    
 
    
    }
  },
  mounted(){
    this.pending_balance = JSON.parse(localStorage.getItem('userData')).pending_balance
    this.current_balance = JSON.parse(localStorage.getItem('userData')).current_balance
    axios
          .get(`get-transactions`)
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
                  username: data[i].user.username,
                  amount : data[i].amount,
                  commission: data[i].commission,
                  fees: data[i].fees,
                  status: data[i].status == 'pending' ? 'failed' : data[i].status ,
                })
            }
            this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
            this.isBusy = false
            this.isLoading = false
            
          })
          .catch(error => {
            console.log(error)
          })
  },
  methods:{
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        
        if (success) {
          console.log('request form: ' , this.form)
          this.isLoading = true
          var formData = { 
            user_id:JSON.parse(localStorage.getItem('userData')).id,
            price:this.form.amount
           }
          
          //post form
          axios
            .post(getDomain('no') + `payment-request`, formData)
            .then(response => {
                this.isLoading = false
                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${response.data.msg}`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
                this.form.amount = null
                this.$refs.paymentRequestsTable.getRecords()
            } )
            .catch(error => {
              this.isLoading = false
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
          //post form
          
         
        }
      })
    },
  }

    
 
}
</script>

