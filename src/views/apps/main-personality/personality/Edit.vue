<template>
  <div class="position-relative">
    <b-row>
      <!--test form-->
      <b-col cols="12">
        <b-card title="Edit Personality Test">
          <div>
          <validation-observer ref="simpleRules">  
          <b-form
              ref="form"
              class="repeater-form"
              @submit.prevent="addForm()"
          >

              <b-row>

                  <!-- Item Name EN-->
                  <b-col md="6">
                      <b-form-group
                      label="Name EN *"
                      label-for="name"
                      
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="name"
                      rules="required"
                      
                      >
                      <b-form-input
                          id="name"
                          type="text"
                          v-model="name"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- Item Name AR-->
                  <b-col md="6">
                      <b-form-group
                      label="Name AR *"
                      label-for="name_ar"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="name AR"  
                      rules="required"
                      >
                      <b-form-input
                          id="name_ar"
                          type="text"
                    
                          v-model="name_ar"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  

                  <b-col md="2" class="d-flex is-correct-option align-items-center" style="margin-top:1rem !important">
                      <b-form-group
                  
                      >
                          <input type="checkbox" id="showTimer"  :checked="!timerDisabled"  @change="checkEnableTimer()">
                          <label for="showTimer">Enable Timer</label> 
                      </b-form-group>   
                  </b-col>

                  <!-- Timer -->
                  <b-col md="4">
                      <b-form-group
                      label="Timer In Seconds"
                      label-for="timer"
                      rules="required"
                      >
                      <b-form-input
                          id="timer"
                          type="number"
                          v-model="timer"
                          min="1"
                          :disabled="timerDisabled == 1"  
                      />
                      </b-form-group>
                  </b-col>

                  <b-col md="2" class="d-flex is-correct-option align-items-center ml-auto" style="margin-top:1rem !important">
                      <b-form-group
                  
                      >
                          <input type="checkbox" id="isFree" v-model="isFree"  @change="checkIsFree()">
                          <label for="isFree">Is Free</label> 
                      </b-form-group>   
                  </b-col>

                  <!-- Price -->
                  <b-col md="4">
                      <b-form-group
                      label="Price"
                      label-for="price"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="price"  
                      :rules="isFree ? '' : 'required|greaterThanZero'"
                      >
                      <b-form-input
                          id="price"
                          type="number"
                          v-model="price"
                          min="1"
                          :disabled="isFree != 0" 
                          :state="errors.length > 0 ? false:null" 
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- <b-col md="2" class="d-flex is-correct-option align-items-center ml-auto" style="margin-top:1rem !important">
                      <b-form-group
                  
                      >
                          <input type="checkbox" id="isSkip" v-model="isSkip">
                          <label for="isSkip">Skip</label> 
                      </b-form-group>   
                  </b-col> -->

                  <!-- age -->
                  <b-col md="4">
                      <b-form-group
                      label="Age Range"
                      label-for="age"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="age"
                      rules="required"
                      >
                        <v-select
                          v-model="age"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="ageOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="age"
                        />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                
                  <!-- status -->
                  <b-col md="4">
                      <b-form-group
                      label="Status"
                      label-for="status"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="Status"
                      rules="required"
                      >
                        <v-select
                          v-model="status"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="statusOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="status"
                        />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      <div class="invalid-feedback d-block" v-if="formErrors.status">{{ formErrors.status }}</div>
                      </b-form-group>
                  </b-col>

                  <!-- category -->
                  <b-col md="4">
                      <b-form-group
                      label="Category"
                      label-for="category"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="category"
                      rules="required"
                      >
                        <v-select
                          v-model="category"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="categoryOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="category"
                        />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- Short Desc En-->
                  <b-col md="6">
                      <b-form-group
                      label="Short Description EN"
                      label-for="short_description"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="short_description"
                      rules="required"
                      
                      >
                      <b-form-input
                          id="short_description"
                          type="text"
                    
                          v-model="short_description"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- Short Desc Ar-->
                  <b-col md="6">
                      <b-form-group
                      label="Short Description AR"
                      label-for="short_description_ar"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="short_description_ar"
                      rules="required"
                      
                      >
                      <b-form-input
                          id="short_description_ar"
                          type="text"
                    
                          v-model="short_description_ar"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- Description EN-->
                  <b-col md="6">
                      <b-form-group
                      label="Long Description EN"
                      label-for="description"
                      >
                      <b-form-textarea
                          id="description"
                          type="text"
                          v-model="description"
                          rows="8"
                          
                      />
                      </b-form-group>
                  </b-col>

                  <!-- Description AR-->
                  <b-col md="6">
                      <b-form-group
                      label="Long Description AR"
                      label-for="description_ar"
                      >
                      <b-form-textarea
                          id="description_ar"
                          type="text"
                          v-model="description_ar"
                          rows="8"
                          
                      />
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
                            v-model="name_seo_en"
                            
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
                            v-model="name_seo_ar"
                            
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

              <b-col cols="12" class="mb-1 mt-2 d-none">
                  <hr>
              </b-col>

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
      <!--/test form-->
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BModal , VBModal, BListGroup, BListGroupItem,BFormFile
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import { BSpinner } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver , extend} from 'vee-validate'
import { required } from '@validations'
import checkError from '@/helperFunctions/helper'
extend(
'greaterThanZero',{
  getMessage: field =>  field + ' needs to be > zero.',
  validate: (value) => {
    // value must be > zero
    if (value > 0 ) return true;
    return false;
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
    BSpinner,
    ValidationProvider,
    ValidationObserver,
    BFormTextarea,
    BModal,
    VBModal,
    AppCollapse,
    AppCollapseItem,
    BListGroup, BListGroupItem,BFormFile
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    id : router.currentRoute.params.id,
    mainCatId : null,
    timerDisabled : false,
    isFree : false,
    isSkip:false,
    collapseType: 'shadow',
    short_description:'',
    short_description_ar:'',
    description : '',
    description_ar : '',  
    privacy:'', 
    timer : null,  
    price : null,
    name : '',
    name_ar : '',
    status:1,
    statusOptions : [
      { label: 'Published', value: 1 },
      { label: 'Drafted', value: 0 },
    ],
    subCategoryOptions:[],
    age:16,
    ageOptions : [
      { label: '+12', value: 12 },
      { label: '+14', value: 14 },
      { label: '+16', value: 16 },
      { label: '+18', value: 18 },
      { label: '+21', value: 21 },
    ],
    category_id:null,
    typeOptions : [
        { label: 'Multi Selection', value: 'multi' },
        { label: 'One Selection', value: 'single' },
    ],
    pureCategoryOptions : [],
    category:null,
    categoryOptions : [],
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
      },
      name_seo_en: '',
      name_seo_ar: '',
      description_seo_en:'',
      description_seo_ar: '',
      image_seo:null,
      formErrors:{
      status:null
    }
    }
  },
  mounted() {

    this.fetchRecord();
  },
  methods: {
    checkEnableTimer(){
      this.timerDisabled = !this.timerDisabled
      this.timer = this.timerDisabled ? null : this.timer
      
    },
    checkIsFree(){
      this.price = this.isFree ? 0 : this.isFree
    },
    
    addForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
          var formData = new FormData();
          
          var image_seo = document.querySelector('#image_seo')
          if( image_seo.files[0] ){
           formData.append("image_seo", image_seo.files[0] )
          }

          formData.append("name",this.name )
          formData.append("name_en",this.name )
          formData.append("name_ar",this.name_ar )
          formData.append("free",this.isFree )
          formData.append("price",this.price )

          let time_limit = this.timer ? this.timer : 0
          formData.append("time_limit",time_limit )

          formData.append("age_above",this.age )
          formData.append("personality_category_id",this.category )
          formData.append("short_description",this.short_description )
          formData.append("short_description_en",this.short_description )
          formData.append("short_description_ar",this.short_description_ar )
          formData.append("long_description",this.description )
          formData.append("long_description_en",this.description )
          formData.append("long_description_ar",this.description_ar )
          formData.append("status",this.status )
          formData.append("name_seo_en",this.name_seo_en )
          formData.append("name_seo_ar",this.name_seo_ar )
          formData.append("description_seo_en",this.description_seo_en )
          formData.append("description_seo_ar",this.description_seo_ar )
         

          axios
            .post(`personalityTest/${this.id}?_method=put`, formData, this.headersObj)
            .then(response => {
                console.log('test succuss' , response)
                router.replace('/apps/personality/test/list/')

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
            console.log('test error' , error)
            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'

            var errorsResponse = error.response.data.errors
            this.formErrors.status = checkError(errorsResponse.status)

              
          })

          }
      })
        
        
    },
    fetchAllCategories: function(){
        //fetch categories
        var url = `personalityCategories?treeList=1`
        axios
        .get(url)
        .then(response => {
            console.log('personalityCategories : ' , response.data.data)
            let personalityCategories = response.data.data
            this.pureCategoryOptions = personalityCategories
            for( let s=0 ; s< personalityCategories.length; s++  ){
                this.categoryOptions.push( {label: personalityCategories[s].title  , value: personalityCategories[s].id })
            }
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },

    fetchRecord: function(){
        //fetch categories
        var url = `personalityTest/${this.id}`
        axios
        .get(url)
        .then(response => {
            this.fetchAllCategories();
            console.log('fetch test record : ' , response.data.data)
            let data = response.data.data
            this.name = data.name
            this.name_ar = data.name_ar
            
            this.price = data.price
            this.isFree = this.price != 0 ? 0 : 1
            this.description = data.long_description
            this.description_ar = data.long_description_ar
            this.short_description = data.short_description
            this.short_description_ar = data.short_description_ar
            this.timer = data.time_limit
            this.category = data.personality_category_id
            this.age = data.age_above  
            if( this.timer == 0 ){
                this.timerDisabled = true
                this.timer = null
            }else{
                this.timerDisabled = false
            }

            this.name_seo_en = data.name_seo_en
            this.name_seo_ar = data.name_seo_ar
            this.description_seo_en = data.description_seo_en
            this.description_seo_ar = data.description_seo_ar
            this.status = data.status
            
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    
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

.loading-spinner{
   display:none;
}
</style>
