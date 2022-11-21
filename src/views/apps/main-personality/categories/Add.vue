<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Add Personality Category">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="submitForm()"
              >

              <b-row>

                

                <!-- title -->
                <b-col md="6">
                    <b-form-group
                    label="Title EN"
                    label-for="title"
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

                <!-- Title AR -->
                <b-col md="6">
                    <b-form-group
                    label="Title AR"
                    label-for="title_ar"
                    >
                    <validation-provider
                        #default="{ errors }"
                        name="title_ar"
                        
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
                <b-col md="4">
                  <b-form-group
                    label="Status"
                    label-for="status"
                    
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
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.status">{{ formErrors.status }}</div>
                  </b-form-group>
                    
                  
                </b-col>

                <!-- code -->
                <b-col md="4">
                    <b-form-group
                    label="ID"
                    label-for="code"
                    >
                    <validation-provider
                        #default="{ errors }"
                        name="code"
                    >
                        <b-form-input
                            id="code"
                            type="text"
                            v-model="code"
                            :state="errors.length > 0 ? false:null"
                            disabled
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.code">{{ formErrors.code }}</div>
                    </b-form-group>
                    
                </b-col>

                <!-- type -->
                <b-col md="4">
                  <b-form-group
                    label="Category Type"
                    label-for="type"
                    
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
                      input-id="type"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.type">{{ formErrors.type }}</div>
                  </b-form-group>
                    
                  
                </b-col>

                

                <!--parent_id-->
                <b-col md="12" v-if="type == 'child'">
                    <b-form-group
                    label="Parent Category"
                    label-for="Parent-Category"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="parent_id" 
                    rules="required"
                    >
                    <v-select
                        v-model="parent_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="categoryOptions"
                        :reduce="val => val.value"
                        :clearable="false"
                        :close-on-select="true"
                        input-id="parent_id"
                        
                        

                      />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    <div class="invalid-feedback d-block" v-if="formErrors.parent_id">{{ formErrors.parent_id }}</div>
                    </b-form-group>
                </b-col>

                <!-- Description EN -->
                <b-col md="6">

                    <b-form-group
                    label="Description EN"
                    label-for="description"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="description"
                      
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

                <!-- Description AR -->
                <b-col md="6">

                    <b-form-group
                    label="Description AR"
                    label-for="description_ar"
                    >
                    <validation-provider
                      #default="{ errors }"
                      name="description_ar"
                      
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BModal , VBModal, BListGroup, BListGroupItem,BSpinner,BFormFile
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import checkError from '@/helperFunctions/helper'

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
    BListGroup, BListGroupItem,BFormFile
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      id:'',
      title: '',
      title_ar: '',
      description:'',
      description_ar:'',
      code: '',
      status:1,
      type:'parent',
      statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Drafted', value: 0 },
      ],
      typeOptions : [
        { label: 'Parent', value: 'parent' },
        { label: 'Child', value: 'child' },
      ],
      parent_id:null,
      categoryOptions : [],
     headersObj  : { 
        headers: 
        { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Methods': 'POST,post',
        }
    
      },

      formErrors : {
        title:null,
        status : null,
        type : null,
        description:null,
        code:null,
        parent_id:null,
      },
      isLoading:false,

      title_seo_en: '',
      title_seo_ar: '',
      description_seo_en:'',
      description_seo_ar: '',
      image_seo:null,
    }
  },
  mounted(){
    this.isLoading = true
    this.getCode()
    //fetch categories
    var url = `personalityCategories`
    axios
    .get(url)
    .then(response => {
      this.isLoading = false
      console.log('personalityCategories : ' , response.data)
      let personalityCategories = response.data.data
      for( let s=0 ; s< personalityCategories.length; s++  ){
          this.categoryOptions.push( {label: personalityCategories[s].title  , value: personalityCategories[s].id })
      }
    })
    .catch(error => {
      this.isLoading = false
      console.log( 'error fetch course', error)
      })
  },
  methods: {

    submitForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
         this.isLoading = true 
          // var formData = {
          //     title: this.title,
          //     title_en: this.title,
          //     title_ar: this.title_ar,
          //     status : this.status,
          //     type : this.type,
          //     description:this.description,
          //     description_en:this.description,
          //     description_ar:this.description_ar,
          //     code:this.code,
          //     title_seo_en : this.title_seo_en,
          //     title_seo_ar: this.title_seo_ar,
          //     description_seo_en: this.description_seo_en,
          //     description_seo_ar: this.description_seo_ar
          // }
          // if ( this.type == 'child' ){
          //   formData['parent_id'] = this.parent_id
          // }

          // var image_seo = document.querySelector('#image_seo')

          // if( image_seo.files[0] ){
          //   formData["image_seo"] = image_seo.files[0] 
          // }

          var formData = new FormData();
          formData.append("title", this.title )
          formData.append("title_en", this.title )
          formData.append("title_ar", this.title_ar )
          formData.append("status", this.status )
          formData.append("type", this.type )
          formData.append("description", this.description )
          formData.append("description_en", this.description )
          formData.append("description_ar", this.description_ar )
          formData.append("code", this.code )
          formData.append("title_seo_en", this.title_seo_en )
          formData.append("title_seo_ar", this.title_seo_ar )
          formData.append("description_seo_en", this.description_seo_en )
          formData.append("description_seo_ar", this.description_seo_ar )
          if ( this.type == 'child' ){
            formData.append("parent_id", this.parent_id )
          }
          var image_seo = document.querySelector('#image_seo')
           if( image_seo.files[0] ){
            formData.append("image_seo", image_seo.files[0] )
          }
          

          
        
          axios
            .post(`personalityCategories`, formData, this.headersObj)
            .then(response => {
                this.isLoading = false 
                router.replace('/apps/personality/categories/list')
                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Saved Successfully`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
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

                var errorsResponse = error.response.data.errors
                this.formErrors.title = checkError(errorsResponse.title)
                this.formErrors.status = checkError(errorsResponse.status)
                this.formErrors.type = checkError(errorsResponse.type)
                this.formErrors.description = checkError(errorsResponse.description)
                this.formErrors.code = checkError(errorsResponse.code)
                this.formErrors.parent_id = checkError(errorsResponse.parent_id)

                
            })

          }
      }) 
    },
    getCode(){
        this.isLoading = true
        //fetch auto generated code
        var url = `personalityCategories/max/code`
        axios
        .get(url)
        .then(response => {
          this.isLoading = false
            console.log('personalityCategories/max/code : ' , response.data.data)
            this.code = response.data.data
        })
        .catch(error => {
            console.log( 'error personalityCategories/max/code', error)
        })
    },
  },

}
</script>


