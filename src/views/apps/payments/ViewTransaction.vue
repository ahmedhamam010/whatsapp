<template>
  <div class="position-relative">
      <b-card title="Transaction Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">


              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      username
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
                      Consultant
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{consultant}}
                    </b-col>

                  </b-row>
               </b-list-group-item>
              
              
               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Txn Id
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{txn_id}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Type
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{type}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Payment Method
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{payment_method}}
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
                      Net Amount
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{net_amount}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Currency
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{currency}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Commission
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{commission}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Fees
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{fees}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Pay To
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{pay_to}}
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

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Error Message
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    need backend
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
    txn_id:'',
    type:'',
    payment_method:'',
    amount:'',
    net_mount:'',
    currency:'',
    commission:'',
    fees:'',
    pay_to:'',
    status:'',
    username: '',
    consultant:'',
     
    }
  },
  mounted(){
    axios
          .get(`get-transaction/show/${this.id}`)
          .then(response => {
            console.log('response.data.show.transaction',response.data)
            let data = response.data.data
            this.txn_id = data.txn_id
            this.type = data.type
            this.payment_method = data.payment_method
            this.amount = data.amount
            this.net_amount = data.net_amount
            this.currency = data.currency
            this.commission = data.commission
            this.fees = data.fees
            this.pay_to = data.pay_to
            this.status = data.status
            this.username = data.user.username
            this.consultant = data.consultation == null ? 'Nurabi' : data.consultation.username
            // this.name_ar = response.data.category.name_ar
            // this.slug = response.data.category.slug
            // this.status = response.data.category.status ? 'Active' : 'Inactive'
            // this.name_seo_en = response.data.category.name_seo_en
            // this.name_seo_ar = response.data.category.name_seo_ar
            // this.description_seo_en = response.data.category.description_seo_en
            // this.description_seo_ar = response.data.category.description_seo_ar
            // this.image_seo = response.data.category.image_seo
            
          })
          .catch(error => {
            console.log(error.response.data.errors)
          })
  }

    
 
}
</script>

