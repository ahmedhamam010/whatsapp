<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Edit Speciality">
            <div>
            <validation-observer ref="simpleRules">  
            <b-form
                ref="form"
                class="repeater-form"
                @submit.prevent="submitForm()"
            >

                <b-row>

                   

                    <!-- Title EN -->
                    <b-col md="6">
                        <b-form-group
                        label="Title EN *"
                        label-for="title_en"
                        >
                        <validation-provider
                        #default="{ errors }"
                        name="title EN"
                        rules="required"  
                        >
                        <b-form-input
                            id="title_en"
                            type="text"
                            v-model="title_en"
                            :state="errors.length > 0 ? false:null"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        <div class="invalid-feedback d-block" v-if="formErrors.title_en">{{ formErrors.title_en }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!-- Title AR -->
                    <b-col md="6">
                        <b-form-group
                        label="Title AR *"
                        label-for="title_ar"
                        >
                        <validation-provider
                        #default="{ errors }"
                        name="title AR"
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
                        <div class="invalid-feedback d-block" v-if="formErrors.title_ar">{{ formErrors.title_ar }}</div>
                        </b-form-group>
                        
                    </b-col>

                    <!--parent field-->
                    <!-- <b-col md="4">
                        <b-form-group
                            label="Parent"
                            label-for="parent"
                            
                            >
                            <v-select
                                v-model="parent_id"
                                :options="parentOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Status"
                            />
                            <div class="invalid-feedback d-block" v-if="formErrors.parent_id">{{ formErrors.parent_id }}</div>
                            
                            </b-form-group>
                    </b-col> -->


                    <!--type field-->
                    <b-col md="4">
                        <b-form-group
                            label="Type *"
                            label-for="type"
                            
                            >
                            
                            <validation-provider
                            #default="{ errors }"
                            name="type"
                            rules="required"  
                            >
                            <v-select
                                v-model="type"
                                :options="typeOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="type"
                                @input="fetchFields($event)"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.type">{{ formErrors.type }}</div>
                            
                            </b-form-group>
                    </b-col>

                    <!--type field-->
                    <b-col md="4">
                        <b-form-group
                            label="Field *"
                            label-for="field"
                            
                            >
                            
                            <validation-provider
                            #default="{ errors }"
                            name="consultation"
                            rules="required"  
                            >
                            <v-select
                                v-model="consultation_field_id"
                                :options="fieldOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="field"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            <div class="invalid-feedback d-block" v-if="formErrors.consultation_field_id">{{ formErrors.consultation_field_id }}</div>
                            
                            </b-form-group>
                    </b-col>

                    

                    

                    <!--status field-->
                    <b-col md="4">
                        <b-form-group
                            label="Status"
                            label-for="status"
                            
                            >
                            <v-select
                                v-model="status"
                                :options="statusOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="Status"
                            />
                            <div class="invalid-feedback d-block" v-if="formErrors.status">{{ formErrors.status }}</div>
                            
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BFormFile
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { BSpinner } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'

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
    BFormTextarea,
    BFormFile,
    ValidationProvider, ValidationObserver
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
    id : router.currentRoute.params.id,
    title_en:null,
    title_ar:null,
    // parent_id:null,
    type:null,
    status : 1 ,
    consultation_field_id:null,
    statusOptions : [
        { label: 'Active', value: 1 },
        { label: 'Inactive', value: 0 }
    ],
    parentOptions : [],
    typeOptions : [
        { label: 'Organization', value: 'Organization' },
        { label: 'Consultant', value: 'consultant' },
        { label: 'Teacher', value: 'teacher' },
    ],
    fieldOptions:[],
    
    formErrors : {
      title_en:null,
      title_ar:null,
      // parent_id:null,
      type:null,
      status:null,
      consultation_field_id:null
      

    },
    
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          }  ,
    
     
    }
  },

  mounted(){
    

        //show spinner
        document.getElementById('loading-spinner').style.display = 'block'

        axios
        .get(`specialty/show/${this.id}`)
        .then(response => {
        //hide spinner
        document.getElementById('loading-spinner').style.display = 'none'    
        console.log('specialty/show record: ' , response.data)
        this.title_en = response.data.data.title_en
        this.title_ar = response.data.data.title_ar
        this.type = response.data.data.type
        this.fetchFields(this.type)
        this.consultation_field_id = response.data.data.consultation_field_id
        // this.parent_id = response.data.data.parent_id
        this.status =  response.data.data.status
        
        
        })
        .catch(error => {
            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none' 

            this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                title: `${error.response.data.msg}`,
                icon: 'CoffeeIcon',
                variant: 'danger',
                },
            })

            console.log( 'slider error', error)
        })

    //fetch specialities
    // var url = `specialty/index`
    //     if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
    //      url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
    //     }
    // axios
    // .get(url)
    // .then(response => {
    //   console.log('specialty/index : ' , response.data)
    //   for( let s=0 ; s< response.data.data.length; s++  ){
    //       this.parentOptions.push( {label: response.data.data[s].title_en  , value: response.data.data[s].id })
    //   }
    // })
    // .catch(error => {
    //   console.log( 'error fetch specialty/index', error)
    // })



    //fetch fields data
    axios
    .get(`fields/consultation/index/consultant`)
    .then(response => {
      
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

  
  methods: {
    
    submitForm: function () {

        this.$refs.simpleRules.validate().then(success => {
        if (success) {

        //show spinner
        document.getElementById('loading-spinner').style.display = 'block'
     
        var formDataInputs = new FormData();
        formDataInputs.append("_method", "put" )
        formDataInputs.append("title_en", this.title_en )
        formDataInputs.append("title_ar", this.title_ar )
        // formDataInputs.append("parent_id", this.parent_id )
        formDataInputs.append("type", this.type )
        formDataInputs.append("consultation_field_id", this.consultation_field_id )
        formDataInputs.append("status", this.status )
        
    

        axios
          .post(`specialty/update/${this.id}`, formDataInputs, this.headersObj)
          .then(response => {
              console.log('specialty succuss' , response)
              router.replace('/apps/speciality/list')

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

            // this.$toast({
            //     component: ToastificationContent,
            //     position: 'top-right',
            //     props: {
            //     title: `${error.response.data.msg}`,
            //     icon: 'CoffeeIcon',
            //     variant: 'danger',
            //     },
            // })
              
            console.log('slider error' , error.response.data.message)

            //hide spinner
            document.getElementById('loading-spinner').style.display = 'none'
            
            var errorsResponse = error.response.data.errors
            this.formErrors.title_en = checkError(errorsResponse.title_en)
            this.formErrors.title_ar = checkError(errorsResponse.title_ar)
            this.formErrors.status = checkError(errorsResponse.status)
            this.formErrors.type = checkError(errorsResponse.type)
            this.formErrors.consultation_field_id = checkError(errorsResponse.consultation_field_id)
          })

          }
      })
    },
    fetchFields(type){
       document.getElementById('loading-spinner').style.display = 'block'
      //fetch fields data
      axios
      .get(`fields/consultation/index/${type}`)
      .then(response => {
         document.getElementById('loading-spinner').style.display = 'none'
        console.log( 'field records ' , response.data )
      this.fieldOptions=[]
          let fields = response.data.data
        for( let u =0 ; u < fields.length ; u++ ){
            this.fieldOptions.push({ label:fields[u].title , value:fields[u].id  })
        } 
      
      })
      .catch(error => {
           document.getElementById('loading-spinner').style.display = 'none'
          console.log( 'error fetch field record', error)
      })
    }
    

  },
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>

