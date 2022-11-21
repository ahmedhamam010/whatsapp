<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Slider">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="submitForm()"
            >

                <b-row>

                   

                    <!-- name -->
                    <b-col md="6">
                        <b-form-group
                        label="Name EN *"
                        label-for="name"
                        >
                        <validation-provider
                        #default="{ errors }"
                        name="name en"
                        rules="required|max:50"  
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

                   <!-- name ar -->
                    <b-col md="6">
                        <b-form-group
                        label="Name AR *"
                        label-for="name_ar"
                        >
                        <validation-provider
                        #default="{ errors }"
                        name="name ar"
                        rules="required|max:50"  
                        >
                        <b-form-input
                            id="name_ar"
                            type="text"
                            v-model="name_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                         <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.name_ar">{{ formErrors.name_ar }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!--display field-->
                    <b-col md="6">
                        <b-form-group
                            label="Display In"
                            label-for="display_in"
                            
                            >
                            <v-select
                                v-model="display_in"
                                :options="displayOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="display_in"
                            />
                            <div class="invalid-feedback d-block" v-if="formErrors.display_in">{{ formErrors.display_in }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!--status field-->
                    <b-col md="6">
                        <b-form-group
                            label="Status"
                            label-for="status"
                            
                            >
                            <v-select
                                v-model="active"
                                :options="statusOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Status"
                            />
                            <div class="invalid-feedback d-block" v-if="formErrors.active">{{ formErrors.active }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!-- url -->
                    <b-col md="6">
                        <b-form-group
                        label="URL EN"
                        label-for="url"
                        >
                         <validation-provider
                          #default="{ errors }"
                          name="url"
                          rules="url"  
                          >
                          <b-form-input
                              id="url"
                              type="text"
                              v-model="url"
                              :state="errors.length > 0 ? false:null"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.url">{{ formErrors.url }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- url ar -->
                    <b-col md="6">
                        <b-form-group
                        label="URL AR"
                        label-for="url_ar"
                        >
                         <validation-provider
                          #default="{ errors }"
                          name="url_ar"
                          rules="url"  
                          >
                          <b-form-input
                              id="url_ar"
                              type="text"
                              v-model="url_ar"
                              :state="errors.length > 0 ? false:null"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.url_ar">{{ formErrors.url_ar }}</div>
                        </b-form-group>
                        
                    </b-col>

                  

                    <!-- Image -->
                    <b-col md="6">
                      <b-form-group
                        label="image EN *"
                        label-for="image"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="image en"
                          rules="image|required"  
                        >
                        <b-form-file
                          id="image"
                          v-model="image"
                          accept="image/*"
                          :state="errors.length > 0 ? false:null"
                        />
                         <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.image">{{ formErrors.image }}</div>
                      </b-form-group>
                      
                    </b-col>

                    <!-- image AR -->
                    <b-col md="6">
                      <b-form-group
                        label="image AR"
                        label-for="image_ar"
                      >
                       <validation-provider
                          #default="{ errors }"
                          name="image ar"
                          rules="image|required"  
                        >
                        <b-form-file
                          id="image_ar"
                          v-model="image_ar"
                          accept="image/*"
                          :state="errors.length > 0 ? false:null"
                        />
                         <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.image_ar">{{ formErrors.image_ar }}</div>
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
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import { required , max , image } from 'vee-validate/dist/rules';
import { url } from '@validations'
extend('max', value => {
  if (value.length <= 50) {
    return true;
  }

  return 'The {_field_} field max length is 50';
});

extend('image', image);
extend('required', required);



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
    BFormFile, ValidationProvider, ValidationObserver
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
   
    name:'',
    name_ar:'',
    url:'',
    url_ar:'',
    image:null,
    image_ar:null,
    display_in:'web',
    active : 1 ,
    statusOptions : [
        { label: 'Active', value: 1 },
        { label: 'Inactive', value: 0 }
    ],
    displayOptions : [
        { label: 'Web', value: 'web' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'All', value: 'all' }
    ],
    formErrors : {
      name:null,
      name_ar:null,
      url:null,
      url_ar:null,
      image:null,
      image_ar:null,
      active:null,
      display_in:null,

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
        formDataInputs.append("name", this.name )
        formDataInputs.append("name_en", this.name )
        formDataInputs.append("name_ar", this.name_ar )
        formDataInputs.append("url", this.url )
        formDataInputs.append("url_ar", this.url_ar )
        formDataInputs.append("active", this.active )
        formDataInputs.append("display_in", this.display_in )
        
        
        var image = document.querySelector('#image')
        if( image.files[0] ){
          formDataInputs.append("image", image.files[0] )
        }

        var image_ar = document.querySelector('#image_ar')
        if( image_ar.files[0] ){
          formDataInputs.append("image_ar", image_ar.files[0] )
        }
        
    

        axios
          .post(`sliders`, formDataInputs, this.headersObj)
          .then(response => {
              console.log('sliders succuss' , response)
              router.replace('/apps/sliders/list')

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

            // this.$toast({
            //     component: ToastificationContent,
            //     position: 'top-right',
            //     props: {
            //     title: `${error.response.data.msg}`,
            //     icon: 'CoffeeIcon',
            //     variant: 'danger',
            //     },
            // })
              
            console.log('add slider error' , error.response.data.message)

            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'
            
            var errorsResponse = error.response.data.errors
            this.formErrors.name = checkError(errorsResponse.name)
            this.formErrors.name_ar = checkError(errorsResponse.name_ar)
            this.formErrors.url = checkError(errorsResponse.url)
            this.formErrors.image = checkError(errorsResponse.image)
            this.formErrors.image_ar = checkError(errorsResponse.image_ar)
            this.formErrors.active = checkError(errorsResponse.active)
            this.formErrors.display_in = checkError(errorsResponse.display_in)
            this.formErrors.url_ar = checkError(errorsResponse.url_ar)
            
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

