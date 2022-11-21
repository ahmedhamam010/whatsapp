<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Comission Details">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="editForm()"
              >

              <b-row>

                  <!-- Item value -->
                  <b-col md="6">
                      <b-form-group
                      label="Comission Percentage"
                      label-for="value"
                     
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="value"
                      rules="required|integer"
                      
                      >
                      <b-form-input
                          id="value"
                          type="text"
                          v-model="value"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- Item active -->
                  <b-col md="6">
                      <b-form-group
                      label="Is Active"
                      label-for="active"
                      rules="required"
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="active"
                      rules="required"
                      
                      >
                      <v-select
                          v-model="active"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="activeOptions"
                          :reduce="val => val.value"
                          :clearable="false"
                          input-id="active"

                        />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
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

    <template>
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>

   
  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BCard , BFormTextarea, BModal , VBModal, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
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
    ValidationProvider,
    ValidationObserver,
    BFormTextarea,
    BModal,
    VBModal,
    BListGroup, BListGroupItem,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      id:'',
    value: '',
    active: '',
     activeOptions : [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          },
    }
  },
  mounted() {
    
    //fetch currency data
    axios
    .get(`commissions/show?key=commission`)
    .then(response => {

       console.log( 'comsion is' , response.data )
    
    this.value = response.data.data.value
    this.active = response.data.data.active 
    this.id = response.data.data.id 
    console.log(this.value,this.active)
    
    })
    .catch(error => {console.log( 'error fetch currencies', error)})

  

  },
  methods: {

    editForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'  
          var formData = {
              value: this.value,
              active: this.active,
          }
        
          axios
            .put(`commissions/${this.id}/update`, formData, this.headersObj)
            .then(response => {
                router.replace('/apps/currency/list')

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
            console.log('currency error' , error)
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

              
          })

          }
      })
        
        
    },

   
    
    

  },

}
</script>

<style lang="scss" scoped>

.loading-spinner{
   display:none;
}
</style>
