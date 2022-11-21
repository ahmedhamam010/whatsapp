<template>
  <div class="position-relative">
    <b-row>
      <b-col cols="12">
        
        <b-card title="Referral Settings">
            <div>
            <validation-observer ref="simpleRules">
              <!---->
               <b-form
                  ref="form"
                  class="repeater-form"
                  @submit.prevent="editForm()"
              >

              <b-row>

                  <!-- Inviter Money -->
                  <b-col md="6">
                      <b-form-group
                      label="Inviter Money"
                      label-for="inviter-money"
                     
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="Inviter Money"
                      rules="required|integer"
                      
                      >
                      <b-form-input
                          id="inviter-money"
                          type="text"
                          v-model="referer_wallet"
                          :state="errors.length > 0 ? false:null"
                          
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                      </b-form-group>
                  </b-col>

                  <!-- Invitee Money -->
                  <b-col md="6">
                      <b-form-group
                      label="Invitee Money"
                      label-for="invitee-money"
                     
                      >
                      <validation-provider
                      #default="{ errors }"
                      name="Invitee Money"
                      rules="required|integer"
                      
                      >
                      <b-form-input
                          id="invitee-money"
                          type="text"
                          v-model="referee_wallet"
                          :state="errors.length > 0 ? false:null"
                          
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
     referer_wallet:null, 
     referee_wallet:null,
    }
  },
  mounted() {
    
    //get referer
    axios
    .get(`referer-settings-list`)
    .then(response => {

       
    
    this.referer_wallet = response.data.data[0].referer_wallet
    this.referee_wallet = response.data.data[0].referee_wallet 
    
    
    })
    .catch(error => {console.log( 'error fetch currencies', error)})

  

  },
  methods: {

    editForm: function () {

         this.$refs.simpleRules.validate().then(success => {
        if (success) {
          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'  
          var formData = new FormData();
          formData.append("referer_wallet", this.referer_wallet )
          formData.append("referee_wallet", this.referer_wallet )
        
          axios
            .post(`referer-settings-update?id=1`, formData)
            .then(response => {
                
                document.getElementById('loading-spinner').style.display = 'none'  
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
