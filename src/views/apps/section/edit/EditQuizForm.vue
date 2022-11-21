<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Quiz">
            <div>
            <validation-observer ref="simpleRules">  
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addQuiz()"
            >

                <b-row>

                   <!-- Item Name EN -->
                    <b-col md="6">
                        <b-form-group
                        label="Title EN *"
                        label-for="title"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="title"
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
                        </b-form-group>
                    </b-col>

                     <!-- Item Name AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Title AR"
                        label-for="title"
                        >
                        <b-form-input
                            id="title"
                            type="text"
                            
                            v-model="title_ar"
                            
                        />
                        </b-form-group>
                    </b-col>

                    <!--course field-->
                    <b-col md="6">
                        <b-form-group
                            label="Course"
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
                            
                            </b-form-group>
                    </b-col>

                    <!--section field-->
                    <b-col md="6">
                        <b-form-group
                            label="Section"
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
                                input-id="Section"
                                :state="errors.length > 0 ? false:null"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            
                            </b-form-group>
                    </b-col>

                    <!--category field-->
                    <b-col md="4" class="d-none" >
                        <b-form-group
                            label="Category"
                            label-for="category"
                            
                            >
                            <v-select
                                v-model="category_id"
                                :options="categoryOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Category"
                            />
                            
                            </b-form-group>
                    </b-col>

                    <!-- Passing Precentage -->
                    <b-col md="6">
                      <b-form-group
                      label="Passing Precentage *"
                      label-for="passing_precentage"
                      >
                      <validation-provider
                          #default="{ errors }"
                          name="Passing Persentage"
                          rules="required|greaterThanZero"
                      >
                      <b-form-input
                          id="passing_precentage"
                          type="number"
                          v-model="passing_percentage"
                          max="100"
                          min="0"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                    <!-- Privacy -->
                    <b-col md="6">
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

                <b-col cols="12" class="mb-1 mt-2">
                    <hr>
                </b-col>

                <!-- Row Loop -->
                <b-row
                v-for="(parent, index) in form.parent"
                :key="index"
                ref="row"
                >

                <b-row class="w-100 d-flex align-items-center">
                  <b-col md="9">
                    <b-col class="w-100">
                        <b-form-group
                        :label="'Question ' + (index + 1) + ' EN *' "
                        label-for="item-name"
                        >
                        <validation-provider
                            #default="{ errors }"
                            :name="'Question ' + (index + 1) + ' EN'"
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

                    <b-col class="w-100">
                        <b-form-group
                        :label="'Question ' + (index + 1) + ' AR'"
                        label-for="item-name-ar"
                        >
                        <b-form-input
                            id="item-name-ar"
                            type="text"
                            v-model="parent.question_ar"
                            
                        />
                        </b-form-group>
                    </b-col>

                  </b-col>
                  <b-col md="3">
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

                <!-- Item Name -->
                

               

                <!--type field-->
                <b-col md="6">
                  <b-form-group
                      label="Type"
                      label-for="Type"
                      
                      >
                      <v-select
                          v-model="parent.type"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="typeOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="Type"
                          @input="checkQuestionType($event,index)"
                          
                      />
                      
                  </b-form-group>
                </b-col>


                
                
                <b-col
                    lg="12"
                    md="12"
                    class="mb-50"
                >
                
                    
                <b-row v-if="parent != undefined" v-for="(answer, indexs) in parent.answers"  class="form-repeater" :key="indexs">

                    
                      
                    <b-col md="3">
                        <b-form-group
                        :label="'Answer ' + (indexs + 1) + ' EN *'"
                        label-for="answer-name"
                        >
                        <validation-provider
                            #default="{ errors }"
                            :name="'Answer ' + (indexs + 1) + ' EN '"
                            rules="required"
                        >
                        <b-form-input
                            :id="'answer' + indexs + indexs"
                            type="text"
                            v-model="answer.answer"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                    <b-col md="3">
                        <b-form-group
                        :label="'Answer ' + (indexs + 1) + ' AR'"
                        label-for="answer-name-ar"
                        >
                        <b-form-input
                            :id="'answer' + indexs + indexs + ' AR'"
                            type="text"
                            
                            v-model="answer.answer_ar"
                            
                        />
                        </b-form-group>
                    </b-col>

                    <b-col md="2" class="d-flex align-items-end is-correct-option">
                        <b-form-group
                    
                        >
                            <input 
                            type="checkbox"
                            :id="index + '' +indexs" :radiotarget="index"
                            v-model="answer.is_correct" 
                            @change="disableSiblingAnswers($event,index)"
                            v-if="parent.type == 'radio' "
                            >

                            <input 
                            type="checkbox"
                            :id="index + '' +indexs" :radiotarget="index"
                            v-model="answer.is_correct" 
                            v-else="parent.type == 'select' "
                            @change="calculateCorrectAnswersLength(index)"
                            >
                            <label :for="index + '' +indexs">Is Correct</label> 
                        </b-form-group>   

                        
                    </b-col> 

                    <b-col md="2">
                        
                            <b-button
                            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                            variant="outline-danger"
                            class="mt-0 mt-md-2"
                            @click="removeAnswer(index ,indexs)"
                            >
                            <feather-icon
                                icon="XIcon"
                                class="mr-25"
                            />
                            <span>Delete Answer</span>
                            </b-button>

                        
                    </b-col>

                      
                       
                </b-row>

                <b-col md="12" class="pl-0">
                    <b-form-group
                    label=""
                    >
                    <validation-provider
                        #default="{ errors }"
                        :name="'Correct Answers Length For Question ' + (index + 1) "
                        rules="min_value:1"
                    >
                    <b-form-input
                        type="number"
                        v-model="parent.correctAnswersLength"
                        :state="errors.length > 0 ? false:null"
                        class="d-none"
                        
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    </b-form-group>
                </b-col>

                <!-- Add Answer Button -->
                <b-col
                    lg="2"
                    md="3"
                    class="mb-50 p-0"
                >
                    <b-button
                    v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                    variant="outline-success"
                    class="mt-0 mt-md-2"
                    @click="addAnswer(parent.type,index)"
                  
                    >
                    
                    <span>Add Answer</span>
                    </b-button>
                </b-col>
                </b-col>

                <b-col cols="12">
                    <hr>
                </b-col>
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard,BFormFile, BFormTextarea
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import { BSpinner } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { min_value } from 'vee-validate/dist/rules';
import { required } from '@validations'
extend('min_value',min_value)
extend(
  'greaterThanZero',{
   getMessage: field =>  field + ' needs to be > zero.',
   validate: (value) => {
     // value must be > zero
     if (value > 0 ) return true;
     return false;
   }
  });

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
    BFormFile, BFormTextarea,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    section_id : null,
    passing_percentage: null,
    title:'',
    title_ar:'',
    privacy:null,
    course_id : null,
    category_id:null,
    typeOptions : [
        { label: 'Multi Selection', value: 'select' },
        { label: 'One Selection', value: 'radio' },
    ],
    categoryOptions : [],
    courseOptions:[],
    sectionOptions : [],
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          }  ,
    //form
    form: 
        {
            parent: [],
        },
      //form
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      nextTodoId: 2,
      title_seo_en: '',
      title_seo_ar: '',
      description_seo_en:'',
      description_seo_ar: '',
      image_seo:null,
    }
  },
  mounted() {
    this.initTrHeight()
    console.log(this.form.parent)

    this.fetchCourses()

    //fetch categories
    axios
    .get(`categories`)
    .then(response => {
    console.log('categories : ' , response.data.categories)
    for( let i=0 ; i< response.data.categories.length; i++  ){
        this.categoryOptions.push( {label: response.data.categories[i].name  , value: response.data.categories[i].id })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch quiz data
    axios
    .get(`quizzes/${router.currentRoute.params.id}`)
    .then(response => {

      console.log('section quiz' , response.data)
    
    this.title = response.data.quizze.title
    this.title_ar = response.data.quizze.title_ar
    this.passing_percentage = response.data.quizze.passing_percentage
    this.category_id = response.data.quizze.category_id
    this.course_id = response.data.quizze.course_id
    this.getRelatedSections(this.course_id)
    this.section_id = response.data.quizze.section_id

    this.title_seo_en = response.data.quizze.title_seo_en
    this.title_seo_ar = response.data.quizze.title_seo_ar
    this.description_seo_en = response.data.quizze.description_seo_en
    this.description_seo_ar = response.data.quizze.description_seo_ar
   
    //get privacy status of selected course
    axios
    .get(`courses/${this.course_id}`)
    .then(response => {
        console.log('selected courese : ' , response.data.course.price)
        if( response.data.course.price != 0 ){
          this.privacy = 'Yes'
        }else{
          this.privacy = 'No'
        }
    })
    .catch(error => console.log(error.response.data.errors))
    
    console.log( 'quiz is' , response.data.quizze )
    for( let q=0 ; q< response.data.quizze.questions.length; q++  ){
        

        this.form.parent.push({
          question : response.data.quizze.questions[q].question,
          question_ar : response.data.quizze.questions[q].question_ar,
          type : response.data.quizze.questions[q].type,
          answers : response.data.quizze.questions[q].answers,
          correctAnswersLength : response.data.quizze.questions[q].answers.filter(x => x.is_correct == 1 ).map(x => x.is_correct).length
        })

    }
    
    })
    .catch(error => {console.log( 'error fetch quiz', error)})

  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
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
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },

    addQuestion: function () {
        
        this.form.parent.push({
            question: '',
            question_en: '',
            question_ar: '',
            type: 'select',
            answers: [{answer: '', answer_en: '',answer_ar: '',is_correct : false }],
            "correctAnswersLength":0,
        });
        
    },

    removeQuestion(index){
        this.form.parent.splice(index, 1)
    },


    addAnswer: function (type,indexp) {
        console.log(type,indexp);
         var allCheckboxes = document.querySelectorAll(`[radiotarget="${indexp}"]`)
        if( type == 'radio' ){
          for( let i =0 ; i < allCheckboxes.length ; i++ ){
            allCheckboxes[i].checked =false
          }
        }
        
        this.form.parent[indexp].answers.push({answer: '', answer_en: '',answer_ar: '',is_correct : false });
        console.log(this.form.parent)
    },
    removeAnswer: function (index ,indexs) {
        this.form.parent[index].answers.splice(indexs, 1)
    },
    addQuiz: function () {

        this.$refs.simpleRules.validate().then(success => {
        if (success) {

        //show spinner
        document.getElementById('loading-spinner').style.display = 'block'

       var formData = new FormData();

          const quizData = this.form.parent
          
          for( let i=0 ; i < quizData.length ; i++ ){
                formData.append(`questions[${i}][question]`, quizData[i].question )
                formData.append(`questions[${i}][question_en]`, quizData[i].question )
                formData.append(`questions[${i}][question_ar]`, quizData[i].question_ar )
                formData.append(`questions[${i}][type]`, quizData[i].type )

                for( let a=0 ; a < quizData[i].answers.length ; a ++  ){
                  formData.append(`questions[${i}][answers][${a}][answer]`, quizData[i].answers[a].answer )
                  formData.append(`questions[${i}][answers][${a}][answer_en]`, quizData[i].answers[a].answer )
                  formData.append(`questions[${i}][answers][${a}][answer_ar]`, quizData[i].answers[a].answer_ar )
                  formData.append(`questions[${i}][answers][${a}][is_correct]`, 
                  quizData[i].answers[a].is_correct ? 1 : 0 )
                }
          }

          formData.append(`title`, this.title )
          formData.append(`title_en`, this.title )
          formData.append(`title_ar`, this.title_ar )
          formData.append(`course_id`, this.course_id )
          formData.append(`section_id`, this.section_id )
          formData.append(`passing_percentage`, this.passing_percentage )
          formData.append(`type`, 'quiz' )
          formData.append(`title_seo_en`, this.title_seo_en )
          formData.append(`title_seo_ar`, this.title_seo_ar )
          formData.append(`description_seo_en`, this.description_seo_en )
          formData.append(`description_seo_ar`, this.description_seo_ar )

          var image_seo = document.querySelector('#image_seo')
          if( image_seo.files[0] ){
           formData.append("image_seo", image_seo.files[0] )
          }
        

        axios
          .post(`quizzes/${router.currentRoute.params.id}?_method=PUT`, formData, this.headersObj)
          .then(response => {
              console.log('quiz succuss' , response)
              router.replace('/apps/quiz/list')

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
            console.log('quiz error' , error)
            
            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'

            this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `${error.response.data.msg}`,
                      icon: 'CoffeeIcon',
                      variant: 'danger',
                    },
              })
          
          })

          } 
      })
    },
    getRelatedSections(event){

          this.sectionOptions = []
          this.section_id = null
    
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
          .catch(error => console.log(error.response.data.errors))

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
    },
     disableSiblingAnswers(event,index){

      // console.log(event.target.closest(".form-repeater"))
      let val = event.target.getAttribute('radiotarget')
      // document.querySelectorAll(`[type="checkbox"]`).disabled = true;
      var allCheckboxes = document.querySelectorAll(`[radiotarget="${val}"]`)
      if( event.target.checked ){
        for( let i =0 ; i < allCheckboxes.length ; i++ ){
          allCheckboxes[i].disabled =true
        }
        event.target.disabled = false
      }else{
        for( let i =0 ; i < allCheckboxes.length ; i++ ){
          allCheckboxes[i].disabled =false
        }
      }

      this.calculateCorrectAnswersLength(index)
      
    },
    checkQuestionType(event,index){
      var allCheckboxes = document.querySelectorAll(`[radiotarget="${index}"]`)
      if( event == 'select' ){
        for( let i =0 ; i < allCheckboxes.length ; i++ ){
          allCheckboxes[i].disabled =false
          allCheckboxes[i].checked =false
        }
      }else{
        for( let i =0 ; i < allCheckboxes.length ; i++ ){
          allCheckboxes[i].checked =false
        }
      }
      this.form.parent[index].correctAnswersLength = 0
    },

    calculateCorrectAnswersLength(index){

      let answersArr = this.form.parent[index].answers
      let correctAnswersLength = 0
      for( let a=0 ; a < answersArr.length ; a++  ){
        if( answersArr[a].is_correct ){
          correctAnswersLength++
        }
      }
      this.form.parent[index].correctAnswersLength = correctAnswersLength
    }
    

  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}



.is-correct-option .form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.is-correct-option .form-group label {
  position: relative;
  cursor: pointer;
}

.is-correct-option .form-group label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border: 0.1em solid #000;
  border-radius: 0.2em;
}

.is-correct-option .form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid MediumSeaGreen;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.loading-spinner{
   display:none;
}
</style>
