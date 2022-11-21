<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="View Quiz">
            <div>
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addQuiz()"
            >

                

                    <b-list-group>
                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Title EN
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ title }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Title AR
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ title_ar }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Privacy
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ privacy }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Passing Precentage
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ passing_percentage }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Course
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ course }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Section EN
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ section }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Section AR
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                            {{ section_ar }}
                          </b-col>

                        </b-row>
                      </b-list-group-item>

                      <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Seo Name EN
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                          {{title_seo_en}}
                          </b-col>

                        </b-row>
                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Seo Name AR
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                          {{title_seo_ar}}
                          </b-col>

                        </b-row>
                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Seo Description EN
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                          {{description_seo_en}}
                          </b-col>

                        </b-row>
                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Seo Description AR
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                          {{description_seo_ar}}
                          </b-col>

                        </b-row>
                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                          <b-col
                            cols="6"
                            md="6"
                          >
                            Seo Image
                          </b-col>  

                          <b-col
                            cols="6"
                            md="6"
                          >
                          <b-avatar
                              :src="image_seo"
                              size="104px"
                              rounded
                            />
                          </b-col>

                        </b-row>
                      </b-list-group-item>


                    </b-list-group>

                   

                    
                   



                   

                   


                   
                

                <b-col cols="12" class="mb-1 mt-2">
                    <hr>
                </b-col>

                <!-- Row Loop -->
                <b-row
                v-for="(parent, index) in form.parent"
                :key="index"
                ref="row"
                >

                

                <!-- Item Name -->
                <b-col md="9">
                    <b-form-group
                    :label="'Question ' + (index + 1) + ' EN'"
                    label-for="item-name"
                    >
                    <b-form-input
                        id="item-name"
                        type="text"
                        placeholder="Type Your Question"
                        v-model="parent.question"
                        disabled
                        
                    />
                    </b-form-group>
                </b-col>

                <!-- Item Name AR-->
                <b-col md="9">
                    <b-form-group
                    :label="'Question ' + (index + 1) + ' AR'"
                    label-for="item-name-ar"
                    >
                    <b-form-input
                        id="item-name-ar"
                        type="text"
                        placeholder="Type Your Question"
                        v-model="parent.question_ar"
                        disabled
                        
                    />
                    </b-form-group>
                </b-col>

               

                <!--type field-->
                <b-col md="6">
                  <b-form-group
                      label="Type"
                      label-for="Type"
                      
                      >
                      <v-select
                          v-model="parent.type"
                          :options="typeOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="Type"
                          disabled
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
                        :label="'Answer' + (indexs + 1) + ' EN'"
                        label-for="answer-name"
                        >
                        <b-form-input
                            :id="'answer' + indexs + indexs"
                            type="text"
                            placeholder="Answer"
                            v-model="answer.answer"
                            disabled
                            
                        />
                        </b-form-group>
                    </b-col>

                    <b-col md="3">
                        <b-form-group
                        :label="'Answer' + (indexs + 1) + ' AR'"
                        label-for="answer-name-ar"
                        >
                        <b-form-input
                            :id="'answer' + indexs + indexs + ' AR'"
                            type="text"
                            placeholder="Answer"
                            v-model="answer.answer_ar"
                            disabled
                            
                        />
                        </b-form-group>
                    </b-col>

                    <b-col md="2" class="d-flex align-items-end is-correct-option">
                        <b-form-group
                    
                        >
                            <input type="checkbox" :id="index + '' +indexs" v-model="answer.is_correct" disabled>
                            <label :for="index + '' +indexs">Is Correct</label> 
                        </b-form-group>   
                    </b-col> 

                    

                      
                       
              </b-row>

               
                </b-col>

                <b-col cols="12">
                    <hr>
                </b-col>
                </b-row>
               
            </b-form>
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard, BListGroup, BListGroupItem, BAvatar
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
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
    BSpinner,
    BListGroup, BListGroupItem, BAvatar
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    section_id : router.currentRoute.params.id,
    passing_percentage: null,
    title : '',
    title_ar : '',
    privacy:'',
    section: '',
    section_ar: '',
    course : null,
    typeOptions : [
        { label: 'Multi Selection', value: 'select' },
        { label: 'One Selection', value: 'radio' },
    ],
    courseOptions:[],
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
      title_seo_en:'',
      title_seo_ar:'',
      description_seo_en:'',
      description_seo_ar:'',
      image_seo:'',
    }
  },
  mounted() {
    document.getElementsByTagName('input').disabled = true; 
    this.initTrHeight()
    console.log(this.form.parent)


    //fetch quiz data
    axios
    .get(`quizzes/${router.currentRoute.params.id}`)
    .then(response => {

      console.log('section quiz' , response.data)
    
    this.title = response.data.quizze.title
    this.title_ar = response.data.quizze.title_ar
    this.privacy = response.data.quizze.price ? 'Yes' : 'No'
    this.passing_percentage = response.data.quizze.passing_percentage
    this.course = response.data.quizze.course_name
    this.section = response.data.quizze.section.title
    this.section_ar = response.data.quizze.section.title_ar

    this.title_seo_en =  response.data.quizze.title_seo_en
    this.title_seo_ar =  response.data.quizze.title_seo_ar
    this.description_seo_en =  response.data.quizze.description_seo_en
    this.description_seo_ar =  response.data.quizze.description_seo_ar
    this.image_seo =  response.data.quizze.image_seo

    console.log( 'quiz is' , response.data.quizze )
    for( let q=0 ; q< response.data.quizze.questions.length; q++  ){

        this.form.parent.push({
          question : response.data.quizze.questions[q].question,
          question_ar : response.data.quizze.questions[q].question_ar,
          type : response.data.quizze.questions[q].type,
          answers : response.data.quizze.questions[q].answers
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
            answers: []
        });
        
    },

    removeQuestion(index){
        this.form.parent.splice(index, 1)
    },


    addAnswer: function (indexp) {
        console.log(indexp);
        
        this.form.parent[indexp].answers.push({answer: '',is_correct : false });
        console.log(this.form.parent)
    },
    removeAnswer: function (index ,indexs) {
        this.form.parent[index].answers.splice(indexs, 1)
    },
    addQuiz: function () {

        //show spinner
        document.getElementById('loading-spinner').style.display = 'block'

        const quizData = JSON.parse(JSON.stringify(this.form.parent))
        
        let quizObj = []

        for( let i=0 ; i < quizData.length ; i++ ){
           
            quizObj.push(
              { 
                question : quizData[i].question ,
                type : quizData[i].type ,
                answers : quizData[i].answers
              })
        }
        

      

    var dataQuiz = {
        title : this.title,
        
        course_id : this.course_id,
        questions : quizObj,
        passing_percentage: this.passing_percentage,
        type : 'quiz',

    }
    console.log( 'dataQuiz :: ', dataQuiz)

        axios
          .put(`quizzes/${router.currentRoute.params.id}`, dataQuiz, this.headersObj)
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
          
          })
    },
    

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
