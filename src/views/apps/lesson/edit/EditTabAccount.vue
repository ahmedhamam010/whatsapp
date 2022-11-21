<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Lesson">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
                enctype="multipart/form-data"
            >

                <b-row>

                    <!-- Item Title -->
                    <b-col md="6">
                        <b-form-group
                        label="Title EN*"
                        label-for="Title EN"
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
                        <div class="invalid-feedback d-block" v-if="formErrors.title">{{ formErrors.title }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item Title AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Title AR *"
                        label-for="title_ar"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="title_ar"
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

                    <!--course field-->
                    <b-col md="6">
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
                                :disabled="routeName == 'apps-lessons-edit-from-course'"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.course_id">{{ formErrors.course_id }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!--section field-->
                    <b-col md="6">
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
                                input-id="Section"
                                :state="errors.length > 0 ? false:null"
                                :disabled="routeName == 'apps-lessons-edit-from-course'"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.section_id">{{ formErrors.section_id }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!-- Item date -->
                    <b-col md="4" v-if="showLiveInputs">
                        <b-form-group
                        label="Data"
                        label-for="Date"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="date"
                        >
                          <b-form-datepicker
                            id="example-datepicker"
                            v-model="date"
                            class="mb-1"
                            :use-utc="true"
                            disabled
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.date">{{ formErrors.date }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item time -->
                    <!-- <b-col md="4" v-if="showLiveInputs">
                        
                          <label for='example-input'>Time</label>
                          <b-input-group class='mb-1'>
                            <b-form-input id='example-input' v-model='time' type='text' placeholder='HH:mm:ss' disabled />
                            <b-input-group-append>
                              <b-form-timepicker v-model='time' button-only right show-seconds locale='en' aria-controls='example-input' disabled />
                            </b-input-group-append>
                             <div class="invalid-feedback d-block" v-if="formErrors.time">{{ formErrors.time }}</div>
                          </b-input-group>
                       
                    </b-col> -->

                    <b-col md="6" v-if="showLiveInputs">
                        
                          <label for='example-input'>Choose a time</label>
                          <b-form-group class='mb-1'>
                            <validation-provider
                              #default="{ errors }"
                              name="time"
                              rules="timeFormat"

                            >
                            <b-form-input 
                            id='example-input'
                            v-model='time'
                            type='text'
                            placeholder='HH:mm:ss'
                            :state="errors.length > 0 ? false:null"
                            />
                              <b-form-timepicker
                              v-model='time'
                              button-only
                              right
                              show-seconds
                              locale='en'
                              aria-controls='example-input'
                              style="position: absolute;right: 0px;top: 0px;transform: translate(-23%,50%);z-index: 9999;" />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.time">{{ formErrors.time }}</div>
                          </b-form-group>
                       
                    </b-col>

                    
                    <!-- consultation field-->
                    <b-col md="4" v-if="showLiveInputs">
                        <b-form-group
                            label="Consaltant"
                            label-for="Consaltant"
                            
                            >
                            <validation-provider
                              #default="{ errors }"
                              name="Consaltant"
                              
                            >
                            <v-select
                                v-model="consultation_info_id"
                                :options="consultantOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Course"
                                :state="errors.length > 0 ? false:null"
                                :selectable="(option) => option.price  != 0  "
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.consultation_info_id">{{ formErrors.consultation_info_id }}</div>
                            </b-form-group>
                    </b-col>

                    <!-- Item session duration -->
                    <b-col md="12" v-if="showLiveInputs">
                        <b-form-group
                        label="Session Duration"
                        label-for="session duration"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="session duration"
                          rules="required"
                        >
                          <b-form-input
                              id="session_duration"
                              type="number"
                              step="0.01"
                              v-model="session_duration"
                              :state="errors.length > 0 ? false:null"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.session_duration">{{ formErrors.session_duration }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Content Type -->
                    <b-col :md="12">
                      <b-form-group
                        label="Content Type *"
                        label-for="contentType"
                        
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Content Type"
                          rules="required"
                        >
                        <v-select
                          v-model="content_type"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="contentTypeOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="contentType"
                          @input="changeFileType($event)"
                          :disabled="showLiveInputs == 1"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.content_type">{{ formErrors.content_type }}</div>
                      </b-form-group>
                      
                      
                    </b-col>

                    <!-- File -->
                    <b-col 
                    md="12"
                    v-bind:style=" showLiveInputs ? 'display:none;' : '' "
                    >
                      <b-form-group
                        label="File"
                        label-for="file"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="File"
                          :rules="fileExtensions"
                        >
                        <b-form-file
                          id="file"
                          v-model="file"
                          :state="errors.length > 0 ? false:null"
                          @change="getVideoDuration()"
                          accept="*"
                          
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.file">{{ formErrors.file }}</div>
                      </b-form-group>
                    </b-col>
                    
                    <!-- Item description -->
                    <b-col md="4" class="d-none">
                        <b-form-group
                        label="Description *"
                        label-for="description"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="description"
                         
                        >
                          <b-form-input
                              id="description"
                              type="text"
                              v-model="description"
                              :state="errors.length > 0 ? false:null"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.description">{{ formErrors.description }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Preview -->
                    <b-col md="4" class="d-none">
                      <b-form-group
                        label="Preview *"
                        label-for="preview"
                        
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Preview"
                        >
                        <v-select
                          v-model="preview"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="previewOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="preview"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.preview">{{ formErrors.preview }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    

                    <!-- Duration -->
                    <b-col md="12" v-if="durationShown">
                        <b-form-group
                          label="Duration"
                          label-for="duration"
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Duration"
                          >
                          <b-form-input
                            id="duration"
                            v-model="duration"
                            trim
                            type="text"
                            disabled
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                          <div class="invalid-feedback d-block" v-if="formErrors.duration">{{ formErrors.duration }}</div>
                          <div class="valid-feedback d-block" v-if="showCalculateDuration">Calculating Duration .........</div>
                        </b-form-group>
                        
                      
                    </b-col>

                    <!-- Privacy -->
                    <b-col md="12">
                        <b-form-group
                          label="Privacy *"
                          label-for="privacy"
                         
                        >
                          <validation-provider
                            #default="{ errors }"
                            name="Privacy"
                            rules="required"
                          >
                          <b-form-input
                              id="privacy"
                              type="text"
                              v-model="privacy"
                              :state="errors.length > 0 ? false:null"
                              disabled
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                          <div class="invalid-feedback d-block" v-if="formErrors.privacy">{{ formErrors.privacy }}</div>
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

                    <b-col md="12" class="text-center mt-2">
                      <b-avatar
                        :src="image_seo_preview"
                        size="104px"
                        rounded
                      />
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
                          @change="previewImage"
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormFile , BCard , BFormDatepicker, BFormTimepicker ,BInputGroup,BInputGroupAppend,BFormTextarea,BAvatar
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import store from '@/store'
import { required, email } from '@validations'
import { ext } from 'vee-validate/dist/rules';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { BSpinner } from 'bootstrap-vue'
import moment from 'moment'
extend('ext', ext);
extend(
  'timeFormat',{
   getMessage: field => `The format must be HH:MM:SS`,
   validate: (value) => new Promise(resolve => {
        let regex = new RegExp("([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])");
        resolve({
            valid: value && regex.test(value)
        });
    })
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
    ValidationProvider,
    ValidationObserver,
    BFormFile,
    BSpinner,
    BFormDatepicker,BFormTimepicker,BInputGroup,BInputGroupAppend,BFormTextarea,BAvatar
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      durationShown:false,
      id : router.currentRoute.params.id,
      routeName: router.currentRoute.name,
      file:null,
      title : '',
      title_ar : '',
      course_id : null,
      section_id: null,
      description:'test',
      content_type:null,
      preview: null,
      duration:null,
      privacy:null,
      courseOptions : [],
      sectionOptions : [],
      consultantOptions : [],
      consultation_info_id:null,
      showLiveInputs:0,
      date:new Date().toISOString().slice(0,10),
      time:'',
      session_duration:'',
      previewOptions : [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ],

      privacyOptions : [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ],

      contentTypeOptions : [
        { label: 'Video', value: 'video' },
        { label: 'PDF', value: 'pdf' },
        { label: 'Record', value: 'record' },
      ],

      showCalculateDuration : false,
      
      formErrors : {
        file:null,
        title:null,
        course_id : null,
        section_id: null,
        description:null,
        content_type:null,
        preview: null,
        duration:null,
        privacy:null,
        consultation_info_id:null,
        session_duration:null,
        date:null,
        time:null,
        
      },
    
     headersObj  : { 
          headers: 
            { 
              // Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'PUT,put',
            }
          
     },
    
    title_seo_en: '',
    title_seo_ar: '',
    description_seo_en:'',
    description_seo_ar: '',
    image_seo:null,
    image_seo_preview:null,
    fileExtensions:'',
    
     
    }
  },

  mounted() {

    this.fetchCourses();
    
    //fetch lesson
    axios
    .get(`lessons/${this.id}`)
    .then(response => {
    console.log('lesson : ' , response.data)

    for( let s=0 ; s< response.data.lesson.sections.length; s++  ){
        this.sectionOptions.push( {label: response.data.lesson.sections[s].title  , value: response.data.lesson.sections[s].id })
    }

    this.title = response.data.lesson.title
    this.title_ar = response.data.lesson.title_ar
    this.course_id = response.data.lesson.course_id
    this.section_id = response.data.lesson.section_id
    this.description = response.data.lesson.description
    this.content_type = response.data.lesson.content_type
    if( this.content_type == 'video' ){
        this.fileExtensions = 'ext:mp4, mpg, mpeg, avi, wmv, mov,  rm, ram, ogg, webm'
      }else if( this.content_type == 'pdf' ){
        this.fileExtensions = 'ext:pdf'
      }else if( this.content_type == 'record' ){
        this.fileExtensions = 'ext:mp3'
      }
    this.preview = response.data.lesson.preview
    this.duration = response.data.lesson.duration
    if( this.duration == '0.00' ) { this.durationShown = false }else{ this.durationShown = true }
    this.showLiveInputs = response.data.lesson.session_duration != null ? 1 : 0 
    this.time = response.data.lesson.start_time
    this.date = response.data.lesson.start_date ? response.data.lesson.start_date.split(' ')[0] : ''
    this.consultation_info_id = response.data.lesson.consultation_info_id
    this.session_duration = response.data.lesson.session_duration

    this.title_seo_en = response.data.lesson.title_seo_en
    this.title_seo_ar = response.data.lesson.title_seo_ar
    this.description_seo_en = response.data.lesson.description_seo_en
    this.description_seo_ar = response.data.lesson.description_seo_ar
    this.image_seo_preview = response.data.lesson.image_seo
  
    
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
    .catch(error => cosole.log(error.response.data.errors))
    
    })
    .catch(error => {console.log( 'error fetch lesson', error)})

   
   

    //fetch consaltants
    var url = `consultationInfos/invitations/list?status=accepted&invited=1`
    axios
    .get(url)
    .then(response => {
    console.log('accepted consaltents : ' , response.data.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.consultantOptions.push( {
          label: response.data.data[s].price_per_period ? response.data.data[s].user.username : response.data.data[s].user.username + ' - this consultant has no session price' ,
          value: response.data.data[s].id,
          price: response.data.data[s].price_per_period ? response.data.data[s].price_per_period : 0   
        })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})
    

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
          this.courseOptions.push( {
            label: response.data.data[s].title,
            value: response.data.data[s].id,
            type: response.data.data[s].is_live
          })
      }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        document.getElementById('loading-spinner').style.display = 'none'
        })
    },
    previewImage: function(event) {
        var input = event.target;
        if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.image_seo_preview = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
        }
    },
    addForm: function () {
     
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
      
          var formData = new FormData();
        
          formData.append("_method", "put");
          if( image_seo.files[0] != null ){
           formData.append("image_seo", image_seo.files[0] )
          }
          formData.append("title",this.title )
          formData.append("title_en",this.title )
          formData.append("title_ar",this.title_ar )
          formData.append("course_id",this.course_id )
          formData.append("section_id",this.section_id )
          formData.append("description",this.description )
          formData.append("content_type",this.content_type )
          formData.append("preview",this.preview )
          formData.append("privacy",this.privacy == 'Yes' ? '1' : '0'  )
          if( !this.showLiveInputs ){
            if( document.getElementById('file').files.length > 0 ){
              formData.append("file", document.getElementById('file').files[0])
            }
          }
          this.duration = this.duration ? this.duration : '0'
          formData.append("duration",this.duration )

          if( this.showLiveInputs ){
            formData.append("start_date",this.date + ' ' + this.time )
            formData.append("session_duration",this.session_duration )
            formData.append("consultation_info_id",this.consultation_info_id )
          }

          formData.append("title_seo_en",this.title_seo_en )
          formData.append("title_seo_ar",this.title_seo_ar )
          formData.append("description_seo_en",this.description_seo_en )
          formData.append("description_seo_ar",this.description_seo_ar )

    
      
          axios
            .post(`edit/lessons/${this.id}`, formData, this.headersObj)
            .then(response => {
                console.log('lessons succuss' , response)
                router.replace('/apps/lessons/list')

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
              console.log('category error' , error)

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
              this.formErrors.file = checkError(errorsResponse.file)
              this.formErrors.title = checkError(errorsResponse.title)
              this.formErrors.course = checkError(errorsResponse.course_id)
              this.formErrors.section_id = checkError(errorsResponse.section_id)
              this.formErrors.description = checkError(errorsResponse.description)
              this.formErrors.content_type = checkError(errorsResponse.content_type)
              this.formErrors.preview = checkError(errorsResponse.preview)
              this.formErrors.duration = checkError(errorsResponse.duration)
              this.formErrors.privacy = checkError(errorsResponse.privacy)
              this.formErrors.consultation_info_id = checkError(errorsResponse.consultation_info_id)
              this.formErrors.session_duration = checkError(errorsResponse.session_duration)
              this.formErrors.date = checkError(errorsResponse.start_date)
              this.formErrors.time = checkError(errorsResponse.start_date)
              
            })

            }
      })
    },

    getRelatedSections(event){
    
          this.section_id = null
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
          .get(`courses/${this.course_id}`)
          .then(response => {
             console.log('selected courese : ' , response.data.course.price)
             if( response.data.course.price != 0 ){
               this.privacy = 'Yes'
             }else{
               this.privacy = 'No'
             }
          })
          .catch(error => cosole.log(error))

          //change content type options
          if( this.courseOptions.find(obj => obj.value == event).type == 1 ){
            this.contentTypeOptions = [
              { label: 'Meet', value: 'meet' },
            ]
            this.content_type = 'meet'
            this.showLiveInputs = 1
          }else{

            this.content_type = null

            this.contentTypeOptions = [
              { label: 'Video', value: 'video' },
              { label: 'PDF', value: 'pdf' },
              { label: 'Record', value: 'record' },
              
            ]
            this.showLiveInputs = 0
          }
    },
   getVideoDuration(){
      const files = document.getElementById('file').files
      const file = files[0] 
      const reader = new FileReader()
      const audio = document.createElement('audio')
      const that = this
      this.showCalculateDuration = true
      reader.onload = function (e) {
        audio.src = e.target.result
        audio.addEventListener('durationchange', function () { 
          const seconds  = audio.duration
          const duration = moment.duration(seconds, 'seconds')
          let time = ''
          const hours = duration.hours()
          if (hours > 0) { time = `${hours}:` }
          let durationMins = time + duration.minutes()
          let durationSecs = `${duration.seconds()}`
          durationMins = durationMins.length < 2 ? '0' + (+durationMins) : durationMins 
          durationSecs = durationSecs.length < 2 ? '0' + (+durationSecs) : durationSecs
          time = `${durationMins}` + `.` +  `${durationSecs}`
          that.duration = time
          that.showCalculateDuration = false
        }, false) 
        audio.addEventListener('onerror', function () {
          that.showCalculateDuration = false
          alert('Cannot get duration of this file.')
        }, false)
      }
      reader.readAsDataURL(file)
    },
    changeFileType(event){
      let fileElement = document.getElementById('file')
      if( event == 'video' ){
        fileElement.setAttribute("accept", "video/mp4,video/x-m4v,video/*");
        this.durationShown = true;
        this.fileExtensions = 'ext:mp4, mpg, mpeg, avi, wmv, mov,  rm, ram, ogg, webm'

      }else if( event == 'pdf' ){
        fileElement.setAttribute("accept", "application/pdf");
        this.durationShown = false;
        this.duration = 0;
        this.fileExtensions = 'ext:pdf'
      }else if( event == 'record' ){
        fileElement.setAttribute("accept", "audio/mp3,audio/*");
        this.durationShown = true;
        this.fileExtensions = 'ext:mp3'
        
      }
    }
  },
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>