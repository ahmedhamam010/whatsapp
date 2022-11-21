<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Section">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
            >

                <b-row>

                    <!-- Item Title -->
                    <b-col md="6">
                        <b-form-group
                        label="Title EN *"
                        label-for="title"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="title"
                          rules="required|max:50|min:3"
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

                    <!-- Item Title -->
                    <b-col md="6">
                        <b-form-group
                        
                        label="Title AR *"
                        label-for="title_ar"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="title_ar"
                          rules="required||max:50|min:3"
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
                        
                    </b-col>

                    <!--course field-->
                    <b-col md="6">
                        <b-form-group
                            label="Course *"
                            label-for="course"
                            
                            >
                            <validation-provider
                              #default="{ errors }"
                              name="course"
                              rules="required"
                            >
                            <v-select
                                v-model="course_id"
                                :options="courseOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Course"
                                :state="errors.length > 0 ? false:null"
                                :disabled="routeName == 'apps-sections-edit-from-course'"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.course_id">{{ formErrors.course_id }}</div>
                            
                            </b-form-group>
                    </b-col>

                   

                    <!--status field-->
                    <b-col md="6">
                        <b-form-group
                            label="Status"
                            label-for="status"
                            
                            >
                            <validation-provider
                              #default="{ errors }"
                              name="status"
                              rules="required"
                            >
                            <v-select
                                v-model="status"
                                :options="statusOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Status"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
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
                            v-model="title_seo_en"
                            
                        />
                        <div class="invalid-feedback d-block" v-if="formErrors.title_seo_en">{{ formErrors.title_seo_en }}</div>
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
                            v-model="title_seo_ar"
                            
                        />
                        <div class="invalid-feedback d-block" v-if="formErrors.title_seo_ar">{{ formErrors.title_seo_ar }}</div>
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
                          <div class="invalid-feedback d-block" v-if="formErrors.description_seo_en">{{ formErrors.description_seo_en }}</div>
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
                          <div class="invalid-feedback d-block" v-if="formErrors.description_seo_ar">{{ formErrors.description_seo_ar }}</div>
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
        <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
        </div>
    </template>

  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard, BFormTextarea, BFormFile
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import { required , max , image , min_value } from 'vee-validate/dist/rules';
extend('max', max);
extend('image', image);
extend('required', required);
extend('min_value', min_value);
import { BSpinner } from 'bootstrap-vue'

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
    BSpinner,
    BFormTextarea,
    BFormFile,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    id : router.currentRoute.params.id,
    routeName: router.currentRoute.name,
    title : '',
    title_ar : '',
    course_id : null,
    status : 1 ,
    statusOptions : [
        { label: 'Active', value: 1 },
        { label: 'Inactive', value: 0 }
    ],
    courseOptions : [],
    formErrors : {
      title : '',
      course_id : null,
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

    title_seo_en: '',
    title_seo_ar: '',
    description_seo_en:'',
    description_seo_ar: '',
    image_seo:null,
    
     
    }
  },

  mounted() {

    
   
    
    this.fetchCourses();
    this.getRecord();

    

  },
  
  methods: {

    fetchCourses(){
      document.getElementById('loading-spinner').style.display = 'block'
      //fetch courses
      var url = `courses`
          if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
          url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
          }
      axios
      .get(url)
      .then(response => {
      document.getElementById('loading-spinner').style.display = 'none'  
      console.log('courses : ' , response.data)
      for( let s=0 ; s< response.data.data.length; s++  ){
          this.courseOptions.push( {label: response.data.data[s].title  , value: response.data.data[s].id })
      }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        document.getElementById('loading-spinner').style.display = 'none'
        })
    },

    getRecord(){
      axios
          .get(`sections/${router.currentRoute.params.id}`)
          .then(response => {
              console.log( 'show section record' , response.data )
              this.title = response.data.section.title
              this.title_ar = response.data.section.title_ar
              this.status = response.data.section.status
              this.course_id = response.data.section.course_id
              this.title_seo_en = response.data.section.title_seo_en
              this.title_seo_ar = response.data.section.title_seo_ar
              this.description_seo_en = response.data.section.description_seo_en
              this.description_seo_ar = response.data.section.description_seo_ar
          })
          .catch(error => {console.log( 'error fetch quiz', error)})
      },
    
    addForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
      // var formData = {
      //   title:this.title,
      //   title_en:this.title,
      //   title_ar:this.title_ar,
      //   course_id : this.course_id,
      //   status:this.status,
      //   title_seo_en : this.title_seo_en,
      //   title_seo_ar: this.title_seo_ar,
      //   description_seo_en: this.description_seo_en,
      //   description_seo_ar: this.description_seo_ar

      // }

      // var image_seo = document.querySelector('#image_seo')

      // if( image_seo.files[0] ){
      //   formData["image_seo"] = image_seo.files[0] 
      // }

       var formData = new FormData();
       formData.append("_method","put" )
       formData.append("title",this.title )
       formData.append("title_en",this.title )
       formData.append("title_ar",this.title_ar )
       formData.append("course_id",this.course_id )
       formData.append("status",this.status )
       formData.append("title_seo_en",this.title_seo_en )
       formData.append("title_seo_ar",this.title_seo_ar )
       formData.append("description_seo_en",this.description_seo_en )
       formData.append("description_seo_ar",this.description_seo_ar )

       var image_seo = document.querySelector('#image_seo')
       if( image_seo.files[0] ){ 
        formData.append("image_seo", image_seo.files[0] )
      }
      
          axios
            .post(`sections/${this.id}`, formData, this.headersObj)
            .then(response => {
                console.log('sections succuss' , response)
                router.replace('/apps/sections/list')

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
              // console.log('category error' , error.response)

              //hide spinner
              document.getElementById('loading-spinner').style.display = 'none'

              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: error.response.data.message,
                        icon: 'XIcon',
                        variant: 'danger',
                      },
                })
              
              var errorsResponse = error.response.data.errors
              this.formErrors.title = checkError(errorsResponse.title)
              this.formErrors.course = checkError(errorsResponse.course_id)
              this.formErrors.status = checkError(errorsResponse.status)
              this.formErrors.title_seo_en = checkError(errorsResponse.title_seo_en)
              this.formErrors.title_seo_ar = checkError(errorsResponse.title_seo_ar)
              this.formErrors.description_seo_en = checkError(errorsResponse.description_seo_en)
              this.formErrors.description_seo_ar = checkError(errorsResponse.description_seo_ar)

              
            

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