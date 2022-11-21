<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Consultant">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="submitForm()"
                  enctype="multipart/form-data"
              >

              <b-row>

                <!-- users list -->
                <b-col md="6">
                    <b-form-group
                    label="Select User *"
                    label-for="user"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="user"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="user_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="userOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                        

                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.user_id">{{ formErrors.user_id }}</div>
                    </b-form-group>
                </b-col>

                <!-- type -->
                <b-col md="6" class="type-options">
                    <b-form-group
                    label="Type"
                    label-for="user"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="type"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="type"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="typeOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                        @input="fetchFields($event,'change')"
                        

                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.type">{{ formErrors.type }}</div>
                    </b-form-group>
                </b-col>

                <!-- field -->
                    <b-col md="6">
                      <b-form-group
                        label="Fields *"
                        label-for="fields"
                        
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="fields"
                          rules="required"
                        >
                        <v-select
                          v-model="fields"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="fieldOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="language"
                          @input="fetchSpecialties($event,'change')"
                          
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                        
                      
                    </b-col>

                

                <!-- Speciality -->
                <b-col md="6">
                    <b-form-group
                    label="Speciality *"
                    label-for="speciality"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="speciality"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="specialty"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="specialityOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                        :close-on-select="false"
                        multiple
                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.specialty">{{ formErrors.specialty }}</div>
                    </b-form-group>
                </b-col>

                <!-- Job Title -->
                <b-col md="6">
                    <b-form-group
                    label="Job Title *"
                    label-for="job-title"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="job-title"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="job_title_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="titleOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.job_title_id">{{ formErrors.job_title_id }}</div>
                    </b-form-group>
                </b-col>

                <!-- Age Stage -->
                <b-col md="6">
                    <b-form-group
                    label="Age Stage *"
                    label-for="age-stage"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="age-stage"
                    rules="required"
                    
                    >
                    <v-select
                        v-model="type_age"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="typeAgeOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.type_age">{{ formErrors.type_age }}</div>
                    </b-form-group>
                </b-col>

                <!-- Job Position En-->
                <!-- <b-col md="6">
                    <b-form-group
                    label="Job Postion En"
                    label-for="Job Position"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="Job Position"
                      rules="required"
                    >
                      <b-form-input
                          id="Job Position"
                          type="text"
                          v-model="job_position"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.job_position">{{ formErrors.job_position }}</div>
                    </b-form-group>
                    
                </b-col> -->

                <!-- Job Position En-->
                <!-- <b-col md="6">
                    <b-form-group
                    label="Job Postion Ar"
                    label-for="Job_Position_Ar"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="Job_Position_Ar"
                    >
                      <b-form-input
                          id="Job_Position_ar"
                          type="text"
                          v-model="job_position_ar"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    </b-form-group>
                    
                </b-col> -->
                    <b-col md="12">
                    <b-row>
                      <b-col md="12" class="mt-2 mb-1" v-if="cv_path.length > 0">
                        <div class="d-flex">
                          <div v-for="cv,index in cv_path" :key="index">
                            <b-button
                              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                              variant="outline-primary"
                              @click="downloadTask(cv)"
                            >
                              <feather-icon
                                icon="DownloadCloudIcon"
                                class="mr-50"
                              />
                              <span class="align-middle">Attachment {{index+1}}</span>
                            </b-button>
                            &nbsp;&nbsp;  
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                    </b-col>

                    <!-- File -->
                    <b-col md="12">
                      <b-form-group
                        label="CV *"
                        label-for="cv"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="cv"
                          rules="ext:pdf"
                          
                        >
                        <b-form-file
                          id="uploadfiles"
                          ref="uploadfiles"
                          v-model="cv"
                          :state="errors.length > 0 ? false:null"
                          accept=".pdf, .png, .jpg"
                          multiple
                          @change="cv_path = []"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.cv">{{ formErrors.cv }}</div>
                      </b-form-group>
                    </b-col>

                <!-- period -->
                <b-col md="4">
                    <b-form-group
                    label="Period"
                    label-for="period"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="period"
                      rules="required"  
                    >
                       <v-select
                        v-model="period"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="periodOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="active"
                        

                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.price">{{ formErrors.period }}</div>
                    </b-form-group>
                    
                </b-col>

                  <!-- price -->
                    <b-col md="6">
                        <b-form-group
                        label="Price Per Period"
                        label-for="price"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="price"
                          rules="decimal:3"
                        >
                          <b-form-input
                              id="price"
                              type="text"
                              v-model="price_per_period"
                              :state="errors.length > 0 ? false:null"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.price">{{ formErrors.price_per_period }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- language -->
                    <b-col md="4">
                      <b-form-group
                        label="language *"
                        label-for="language"
                        
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Language"
                          rules="required"
                        >
                        <v-select
                          v-model="languages"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="languageOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          :close-on-select="false"
                          input-id="language"
                          multiple
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.languages">{{ formErrors.languages }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!--commission percentage-->
                    <b-col md="6">
                        <b-form-group
                        label="Commission Percentage"
                        label-for="price"
                        >
                        
                          <b-form-input
                              id="price"
                              type="number"
                              v-model="commission"
                              
                          />
                        
                        </b-form-group> 
                    </b-col>

                    <!-- Account Type -->
                    <b-col md="6">
                      <b-form-group
                        label="Account Type *"
                        label-for="AccountType"
                        
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Account Type"
                        >
                        <v-select
                          v-model="accountType"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="accountTypeOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          :close-on-select="false"
                          input-id="AccountType"
                          
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                        
                      
                    </b-col>

                    
                    <!--Account-->
                    <b-col md="12" v-if="accountType">
                        <b-form-group
                        label="Account *"
                        label-for="account"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="Account Type"
                          rules="required"
                        >
                        
                          <b-form-input
                              id="account"
                              type="text"
                              v-model="account"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        
                        </b-form-group> 
                    </b-col>

                    <b-col md="12" class="d-flex checkbox-option align-items-center" style="margin-top:1rem !important">
                        <b-form-group
                    
                        >
                            <input type="checkbox" id="isFree" v-model="is_top">
                            <label for="isFree">Is Top</label> 
                        </b-form-group>   
                    </b-col>

                    


                  <!-- About EN-->
                  <b-col md="6">
                      <b-form-group
                      label="About EN*"
                      label-for="about"
                     
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="About EN"
                      rules="required|length_range:50,500"
                      
                      >
                        <b-form-textarea
                              id="about"
                              type="text"
                              v-model="about"
                              :state="errors.length > 0 ? false:null"
                              rows="8"
                              
                          />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.price">{{ formErrors.about }}</div>
                      </b-form-group>
                  </b-col>

                  <!-- About AR-->
                  <b-col md="6">
                      <b-form-group
                      label="About AR"
                      label-for="about_ar"
                      
                     
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="About AR"
                      rules="required|length_range:50,500"
                      
                      >
                        <b-form-textarea
                              id="about_ar"
                              type="text"
                              v-model="about_ar"
                              :state="errors.length > 0 ? false:null"
                              rows="8"
                              
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
                        </b-form-group>
                    </b-col>

                    <b-col md="12" class="text-center mt-2" v-if="seoPreview">
                      <b-img thumbnail fluid :src="seoPreview" style="max-width: 200px; height: auto;" />
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

                  

              </b-row>

              <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              type="submit"
              >
              
              <span>Submit</span>
              </b-button>

            </b-form>
              <!----> 
            </validation-observer>
            </div>
           

            
        </b-card>

      </b-col>
    </b-row>

    <template v-if="isLoading">
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>

   
  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BModal , VBModal, BListGroup, BListGroupItem,BFormFile,BImg
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import { BSpinner } from 'bootstrap-vue'
import { min, max , ext } from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver , extend, validate, localize } from 'vee-validate'
import en from "vee-validate/dist/locale/en.json";
import { required,decimal } from '@validations'
import getDomain from '@/helperFunctions/getDomain'
localize({
    en
});

extend("min", min);
extend("max", max);
extend("ext", ext);
extend('length_range', {
  async validate(about, { min, max }) {
        const res = await validate(about, `min:${min}|max:${max}`,)
            return res.valid;
  },
  params: ['min', 'max'],
  message: 'The {_field_} must be between {min} and {max} characters'
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
    ValidationProvider,
    ValidationObserver,
    BFormTextarea,
    BModal,
    VBModal,
    BListGroup, BListGroupItem,BFormFile, BImg
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      id : router.currentRoute.params.id,
      cv:null,
      cv_path:[],
      job_position: '',
      job_position_ar: '',
      period:null,
      about: '',
      about_ar: '',
      price_per_period:null,
      commission:null,
      account:null,
      user_id : null,
      active: '',
      type:null,
      typeOptions : [
        { label : 'Consultant' , value : 'consultant' },
        { label : 'Teacher' , value : 'teacher' },
        // { label : 'trainer' , value : 'trainer' },
        // { label : 'coach' , value : 'coach' },
        { label : 'Organization' , value : 'organization' },
      ],
     userOptions : [],
     fieldOptions: [],
     fields:[],
     languageOptions : [],
     languages:[],
     periodOptions:[
       { label : '30' , value : '30' },
       { label : '45' , value : '45' },
       { label : '60' , value : '60' },
       { label : '90' , value : '90' },
     ],
     titleOptions:[],
     job_title_id:null,
     specialty:[],
     specialityOptions:[],
     type_age:null,
     typeAgeOptions:[
       { label : 'Children' , value : '1' },
       { label : 'Adults' , value : '2' },
       { label : 'Teenagers' , value : '3' },
       { label : 'All' , value : '4' },
     ],
     headersObj  : { 
        headers: 
        { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Methods': 'POST,post',
        }
    
      },

      formErrors : {
        job_position:null,
        period:null,
        about:null,
        price_per_period:null,
        user_id:null,
        type:null,
        languages:null,
        cv:null,
        job_title_id:null,
        specialty:null,
        type_age:null,
        commission:null,
        
      },
      isLoading:false,
      title_seo_en: '',
      title_seo_ar: '',
      description_seo_en:'',
      description_seo_ar: '',
      image_seo:null,
      seoPreview:null,
      is_top:0,
      accountType:null,
      accountTypeOptions:[
        { label : 'Paypal Account' , value : 'paypal_account' },
        { label : 'Stripe Account' , value : 'stripe_account' },
        { label : 'Paymob Account' , value : 'paymob_account' }
       
      ]
    }
  },
  mounted() {

    
    
    //fetch users data
    this.isLoading = true
    axios
    .get(`users/index/user?is_consultant=0`, this.headersObj)
    .then(response => {
       console.log( 'users list' , response.data.users )
       let users = response.data.users
       for( let u =0 ; u < users.length ; u++ ){
           this.userOptions.push({ label:users[u].username , value:users[u].id  })
       }
    })
    .then(
      this.fetchLanguages()
    )
    .catch(error => {
        this.isLoading = false
        console.log( 'error fetch users list', error)
    })

    //fetch job title data
    this.isLoading = true
    axios
    .get(`job-title/index?status=1`, this.headersObj)
    .then(response => {
       console.log( 'job title list' , response.data )
       let titles = response.data.data
       for( let u =0 ; u < titles.length ; u++ ){
           this.titleOptions.push({ label:titles[u].title , value:titles[u].id  })
       }
    })
    .catch(error => {
        this.isLoading = false
        console.log( 'error fetch users list', error)
    })

    //fetch specialityO data
    this.isLoading = true
    axios
    .get(`specialty/index?status=1`, this.headersObj)
    .then(response => {
       console.log( 'specialty list' , response.data )
       let specialties = response.data.data
       for( let u =0 ; u < specialties.length ; u++ ){
           this.specialityOptions.push({ label:specialties[u].title , value:specialties[u].id  })
       }
    })
    .catch(error => {
        this.isLoading = false
        console.log( 'error fetch users list', error)
    })


    axios
          .get(`consultationInfos/requests/${this.id}`)
          .then(response => {
           
          this.isLoading = false
          console.log( `this.consultationInfos/requests/${this.id} ` , response.data.data )
          this.user_id = response.data.data.user_id
          this.userOptions.push({ label:response.data.data.user.username , value:this.user_id  })
          
          this.job_position = response.data.data.user.consultation_info.job_position
          this.job_position_ar = response.data.data.user.consultation_info.job_position_ar
          

          let specialties = response.data.data.consultation_info_specialties
          let specialties_ids= []
          if( specialties.length > 0 ){
            for( let s=0 ; s < specialties.length ; s++ ){
              specialties_ids.push( specialties[s].id )
            }
            this.specialty = specialties_ids
            console.log('this.specialty' , this.specialty)
          }

          this.about = response.data.data.about
          this.about_ar = response.data.data.about_ar
          
          this.period = response.data.data.user.consultation_info.period
          this.price_per_period = response.data.data.user.consultation_info.price_per_period
          
          let fields = response.data.data.user.consultation_info.fields
          let fields_ids = []
          if( fields.length > 0 ){
            for( let f=0 ; f < fields.length ; f++ ){
              fields_ids.push( fields[f].id )
            }
            this.fields = fields_ids
          }
          
          
          this.type = response.data.data.type
          this.fetchFields(this.type,'mounted')
          this.fetchSpecialties(this.fields[0], 'mounted')

          this.type_age = response.data.data.type_age

          this.title_seo_en = response.data.data.title_seo_en
          this.title_seo_ar = response.data.data.title_seo_ar
          this.description_seo_en = response.data.data.description_seo_en
          this.description_seo_ar = response.data.data.description_seo_ar
          this.seoPreview = response.data.data.image_seo 
          

          let languages = response.data.data.user.consultation_info.languages
          let languages_ids = []
          if( languages.length > 0 ){
            for( let l=0 ; l < languages.length ; l++ ){
              languages_ids.push( languages[l].id )
            }
            this.languages = languages_ids
          }

          this.cv_path = response.data.data.cv_path ? response.data.data.cv_path : ''
          this.job_title_id = response.data.data.job_title ? response.data.data.job_title.id : ''
          this.commission = response.data.data.user.commesion_fess
          
          var paypal_value = response.data.data.user.paypal_account
          var stripe_value = response.data.data.user.stripe_account
          var paymob_value = response.data.data.user.paymob_account ? response.data.data.user.paymob_account : null

          if( paypal_value ){
            this.account = paypal_value
            this.accountType = 'paypal_account'
          }

          if( stripe_value ){
            this.account = stripe_value
            this.accountType = 'stripe_account'
          }

          if( paymob_value ){
            this.account = paymob_value
            this.accountType = 'paymob_account'
          }

          this.is_top = response.data.data.is_top
          
            
          })
          .catch(error => {
            this.isLoading = false
            console.log(error)
          })

    
  },
  methods: {
    downloadTask(urlTask){
      window.open(urlTask); 
    },
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

    submitForm: function () {
     
         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          console.log('lang arr' , this.languages)
          //show spinner
          this.isLoading = true 
          
         

          
         var formDataInputs = new FormData();
         formDataInputs.append("_method", "put")
         formDataInputs.append("is_top", this.is_top ? '1' : '0' )
         formDataInputs.append("job_position", 'job' )
         formDataInputs.append("job_position_en", 'job' )
         formDataInputs.append("job_position_ar", 'job' )
         if( this.period ){
          formDataInputs.append("period", this.period )
         }
         formDataInputs.append("about", this.about )
         formDataInputs.append("about_en", this.about )
         formDataInputs.append("about_ar", this.about_ar )
         formDataInputs.append("price_per_period", this.price_per_period ? this.price_per_period : 0 )
         formDataInputs.append("user_id", this.user_id )
         formDataInputs.append("type", this.type )
         if( this.commission ){
          formDataInputs.append("commesion_fess", this.commission )
         }
         if( this.account ){
          formDataInputs.append(`${this.accountType}`, this.account )
         }
         for (var l = 0; l < this.languages.length; l++) {
            formDataInputs.append("languages[]", this.languages[l]);
         }
         formDataInputs.append("fields", this.fields )
         formDataInputs.append("title_seo_en", this.title_seo_en )
         formDataInputs.append("title_seo_ar", this.title_seo_ar )
         formDataInputs.append("description_seo_en", this.description_seo_en )
         formDataInputs.append("description_seo_ar", this.description_seo_ar )
         formDataInputs.append("job_title_id", this.job_title_id )
         for (var s = 0; s < this.specialty.length; s++) {
            formDataInputs.append("specialty[]", this.specialty[s]);
         }
         formDataInputs.append("type_age", this.type_age )
         var image_seo = document.querySelector('#image_seo')
         
         if( image_seo.files[0] ){
          formDataInputs.append("image_seo", image_seo.files[0] )
         }

         // Read selected files
       
          var files = this.$refs.uploadfiles.files;
          var totalfiles = this.$refs.uploadfiles.files.length;
          if( totalfiles > 0 ){
            for (var index = 0; index < totalfiles; index++) {
                formDataInputs.append("cv[]", files[index]);
            }
          }

          
         
          
        
          axios
            .post(`consultationInfos/requests/${this.id}`, formDataInputs, this.headersObj)
            .then(response => {
                router.replace('/apps/consultation/accepted/list')
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
                this.isLoading = false 
                console.log('cosultant submit error' , error)

                this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                    title: `${error.response.data.message}`,
                    icon: 'CoffeeIcon',
                    variant: 'danger',
                    },
                })

                
            })

          }
      })
        
        
    },
    fetchLanguages(){
      //fetch languages
      axios
      .get(getDomain('no') + `setting/languages`)
      .then(response => {
      this.isLoading = false
      console.log('categories : ' , response.data)
      for( let s=0 ; s< response.data.data.length; s++  ){
          this.languageOptions.push( {label: response.data.data[s].name  , value: response.data.data[s].id })
      }
      
      })
      .catch(error => {console.log( 'error fetch course', error)})
    },
    fetchFields(type , changeType){
      this.isLoading =true
      //fetch fields data
      axios
      .get(`fields/consultation/index/${type}`)
      .then(response => {
        if( changeType == 'change' ){
          this.fields = []
          this.specialty = []
        }
        this.isLoading = false
        console.log( 'field records ' , response.data )
          this.fieldOptions=[]
          let fields = response.data.data
        for( let u =0 ; u < fields.length ; u++ ){
            this.fieldOptions.push({ label:fields[u].title , value:fields[u].id  })
        }
         
      
      })
      .catch(error => {
          this.isLoading = false
          console.log( 'error fetch field record', error)
      })
    },
    fetchSpecialties(id ,changeType ){
      
      this.isLoading =true
      if( changeType == 'change' ){
          this.specialty = []
        }
      //fetch records data
      var url = `specialty/index?status=1`
      if( id != 'all'){ url += `&consultation_field_id=${id}` }
      axios
      .get(`${url}`)
      .then(response => {
        this.isLoading = false
        console.log( 'specialty records ' , response.data )
        this.specialityOptions=[]
            let fields = response.data.data
          for( let u =0 ; u < fields.length ; u++ ){
              this.specialityOptions.push({ label:fields[u].title , value:fields[u].id  })
          } 
        
        })
        .catch(error => {
            this.isLoading = false
            console.log( 'error fetch specialty record', error)
        })
    }
  },

}
</script>


<style scoped>

.checkbox-option .form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.checkbox-option .form-group label {
  position: relative;
  cursor: pointer;
}

.checkbox-option .form-group label:before {
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

.checkbox-option .form-group input:checked + label:after {
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
.type-options{
text-transform: capitalize;
}
</style>

