<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Course">
            <div>
            <validation-observer ref="simpleRules">
             <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
                enctype="multipart/form-data"
            >

                <b-row>
                  <!-- Item Title EN-->
                  <b-col md="6">
                      <b-form-group
                      label="Title EN*"
                      label-for="Title EN"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="title"
                        rules="required|min:3"
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

                  <!-- Item Title AR-->
                  <b-col md="6">
                      <b-form-group
                      label="Title AR*"
                      label-for="Title AR"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="title_ar"
                        rules="required|min:3"
                      >
                        <b-form-input
                            id="title_ar"
                            type="text"
                            v-model="title_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.title_ar">{{ formErrors.title_ar }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!--category field-->
                  <b-col md="12">
                      <b-form-group
                          label="Category *"
                          label-for="category"
                          id="categorySelectOptions"
                          >
                          <validation-provider
                            #default="{ errors }"
                            name="category"
                            rules="required"
                          >
                          <v-select
                              v-model="category_id"
                              :options="categoryOptions"
                              :reduce="val => val.value"
                              :clearable="false"
                              input-id="category"
                              :state="errors.length > 0 ? false:null"
                          >
                            <template v-slot:option="option">
                              <span :class="option.label">
                                {{ option.label }}
                              </span>
                            </template>
                          </v-select>
                          <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                          <div class="invalid-feedback d-block" v-if="formErrors.category_id">{{ formErrors.category_id }}</div>
                          
                          </b-form-group>
                  </b-col>

                  <b-row class="w-100">

                   <b-col md="12" class="text-center mt-2" v-if="imagePreview">
                    <b-img thumbnail fluid :src="imagePreview" style="max-width: 300px; height: auto" />
                   </b-col>

                   </b-row>

                  <!-- Image -->
                  <b-col md="12">
                    <b-form-group
                      label="Image"
                      label-for="image"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Image"
                        rules="image"
                      >
                      <b-form-file
                        id="image"
                        v-model="image"
                        :state="errors.length > 0 ? false:null"
                        accept="image/*"
                        @change="previewImage($event,'image')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.image">{{ formErrors.image }}</div>
                    </b-form-group>
                  </b-col>

                   <b-row class="w-100">

                    <b-col md="12" class="text-center mt-2" v-if="thumbnailPreview">
                      <b-img thumbnail fluid :src="thumbnailPreview" style="max-width: 300px; height: auto" />
                    </b-col>

                   </b-row>

                  <!-- Thumbnail -->
                  <b-col md="12">
                    <b-form-group
                      label="Thumbnail"
                      label-for="thumbnail"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Thumbnail"
                        rules="image"
                      >
                      <b-form-file
                        id="thumbnail"
                        v-model="thumbnail"
                        :state="errors.length > 0 ? false:null"
                        accept="image/*"
                        @change="previewImage($event,'thumbnail')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.thumbnail">{{ formErrors.thumbnail }}</div>
                    </b-form-group>
                  </b-col>

                  <b-row class="w-100">
                    <b-col md="12" class="text-center mt-2 mb-2" v-if="videoPreview">
                      <video controls id="video" style="width:600px">
                          <source :src="videoPreview" type="video/mp4">
                      </video>
                    </b-col>
                  </b-row>
                  

                  <!-- preview -->
                  <b-col md="12">
                    <b-form-group
                      label="preview"
                      label-for="preview"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="preview"
                        rules="ext:mp4, mpg, mpeg, avi,  wmv, mov, rm, ram, ogg, webm"
                      >
                      <b-form-file
                        id="preview"
                        v-model="preview"
                        :state="errors.length > 0 ? false:null"
                        @change="handleFileUpload( $event )"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.preview">{{ formErrors.preview }}</div>
                    </b-form-group>
                  </b-col>

                  <!-- Item Slug -->
                  <b-col md="4">
                      <b-form-group
                      label="Slug *"
                      label-for="slug"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="slug"
                        rules="required|max:50|min:3"
                      >
                        <b-form-input
                            id="slug"
                            type="text"
                            v-model="slug"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.slug">{{ formErrors.slug }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!-- level -->
                  <b-col md="4">
                    <b-form-group
                      label="Level *"
                      label-for="level"
                      id="levelSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="level"
                        rules="required"
                      >
                      <v-select
                        v-model="level"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="levelOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="level"
                      >
                        <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.level">{{ formErrors.level }}</div>
                    </b-form-group>
                      
                    
                  </b-col>

                  <!-- published -->
                  <b-col md="4" class="d-none">
                    <b-form-group
                      label="Published *"
                      label-for="published"
                      id="publishedSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="published"
                  
                      >
                      <v-select
                        v-model="published"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="publishedOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="published"
                      >
                        <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.published">{{ formErrors.published }}</div>
                    </b-form-group>
                      
                    
                  </b-col>

                    <!-- approved -->
                    <b-col md="4" class="d-none">
                      <b-form-group
                        label="Approved *"
                        label-for="approved"
                        id="approvedSelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="approved"
                        >
                        <v-select
                          v-model="approved"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="approvedOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="approved"
                        >
                          <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.approved">{{ formErrors.approved }}</div>
                      </b-form-group>
                    </b-col>

                    <!-- status -->
                    <b-col md="4">
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
                        <div class="invalid-feedback d-block" v-if="formErrors.status">{{ formErrors.status }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!-- language -->
                    <b-col md="4">
                      <b-form-group
                        label="language *"
                        label-for="language"
                        id="languageSelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="Language"
                          rules="required"
                          
                        >
                        <v-select
                          v-model="language_id"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="languageOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="language"
                        >
                          <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.language_id">{{ formErrors.language_id }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!-- survey -->
                    <b-col md="4">
                      <b-form-group
                        label="Survey"
                        label-for="survey"
                        id="surveySelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="survey"
                        >
                        <v-select
                          v-model="questionnaire_id"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="surveyOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="survey"
                        >
                          <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.questionnaire_id">{{ formErrors.questionnaire_id }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!-- free -->
                    <b-col md="4">
                      <b-form-group
                        label="Paid *"
                        label-for="free"
                        id="freeSelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="free"
                          rules="required"
                        >
                        <v-select
                          v-model="free"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="freeOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="free"
                          @input="getFreeValue($event)"
                        >
                          <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.free">{{ formErrors.free }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!-- price -->
                    <b-col md="4" v-if="showPriceInput">
                        <b-form-group
                        label="Price"
                        label-for="price"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="price"
                        >
                          <b-form-input
                              id="price"
                              type="text"
                              v-model="price"
                              :state="errors.length > 0 ? false:null"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.price">{{ formErrors.price }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- currency -->
                    <b-col md="4" v-if="showPriceInput">
                      <b-form-group
                        label="Currency"
                        label-for="currency"
                        id="currencySelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="currency"
                        >
                        <v-select
                          
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="currencyOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="currency"
                          v-model="currency_id"
                        >
                          <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.currency_id">{{ formErrors.currency_id }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!-- certificate -->
                    <b-col md="12">
                      <b-form-group
                        label="Certificate"
                        label-for="certificate"
                        id="certificateSelectOptions"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="certificate"
                        >
                        <v-select
                          v-model="certificate_id"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="certificateOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="certificate"
                        >
                          <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                        </v-select>
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.certificate_id">{{ formErrors.certificate_id }}</div>
                      </b-form-group>
                        
                      
                    </b-col>

                    <!-- Item requirements En -->
                    <b-col md="6" class="d-none">
                        <b-form-group
                        label="Requirements En"
                        label-for="requirements"
                        >
                          <b-form-textarea
                              id="requirements"
                              type="text"
                              v-model="requirements"
                              rows="8"
                              
                          />
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item requirements  Ar-->
                    <b-col md="6" class="d-none">
                        <b-form-group
                        label="Requirements Ar"
                        label-for="requirements_ar"
                        >
                          <b-form-textarea
                              id="requirements_ar"
                              type="text"
                              v-model="requirements_ar"
                              rows="8"
                              
                          />
                        </b-form-group>
                        
                    </b-col>

                    <!-- Item Description EN -->
                    <b-col md="6">

                        <b-form-group
                        label="Description EN"
                        label-for="Description EN"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="description EN"
                          rules="min:3"
                          
                        >
                          <b-form-textarea
                              id="description"
                              type="text"
                              v-model="description"
                              :state="errors.length > 0 ? false:null"
                              rows="8"
                              
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.description">{{ formErrors.description }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <b-col md="6">

                        <b-form-group
                        label="Description AR"
                        label-for="Description AR"
                        >
                        <validation-provider
                          #default="{ errors }"
                          name="description AR"
                          rules="min:3"
                          
                        >
                          <b-form-textarea
                              id="description_ar"
                              type="text"
                              v-model="description_ar"
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormFile , BFormTextarea, BCard,BImg
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import {  max , image , ext , integer , min_value } from 'vee-validate/dist/rules';
extend('max', max);
extend('ext', ext);
extend('image', image);
extend('integer', integer);
extend('min_value', min_value);
import { required } from '@validations'
import store from '@/store'
import { BSpinner } from 'bootstrap-vue'
import getDomain from '@/helperFunctions/getDomain'

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
    BFormTextarea,
    BSpinner,BImg
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      id : router.currentRoute.params.id,
      image:null,
      thumbnail:null,
      title:"",
       title_ar:"",
      slug:"fdf",
      category_id: 1,
      level:'all',
      published:1,
      approved:1,
      status:null,
      requirements:'Req',
      requirements_ar:'',
      description:'',
      description_ar:'',
      preview: null,
      free: null,
      language_id : 1,
      currency_id : null,
      categoryOptions:[],
      levelOptions : [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
        { label: 'All', value: 'all' },
        
      ],
      certificateOptions : [],
      certificate_id : null,
      publishedOptions : [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ],
      approvedOptions : [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ],
      statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Drafted', value: 0 },
      ],
      freeOptions : [
         { label: 'Free', value: 1 },
        { label: 'Paid', value: 0 },
      ],
      languageOptions : [],
      currencyOptions : [],
      price: 0,
      showPriceInput : 0,
      showIsLimitedInput:0,
      islimited:0,
      showIsLimitedTypeInput:0,
      limitNumber:1,
      isLive:1,
      typeOptions : [
        { label: 'online', value: 0 },
        { label: 'live', value: 1 },
      ],
      isLimitedOptions:[
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
      surveyOptions : [],
      questionnaire_id : null,
     
      
      formErrors : {
        image:null,
        title:null,
        slug:null,
        category_id: null,
        level:null,
        published:null,
        approved:null,
        status : null,
        requirements:null,
        free: null,
        language_id : null,
        price:null,
        currency_id:null,
        questionnaire_id: null,
        thumbnail:null,
        
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
    imagePreview:null,
    seoPreview:null,
    videoPreview:null,
    thumbnailPreview:null,
    
     
    }
  },

  mounted() {

    //fetch languages
    axios
    .get(getDomain('no') + `setting/languages`)
    .then(response => {
    console.log('categories : ' , response.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.languageOptions.push( {label: response.data.data[s].name  , value: response.data.data[s].id})
    }
    
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch surveies
    axios
    .get(`questionnaires`)
    .then(response => {
    console.log('questionnaires : ' , response.data)
    for( let s=0 ; s< response.data.questionnaires.length; s++  ){
        this.surveyOptions.push( {label: response.data.questionnaires[s].title  , value: `${response.data.questionnaires[s].id}` })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch certifiacte
    axios
    .get(`certificates`)
    .then(response => {
    console.log('certifiacte : ' , response.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.certificateOptions.push( {label: response.data.data[s].name  , value: `${response.data.data[s].id}` })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch course
    axios
    .get(`courses/${this.id}`)
    .then(response => {
    console.log('course iss : ' , response.data)

    
    // this.formErrors.file = checkError(errorsResponse.file)
    this.title = response.data.course.title
    this.title_ar = response.data.course.title_ar
    if( response.data.course.description == 'null' || response.data.course.description == null ){
      this.description = ''
    }else{
      this.description = response.data.course.description
    }

   
    this.description_ar = response.data.course.description_ar
     
    this.slug = response.data.course.slug
    this.category_id = response.data.course.category_id
    this.level = response.data.course.level
    this.published = response.data.course.published
    this.approved = response.data.course.approved
    this.status = response.data.course.status
    this.requirements = response.data.course.requirements
    this.requirements_ar = response.data.course.requirements_ar
    this.free = response.data.course.free
    this.language_id = response.data.course.language_id
    this.price = response.data.course.price
    this.currency_id = response.data.course.currency_id
    if( this.free ){
      this.showPriceInput = 0 
      this.price = 0
    }else{
      this.showPriceInput = 1
    }

    if( response.data.course.questionnaire_id ){
      this.questionnaire_id = response.data.course.questionnaire_id.toString()
    }else{
      this.questionnaire_id = null
    }

    if( response.data.course.certificate_id ){
      this.certificate_id = response.data.course.certificate_id.toString()
    }else{
      this.certificate_id = null
    }

    this.isLive = response.data.course.is_live
    this.showIsLimitedInput = this.isLive
    
    this.isLimited = response.data.course.is_limited
    this.showIsLimitedTypeInput = this.isLimited

    this.limitNumber = response.data.course.limited_number

    this.title_seo_en = response.data.course.title_seo_en
    this.title_seo_ar = response.data.course.title_seo_ar
    this.description_seo_en = response.data.course.description_seo_en
    this.description_seo_ar = response.data.course.description_seo_ar

    this.imagePreview = response.data.course.image
    this.thumbnailPreview = response.data.course.thumbnail
    this.seoPreview = response.data.course.image_seo
    this.videoPreview = response.data.course.preview
    if(this.videoPreview){
      var video = document.getElementById('video')
      video.load();
    }
    
    
    
    })
    .catch(error => {console.log( 'error fetch lesson', error)})
   
    //fetch categories
    axios
    .get(`categories`)
    .then(response => {
    console.log('categories : ' , response.data)
    for( let s=0 ; s< response.data.categories.length; s++  ){
        this.categoryOptions.push( {label: response.data.categories[s].name  , value: response.data.categories[s].id })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch currency data
    axios
    .get(`currencies`)
    .then(response => {

      let currencies = response.data.languages 
    
    for( let c=0 ; c< currencies.length; c++  ){
        this.currencyOptions.push( {label: currencies[c].name  , value: currencies[c].id })
    }
       
    
    })
    .catch(error => {console.log( 'error fetch currencies', error)})
    

  },
  
  methods: {
     previewImage: function(event,type) {
        var input = event.target;
        if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          if(type == 'image' ){ this.imagePreview = e.target.result; }
          else if(type == 'seo' ){ this.seoPreview = e.target.result; }
          else if(type == 'thumbnail' ){ this.thumbnailPreview = e.target.result; }  
        }
        reader.readAsDataURL(input.files[0]);
        }
    },
    previewVideo(){
        let video = document.getElementById('video');
        let reader = new FileReader();

        reader.readAsDataURL( this.videoPreview );
        reader.addEventListener('load', function(){
            video.src = reader.result;
        });
    },
    handleFileUpload( event ){
      this.videoPreview = event.target.files[0];
      this.previewVideo();
    },
    addForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
          
          
          
          var formData = new FormData();
          var courseFile = document.querySelector('#image')
          var thumbnailFile = document.querySelector('#thumbnail')
          var previewFile = document.querySelector('#preview')
          var image_seo = document.querySelector('#image_seo')
     
          
          
          if( courseFile.files[0] != null ){
           formData.append("image", courseFile.files[0] )
          }
          if( previewFile.files[0] ){
           formData.append("preview", previewFile.files[0] )
          }
          if( image_seo.files[0] ){
           formData.append("image_seo", image_seo.files[0] )
          }
          if( thumbnailFile.files[0] ){
           formData.append("thumbnail", thumbnailFile.files[0] )
          }
          formData.append("_method", "put");
          formData.append("title",this.title )
          formData.append("title_en",this.title )
          formData.append("title_ar",this.title_ar )
          formData.append("slug",this.slug )
          formData.append("category_id",this.category_id )
          formData.append("level",this.level )
          formData.append("published",this.published )
          formData.append("approved",this.approved )
          formData.append("status",this.status )
          formData.append("requirements",this.requirements )
          formData.append("requirements_en",this.requirements )
          formData.append("requirements_ar",this.requirements_ar )
          formData.append("description",this.description )
          formData.append("description_en",this.description )
          formData.append("description_ar",this.description_ar )
          formData.append("title_seo_en",this.title_seo_en )
          formData.append("title_seo_ar",this.title_seo_ar )
          formData.append("description_seo_en",this.description_seo_en )
          formData.append("description_seo_ar",this.description_seo_ar )
          if( this.free ){
            formData.append("free",1 )
          }else{
            formData.append("free",0 )
          }
          
          formData.append("language_id",this.language_id)

          if( this.currency_id ){
            formData.append("currency_id",this.currency_id)
          }
          
          if( this.price != 0 ){
            formData.append("price",this.price)
          }else{
            formData.append("price",0)
          }
      
          if( this.questionnaire_id ){
           formData.append("questionnaire_id",this.questionnaire_id)
          }

          if( this.certificate_id ){
           formData.append("certificate_id",this.certificate_id)
          }

          formData.append("is_live",this.isLive )
          
          if( this.isLive == 1 ){
            formData.append("is_limited",this.isLimited )
            formData.append("limited_number",this.limitNumber )
          }else{
            formData.append("is_limited",0 )
            formData.append("limited_number",0 )
          }

         
      
          axios
            .post(`courses/${this.id}`, formData, this.headersObj)
            .then(response => {
                console.log('courses succuss' , response)
                router.replace('/apps/courses/list')

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
              // console.log('category error' , error.response)
               console.log('courses error' , error)

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
              this.formErrors.image = checkError(errorsResponse.image)
              this.formErrors.title = checkError(errorsResponse.title)
              this.formErrors.title_ar = checkError(errorsResponse.title_ar)
              this.formErrors.slug = checkError(errorsResponse.slug)
              this.formErrors.category_id = checkError(errorsResponse.category_id)
              this.formErrors.level = checkError(errorsResponse.level)
              this.formErrors.published = checkError(errorsResponse.published)
              this.formErrors.approved = checkError(errorsResponse.approved)
              this.formErrors.status = checkError(errorsResponse.status)
              this.formErrors.requirements = checkError(errorsResponse.requirements)
              this.formErrors.free = checkError(errorsResponse.free)
              this.formErrors.language_id = checkError(errorsResponse.language_id)
              this.formErrors.price = checkError(errorsResponse.price)
              this.formErrors.cuurency = checkError(errorsResponse.cuurency)
              this.formErrors.questionnaire_id = checkError(errorsResponse.questionnaire_id)
              this.formErrors.thumbnail = checkError(errorsResponse.thumbnail)
              
            })

            }
      })
    },

    getFreeValue(event){
      this.showPriceInput = event  ? 0 : 1
      
      console.log( 'free state  ' , this.showPriceInput )
      if( event == '1' ){ this.price = 0 }
    },
    getTypeValue(event){
       console.log( 'type  ' , event )
        this.showIsLimitedInput = event
    },
    getIsLimitedValue(event){
        this.showIsLimitedTypeInput = +event ? 1 : 0
    },

  
    

  },
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>