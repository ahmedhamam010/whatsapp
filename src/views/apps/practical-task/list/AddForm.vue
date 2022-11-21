<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Practical Task">
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
                        label-for="question_en"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="question en"
                          rules="required"
                        >
                          <b-form-textarea
                              id="question_en"
                              type="text"
                              v-model="question"
                              :state="errors.length > 0 ? false:null"
                              rows="8"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.question">{{ formErrors.question }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item Question AR-->
                    <b-col md="6">
                        <b-form-group
                        label="Question AR *"
                        label-for="question_ar"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="question ar"
                           rules="required"
                        >
                          <b-form-textarea
                              id="question_ar"
                              type="text"
                              v-model="question_ar"
                              :state="errors.length > 0 ? false:null"
                              rows="8"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                        
                    </b-col>

                    <!--course field-->
                    <b-col md="4">
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
                                @input="getRelatedSections($event)"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.course_id">{{ formErrors.course_id }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!--section field-->
                    <b-col md="4">
                        <b-form-group
                            label="Section *"
                            label-for="section"
                            
                            >
                            <validation-provider
                              #default="{ errors }"
                              name="section"
                              rules="required"
                            >
                            <v-select
                                v-model="section_id"
                                :options="sectionOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Course"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.section_id">{{ formErrors.section_id }}</div>
                            
                            </b-form-group>
                    </b-col>

                     <!-- Privacy -->
                    <b-col md="4">
                        <b-form-group
                          label="Privacy"
                          label-for="privacy"
                         
                        >
                          <b-form-input
                              id="privacy"
                              type="text"
                              v-model="privacy"
                              disabled
                              
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormTextarea, BCard
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
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
    BFormTextarea,
    BSpinner,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    privacy:null,  
    title : '',
    question : '',
    question_ar : '',
    course_id : null,
    section_id : null,
    courseOptions : [],
    sectionOptions : [],
    formErrors : {
      question : '',
      course_id : null,
      section_id : null,
      
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
   
    this.fetchCourses();

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
    
    addForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
          var formData = {
            question:this.question,
            question_en:this.question,
            question_ar:this.question_ar,
            course_id : this.course_id,
            section_id : this.section_id,
            

          }
      
          axios
            .post(`practicalTasks`, formData, this.headersObj)
            .then(response => {
                console.log('sections succuss' , response)
                router.replace('/apps/practicalTasks/list')

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
              this.formErrors.question = checkError(errorsResponse.question)
              this.formErrors.course_id = checkError(errorsResponse.course_id)
              this.formErrors.section_id = checkError(errorsResponse.course_id)

            })

            }
      })
    },
     getRelatedSections(event){

          this.sectionOptions = []
    
          //get sectiond of selected course
          axios
          .get(`courses/${event}/sections`)
          .then(response => {
             console.log(response)
             this.sectionOptions = [];
             let returnedSectionOptions = [];
             for( let s=0 ; s< response.data.data.length; s++  ){
               returnedSectionOptions.push( {label: response.data.data[s].title  , value: response.data.data[s].id })
             }
             console.log('returnedSectionOptions', returnedSectionOptions)
             this.sectionOptions = returnedSectionOptions;
          })
          .catch(error => cosole.log(error.response.data.errors))

          //get privacy status of selected course
          axios
          .get(`courses/${event}`)
          .then(response => {
             console.log('selected courese : ' , response.data.course.price)
             if( response.data.course.price != 0 ){
               this.privacy = 'Yes'
             }else{
               this.privacy = 'No'
             }
          })
          .catch(error => cosole.log(error.response.data.errors))
    }
    

  },
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>