<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Survey">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
            >

                <b-row class="w-100">

                  <!-- Item Title EN -->
                  <b-col md="6">
                      <b-form-group
                      label="Title EN"
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
                            v-model="title"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.title">{{ formErrors.title }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!-- Item Title EN -->
                  <b-col md="6">
                      <b-form-group
                      label="Title AR"
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

                    <b-col md="12" class="text-center mt-2" v-if="seoPreview">
                      <b-img thumbnail fluid :src="seoPreview" style="max-width: 300px; height: auto;" />
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
                          @change="previewImage($event,'seo')"
                        />
                      </b-form-group>
                    </b-col>

                    <!--type field-->
                    <b-col md="4" class="d-none">
                        <b-form-group
                            label="Type"
                            label-for="type"
                            
                            >
                            <validation-provider
                              #default="{ errors }"
                              name="type"
                              
                            >
                            <v-select
                                v-model="type"
                                :options="typeOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Type"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.type">{{ formErrors.type }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!--course field-->
                    <b-col md="4" class="d-none">
                        <b-form-group
                            label="Course"
                            label-for="course"
                            
                            >
                            <validation-provider
                              #default="{ errors }"
                              name="course"
                              
                            >
                            <v-select
                                v-model="course_id"
                                :options="courseOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Course"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            
                            </b-form-group>
                    </b-col>

                   <!---->
                   <b-col>
                  <b-row
                  v-for="(parent, index) in form.parent"
                  :key="index"
                  ref="row"
                  class="w-100"
                  >
                 

                  
                  <b-row class="w-100 d-flex align-items-center">
                    <b-col md="9">
                    
                      <!-- Item Name EN -->
                      <b-col class="w-100">
                          <b-form-group
                          :label="'Question ' + (index + 1) + ' EN'"
                          label-for="item-name"
                          >
                          <validation-provider
                            #default="{ errors }"
                            name="question EN"
                            rules="required"
                          >
                            <b-form-input
                                id="item-name"
                                type="text"
                                v-model="parent.question"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                          </b-form-group>
                      </b-col>

                      <!-- Item Name AR -->
                      <b-col class="w-100">
                          <b-form-group
                          :label="'Question ' + (index + 1) + ' AR'"
                          label-for="item-name"
                          >
                          <validation-provider
                            #default="{ errors }"
                            name="question AR"
                            rules="required"
                          >
                            <b-form-input
                                id="item-name"
                                type="text"
                                v-model="parent.question_ar"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                          </b-form-group>
                      </b-col>
                      
                    </b-col>  

                    <!-- Remove Button -->
                    <b-col
                        md="3"
                        class="mb-50"
                    >
                        <b-button
                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                        variant="outline-danger"
                        class="mt-0 mt-md-2"
                        @click="removeQuestion(index)"
                        >
                        <feather-icon
                            icon="XIcon"
                            class="mr-25"
                        />
                        <span>Delete Question</span>
                        </b-button>
                    </b-col>

                  </b-row>
                  
                  <b-col
                      lg="12"
                      md="12"
                      class="mb-50"
                  >
                  
                      
                    <b-row v-if="parent != undefined" v-for="(answer, indexs) in parent.answers"  class="form-repeater" :key="indexs">
                          
                        <b-col md="3">
                            <b-form-group
                            :label="'Answer' + (indexs + 1)"
                            label-for="answer-name"
                            >
                            <b-form-input
                                :id="'answer' + indexs + indexs"
                                type="text"
                                placeholder="Answer"
                                v-model="answer.answer"
                                
                            />
                            </b-form-group>
                        </b-col>
                          
                    </b-row>

                  
                  
                  </b-col>

                
                  </b-row>
                   </b-col>
                   <!---->


                </b-row>

                <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                @click="addQuestion"
                >
                <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                />
                <span>Add New Question</span>
                </b-button>

                &nbsp;&nbsp;

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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard,BFormFile, BFormTextarea,BImg
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
    BSpinner,
    BFormFile, BFormTextarea, BImg
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    id : router.currentRoute.params.id,
    //form
    form: 
      {
          parent: [],
      },
    //form
    title : '',
    title_ar:'',
    type : null,
    course_id : null,
    courseOptions:[],
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          }  ,
    
    typeOptions : [
        { label: 'Course', value: 'course' },
    ],
    
    formErrors : {
      type : null,
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
      seoPreview:null,
    
     
    }
  },

  mounted() {

    //fetch courses
    axios
    .get(`questionnaire/edit/${this.id}`)
    .then(response => {
    console.log('courses : ' , response.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.courseOptions.push( {label: response.data.data[s].title  , value: response.data.data[s].id })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch survey record
     axios
          .get(`questionnaires/${this.id}`)
          .then(response => {
            console.log("fetch survey ",response)
            this.course_id = response.data.questionnaire.course_id
            this.title = response.data.questionnaire.title
            this.title_ar = response.data.questionnaire.title_ar
            this.type = response.data.questionnaire.type
            for( let q=0 ; q< response.data.questionnaire.questionnaire_questions.length; q++  ){
                this.form.parent.push( 
                  {
                    'question': response.data.questionnaire.questionnaire_questions[q].question ,
                    'question_ar': response.data.questionnaire.questionnaire_questions[q].question_ar,
                    'id' : response.data.questionnaire.questionnaire_questions[q].id   
                  }
                )
            }

            this.title_seo_en = response.data.questionnaire.title_seo_en
            this.title_seo_ar = response.data.questionnaire.title_seo_ar
            this.description_seo_en = response.data.questionnaire.description_seo_en
            this.description_seo_ar = response.data.questionnaire.description_seo_ar
            this.seoPreview = response.data.questionnaire.image_seo
            console.log(  'edited array ' , this.form.parent )
          })
          .catch(error => console.log(error))

  },


  methods: {
     previewImage: function(event,type) {
        var input = event.target;
        if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          if(type == 'seo' ){ this.seoPreview = e.target.result; } 
        }
        reader.readAsDataURL(input.files[0]);
        }
    },

    addQuestion: function () {
        
        this.form.parent.push({
            question: '',
            question_en: '',
            question_ar: '',
        });
        
    },

    removeQuestion(index){
        this.form.parent.splice(index, 1)
    },

    
    addForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
          // var formData = {
          //   title : this.title,
          //   title_en : this.title,
          //   title_ar : this.title_ar,
          //   type : null,
          //   course_id : null,
          //   title_seo_en : this.title_seo_en,
          //   title_seo_ar: this.title_seo_ar,
          //   description_seo_en: this.description_seo_en,
          //   description_seo_ar: this.description_seo_ar
          // }

          // var servayQuestions = []

          // for( let q=0 ; q < this.form.parent.length; q++  ){
          //   servayQuestions.push( { 
          //     'id' : this.form.parent[q].id,
          //     question : this.form.parent[q].question,
          //     question_en : this.form.parent[q].question,
          //     question_ar : this.form.parent[q].question_ar,

          //      } )
          // }

          // formData.questions = servayQuestions;

          // var image_seo = document.querySelector('#image_seo')

          // if( image_seo.files[0] ){
          //   formData["image_seo"] = image_seo.files[0] 
          // }

           var formData = new FormData();
          formData.append("_method", "put" )
          formData.append("title", this.title )
          formData.append("title_en", this.title )
          formData.append("title_ar", this.title_ar )
          // formData.append("type", null )
          // formData.append("course_id", null )
          formData.append("title_seo_en", this.title_seo_en )
          formData.append("title_seo_ar", this.title_seo_ar )
          formData.append("description_seo_en", this.description_seo_en )
          formData.append("description_seo_ar", this.description_seo_ar )

          

          for( let q=0 ; q < this.form.parent.length; q++  ){
            if( this.form.parent[q].id != undefined ){
            formData.append(`questions[${q}][id]`, this.form.parent[q].id )
            }
            formData.append(`questions[${q}][question]`, this.form.parent[q].question )
            formData.append(`questions[${q}][question_en]`, this.form.parent[q].question  )
            formData.append(`questions[${q}][question_ar]`, this.form.parent[q].question_ar )
          }
              

          var image_seo = document.querySelector('#image_seo')

          if( image_seo.files[0] ){
            formData.append("image_seo", image_seo.files[0] )
          }

         


      
          axios
            .post(`questionnaires/${this.id}`, formData, this.headersObj)
            .then(response => {
                console.log('questionnaires succuss' , response)
                router.replace('/apps/questionnaires/list')

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
              console.log('category error' , error.response)

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
              
              var errorsResponse = error.response.data.errors;
              this.formErrors.title = checkError(errorsResponse.title)
              this.formErrors.type = checkError(errorsResponse.type)
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