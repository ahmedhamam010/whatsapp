<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Field & Goal">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
                enctype="multipart/form-data"
            >

                <b-row>
                  <!-- Item Name EN-->
                  <b-col md="6">
                      <b-form-group
                      label="Name EN *"
                      label-for="Name EN"
                      >
                      
                      <validation-provider
                        #default="{ errors }"
                        name="name EN"
                        rules="required|min:3|max:50"
                      >
                        <b-form-input
                            id="name"
                            type="text"
                            v-model="name_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.name_en">{{ formErrors.name_en }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!-- Item Name AR-->
                  <b-col md="6">
                      <b-form-group
                      label="Name AR *"
                      label-for="Name AR"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="name AR"
                        rules="required|min:3|max:50"
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

                  <!--type field-->
                  <b-col md="6">
                      <b-form-group
                          label="Type"
                          label-for="type"
                          id="fieldsSelectOptions"
                          >
                          <validation-provider
                            #default="{ errors }"
                            name="type"
                          >
                          <v-select
                              v-model="type_id"
                              :options="fieldOptions"
                              :reduce="val => val.value"
                              :clearable="false"
                              input-id="type"
                              :state="errors.length > 0 ? false:null"
                          >
                            <template v-slot:option="option">
                              <span :class="option.label">
                                {{ option.label }}
                              </span>
                            </template>
                          </v-select>
                          <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                          <div class="invalid-feedback d-block" v-if="formErrors.parent">{{ formErrors.parent }}</div>
                          
                          </b-form-group>
                  </b-col>


                  <!-- status -->
                  <b-col md="6">
                    <b-form-group
                      label="Status"
                      label-for="status"
                      id="statusSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="status"
                      >
                      <v-select
                        v-model="status"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="statusOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="status"
                      >
                       <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.is_published">{{ formErrors.is_published }}</div>
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
                            v-model="seo_title_en"
                            
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
                            v-model="seo_title_ar"
                            
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
                              v-model="seo_desc_en"
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
                              v-model="seo_desc_ar"
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
                        <b-form-file
                          id="image_seo"
                          v-model="image_seo"
                          accept="image/*"
                        />
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
      <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
  </div>
</template>


<script>

import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormFile , BFormTextarea , BCard
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import { max  , min_value } from 'vee-validate/dist/rules';
extend('max', max);
extend('min_value', min_value);
import { required } from '@validations'
import store from '@/store'
import { BSpinner } from 'bootstrap-vue'
import getDomain from '@/helperFunctions/getDomain'


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
    ValidationProvider,
    ValidationObserver,
    BFormFile,
    BFormTextarea,
    BSpinner,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      name_en:"",
      name_ar:"",
      type_id: 'parent',
      status:0,
      fieldOptions:[
        { label: 'Parent', value: 'parent' },
      ],
      statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Drafted', value: 0 },
      ],
      formErrors : {
        name:null,
        name_ar:null,
        parent: null,
        is_published : null,
      },
    

    seo_title_en: '',
    seo_title_ar: '',
    seo_desc_en:'',
    seo_desc_ar: '',
    image_seo:null,
    isLoading:true,
     
    }
  },

  mounted() {
    this.getFields()
  },
  
  methods: {
    
    addForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          this.isLoading = true
          
          var formData = new FormData();
          var image_seo = document.querySelector('#image_seo')
     
          if( image_seo.files[0] ){
           formData.append("seo_image", image_seo.files[0] )
          }
          // formData.append("name",this.name )
          formData.append("name_en",this.name_en )
          formData.append("name_ar",this.name_ar )
          if( this.type_id != 'parent' ){
            formData.append("parent",this.type_id )
          }
          formData.append("is_published",this.status )
          formData.append("seo_title_en",this.seo_title_en )
          formData.append("seo_title_ar",this.seo_title_ar )
          formData.append("seo_desc_en",this.seo_desc_en )
          formData.append("seo_desc_ar",this.seo_desc_ar )
                
          axios
            .post(getDomain('no')+`trackingsystem/fieldsGoals/store`, formData)
            .then(response => {
                console.log('fieldsGoals/store succuss' , response)
                router.replace('/apps/trackingSystem/fieldsGoals/list')

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
              // console.log('category error' , error.response)

              //hide spinner
              this.isLoading = false
              
             
              
              var errorsResponse = error.response.data.errors
              
              this.formErrors.name_en = checkError(errorsResponse.name_en)
              this.formErrors.name_ar = checkError(errorsResponse.name_ar)
              this.formErrors.parent = checkError(errorsResponse.parent)
              this.formErrors.is_published = checkError(errorsResponse.is_published)
            })

        }
      })
    },
    getFields(){
      this.isLoading = true
      //fetch fields
      axios
      .get(getDomain('no') + `trackingsystem/fieldsGoals/index?flag=dash`)
      .then(response => {
        this.isLoading = false
        console.log('trackingsystem/fieldsGoals/index : ' , response.data.data)
        for( let s=0 ; s< response.data.data.length; s++  ){
            this.fieldOptions.push( {label: response.data.data[s].name_en  , value: `${response.data.data[s].id}` })
        }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        this.isLoading = false
      })
    }


  },
}
</script>
