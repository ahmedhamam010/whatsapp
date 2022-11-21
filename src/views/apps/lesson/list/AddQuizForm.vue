<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card-code title="Quiz Form">
            <div>
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
            >

                <b-row>

                    <!-- Item Name -->
                    <b-col md="6">
                        <b-form-group
                        label="Title"
                        label-for="title"
                        >
                        <b-form-input
                            id="title"
                            type="text"
                            
                            v-model="title"
                            
                        />
                        </b-form-group>
                    </b-col>

                    

                    <!--category field-->
                    <b-col md="6">
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
                        label="Passing Precentage"
                        label-for="passing_precentage"
                        >
                        <b-form-input
                            id="passing_precentage"
                            type="number"
                            v-model="passing_percentage"
                            max="100"
                            min="0"
                            
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

                

                <!-- Item Name -->
                <b-col md="9">
                    <b-form-group
                    :label="'Question ' + (index + 1)"
                    label-for="item-name"
                    >
                    <b-form-input
                        id="item-name"
                        type="text"
                        placeholder="Type Your Question"
                        v-model="parent.question"
                        
                    />
                    </b-form-group>
                </b-col>

                <!-- Remove Button -->
                <b-col
                    lg="3"
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

                    <b-col md="2" class="d-flex align-items-end is-correct-option">
                        <b-form-group
                    
                        >
                            <input type="checkbox" :id="index + '' +indexs" v-model="answer.is_correct">
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
                    @click="addAnswer(index)"
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
            </div>
           

            
        </b-card-code>

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
import BCardCode from '@core/components/b-card-code'
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox
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
    BCardCode,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    vSelect,
    BSpinner,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    lesson_id : router.currentRoute.params.id,
    passing_percentage : null,
    title : '',
    course_id : null,
    category_id:null,
    typeOptions : [
        { label: 'Multi Selection', value: 'select' },
        { label: 'One Selection', value: 'radio' },
    ],
    categoryOptions : [],
    
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
            parent: [
                {
            "question": "",
            "type":"",
            "answers": [
                {
                    "answer": "",
                    "is_correct": 0
                },
                {
                    "answer": "",
                    "is_correct": 0
                },
                {
                    "answer": "",
                    "is_correct": 0
                }
            ]
        }
            ],
        },
      //form
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      nextTodoId: 2,
    }
  },
  mounted() {
    this.initTrHeight()
    console.log(this.form.parent)

    

    //fetch categories
    axios
    .get(`categories`)
    .then(response => {
    console.log('categories : ' , response.data.categories)
    for( let i=0 ; i< response.data.categories.length; i++  ){
        this.categoryOptions.push( {label: response.data.categories[i].name  , value: response.data.categories[i].id })
    }
    })
    .catch(error => {console.log( 'error fetch cats', error)})

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
    addForm: function () {
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
        category_id : this.category_id,
        lesson_id : this.lesson_id,
        questions : quizObj,
        passing_percentage : this.passing_percentage,
        type : 'quiz',

    }
    console.log(dataQuiz)

        axios
          .post(`quizzes`, dataQuiz, this.headersObj)
          .then(response => {
              console.log('quiz succuss' , response)
              router.replace('/apps/quiz/list')

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
            console.log('quiz error' , error)

            //hide spinner
            document.getElementById('loading-spinner').style.display = 'hide'

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
