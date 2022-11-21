<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Activity">
            <div>
            <validation-observer ref="simpleRules">
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="addForm()"
                enctype="multipart/form-data"
            >

                <b-row>

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
                        :rules="'required|validateTrackwithRepitation:' + selectedTrackingDuration + ',' + selectedReptitionType "
                        
                      >
                      <v-select
                        v-model="tracking_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="trackingSystemOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="tracking_id"
                        v-if="id == null"
                      >
                        <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                      </v-select>
                      <b-form-input
                            id="name"
                            type="text"
                            v-model="tracking_name"
                            :state="errors.length > 0 ? false:null"
                            v-else
                            disabled
                        />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.tracking_id">{{ formErrors.tracking_id }}</div>
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
                        name="name AR"
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

                  <!-- intro -->
                  <b-col md="12">
                    <b-form-group
                      
                    >
                      <label for="intro" id="introId">Intro</label>
                      <validation-provider
                        #default="{ errors }"
                        name="intro"
                        :rules="onlyVideo"
                      >
                      <b-form-file
                        id="intro"
                        v-model="intro_video"
                        :state="errors.length > 0 ? false:null"
                        class="intro"

                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.intro_video">{{ formErrors.intro_video }}</div>
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
                            v-model="short_desc_en"
                            :state="errors.length > 0 ? false:null"
                            rows="4"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.short_desc_en">{{ formErrors.short_desc_en }}</div>
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
                            v-model="short_desc_ar"
                            :state="errors.length > 0 ? false:null"
                            rows="4"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.short_desc_ar">{{ formErrors.short_desc_ar }}</div>
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
                            v-model="long_desc_en"
                            :state="errors.length > 0 ? false:null"
                            rows="8"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.long_desc_en">{{ formErrors.long_desc_en }}</div>
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
                            v-model="long_desc_ar"
                            :state="errors.length > 0 ? false:null"
                            rows="8"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.long_desc_ar">{{ formErrors.long_desc_ar }}</div>
                      </b-form-group>
                      
                  </b-col>

                  <!-- video -->
                  <b-col md="12">
                    <b-form-group
                      
                    >
                      <label for="video" id="videoId">Video</label>
                      <validation-provider
                        #default="{ errors }"
                        name="video"
                        :rules="onlyVideo"
                      >
                      <b-form-file
                        id="video"
                        v-model="video"
                        :state="errors.length > 0 ? false:null"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.video">{{ formErrors.video }}</div>
                    </b-form-group>
                  </b-col>

                 
                  <!-- quiz -->
                  <b-col md="6">
                    <b-form-group
                      label="Quiz"
                      label-for="quiz"
                      id="quizSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="quiz"
                      >
                      <v-select
                        v-model="quiz_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="quizOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="quiz"
                      >
                        <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.quiz">{{ formErrors.quiz }}</div>
                    </b-form-group>
                  </b-col>

                  <!-- repitation -->
                  <b-col md="6">
                    <b-form-group
                      label="Repetition Criteria *"
                      label-for="repetition"
                      id="repetitionSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="repetition criteria"
                        :rules="'required|validateTrackwithRepitation:' + selectedTrackingDuration + ',' + selectedReptitionType "
                      >
                      <v-select
                        v-model="type"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="repetitionCriteriaOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="repetition"
                      >
                        <template v-slot:option="option">
                            <span :class="option.label">
                              {{ option.label }}
                            </span>
                          </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.type">{{ formErrors.type }}</div>
                    </b-form-group>
                  </b-col>

                  <!-- Date Type -->
                  <b-col md="12">
                    <b-form-group
                      label="Date Type *"
                      label-for="date_type"
                      v-if="type == 'one_time'"
                      id="dateTypeSelectOptions"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Date Type"
                        rules="required"
                      >
                      <v-select
                        v-model="date_type"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="dateTypeOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        input-id="repetition"
                      >
                        <template v-slot:option="option">
                          <span :class="option.label">
                            {{ option.label }}
                          </span>
                        </template>
                      </v-select>
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.date_type">{{ formErrors.date_type }}</div>
                    </b-form-group>
                  </b-col>

                  <b-col md="12" class="d-flex is-correct-option align-items-center ml-auto" style="margin-top:1rem !important">
                      <b-form-group
                  
                      >
                          <input type="checkbox" id="add_your_proof" v-model="add_your_proof">
                          <label for="add_your_proof">Add Your Proof</label> 
                      </b-form-group>   
                  </b-col>

                   <!-- File -->
                  <b-col md="12" class="attachments-container">
                    <b-row v-for="(item , index) in attachments" :key="item" class="d-flex align-items-center mb-1"> 
                      <b-col md="9">
                        <b-form-group
                          
                        >
                          <label :for="'attachment-' + index+1" :id="'attachment-' + index+1">{{'attachment-' + (index+1)}}</label>
                          <validation-provider
                            #default="{ errors }"
                            :name="'attachment-' + (index+1)"
                            rules="required|ext:pdf,PDF"
                          >
                          <b-form-file
                            :id="'attachment-' + ( index+1 )"
                            v-model="attach"
                            :state="errors.length > 0 ? false:null"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                          </validation-provider>
                        </b-form-group>
                      </b-col>

                      <b-col sm="3">
                        <b-button
                          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                          variant="outline-danger"
                          v-on:click.prevent="removeQualificationFile(index)"
                        >
                          Remove
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-col>

                </b-row>

                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="secondary"
                  type="button"
                  class="mr-1"
                  @click="addAttachmentFile"
                  >
                  
                  <span>Add PDF Attachment</span>
                </b-button>
                

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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormFile , BFormTextarea , BCard
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
import { FormInputsData } from '@/views/apps/tracking-system/activity/FormInputsData'
extend(
  'validateTrackwithRepitation',{
   message: 'Tracking system must be valid with repitation criteria',
   validate: (value, [selectedTrackingDuration , activityReptitation] ) => {
        console.log(selectedTrackingDuration , activityReptitation )

      if(  parseInt(selectedTrackingDuration) >= parseInt(activityReptitation) || activityReptitation == 0 ){

        console.log( 'valid' )
        
        return true

      }else{

        console.log( 'not valid' )

        return false
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
  },
  directives: {
    Ripple,
  },
  mixins: [FormInputsData],
  data(){
    return{
      tracking_name : null,
      id:null
    }
  },
  mounted() {
    //add activity form tracking system details

    
    if(router.currentRoute.params.id){
      this.tracking_id = router.currentRoute.params.id
      this.id = router.currentRoute.params.id
      this.tracking_name = router.currentRoute.params.name
      this.selectedTrackingDuration = router.currentRoute.params.duration
    }
  },
  
  
  
}
</script>

<style lang="scss" scoped>

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

</style>
