<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Course">
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
                  <b-col md="4">
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

                  <!-- is Live -->
                  <b-col md="4">
                    <b-form-group
                      label="Type"
                      label-for="Type"
                      id="isLiveSelectOptions"
                      
                    >
                      <v-select
                        v-model="isLive"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="typeOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="type"
                        @input="getTypeValue($event)"
                      >
                        <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                      </v-select>
                    </b-form-group>
                    </b-col>

                    <!-- is limited -->
                    <b-col md="4" v-if="showIsLimitedInput">
                      <b-form-group
                        label="Is Limited"
                        label-for="IsLimited"
                        id="isLimitedSelectOptions"
                      >
                        <v-select
                          v-model="isLimited"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="isLimitedOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="isLimited"
                          @input="getIsLimitedValue($event)"
                          
                      >
                        <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                    </v-select>
                    </b-form-group>

                  </b-col>

                  <!-- limitNumber -->
                  <b-col md="4" v-if="showIsLimitedTypeInput && isLive">
                      <b-form-group
                      label="Limit Number *"
                      label-for="limitNumber"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="limitNumber"
                        rules="required|integer"
                      >
                        <b-form-input
                            id="limitNumber"
                            type="number"
                            v-model="limitNumber"
                            :state="errors.length > 0 ? false:null"
                            min="1"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>

                      </b-form-group>
                      
                  </b-col>

                    
                  <!-- Image -->
                  <b-col md="4">
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
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.image">{{ formErrors.image }}</div>
                    </b-form-group>
                  </b-col>

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
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.thumbnail">{{ formErrors.thumbnail }}</div>
                    </b-form-group>
                  </b-col>

                  <!-- preview -->
                  <b-col md="4">
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
                        accept=".mp4, .mpg, .mpeg, .avi,  .wmv, .mov, .rm, .ram, .ogg, .webm"
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
                        rules="required"
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
                          rules="required"
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
                          rules="min_value:1"
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
                        label-for="requirements En"
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
                        label-for="requirements Ar"
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormFile , BFormTextarea , BCard
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import { max , image , ext , integer , min_value } from 'vee-validate/dist/rules';
extend('max', max);
extend('ext', ext);
extend('image', image);
extend('integer', integer);
extend('min_value', min_value);
import { required } from '@validations'
import store from '@/store'

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
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
    vueDropzone: vue2Dropzone,
    BSpinner,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      files: [],
    color: '#444444',
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      },
      image:null,
      thumbnail:null,
      preview:null,
      title:"",
      title_ar:"",
      slug:"",
      category_id: null,
      level:null,
      published:1,
      approved:1,
      status:1,
      requirements:'req',
      requirements_ar:'',
      description:'',
      description_ar:'',
      free: 0,
      language_id : null,
      resourses : [],
      categoryOptions:[],
      levelOptions : [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
        { label: 'All', value: 'all' },
        
      ],
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
      price: null,
      showPriceInput : 1,
      showIsLimitedInput:0,
      isLimited:0,
      showIsLimitedTypeInput:0,
      limitNumber:1,
      isLive:0,
      typeOptions : [
        { label: 'online', value: 0 },
        { label: 'live', value: 1 },
      ],
      isLimitedOptions:[
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
      currency_id : null,
      surveyOptions : [],
      certificateOptions : [],
      questionnaire_id : null,
      certificate_id : null,
      
      
      formErrors : {
        image:null,
        preview:null,
        title:null,
        slug:null,
        category_id: null,
        level:null,
        published:null,
        approved:null,
        status : null,
        requirements:null,
        description:null,
        free: null,
        language_id : null,
        price:null,
        currency_id : null,
        questionnaire_id: null,
        certificate_id:null,
        thumbnail:null,
        
      },
    
     headersObj  : { 
          headers: 
            { 
              // Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': '*',
            }
          
    },

    title_seo_en: '',
    title_seo_ar: '',
    description_seo_en:'',
    description_seo_ar: '',
    image_seo:null,
     
    }
  },

  mounted() {
    
    //fetch categories
    axios
    .get(`categories`)
    .then(response => {
    console.log('categories : ' , response.data)
    for( let s=0 ; s< response.data.categories.length; s++  ){
        this.categoryOptions.push( {label: response.data.categories[s].name  , value: `${response.data.categories[s].id}` })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch surveies
     var surveiesUrl = `questionnaires`;
    if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         surveiesUrl += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
    axios
    .get(surveiesUrl)
    .then(response => {
    console.log('questionnaires : ' , response.data)
    for( let s=0 ; s< response.data.questionnaires.length; s++  ){
        this.surveyOptions.push( {label: response.data.questionnaires[s].title  , value: `${response.data.questionnaires[s].id}` })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch certifiacte
    var certifiacteUrl = `certificates`;
    if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         certifiacteUrl += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
    axios
    .get(certifiacteUrl,this.headersObj)
    .then(response => {
    console.log('certifiacte : ' , response.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.certificateOptions.push( {label: response.data.data[s].name  , value: `${response.data.data[s].id}` })
    }
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch languages
    axios
    .get(getDomain('no') + `setting/languages`)
    .then(response => {
    console.log('categories : ' , response.data)
    for( let s=0 ; s< response.data.data.length; s++  ){
        this.languageOptions.push( {label: response.data.data[s].name  , value: `${response.data.data[s].id}` })
    }
    
    })
    .catch(error => {console.log( 'error fetch course', error)})

    //fetch currency data
    axios
    .get(`currencies`)
    .then(response => {

      let currencies = response.data.languages 
    
    for( let c=0 ; c< currencies.length; c++  ){
        this.currencyOptions.push( {label: currencies[c].name  , value: `${currencies[c].id}` })
    }
       
    
    })
    .catch(error => {console.log( 'error fetch currencies', error)})
    

  },
  
  methods: {
    
    addForm: function () {
      console.log( 'resoueses :' , this.files )
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
          var formData = new FormData();
          var courseFile = document.querySelector('#image')
          var thumbnailFile = document.querySelector('#thumbnail')
          var previewFile = document.querySelector('#preview')
          var image_seo = document.querySelector('#image_seo')
     
          
          
          
          if( courseFile.files[0] ){
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
          
          if( this.price != 0 ){
            formData.append("price",this.price)
          }else{
            formData.append("price",0)
          }

          if( this.currency_id ){
            formData.append("currency_id",this.currency_id)
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
            .post(`courses`, formData, this.headersObj)
            .then(response => {
                console.log('courses succuss' , response)
                router.replace('/apps/courses/list')

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
              // console.log('category error' , error.response)

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
              this.formErrors.preview = checkError(errorsResponse.preview)
              this.formErrors.title = checkError(errorsResponse.title)
              this.formErrors.title_ar = checkError(errorsResponse.title_ar)
              this.formErrors.slug = checkError(errorsResponse.slug)
              this.formErrors.category_id = checkError(errorsResponse.category_id)
              this.formErrors.level = checkError(errorsResponse.level)
              this.formErrors.published = checkError(errorsResponse.published)
              this.formErrors.approved = checkError(errorsResponse.approved)
              this.formErrors.status = checkError(errorsResponse.status)
              this.formErrors.requirements = checkError(errorsResponse.requirements)
              this.formErrors.description = checkError(errorsResponse.description)
              this.formErrors.free = checkError(errorsResponse.free)
              this.formErrors.language_id = checkError(errorsResponse.language_id)
              this.formErrors.price = checkError(errorsResponse.price)
              this.formErrors.currency_id = checkError(errorsResponse.currency_id)
              this.formErrors.questionnaire_id = checkError(errorsResponse.questionnaire_id)
              this.formErrors.certificate_id = checkError(errorsResponse.certificate_id)
              this.formErrors.thumbnail = checkError(errorsResponse.thumbnail)
              
            })

        }
      })
    },

     getFreeValue(event){
        this.showPriceInput = event  ? 0 : 1
        console.log( 'free state  ' , this.showPriceInput )
    },
    getTypeValue(event){
       console.log( 'type  ' , event )
        this.showIsLimitedInput = event
    },
    getIsLimitedValue(event){
      console.log(event)
        this.showIsLimitedTypeInput = +event ? 1 : 0
    },

    handleFileDrop(e) {
      let droppedFiles = e.dataTransfer.files;
      if(!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      ([...droppedFiles]).forEach(f => {
    
    this.files.push(f);
      });
      this.color="#444444"
    },
    handleFileInput(e) {
      let files = e.target.files;
      files = e.target.files
            if(!files) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      ([...files]).forEach(f => {
    
    this.files.push(f);
      });
    },
    removeFile(fileKey){
      this.files.splice(fileKey, 1)
    },
    fileDragIn(){
      // alert("oof")
      // alert("color")
      this.color="white"
    },
    fileDragOut(){
      this.color="#444444"
    }

  
    

  },
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>