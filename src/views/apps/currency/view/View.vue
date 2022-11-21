<template>
  <div class="position-relative">
      <b-card title="Currency Details">
      
          <b-list-group>
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
                  {{ name }}
                </b-col>

              </b-row>
            </b-list-group-item>

            <b-list-group-item>
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Code
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >
                  {{ code }}
                </b-col>

              </b-row>
            </b-list-group-item>

            <b-list-group-item>
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Symbol
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >
                  {{ symbol }}
                </b-col>

              </b-row>
            </b-list-group-item>
          </b-list-group>
       

      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'




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
    BDropdown,
    BDropdownItem,
    BListGroup,
    BListGroupItem,
  
  },
  data(){
    return{
      id: router.currentRoute.params.id,
      name: '',
      code: '',
      symbol: '',
    

    }
  },
  directives: {
    Ripple,
  },
  mounted(){
    
    //fetch currency data
    axios
    .get(`currencies/${router.currentRoute.params.id}`)
    .then(response => {

       console.log( 'currency is' , response.data.languages )
    
    this.name = response.data.currency.name
    this.code = response.data.currency.code
    this.symbol = response.data.currency.symbol   
    
    })
    .catch(error => {console.log( 'error fetch currencies', error)})
  },
  methods:{
     downloadTask(urlTask){
      window.open(urlTask); 
    },
    changeApproveStatus(id , status ){
     //change status
     
      var statusMsg = status == 'finished' ? 'Accepted Successfully' : 'Rejected Successfully';
      var formData = new FormData();
      formData.append("status", status);
      formData.append("_method", "put");
       axios
      .post(`practicalTasksUser/${id}`, formData, this.headersObj)
      .then(response => {
          this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  title: `${statusMsg}`,
                  icon: 'CoffeeIcon',
                  variant: 'success',
                },
          })
           router.replace('/apps/pending/practicalTasks/list')
      } )
      .catch(error => {

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
     //change status
    },
  }

    
 
}
</script>

