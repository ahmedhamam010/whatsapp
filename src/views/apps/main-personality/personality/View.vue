<template>
  <b-row>
    <b-col md="12">
      <b-card>
        <b-tabs>
            <b-tab active>
                <template #title>
                <feather-icon icon="FileTextIcon" />
                <span>Test Details</span>
                </template>

                <!---->
                <b-row>
                    <b-col
                        cols="12"
                        xl="12"
                    >
                    <b-list-group class="mt-2">

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Name EN
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{name}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Name AR
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{name_ar}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Is Free
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{free}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Category En
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{category}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Category Ar
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{category_ar}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Age Range
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{age}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Price
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{price}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                status
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{status}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Time Limit
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{time_limit}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Questions Number
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{questions_number}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Short Description EN
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{short_description}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Short Description AR
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{short_description_ar}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Long Description EN
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{long_description}}
                                </b-col>

                            </b-row>
                        </b-list-group-item>

                        <b-list-group-item>
                            <b-row>
                                <b-col
                                cols="6"
                                md="6"
                                >
                                Long Description AR
                                </b-col>  

                                <b-col
                                cols="6"
                                md="6"
                                >
                                {{long_description_ar}}
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
                    {{name_seo_en}}
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
                    {{name_seo_ar}}
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

                        
                    </b-col>
                </b-row>
                <!---->
            </b-tab>
            
            <b-tab>
                <template #title>
                <feather-icon icon="FileIcon" />
                <span>Questions</span>
                </template>
                <br>

                <!--form-->
                <validation-observer ref="simpleRules">  
                <b-form
                    ref="form"
                    class="repeater-form"
                    @submit.prevent="submitForm()"
                    
                >
                    <b-row>
                        <!-- Item Question EN -->
                        <b-col md="12">
                            <b-form-group
                            label="Question EN"
                            label-for="item-name"
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="Question"
                            rules="required"
                            mode="passive"
                            >
                            <b-form-input
                                id="item-name"
                                type="text"
                                
                                v-model="questionObj.question"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Item Question AR -->
                        <b-col md="12">
                            <b-form-group
                            label="Question AR"
                            label-for="item-name-ar"
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="Question"
                            >
                            <b-form-input
                                id="item-name-ar"
                                type="text"
                                
                                v-model="questionObj.question_ar"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!--type field-->
                        <b-col md="4">
                            <b-form-group
                                label="Type"
                                label-for="Type"
                                
                                >
                                <validation-provider
                                    #default="{ errors }"
                                    name="Type"
                                    rules="required"
                                     mode="passive"
                                >
                                <v-select
                                    v-model="questionObj.type"
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :options="typeOptions"
                                    :reduce="val => val.value"
                                    :clearable="false"
                                    input-id="Type"
                                    :state="errors.length > 0 ? false:null"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                                </validation-provider>
                                
                            </b-form-group>
                        </b-col>

                        <!--Sub Cat-->
                        <b-col md="4">
                            <b-form-group
                                label="Sub Category"
                                label-for="sub_category"
                                
                                >
                                <validation-provider
                                #default="{ errors }"
                                name="Sub Category"
                                rules="required"
                                mode="passive"
                                >
                                <v-select
                                    v-model="questionObj.subCategory"
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :options="subCategoryOptions"
                                    :reduce="val => val.value"
                                    :clearable="false"
                                    input-id="sub_category" 
                                    @input="subCategoryChange($event)"
                                    :state="errors.length > 0 ? false:null"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                                 </validation-provider>
                                
                                
                            </b-form-group>
                        </b-col>

                        <!--Sub Sub Cat-->
                        <b-col md="4">
                            <b-form-group
                                label="Sub Sub Category"
                                label-for="sub_sub_category"
                                
                                >
                                 <validation-provider
                                    #default="{ errors }"
                                    name="Sub Sub Category"
                                    rules="required"
                                    mode="passive"
                                 >
                                <v-select
                                    v-model="questionObj.subSubCategory"
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :options="subSubCategoryOptions"
                                    :reduce="val => val.value"
                                    :clearable="false"
                                    input-id="sub_category" 
                                    :state="errors.length > 0 ? false:null"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                                 </validation-provider>
                                
                            </b-form-group>
                        </b-col>

                        <!--answers-->
                        <b-col md="12">
                            <b-list-group>
                                <label>Answers</label>
                                <b-list-group-item  v-for="(answer, index) in questionObj.answers"  class="form-repeater" :key="index">
                                    <b-row> 
                                        <b-col md="6">
                                            <b-form-group
                                            :label="'Answer ' + (index + 1) + ' EN'"
                                            label-for="answer-name"
                                            >
                                            <validation-provider
                                            #default="{ errors }"
                                            :name="'Answer' + (index + 1)"
                                            rules="required"
                                            mode="passive"
                                            >
                                            <b-form-input
                                                :id="'answer' + index"
                                                type="text"
                                                
                                                v-model="answer.answer"
                                                :state="errors.length > 0 ? false:null"
                                                
                                            />
                                            <small class="text-danger">{{ errors[0] }}</small>
                                            </validation-provider>
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group
                                            :label="'Answer' + (index + 1) + ' AR'"
                                            label-for="answer-name-ar"
                                            >
                                            <validation-provider
                                            #default="{ errors }"
                                            :name="'Answer' + (index + 1) + ' AR'"
                                            rules="required"
                                            mode="passive"
                                            >
                                            <b-form-input
                                                :id="'answer' + index + ' AR'"
                                                type="text"
                                                
                                                v-model="answer.answer_ar"
                                                :state="errors.length > 0 ? false:null"
                                                
                                            />
                                            <small class="text-danger">{{ errors[0] }}</small>
                                            </validation-provider>
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="2">
                                            <b-form-group
                                            :label="'Grade' + (index + 1)"
                                            label-for="grade"
                                            >
                                            <validation-provider
                                            #default="{ errors }"
                                            :name="'Grade' + (index + 1)"
                                            rules="required"
                                            mode="passive"
                                            >
                                            <b-form-input
                                                :id="'grade' + index"
                                                type="text"
                                                v-model="answer.user_gains"
                                                :state="errors.length > 0 ? false:null"
                                                
                                            />
                                            <small class="text-danger">{{ errors[0] }}</small>
                                            </validation-provider>
                                            </b-form-group>
                                        </b-col>  

                                        <b-col md="3">
                                            <b-button
                                            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                                            variant="outline-danger"
                                            class="mt-0 mt-md-2"
                                            @click="removeAnswer(index)"
                                            >
                                            <feather-icon
                                                icon="Trash2Icon"
                                                class="mr-25"
                                            />
                                            <span>Delete Answer</span>
                                            </b-button>
                                        </b-col>                  
                                    </b-row>
                                </b-list-group-item>
                                <b-row>
                                    <b-col
                                        lg="2"
                                        md="3"
                                        class="mb-2"
                                    >
                                        <b-button
                                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                                        variant="outline-success"
                                        class="mt-0 mt-md-2"
                                        @click="addAnswer()"
                                        
                                        >
                                        <feather-icon
                                            icon="PlusSquareIcon"
                                            class="mr-25"
                                        />
                                        <span>Add Answer</span>
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-list-group>
                        </b-col>
                        <!--answers-->

                         

                        
                    </b-row>

                  

                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    type="submit"
                    class="mb-3"
                    >
                    
                    <span>Submit</span>
                    </b-button>
                </b-form>
                </validation-observer>
                <!--form-->

                <h3>Questions List - {{ questions_number }} questions</h3>
                <b-row>
                <b-col md="9">    
                <draggable
                    v-model="questions"
                    class="list-group list-group-flush cursor-move"
                    tag="ul"
                    :move="checkMove"
                    @end="reorderQuestions"
                    >
                    <transition-group
                        type="transition"
                        name="flip-list"
                    >
                        <b-list-group-item
                        v-for="q in questions"
                        :key="q.id"
                        tag="li"
                        >
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <span class="font-weight-bold">Order:</span> {{q.order}} <br >
                                    <span class="font-weight-bold">Question EN:</span> {{ q.question }} <br >
                                    <span class="font-weight-bold">Question An:</span> {{ q.question_ar }} <br > 
                                    <span class="font-weight-bold">Sub Category:</span> {{ q.sub_category_name ? q.sub_category_name : '' }} <br>
                                    <span class="font-weight-bold">Sub Sub Category:</span> {{ q.sub_sub_category_name ? q.sub_sub_category_name : '' }} <br>
                                </div>

                                <div>
                                    <b-dropdown
                                    variant="link"
                                    no-caret
                                    :right="$store.state.appConfig.isRTL"
                                    >

                                        <template #button-content>
                                            <feather-icon
                                            icon="MoreVerticalIcon"
                                            size="16"
                                            class="align-middle text-body"
                                            />
                                        </template>

                                        <b-dropdown-item :to="{ name: 'apps-personality-test-question-view', params: { id: q.id } }">
                                            <feather-icon icon="FileTextIcon" />
                                            <span class="align-middle ml-50">Details</span>
                                        </b-dropdown-item>
                                        
                                        <b-dropdown-item @click="updateQuestion(q.id)">
                                            <feather-icon icon="EditIcon" />
                                            <span class="align-middle ml-50">Edit</span>
                                        </b-dropdown-item>

                                        <b-dropdown-item @click="confirmDeleteMsg(q.id)">
                                            <feather-icon icon="TrashIcon" />
                                            <span class="align-middle ml-50">Delete</span>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                        </b-list-group-item>
                    </transition-group>
                </draggable>
                </b-col>

                <b-col md="3">
                <h4 v-for="qu in questions" :key="qu.id">
                    { 
                       <br>  question: {{ qu.question }} <br> 
                             id: {{ qu.id }} <br>
                            position : {{ qu.order }} <br>  
                    }
                    <br>
                </h4>
                </b-col>  
                </b-row>
            </b-tab>

            <b-tab @click.once="getRelatedUsers()">
                <template #title>
                <feather-icon icon="UserIcon" />
                <span>Related Users</span>
                </template>

                <!--users Table-->
                <b-table 
                responsive="sm"
                :busy="isBusy"
                :items="items"
                class="mt-2"
                show-empty
                :empty-text="loading_msg"
                :fields="fields"
                >  

                 <template #cell(avatar)="data">
                    <b-media vertical-align="center">
                    <template #aside>
                        <b-avatar
                        size="32"
                        :src="data.item.avatar"
                        />
                    </template>
                    </b-media>
                </template>

                <!-- <template #cell(action)="data">
                    <b-button
                   
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    variant="outline-secondary"
                    :to="{ name: 'apps-view-user-test-report', params: { id: data.item.id } }"
                    >
                    View Report
                    </b-button>
                </template> -->

                </b-table>
                <!--user Table-->
            </b-tab>
        
        </b-tabs>
      </b-card>
    </b-col>

    <template v-if="isLoading">
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
    
  </b-row>
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar,BSpinner,BTable,BPagination,BMedia,BForm, BFormInput} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import draggable from 'vuedraggable'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTab,
    BTabs,
    BCardText,
    BCardTitle,
    BButton,
    AppCollapse,
    AppCollapseItem,
    BFormRadioGroup,
    BFormRadio,
    BFormGroup,
    BListGroup,
    BListGroupItem,
    BDropdown,
    BDropdownItem,
    BAvatar,BSpinner,BTable,BPagination,BMedia,
    draggable,
    BForm, BFormInput,
    ValidationProvider,
    ValidationObserver,
    vSelect,
  },
  directives: {
    Ripple,
  },
  data () {
    return{
    formStatus : 'add',    
    id: router.currentRoute.params.id,
    question_id:null,
    isLoading:true,
    name: '',
    name_ar: '',
    age: '',
    free: '',
    category:'',
    category_ar:'',
    price: '',
    status: '',
    time_limit:'',
    short_description: '',
    short_description_ar: '',
    long_description: '',
    long_description_ar: '',
    personality_category_id: null,
    typeOptions : [
        { label: 'Multi', value: 'multi' },
        { label: 'Siingle', value: 'single' },
    ],
    questions: [],
    questionObj:{
        question : '',
        question_en : '',
        question_ar : '',
        type: '',
        subCategory:'',
        personality_test_id:router.currentRoute.params.id,
        subSubCategory:'',
        answers:[
            {
                answer: '',
                answer_en: '',
                answer_ar: '',
                user_gains: '',
                personality_test_id: router.currentRoute.params.id,
            },
        ]
    },
    pureCategoryOptions:[],
    subCategoryOptions:[],
    subSubCategoryOptions:[],
    headersObj  : { 
        headers: 
        { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Methods': 'POST,post',
        }  
     },
    isBusy:false, 
    fields:[],
    items:[],
    name_seo_en:'',
     name_seo_ar:'',
     description_seo_en:'',
     description_seo_ar:'',
     image_seo:'',
     loading_msg:'',
     questions_number:null,
     idSelectedOrder:null,
     orderedList:[],
    }
    
    
  },
  mounted() {
   this.fetchRecord();
   this.getQuestions();
  },
  methods :{
    fetchRecord: function(){
        //fetch categories
        var url = `personalityTest/${this.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            console.log('fetch test record : ' , response.data.data)
            let data = response.data.data
            this.name = data.name
            this.name_ar = data.name_ar
            this.free = data.free ? 'No' : 'Yes'
            this.price = data.price ? data.price : '0' 
            this.long_description = data.long_description ? data.long_description : '-'
            this.short_description = data.short_description ? data.short_description : '-' 
            this.time_limit = data.time_limit
            this.category = data.personality_category.title
            this.personality_category_id = data.personality_category_id
            this.age = '+'+data.age_above  
            this.status = data.status ? 'Published' : 'Drafted'
            this.long_description_ar = data.long_description_ar ? data.long_description_ar : '-'
            this.short_description_ar = data.short_description_ar ? data.short_description_ar : '-'
            this.category_ar = data.personality_category.title_ar

            this.name_seo_en = data.name_seo_en
            this.name_seo_ar = data.name_seo_ar
            this.description_seo_en = data.description_seo_en
            this.description_seo_ar = data.description_seo_ar
            this.image_seo = data.image_seo
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
        .finally(() => {
            this.fetchAllCategories();
        });
    },
    getQuestions(){
        this.isLoading = true
        var url = `personalityTestQuestions?personality_test_id=${this.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            this.questions = [] 
            console.log('fetch test Questions : ' , response.data.data)
            let questions = response.data.data
            this.questions_number = questions.length
            for( let q=0 ; q < questions.length ; q++ ){
                this.questions.push(
                    {
                        question : questions[q].question,
                        question_ar : questions[q].question_ar,
                        type : questions[q].type,
                        id : questions[q].id,
                        order : questions[q].order,
                        sub_category_name : questions[q].sub_category_name,
                        sub_sub_category_name : questions[q].sub_sub_category_name,
                    }
                ) 
            }
        })
        .catch(error => {
            this.isLoading = false
            console.log( 'error fetch test Questions', error)
        })
    },
    deleteItem(id=0){
            
      axios.delete(`personalityTestQuestions/${id}`, 
        {
          headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,},
        })
        .then(response => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Deleted Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
            text: '',
          },
        })  
        this.getQuestions()
        console.log( 'delete axios response:' , response )
        
        })
        .catch(error => {
        console.log( 'delete axios error:' , error )
        });
    },

    confirmDeleteMsg(id) {
      this.deleteConfirmed = ''
      this.$bvModal
      .msgBoxConfirm('Please confirm that you want to delete this record.', {
        title: 'Please Confirm',
        size: 'sm',
        okVariant: 'primary',
        okTitle: 'Yes',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true,
      })
      .then(value => {
        this.deleteConfirmed = value
        if( this.deleteConfirmed ){ this.deleteItem(id) }
      })
    },
    fetchAllCategories(){
        //fetch categories
        var url = `personalityCategories?treeList=1`
        axios
        .get(url)
        .then(response => {
            console.log('personalityCategories : ' , response.data.data)
            let personalityCategories = response.data.data
            this.pureCategoryOptions = personalityCategories
            console.log('this.pureCategoryOptions : ' ,this.pureCategoryOptions)
            this.getRelatedSubCategories()
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    getRelatedSubCategories(){
      let subCategoryOptions = this.pureCategoryOptions.find(x => x.id == this.personality_category_id);
      console.log('subCategoryOptions.nested_children',subCategoryOptions.nested_children);
      let subs = subCategoryOptions.nested_children
      for( let s=0 ; s< subs.length; s++  ){
          
            this.subCategoryOptions.push( {label: subs[s].title  , value: subs[s].id })
      }
      console.log('this.subCategoryOptions', this.subCategoryOptions);

    },
    subCategoryChange(id){
      let subCategoryOptions = this.pureCategoryOptions.find(x => x.id == this.personality_category_id).nested_children.find(s => s.id == id);
      let children = subCategoryOptions.children
      this.subSubCategoryOptions = []
      for( let s=0 ; s< children.length; s++  ){
          this.subSubCategoryOptions.push( {label: children[s].title  , value: children[s].id })
      }
    },
    addAnswer: function () {        
        this.questionObj.answers.push({
          answer: '',
          answer_en: '',
          answer_ar: '',
          user_gains : '', 
          personality_test_id:router.currentRoute.params.id
          });
    },
    removeAnswer: function (index) {
        if( this.questionObj.answers.length > 1 ){
            this.questionObj.answers.splice(index, 1)
        }
    },
    submitForm: function () {
        this.isLoading = true
        this.questionObj.question_en = this.questionObj.question ;
         this.$refs.simpleRules.validate().then(success => {
        if (success) {
            this.questionObj['sub_category_id'] = this.questionObj['subSubCategory']
            delete this.questionObj.subCategory;
            delete this.questionObj.subSubCategory;

            
            
            for( let a=0 ; a < this.questionObj.answers.length ; a++ ){
                this.questionObj.answers[a].answer_en = this.questionObj.answers[a].answer 
            }

            
            console.log('this.questionObj' , this.questionObj);
            if( this.formStatus == 'add' ){
            delete this.questionObj.old_answers_ids
            console.log('add this.questionObj' , this.questionObj)
            axios
                .post(`personalityTestQuestions`, this.questionObj, this.headersObj)
                .then(response => {
                    this.questionObj = {
                        question : '',
                        question_en : '',
                        question_ar : '',
                        type: '',
                        subCategory:'',
                        personality_test_id:router.currentRoute.params.id,
                        subSubCategory:'',
                        answers:[
                            {
                                answer: '',
                                answer_en: '',
                                answer_ar: '',
                                user_gains: '',
                                personality_test_id: router.currentRoute.params.id,
                            },
                        ]
                    }
                    this.getQuestions();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add question');
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

            }else{
                let old_answers_ids = []
                let answers = this.questionObj.answers
                for( let a=0 ; a < answers.length ; a++ ){
                    if(answers[a].id){
                        old_answers_ids.push(answers[a].id)
                    }
                }
                this.questionObj.old_answers_ids = old_answers_ids
                axios
                .put(`personalityTestQuestions/${this.question_id}`, this.questionObj, this.headersObj)
                .then(response => {
                    this.formStatus = 'add'
                    this.questionObj = {
                        question : '',
                        question_en : '',
                        question_ar : '',
                        type: '',
                        subCategory:'',
                        personality_test_id:router.currentRoute.params.id,
                        subSubCategory:'',
                        answers:[
                            {
                                answer: '',
                                answer_en: '',
                                answer_ar: '',
                                user_gains: '',
                                personality_test_id: router.currentRoute.params.id,
                            },
                        ]
                    }
                    this.questionObj.answers = [
                        {
                            answer: '',
                            answer_en: '',
                            answer_ar: '',
                            user_gains: '',
                            personality_test_id: router.currentRoute.params.id,
                        },
                    ]
                    this.getQuestions();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add question');
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
        }else{
            this.isLoading = false
        }
      })
        
        
    },
    updateQuestion(id){
        this.isLoading = true
        this.question_id = id
        //fetch record
        var url = `personalityTestQuestions/${id}`
        axios
        .get(url)
        .then(response => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.isLoading = false
            this.formStatus = 'edit'
            console.log('fetch question record : ' , response.data.data)
            let data = response.data.data
            this.questionObj.question = data.question
            this.questionObj.question_en = data.question
            this.questionObj.question_ar = data.question_ar
            this.questionObj.type = data.type
            this.question_id = data.id
            // this.subSubCategoryOptions = [
            //     {label: `${data.personality_category.title}`, value :data.personality_category.id}
            // ]
            this.questionObj.subCategory = data.personality_category.parent_id
            this.questionObj.subSubCategory = data.sub_category_id
            this.subCategoryChange(this.questionObj.subCategory);
            // this.category = data.personality_category.title
            this.questionObj.answers = data.answers
            delete this.questionObj.answers.created_at
            delete this.questionObj.answers.updated_at
            for( let a=0 ; a < this.questionObj.answers.length ; a++ ){
                delete this.questionObj.answers[a].created_at
                delete this.questionObj.answers[a].updated_at
            }
            
            console.log('after delete this.questionObj' , this.questionObj)
            
            
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    getRelatedUsers(){
        console.log('loading')
      this.isLoading = true
      axios
      .get(`personalityTestUsers/${this.id}`, this.headersObj)
      .then(response => {
         this.isLoading = false
         this.fields = [
            { key: 'id', label : 'id' },
            { key:'avatar' , label:'avatar'},
            { key: 'username',label :'name' },
            { key: 'email',label :'email' },
            { key: 'phone', label :'phone'},
            // { key: 'action'},
            
            
         ]
         console.log('user childern:' , response.data )
         let data = response.data.data;
         this.rows= response.data.total
         
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].id ,
               username : data[i].username ,
               email : data[i].email ,
               phone : data[i].phone ,
               avatar : data[i].avatar
             })
         }
         this.isBusy = false
         this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
      } )
      .catch(error => {
              this.isLoading = false
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
     
    },
   checkMove: function(evt){
    this.idSelectedOrder = evt.draggedContext.element.id
    


    },
    reorderQuestions(){
        console.log('this.orderedList ,' , this.orderedList)

        var order = []
        for( let i=0 ; i < this.questions.length ; i++  ){
            let id = this.questions[i].id;
            // let position = this.questions[i].order
            let position = i + 1
            
            // if( id == evt.relatedContext.element.id ){
            //     position = evt.draggedContext.element.order
            // }

            // if( id == evt.draggedContext.element.id ){
            //     position = evt.relatedContext.element.order
            // }
            
            order.push( { id: id , position : position } )
            
        }
        this.orderedList = order
        
        this.isLoading = true
        var formData = { order : this.orderedList }
         axios
                .post(`personalityTestQuestions/${this.idSelectedOrder}?changeOrder=1&_method=put`, formData, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                            title: `Updated Successfully`,
                            icon: 'CoffeeIcon',
                            variant: 'success',
                        },
                    })
                    this.getQuestions()
                } )
                .catch(error => {
                this.isLoading = false
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
    },
    getCode(){
        //fetch categories
        var url = `personalityCategories/max/code`
        axios
        .get(url)
        .then(response => {
            console.log('personalityCategories/max/code : ' , response.data.data)
        })
        .catch(error => {
            console.log( 'error personalityCategories/max/code', error)
        })
    },
    
    
    
  },
 
 
  
 
}
</script>


<style scoped>
.tabs .nav-item,
.tabs .nav-item .feather{
  font-size: 1.1rem;
}
.list-group-item {
  transition: all 1s
}
</style>