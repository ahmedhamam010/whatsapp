<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Question">
            <div>
            <validation-observer ref="simpleRules">  
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
            >

                <b-row>

                    <!-- Item Question -->
                    <b-col md="6">
                        <b-form-group
                        label="Question EN *"
                        label-for="question"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="question EN"
                            rules="required"
                        >
                        <b-form-textarea
                            rows="8"
                            id="question"
                            type="text"
                            v-model="question"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.question">{{ formErrors.question }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item Question AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Question AR *"
                        label-for="question_ar"
                        >
                         <validation-provider
                            #default="{ errors }"
                            name="question AR"
                            rules="required"
                            
                        >
                        <b-form-textarea
                            rows="8"
                            id="question_ar"
                            type="text"
                            v-model="question_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.question_ar">{{ formErrors.question_ar }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item Answer -->
                    <b-col md="6">
                        <b-form-group
                        label="Answer EN *"
                        label-for="answer"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="answer EN"
                            rules="required"
                        >
                        <b-form-textarea
                            rows="8"
                            id="answer"
                            type="text"
                            v-model="answer"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.answer">{{ formErrors.answer }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item Answer AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Answer AR *"
                        label-for="answer_ar"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="answer AR"
                            rules="required"
                        >
                        <b-form-textarea
                            rows="8"
                            id="answer_ar"
                            type="text"
                            v-model="answer_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.answer_ar">{{ formErrors.answer_ar }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!--course field-->
                    <!-- <b-col md="12">
                        <b-form-group
                            label="Course"
                            label-for="course"
                            
                            >
                            <v-select
                                v-model="course_id"
                                :options="courseOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Course"
                            
                            />
                            <div class="invalid-feedback d-block" v-if="formErrors.course_id">{{ formErrors.course_id }}</div>
                            
                            </b-form-group>
                    </b-col> -->

                    <!--status field-->
                    <b-col md="12" >
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
                            <div class="invalid-feedback d-block" v-if="formErrors.is_show">{{ formErrors.is_show }}</div>
                            
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
    BFormFile,ValidationProvider, ValidationObserver 
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    question : '',
    question_ar: '',
    answer:'',
    answer_ar:'',
    // course_id:null,
    courseOptions:[],
    title_seo_en: '',
    title_seo_ar: '',
    description_seo_en:'',
    description_seo_ar: '',
    image_seo:null,
    status : 0 ,
    statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Unpublished', value: 0 }
    ],
    formErrors : {
      question : null,
      question_ar: null,
      answer:null,
      answer_ar:null,
      // course_id:null,
      is_show : null,
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

  mounted() {
   
    
    //fetch courses
    // var url = `courses`
    //     if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
    //      url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
    //     }
    // axios
    // .get(url)
    // .then(response => {
    // document.getElementById('loading-spinner').style.display = 'none'
    // console.log('courses : ' , response.data)
    // for( let s=0 ; s< response.data.data.length; s++  ){
    //     this.courseOptions.push( {label: response.data.data[s].title  , value: response.data.data[s].id })
    // }
    // })
    // .catch(error => {
    //     document.getElementById('loading-spinner').style.display = 'none'
    //     console.log( 'error fetch course', error)
    // })

  },
  
  methods: {
    
    addForm: function () {

      
    this.$refs.simpleRules.validate().then(success => {
    if (success) {

    //show spinner
    document.getElementById('loading-spinner').style.display = 'block'
     
        var formDataInputs = new FormData();
        formDataInputs.append("question", this.question )
        formDataInputs.append("question_en", this.question )
        formDataInputs.append("question_ar", this.question_ar )
        formDataInputs.append("answer", this.answer )
        formDataInputs.append("answer_en", this.answer )
        formDataInputs.append("answer_ar", this.answer_ar )
        // formDataInputs.append("course_id", this.course_id )
        formDataInputs.append("title_seo_en", this.title_seo_en )
        formDataInputs.append("title_seo_ar", this.title_seo_ar )
        formDataInputs.append("description_seo_en", this.description_seo_en )
        formDataInputs.append("description_seo_ar", this.description_seo_ar )
        formDataInputs.append("is_show", this.status )
        
        
        var seoImage = document.querySelector('#image_seo')
        if( seoImage.files[0] ){
          formDataInputs.append("image_seo", seoImage.files[0] )
        }
        
    

        axios
          .post(`bank-questions/store/data`, formDataInputs, this.headersObj)
          .then(response => {
              console.log('bank-questions succuss' , response)
              router.replace('/apps/baankQuestions/adminList')

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

            this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                title: `${error.response.data.msg}`,
                icon: 'CoffeeIcon',
                variant: 'danger',
                },
            })
              
            console.log('bank-questions error' , error.response.data.message)

            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'
            
            var errorsResponse = error.response.data.errors
            this.formErrors.question = checkError(errorsResponse.question)
            this.formErrors.question_ar = checkError(errorsResponse.question_ar)
            this.formErrors.answer = checkError(errorsResponse.answer)
            this.formErrors.answer_ar = checkError(errorsResponse.answer_ar)
            this.formErrors.is_show = checkError(errorsResponse.is_show)
            // this.formErrors.course_id = checkError(errorsResponse.course_id)
          

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

