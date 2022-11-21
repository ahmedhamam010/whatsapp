<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Job Title">
            <div>
            <validation-observer ref="simpleRules">  
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="submitForm()"
            >

                <b-row>

                   

                    <!-- Title EN -->
                    <b-col md="4">
                        <b-form-group
                        label="Title EN *"
                        label-for="title_en"
                        >
                        <validation-provider
                        #default="{ errors }"
                        name="title EN"
                        rules="required"  
                        >
                        <b-form-input
                            id="title_en"
                            type="text"
                            v-model="title_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                        <div class="invalid-feedback d-block" v-if="formErrors.title_en">{{ formErrors.title_en }}</div>
                    </b-col>

                    <!-- Title EN -->
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
                        </b-form-group>
                        <div class="invalid-feedback d-block" v-if="formErrors.title_ar">{{ formErrors.title_ar }}</div>
                    </b-col>

                    

                    <!--status field-->
                    <b-col md="4">
                        <b-form-group
                            label="Status *"
                            label-for="status"
                            
                            >
                            <v-select
                                v-model="status"
                                :options="statusOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Status"
                            />
                            <div class="invalid-feedback d-block" v-if="formErrors.status">{{ formErrors.status }}</div>
                            
                            </b-form-group>
                    </b-col>
 
                </b-row>

                <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                type="submit"
                class="mt-1"
                >
                
                <span>Submit</span>
                </b-button>
            </b-form>
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BFormFile
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { BSpinner } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'

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
    BFormTextarea,
    BFormFile,
    ValidationProvider, ValidationObserver
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
   
    title_en:'',
    title_ar:'',
    status : 1 ,
    statusOptions : [
        { label: 'Active', value: 1 },
        { label: 'Inactive', value: 0 }
    ],
    
    formErrors : {
      title_en:null,
      title_ar:null,
      status:null,
      

    },
    
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          }  ,
    
     
    }
  },
  

  
  methods: {
    
    submitForm: function () {

        this.$refs.simpleRules.validate().then(success => {
        if (success) {

        //show spinner
        document.getElementById('loading-spinner').style.display = 'block'
     
        var formDataInputs = new FormData();
        formDataInputs.append("title_en", this.title_en )
        formDataInputs.append("title_ar", this.title_ar )
        formDataInputs.append("status", this.status )

        axios
          .post(`job-title/store`, formDataInputs, this.headersObj)
          .then(response => {
              console.log('job-title/store succuss' , response)
              router.replace('/apps/jobTitle/list')

              this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Added Successfully`,
                      icon: 'CoffeeIcon',
                      variant: 'success',
                    },
              })
          } )
          .catch(error => {

           
              
            console.log('add slider error' , error.response.data.message)

            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'
            
            var errorsResponse = error.response.data.errors
            this.formErrors.title_en = checkError(errorsResponse.title_en)
            this.formErrors.title_ar = checkError(errorsResponse.title_ar)
            this.formErrors.status = checkError(errorsResponse.status)
            
          })

        }
        })
    },
    

  },
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>

