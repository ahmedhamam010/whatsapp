<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="View Consultant Questionnaire">

                <b-tabs>
                    <b-tab active>
                        <template #title>
                        <feather-icon icon="InfoIcon" />
                        <span>Information</span>
                    </template>

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
                            {{ title_en }}
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
                            Status
                            </b-col>  

                            <b-col
                            cols="6"
                            md="6"
                            >
                            {{ status ? 'Published' : 'Drafted' }}
                            </b-col>

                        </b-row>
                        </b-list-group-item>

                        


                    </b-list-group>

                    <template v-if="form.parent.length > 0">

                    
                        <b-col cols="12" class="mb-1 mt-2">
                            <hr>
                        </b-col>

                        <h2 class="mb-1 mt-2">Questions</h2>

                        <!-- Row Loop -->
                        <b-row
                        v-for="(parent, index) in form.parent"
                        :key="index"
                        ref="row"
                        >

                        

                        <!-- Item Name -->
                        <b-col md="12">
                            <b-form-group
                            :label="'Question ' + (index + 1) + ' EN'"
                            label-for="item-name"
                            >
                            <b-form-textarea
                                id="item-name"
                                type="text"
                                v-model="parent.question_en"
                                disabled
                                
                            />
                            </b-form-group>
                        </b-col>

                        <!-- Item Name AR-->
                        <b-col md="12">
                            <b-form-group
                            :label="'Question ' + (index + 1) + ' AR'"
                            label-for="item-name-ar"
                            >
                            <b-form-textarea
                                id="item-name-ar"
                                type="text"
                                placeholder="Type Your Question"
                                v-model="parent.question_ar"
                                disabled
                                
                            />
                            </b-form-group>
                        </b-col>

                    

                        <!--type field-->
                        <b-col md="12">
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

                        

                        
                        
                            
                        <b-row v-if="parent != undefined " v-for="(option, indexs) in parent.options"  class="form-repeater align-items-center" :key="indexs">

                            
                            
                            <b-col md="6" >
                                <b-form-group
                                :label="'Option ' + (indexs + 1) + ' EN *'"
                                label-for="option-name"
                                >
                                
                                <b-form-textarea
                                    :id="'option' + indexs + indexs"
                                    type="text"
                                    v-model="option.option_en"
                                    disabled 
                                />
                                
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group
                                :label="'Option ' + (indexs + 1) + ' AR *'"
                                label-for="option-name-ar"
                                >
                                
                                <b-form-textarea
                                    :id="'option' + indexs + indexs + ' AR'"
                                    type="text"
                                    v-model="option.option_ar"
                                    disabled 
                                />
                                
                                </b-form-group>
                            </b-col>
            
                        </b-row>

                        

                        
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

                    </template>


                    </b-tab>
                

                <b-tab @click.once="fetechEnrolledUsers" id="enrolledUserTab">
                    <template #title>
                    <feather-icon icon="UsersIcon" />
                    <span>ٌRelated Users</span>
                    </template>

                    <h3 v-if="noRecords" class="mt-3 mb-3 text-center" >{{noRecords}}</h3>

                    <!--table-->
                    <b-table 
                    responsive
                    :items="items"
                    show-empty
                    
                    :fields="tableFields" 
                    >
                    <template #cell(avatar)="data">
                        <b-avatar
                        class="mr-1"
                        :src="data.item.avatar"
                        />
                    </template>

                    

                    </b-table>
                    <!--/table-->
                </b-tab> 

                </b-tabs>
          

                
               
            
            
           

            
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard, BListGroup, BListGroupItem, BAvatar, BFormTextarea,BTab,BTabs,BTable
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
    BListGroup, BListGroupItem, BAvatar,BFormTextarea,BTab,BTabs,BTable
  },
  directives: {
    Ripple,
  },
  
  data() {
    return { 
    id:router.currentRoute.params.id,  
    title_en : '',
    title_ar:'',
    status:null,
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
            parent: [],
        },
    //form
    isLoading:false,
    items: [],
    tableFields:[
      { key: 'id' },
      { key: 'name' },
      { key: 'avatar' },
      { key: 'email' },
      { key: 'phone' },
     ],
     noRecords:null,
   
    }
  },
  mounted(){
    this.fetchRecord()
  },
  
  methods: {
    
    fetchRecord(){
      //fetch survey record
      this.isLoading = true
      axios
      .get(`consultants/questionnaires/${this.id}`)
      .then(response => {
        this.isLoading = false
        console.log("fetch questionnaire ",response)
        
        this.title_en = response.data.data.title_en
        this.title_ar = response.data.data.title_ar
        this.status = response.data.data.status
        for( let q=0 ; q< response.data.data.questionnaire_questions.length; q++  ){
            this.form.parent.push( 
              {
                'question_en': response.data.data.questionnaire_questions[q].question_en ,
                'question_ar': response.data.data.questionnaire_questions[q].question_ar ,
                'type': response.data.data.questionnaire_questions[q].type ,
                'options':response.data.data.questionnaire_questions[q].options
                
              })
        }
        
      
      })
      .catch(error => {
        this.isLoading = false
        console.log("eror fetch questionnaire ",error)
      })

    },
    fetechEnrolledUsers(){
      this.isLoading = true
      var url = `consultants/questionnaires/${this.id}/users`
      axios
      .get(url)
      .then(response => {
         console.log('consultants/questionnaires:' , response.data.data )
         let data = response.data.data;
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].id ,
               name : data[i].username ,
               avatar : data[i].avatar ,
               email: data[i].email,
               phone: data[i].phone,
               ranking: data[i].rank ? data[i].rank : '' ,
               

             })
         }
         this.isLoading = false
        //  this.noRecords = this.items.length > 0 ? null :  'No Records Found Till Now'
      } )
      .catch(error => {

              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })
                this.isLoading = false

             })
     
    },

  },
}
</script>
