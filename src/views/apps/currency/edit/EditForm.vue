<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Currency">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="addForm()"
              >

              <b-row>

                  <!-- Item Name -->
                  <b-col md="4">
                      <b-form-group
                      label="Name *"
                      label-for="name"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="Name"
                      rules="required"
                      
                      >
                      <b-form-input
                          id="name"
                          type="text"
                          v-model="name"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.name">{{ formErrors.name }}</div>
                      </b-form-group>
                  </b-col>

                  <!-- Item Code -->
                  <b-col md="4">
                      <b-form-group
                      label="Code *"
                      label-for="code"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="Code"
                      rules="required"
                      
                      >
                      <b-form-input
                          id="code"
                          type="text"
                          v-model="code"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.code">{{ formErrors.code }}</div>
                      </b-form-group>
                  </b-col>

                    <!-- Item Symbol -->
                  <b-col md="4">
                      <b-form-group
                      label="Symbol *"
                      label-for="symbol"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="Symbol"
                      rules="required"
                      
                      >
                      <b-form-input
                          id="symbol"
                          type="text"
                          v-model="symbol"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.symbol">{{ formErrors.symbol }}</div>
                      </b-form-group>
                  </b-col>

              </b-row>

              <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              type="submit"
              >
              
              <span>Submit</span>
              </b-button>

            </b-form>
              <!----> 
            </validation-observer>
            </div>
           

            
        </b-card>

      </b-col>
    </b-row>

    <template>
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>

   
  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BModal , VBModal, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import { BSpinner } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import checkError from '@/helperFunctions/helper'

export default {
  components: {
    BCard,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    vSelect,
    BSpinner,
    ValidationProvider,
    ValidationObserver,
    BFormTextarea,
    BModal,
    VBModal,
    BListGroup, BListGroupItem,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
    name: '',
    code: '',
    symbol: '',
    headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          },

    formErrors : {
        name:null,
        code:null,
        symbol:null      
      },

    }
  },
  mounted() {
    
    //fetch currency data
    axios
    .get(`currencies/${router.currentRoute.params.id}`)
    .then(response => {

       console.log( 'currency is' , response.data )
    
    this.name = response.data.currency.name
    this.code = response.data.currency.code
    this.symbol = response.data.currency.symbol   
    
    })
    .catch(error => {console.log( 'error fetch currencies', error)})

  

  },
  methods: {

    addForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'  
          var formData = {
              name: this.name,
              code: this.code,
              symbol: this.symbol

          }
        
          axios
            .put(`currencies/${router.currentRoute.params.id}`, formData, this.headersObj)
            .then(response => {
                router.replace('/apps/currency/list')

                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Updated Successfully`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
            } )
            .catch(error => {
            console.log('currency error' , error)
            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'

            // this.$toast({
            //         component: ToastificationContent,
            //         position: 'top-right',
            //         props: {
            //           title: `${error.response.data.msg}`,
            //           icon: 'CoffeeIcon',
            //           variant: 'danger',
            //         },
            //   })
            var errorsResponse = error.response.data.errors
            this.formErrors.name = checkError(errorsResponse.name)
            this.formErrors.code = checkError(errorsResponse.code)
            this.formErrors.symbol = checkError(errorsResponse.symbol)

              
          })

          }
      })
        
        
    },

   
    
    

  },

}
</script>

<style lang="scss" scoped>

.loading-spinner{
   position: absolute;
   top: 50%; 
   left: 50%;
   transform: translate(-50%, -50%);
   display:none;
}
</style>
