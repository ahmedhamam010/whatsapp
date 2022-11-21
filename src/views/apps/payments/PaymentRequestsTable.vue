<template>
  <div class="position-relative">
      <b-row>
       
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
    
      <b-card title="Payment Requests">
       <b-table 
        responsive
        :items="items" 
        :fields="fields" 
        class="mt-2"
        show-empty
        :empty-text="loading_msg"
        :busy="isBusy"
        >

         <!-- Column: status -->
          <template #cell(status)="data"> 
            <span v-if="data.item.status == 0" >Pending</span>
            <span v-else-if="data.item.status == 1" >Approved</span>
            <span v-else-if="data.item.status == 2" >Confirmed</span>
            <span v-else-if="data.item.status == 3" >Paid</span>
            <span v-else-if="data.item.status == 4" >Failed</span>
            <span v-else-if="data.item.status == 5" >Rejected</span>
          </template>
        
         <!-- Column: Actions -->
            <template #cell(actions)="data">

                <b-button
                  v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="outline-success"
                    v-if="data.item.status == 1"
                    @click="confirmOtp(data.item.id)"
                >
                  <feather-icon icon="CheckIcon" class="mr-50" />
                  <span class="align-middle">Confirm</span>
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
                      per-page="10"
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

    <!-- modal -->
    <b-modal
    ref="my-modal"
    hide-footer
    title="OTP Form"
    >
    <div class="d-block text-center">
        <h3>Please Fill The OTP sent to you</h3>
    </div>
    <div>
        <!--form-->
        <validation-observer ref="simpleRules">
            <b-form>
            <b-row>
                <b-col sm="12">
                    <b-form-group>
                        <validation-provider
                        #default="{ errors }"
                        name="OTP"
                        rules="required|integer"
                        mode="passive"
                        
                        >
                        <b-form-input
                            class="text-center"
                            :state="errors.length > 0 ? false:null"
                            v-model="otp"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

               
                <b-col cols="12">
                <b-button
                    class="w-100"
                    variant="primary"
                    type="submit"
                    @click.prevent="sendOTP"
                >
                    Submit
                </b-button>
                </b-col>
            </b-row>
            </b-form>
        </validation-observer>
        <!--form-->
    </div>
    </b-modal>

      


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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem,BSpinner,BPagination,BModal
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
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
    BListGroup, BListGroupItem,BSpinner,vSelect,BPagination,BModal,ValidationProvider,ValidationObserver,
  
  },
  directives: {
    Ripple,
  },
  data(){
    return{
     items: [],
     fields : [
        { key: 'username', label : 'name' },
        { key: 'amount', label : 'price' },
        { key: 'status', label : 'status' },
        { key: 'actions' },
       
      ],
     isLoading:true,
     loading_msg:'',
     searchParameter:'',
     currentPage: 1,
     rows: null,
     dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      isBusy:false,
      requestId: null,
      otp:null
    }
  },
  mounted(){
    this.getRecords();
  },
  methods:{
    getRecords(){
        this.isBusy = true
        var url = getDomain('no') + `payment-request-list?paginate=10&page=${this.currentPage}`
        if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
            url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
        }
        axios
          .get(url)
          .then(response => {
            this.isBusy = false
            console.log('response.data.requests',response.data.data)
            let data = response.data.data
            this.rows= data.total
            this.dataMeta.from = data.from
            this.dataMeta.to = data.to
            this.dataMeta.of = data.total
            this.items = [];
            for( let i=0 ; i< data.data.length ; i++ ){
              this.items.push(
                { 
                  id:data.data[i].id ,
                  username: data.data[i].username ? data.data[i].username : '',
                  amount : data.data[i].price,
                  status: data.data[i].status,
                })
            }
            this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
            this.isLoading = false
            
          })
          .catch(error => {
            this.isBusy = false
            this.isLoading = false  
            console.log(error)
          })
    },
    confirmPaying(id){
            
      axios.post(getDomain('no') +`payment-request-confirm?id=${id}`)
        .then(response => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `${response.data.msg}`,
            icon: 'CoffeeIcon',
            variant: 'success',
            text: '',
          },
        })  
        this.requestId = id
        this.showModal();
        this.getRecords()
        console.log( 'success:' , response )
        
        })
        .catch(error => {
        console.log( 'eror:' , error )
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

    confirmOtp(id) {
      this.requestConfirmed = ''
      this.$bvModal
      .msgBoxConfirm(`Please confirm that you want to Confirm this request.`, {
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
        this.requestConfirmed = value
        if( this.requestConfirmed ){ this.confirmPaying(id) }
      })
    },
    sendOTP() {
      this.$refs.simpleRules.validate().then(success => {
        
        if (success) {
            console.log('request id' , this.requestId)
            console.log('otp' , this.otp)
          //post form
          axios
            .post(getDomain('no') + `check-otp?id=${this.requestId}&otp=${this.otp}`)
            .then(response => {
                
                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${response.data.msg}`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
                this.requestId = null
                this.otp = null
                this.hideModal()
                this.getRecords()
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
          //post form
          
         
        }
      })
    },
    searchParameterChanged(value){
    //   this.currentPage = 1
      this.searchParameter = value.target.value;
      this.getRecords()
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    showModal() {
      this.otp = null  
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.otp = null  
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
  }

    
 
}
</script>

