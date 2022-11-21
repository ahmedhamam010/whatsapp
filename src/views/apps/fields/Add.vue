<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Field">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="submitForm()"
              >

              <b-row>

                

                <!-- title -->
                <b-col md="4">
                    <b-form-group
                    label="Title EN *"
                    label-for="title"
                    >
                    <validation-provider
                        #default="{ errors }"
                        name="title EN"
                        rules="required"
                    >
                        <b-form-input
                            id="title"
                            type="text"
                            v-model="title"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.title">{{ formErrors.title }}</div>
                    </b-form-group>
                    
                </b-col>

                <!-- Title AR-->
                <b-col md="4">
                    <b-form-group
                    label="Title AR *"
                    label-for="title_ar"
                    >
                    <validation-provider
                        #default="{ errors }"
                        name="title AR"
                        rules="required"
                    >
                        <b-form-input
                            id="title_ar"
                            type="text"
                            v-model="title_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.title_ar">{{ formErrors.title_ar }}</div>
                    </b-form-group>
                    
                </b-col>

                <!-- type -->
                <b-col md="4">
                    <b-form-group
                    label="Type"
                    label-for="user"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="type"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="type"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="typeOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                        

                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.type">{{ formErrors.type }}</div>
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
      title: '',
      title_ar: '',
      type:'consultant',
      typeOptions : [
        { label : 'Consultant' , value : 'consultant' },
        { label : 'Teacher' , value : 'teacher' },
        // { label : 'trainer' , value : 'trainer' },
        // { label : 'coach' , value : 'coach' },
        { label : 'Organization' , value : 'organization' },
      ],
     headersObj  : { 
        headers: 
        { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Methods': 'POST,post',
        }
    
      },

      formErrors : {
        title:null,
        title_ar:null,
        type:null,
      },
      isLoading:false
    }
  },
  methods: {

    submitForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
         this.isLoading = true 
          var formData = {
              title: this.title,
              title_en: this.title,
              title_ar: this.title_ar,
              type: this.type,
          }
        
          axios
            .post(`fields`, formData, this.headersObj)
            .then(response => {
                this.isLoading = false 
                router.replace('/apps/fields/list')
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
                // this.$toast({
                //     component: ToastificationContent,
                //     position: 'top-right',
                //     props: {
                //     title: `${error.response.data.message}`,
                //     icon: 'CoffeeIcon',
                //     variant: 'danger',
                //     },
                // })

                var errorsResponse = error.response.data.errors
                this.formErrors.title = checkError(errorsResponse.title_en)
                this.formErrors.title_ar = checkError(errorsResponse.title_ar)
                this.formErrors.type = checkError(errorsResponse.type)

                
            })

          }
      }) 
    },
  },

}
</script>


