<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Role">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="submitForm()"
              >

              <b-row>

                

                <!-- name -->
                <b-col md="6">
                    <b-form-group
                    label="Name"
                    label-for="name"
                    >
                    <validation-provider
                        #default="{ errors }"
                        name="name"
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

                <!--permission-->
                <b-col md="6">
                    <b-form-group
                    label="Permissions"
                    label-for="Permissions"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="permissions"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="permissions"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="permissionOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        :close-on-select="false"
                        input-id="active"
                        multiple
                        

                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.permissions">{{ formErrors.permissions }}</div>
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

    <template v-if="isLoading">
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>

   
  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BModal , VBModal, BListGroup, BListGroupItem,BSpinner
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
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
      id:'',
      name: '',
      permissions:null,
      permissionOptions : [],
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
        permissions:null,
      },
      isLoading:false
    }
  },
  mounted(){

    //fetch permissions
    var url = `roles/create`
        if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
        }
        
    axios
    .get(url)
    .then(response => {
    console.log('courses : ' , response.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.permissionOptions.push( {label: response.data.data[s].name  , value: response.data.data[s].id })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})
  },
  methods: {

    submitForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
         this.isLoading = true 
          var formData = {
              name: this.name,
              permissions: this.permissions,
          }
        
          axios
            .post(`roles`, formData, this.headersObj)
            .then(response => {
                this.isLoading = false 
                router.replace('/apps/roles/list')
                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Saved Successfully`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
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

                var errorsResponse = error.response.data.errors
                this.formErrors.name = checkError(errorsResponse.name)
                this.formErrors.permissions = checkError(errorsResponse.permissions)

                
            })

          }
      }) 
    },
  },

}
</script>


