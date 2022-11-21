<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Consultant Questionnaire">
            <div>
            <validation-observer ref="simpleRules">  
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="submitForm()"
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
                            rules="required|min:3|max:50"
                        >
                        <b-form-input
                            id="title"
                            type="text"
                            
                            v-model="title_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                    <!-- Item Name AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Title AR *"
                        label-for="title_ar"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="title AR"
                            rules="required|min:3|max:50"
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

                    <!-- status -->
                    <!-- <b-col md="4">
                      <b-form-group
                        label="Status *"
                        label-for="status"
                        id="statusSelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="status"
                          rules="required"
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
                      </b-form-group>
                        
                      
                    </b-col> -->

                    

                    
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
                            rules="required|max:350"
                        >
                        <b-form-textarea
                            id="item-name"
                            type="text"
                            v-model="parent.question_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                    <b-col class="w-100">
                        <b-form-group
                        :label="'Question ' + (index + 1) + ' AR *'"
                        label-for="item-name-ar"
                        >
                        <validation-provider
                            #default="{ errors }"
                            :name="'Question ' + (index + 1) + ' AR'"
                            rules="required|max:350"
                        >
                        <b-form-textarea
                            id="item-name-ar"
                            type="text"
                            v-model="parent.question_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
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
                <b-col md="12">
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

                

                
                
                    
                <b-row v-if="parent != undefined " v-for="(option, indexs) in parent.options"  class="form-repeater align-items-center" :key="indexs">

                    
                      
                    <b-col md="5" >
                        <b-form-group
                        :label="'Option ' + (indexs + 1) + ' EN *'"
                        label-for="option-name"
                        >
                        <validation-provider
                            #default="{ errors }"
                            :name="'Option ' + (indexs + 1) + ' EN '"
                            rules="required"
                        >
                        <b-form-textarea
                            :id="'option' + indexs + indexs"
                            type="text"
                            v-model="option.option_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                    <b-col md="5">
                        <b-form-group
                        :label="'Option ' + (indexs + 1) + ' AR *'"
                        label-for="option-name-ar"
                        >
                        <validation-provider
                            #default="{ errors }"
                            :name="'Option ' + (indexs + 1) + ' AR '"
                            rules="required"
                        >
                        <b-form-textarea
                            :id="'option' + indexs + indexs + ' AR'"
                            type="text"
                            v-model="option.option_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                   

                    <b-col md="2">
                        
                            <b-button
                            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                            variant="outline-danger"
                            class="mt-0 mt-md-2"
                            @click="removeOption(index ,indexs)"
                            
                            >
                            <feather-icon
                                icon="XIcon"
                                class="mr-25"
                            />
                            <span>Delete Option</span>
                            </b-button>

                        
                    </b-col>

                      
                       
                </b-row>

                

                <!-- Add Option Button -->
                <b-col
                    lg="2"
                    md="3"
                    class="mb-50 p-0"
                >
                    <b-button
                    v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                    variant="outline-success"
                    class="mt-0 mt-md-2"
                    @click="addOption(parent.type,index)"
                    v-if="parent.type != 'essay' "
                    >
                    
                    <span>Add Option</span>
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
      <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard,BFormFile, BFormTextarea
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import { BSpinner } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
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
    ValidationProvider,
    ValidationObserver,
    BFormFile,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
  data() {
    return { 
    title_en : '',
    title_ar:'',
    status:1,
    statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Drafted', value: 0 },
    ],
    typeOptions : [
        { label: 'Select', value: 'select' },
        { label: 'Multi Select', value: 'multi select' },
        { label: 'Essay', value: 'essay' },
    ],
    
    //form
    form: 
        {
            parent: [
                {
            "question_en": "",
            "question_ar": "",
            "type":"select",
            "options": [
                {
                    "option_en": "",
                    "option_ar": "",
                },
                
            ]
        }
            ],
        },
      //form
      isLoading:false
    }
  },
  methods: {
    addQuestion: function () {
        
        this.form.parent.push({
            question_en: '',
            question_ar: '',
            type: 'select',
            options: [{option_en: '',option_ar: '' }],
        });
        
    },

    removeQuestion(index){
        this.form.parent.splice(index, 1)
    },
    addOption: function (type,indexp) { 
        this.form.parent[indexp].options.push({option_en: '',option_ar: '' });
    },
    removeOption: function (index ,indexs) {
        if(this.form.parent[index].options.length > 1 ){
            this.form.parent[index].options.splice(indexs, 1)
        }
    },
    checkQuestionType(event,index){

        console.log(this.form.parent[index])
        if( event == 'select' || event == 'multi select' ){
            this.form.parent[index].options = 
            
                [
                    {
                        "option_en": "",
                        "option_ar": "",
                    }
                ]
            
        }
        else if( event == 'essay' ){
            this.form.parent[index].options = []
            
        }    
    },
    submitForm: function () {

        this.$refs.simpleRules.validate().then(success => {
        if (success) {
           
           this.isLoading = true

           var formData = new FormData();

           formData.append(`title_en`, this.title_en )
           formData.append(`title_ar`, this.title_ar )
           formData.append(`status`, this.status )

           let consultantInfoId = JSON.parse(localStorage.getItem('userData')).consultation_info.id
           if(consultantInfoId){
            formData.append(`model_id`, JSON.parse(localStorage.getItem('userData')).consultation_info.id )
           }
           
           const questionsData = this.form.parent
           console.log('questionsData ' , questionsData)
          
           for( let i=0 ; i < questionsData.length ; i++ ){
                formData.append(`questions[${i}][question_en]`, questionsData[i].question_en )
                formData.append(`questions[${i}][question_ar]`, questionsData[i].question_ar )
                formData.append(`questions[${i}][type]`, questionsData[i].type )

                for( let a=0 ; a < questionsData[i].options.length ; a ++  ){
                  formData.append(`questions[${i}][options][${a}][option_en]`, questionsData[i].options[a].option_en )
                  formData.append(`questions[${i}][options][${a}][option_ar]`, questionsData[i].options[a].option_ar ) 
                }
            }

        axios
          .post(`consultants/questionnaires`, formData)
          .then(response => {
              console.log('consultants/questionnaires success' , response)
              
              this.isLoading = false
              this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Added Successfully`,
                      icon: 'CoffeeIcon',
                      variant: 'success',
                    },
              })
              router.replace('/apps/consultation/questionnaire/list')
          } )
          .catch(error => {
            console.log('consultants/questionnaires error' , error)
            this.isLoading = false

            

              
          })

      } 
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
</style>
