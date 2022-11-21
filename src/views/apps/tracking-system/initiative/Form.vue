<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card :title="pageTitle">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="submitForm()"
                enctype="multipart/form-data"
            >

                <b-row>

                  

                  <!--intro path type field-->
                  <b-col md="12">
                      <b-form-group
                          label="Intro Path Type"
                          label-for="intro_path_type"    
                          id="introPathSelectOptions"       
                          >
                          <validation-provider
                            #default="{ errors }"
                            name="Intro Path Type"
                            rules="required"
                          >
                          <v-select
                              v-model="intro_path_type"
                              :options="introPathOptions"
                              :reduce="val => val.value"
                              :clearable="false"
                              input-id="intro_path_type"
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
                          
                          </b-form-group>
                  </b-col>

                  <b-col md="12" class="text-center">
                    <b-img  v-if="intro_path_type == 'image' && introPreview " :src="introPreview" fluid style="width: 400px; height:auto;"   />
                    <video v-if="intro_path_type == 'video' && introPreview " :src="introPreview"  class="w-100" controls id="video" >
                        <source :src="intro_path" type="video/mp4">
                    </video>
                  </b-col>
                  
                  <!-- intro -->
                  <b-col md="12">
                    <b-form-group
                      
                    >
                    <label for="intro" id="introPathId">intro *</label>
                    
                      <validation-provider
                        #default="{ errors }"
                        name="intro"
                        :rules=" id ? '' : 'required|' + introPathExtinsions "
                      >
                      <b-form-file
                        id="intro"
                        v-model="intro"
                        :state="errors.length > 0 ? false:null"
                        class="intro"
                        @input="introPreview = null"

                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.intro_path">{{ formErrors.intro_path }}</div>
                    </b-form-group>
                  </b-col>

                  <!-- Item Name EN-->
                  <b-col md="6">
                      <b-form-group
                      label="Name EN *"
                      label-for="Name EN"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="name"
                        rules="required|min:3|max:50"
                      >
                        <b-form-input
                            id="name"
                            type="text"
                            v-model="name_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.name_en">{{ formErrors.name_en }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!-- Item Name AR-->
                  <b-col md="6">
                      <b-form-group
                      label="Name AR *"
                      label-for="Name AR"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="name_ar"
                        rules="required|min:3|max:50"
                      >
                        <b-form-input
                            id="name_ar"
                            type="text"
                            v-model="name_ar"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.name_ar">{{ formErrors.name_ar }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <b-col md="12" class="text-center">
                    <b-img  v-if="imagePreview " :src="imagePreview" fluid style="width: 400px; height:auto;"   />
                  </b-col>

                  <!-- Image -->
                  <b-col md="12">
                    <b-form-group
                      
                    >
                      <label for="image" id="imageId">Image *</label>
                      <validation-provider
                        #default="{ errors }"
                        name="Image"
                        :rules=" id ? '' : 'required' + '|image|maxFile' "
                      >
                      <b-form-file
                        id="image"
                        v-model="image"
                        :state="errors.length > 0 ? false:null"
                        accept="image/*"
                        @input="imagePreview = null"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.image">{{ formErrors.image }}</div>
                    </b-form-group>
                  </b-col>

                  <!--Short Item Description EN -->
                  <b-col md="6">
                      <b-form-group
                      label="Short Description EN *"
                      label-for="Short Description EN"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="short description EN"
                        rules="required|max:100"
                        
                      >
                        <b-form-textarea
                            id="short_description"
                            type="text"
                            v-model="short_description_en"
                            :state="errors.length > 0 ? false:null"
                            rows="4"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.short_description_en">{{ formErrors.short_description_en }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!--Short Item Description AR -->
                  <b-col md="6">

                      <b-form-group
                      label="Short Description AR *"
                      label-for="Short Description AR"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="short description AR"
                        rules="required|max:100"
                        
                      >
                        <b-form-textarea
                            id="short_description_ar"
                            type="text"
                            v-model="short_description_ar"
                            :state="errors.length > 0 ? false:null"
                            rows="4"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.short_description_ar">{{ formErrors.short_description_ar }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!--Long Item Description EN -->
                  <b-col md="6">
                      <b-form-group
                      label="Long Description EN *"
                      label-for="Long Description EN"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="long description EN"
                        rules="required|max:350"
                        
                      >
                        <b-form-textarea
                            id="long_description"
                            type="text"
                            v-model="long_description_en"
                            :state="errors.length > 0 ? false:null"
                            rows="8"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.long_description_en">{{ formErrors.long_description_en }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!--Long Item Description AR -->
                  <b-col md="6">

                      <b-form-group
                      label="Long Description AR *"
                      label-for="Long Description AR"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="long description AR"
                        rules="required|max:350"
                        
                      >
                        <b-form-textarea
                            id="long_description_ar"
                            type="text"
                            v-model="long_description_ar"
                            :state="errors.length > 0 ? false:null"
                            rows="8"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.long_description_ar">{{ formErrors.long_description_ar }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!-- tracking system -->
                  <b-col md="12">
                    <b-form-group
                      label="Tracking system *"
                      label-for="tracking-system"
                      id="trackingSelectOptions"
                      
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="tracking system"
                        rules="required"
                        
                      >
                      <v-select
                        v-model="tracking_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="trackingSystemOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="tracking_id"
                        @input="trackingSystemChanged"
                      >
                      <template v-slot:option="option">
                              <span :class="option.label">
                                {{ option.label }}
                              </span>
                            </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.tracking_id">{{ formErrors.tracking_id }}</div>
                    </b-form-group>
                      
                    
                  </b-col>

                  <b-col sm="12">

                  <b-row sm="12">
                    

                  <!-- date start-->
                  <b-col md="4" v-if="tracking_id">
                      <b-form-group>

                      <label for="start_date" id="start_date" >Start Date</label>
                      <validation-provider
                        #default="{ errors }"
                        name="start date"
                        rules="required"
                      >
                        <b-form-datepicker
                          id="start_date_picker"
                          v-model="start_date"  
                          :min="minDate"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.start_date">{{ formErrors.start_date }}</div>

                      </b-form-group>
                      
                  </b-col>

                  <!-- date end-->
                  <b-col md="4" v-if="tracking_id">
                      <b-form-group>

                      <label for="end_date" id="end_date" >End Date</label>
                      <validation-provider
                        #default="{ errors }"
                        name="end date"
                      >
                        <b-form-datepicker
                          class="mb-1"
                          id="end_date_picker"
                          v-model="end_date"
                          disabled
                          
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                      
                  </b-col>

                  <!-- duration -->
                  <b-col md="4" v-if="tracking_id" >
                      <b-form-group
                      label="Duration (Number of days) *"
                      label-for="duration"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="duration"
                        rules="required|min_value:1"
                      >
                        <b-form-input
                            id="duration"
                            type="number"
                            v-model="duration"
                            :state="errors.length > 0 ? false:null"
                            disabled
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.duration">{{ formErrors.duration }}</div>
                      </b-form-group>
                      
                  </b-col>

                  </b-row>

                  </b-col>

                  <b-col sm="12">
                    <b-row>
                      <b-col class="mb-2" v-if="activitiesDates.length > 0">
                        <b-list-group>

                            <b-list-group-item 
                              style="background-color: #f8f8f8;padding: 1rem 1.5rem;font-weight: 500;"
                            >
                                <b-row class="align-items-center">
                                  <b-col  md="3">Activity</b-col>
                                  <b-col  md="3">Date Type</b-col>
                                  <b-col  md="3">Start Date</b-col>
                                  <b-col  md="3">End Date</b-col>  
                                </b-row>
                            </b-list-group-item>

                            <b-list-group-item
                            v-for="(act ,index) in activitiesDates"
                            :key="index"
                            >
                                <b-row class="align-items-center">
                                  <b-col  md="3">{{act.name_en}}</b-col>
                                  <b-col  md="3">{{act.date_type}}</b-col>
                                  <b-col  md="3">
                                    <validation-provider
                                      #default="{ errors }"
                                      :name="act.name_en + '-start-date'"
                                      :rules="'required|initiativeScope:'+ start_date + ',' + end_date "
                                      
                                    >
                                      <b-form-datepicker
                                        class="datepicker-small-font"
                                        :id="act.name_en + '-' + index + '-start-date'"
                                        v-model="act.start_date"
                                        :min="new Date().toISOString().substr(0, 10)"
                                      />
                                      <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                  </b-col>
                                  <b-col  md="3">
                                    <validation-provider
                                      #default="{ errors }"
                                      :name="act.name_en + '-end-date'"
                                      :rules="'required|initiativeScope:'+ start_date + ',' + end_date "
                                      v-if="act.date_type == 'date_range'"
                                    >
                                      <b-form-datepicker
                                        class="datepicker-small-font"
                                        :id="act.name_en + '-' + index + '-end-date'"
                                        v-model="act.end_date"
                                      />
                                      <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                  </b-col>  
                                </b-row>
                            </b-list-group-item>

                            


                          </b-list-group>

                      </b-col>
                    </b-row>
                  </b-col>


                  <!-- status -->
                  <b-col md="12">
                    <b-form-group
                      label="Status"
                      label-for="status"
                      id="statusSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="status"
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
                      <div class="invalid-feedback d-block" v-if="formErrors.is_published">{{ formErrors.is_published }}</div>
                    </b-form-group>
                      
                    
                  </b-col>

                  <!-- free -->
                  <b-col :md=" showPriceInput ? '6' : '12' ">
                    <b-form-group
                      label="Paid *"
                      label-for="free"
                      id="paidSelectOptions"
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
                      <div class="invalid-feedback d-block" v-if="formErrors.is_paid">{{ formErrors.is_paid }}</div>
                    </b-form-group>
                      
                    
                  </b-col>

                  <!-- price -->
                  <b-col :md=" showPriceInput ? '6' : '12' " v-if="showPriceInput">
                      <b-form-group
                      label="Price"
                      label-for="price"
                      >
                      <validation-provider
                        #default="{ errors }"
                        name="price"
                        rules="required|min_value:1"
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

                    <!-- Seo Name EN -->
                    <b-col md="6">
                        <b-form-group
                        label="Seo Name EN"
                        label-for="seo Name EN"
                        >
                        <b-form-input
                            id="seo_name_en"
                            type="text"
                            v-model="seo_title_en"
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
                            v-model="seo_title_ar"
                            
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
                              v-model="seo_desc_en"
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
                              v-model="seo_desc_ar"
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
      <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
  </div>
</template>


<script>

import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormFile , BFormTextarea , BCard,BFormDatepicker, BListGroup, BListGroupItem,BImg
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver , extend } from 'vee-validate'
import { max  , min_value , ext , image } from 'vee-validate/dist/rules';
extend('max', max);
extend('min_value', min_value);
extend('ext', ext);
extend('image', image);
import { required } from '@validations'
import store from '@/store'
import { BSpinner } from 'bootstrap-vue'
import getDomain from '@/helperFunctions/getDomain'
import { FormInputsData } from '@/views/apps/tracking-system/initiative/FormInputsData'
extend(
  'maxFile',{
   message: 'The {_field_} max file size is 2M',
   validate: () => {
      let imageSize = ( ( document.getElementById('image').files[0].size) / 1024 )
      if( imageSize  <= 2048 ){
        return true
      }else{
        return false
      }
   }
  });
  extend(
  'maxFileIntro',{
   message: 'The {_field_} max file size is 2M',
   validate: () => {
      let imageSize = ( ( document.getElementById('intro').files[0].size) / 1024 )
      if( imageSize  <= 2048 ){
        return true
      }else{
        return false
      }
   }
  });

  extend(
  'initiativeScope',{
   message: 'must be in iniative date scope',
   validate: (value, [initiativeStartDate , initiativeEndDate] ) => {
      if( Date.parse(value) < Date.parse(initiativeStartDate)  ||  Date.parse(value) > Date.parse(initiativeEndDate) ){
        return false
      }else{
        return true
      }
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
    ValidationProvider,
    ValidationObserver,
    BFormFile,
    BFormTextarea,
    BSpinner,
    BFormDatepicker,
    BListGroup, BListGroupItem,BImg
  },
  directives: {
    Ripple,
  },
  mixins: [FormInputsData],
  mounted() {},
  
  
  
}
</script>
<style>
.datepicker-small-font{
  font-size:10px;
}
.datepicker-small-font label{
  padding: .5rem !important;
  padding: .6rem 0rem !important;
}

</style>