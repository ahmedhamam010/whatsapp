<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Category">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
            >

                <b-row>

                    <!-- Item Name -->
                    <b-col md="4">
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

                   <!-- Item Name ar -->
                    <b-col md="4">
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

                    <!--status field-->
                    <b-col md="4">
                        <b-form-group
                            label="Status"
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

                    <!-- Seo Name EN -->
                    <b-col md="6">
                        <b-form-group
                        label="Seo Name EN"
                        label-for="seo Name EN"
                        >
                        <b-form-input
                            id="seo_name_en"
                            type="text"
                            v-model="name_seo_en"
                            
                        />
                        </b-form-group>
                    </b-col>

                    <!-- Seo Name AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Seo Name AR"
                        label-for="seo Name AR"
                        >
                        <b-form-input
                            id="seo_name_ar"
                            type="text"
                            v-model="name_seo_ar"
                            
                        />
                        </b-form-group>
                    </b-col>

                    <!-- Seo Description EN-->
                    <b-col md="6">
                        <b-form-group
                        label="Seo Description EN"
                        label-for="Seo Description EN"
                        >
                       
                          <b-form-textarea
                              id="seo_description_en"
                              type="text"
                              v-model="description_seo_en"
                              rows="8"
                              
                          />
                        </b-form-group>
                    </b-col>

                    <!-- Seo Description AR-->
                    <b-col md="6">
                        <b-form-group
                        label="Seo Description AR"
                        label-for="Seo Description AR"
                        >
                          <b-form-textarea
                              id="seo_description_ar"
                              type="text"
                              v-model="description_seo_ar"
                              rows="8"
                              
                          />
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                    <!-- Seo Image -->
                    <b-col md="12">
                      <b-form-group
                        label="Seo Image"
                        label-for="Soe image"
                      >
                       <validation-provider
                        #default="{ errors }"
                        name="Seo Image"
                        rules="image" 
                         
                        >
                        <b-form-file
                          id="image_seo"
                          v-model="image_seo"
                          accept="image/*"
                          :state="errors.length > 0 ? false:null"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
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
    name : '',
    name_ar: '',
    name_seo_en: '',
    name_seo_ar: '',
    description_seo_en:'',
    description_seo_ar: '',
    image_seo:null,
    slug : '',
    status : 1 ,
    statusOptions : [
        { label: 'Active', value: 1 },
        { label: 'Inactive', value: 0 }
    ],
    formErrors : {
      name : null,
      name_ar: null,
      slug : null,
      status : null,
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
    
    addForm: function () {

    this.$refs.simpleRules.validate().then(success => {
    if (success) {

    //show spinner
    document.getElementById('loading-spinner').style.display = 'block'
     
        var formdata = new FormData();
        formdata.append("name", this.name )
        formdata.append("name_en", this.name )
        formdata.append("name_ar", this.name_ar )
        formdata.append("slug", this.slug )
        formdata.append("status", this.status )
        formdata.append("name_seo_en", this.name_seo_en )
        formdata.append("name_seo_ar", this.name_seo_ar )
        formdata.append("description_seo_en", this.description_seo_en )
        formdata.append("description_seo_ar", this.description_seo_ar )

        var image_seo = document.querySelector('#image_seo')
        if( image_seo.files[0] ){
          formdata.append("image_seo", image_seo.files[0] )
        }
    

        axios
          .post(`categories`, formdata, this.headersObj)
          .then(response => {
              console.log('quiz succuss' , response)
              router.replace('/apps/categories/list')

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
            console.log('category error' , error.response.data.message)
            // this.$toast({
            //         component: ToastificationContent,
            //         position: 'top-right',
            //         props: {
            //           title: `${error.response.data.msg}`,
            //           icon: 'CoffeeIcon',
            //           variant: 'danger',
            //         },
            //   })

            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'
            
            var errorsResponse = error.response.data.errors
            console.log(errorsResponse)
            this.formErrors.name = checkError(errorsResponse.name)
            this.formErrors.name_ar = checkError(errorsResponse.name_ar)
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

