<template>
  <div class="position-relative">
      <b-card title="Payment Request Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">


              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Name
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{username}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

              
              
              
               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Bank Name
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{bank_name}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Iban Number
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{iban_number}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Bank Account Number
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{bank_account_number}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Bank Account Name
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{bank_account_name}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Bank Account Address
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{bank_account_address}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Amount
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{amount}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               
               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Status
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{status == 'pending' ? 'failed' : status }}
                    </b-col>

                  </b-row>
               </b-list-group-item>

            </b-list-group>
       <!--new ui-->
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'



export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormTextarea,
    BListGroup, BListGroupItem
  
  },
  data(){
    return{
    id : router.currentRoute.params.id,
    username:'',
    bank_name:'',
    iban_number:'',
    bank_account_number:'',
    bank_account_name:'',
    bank_account_address:'',
    amount:'',
    status:'',
   
     
    }
  },
  mounted(){
    axios
          .get(`collection-request/show/${this.id}`)
          .then(response => {
            console.log('response.data.show.request',response.data)
            let data = response.data.data
            this.username = data.user.username
            this.bank_name = data.bank_name
            this.iban_number = data.iban_number
            this.bank_account_number = data.bank_account_number
            this.bank_account_name = data.bank_account_name
            this.bank_account_address = data.bank_account_address
            this.amount = data.amount
            this.status = data.status
          })
          .catch(error => {
            console.log(error.response.data.errors)
          })
  }

    
 
}
</script>

