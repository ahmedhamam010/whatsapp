<template>
  <div class="position-relative">
      <b-card title="Job Title Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">
              
              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Title EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{title_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Title AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{title_ar}}
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
                    {{status}}
                    </b-col>

                  </b-row>
               </b-list-group-item>
                
            </b-list-group>

            <template>
                <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
                <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
                </div>
            </template>
       <!--new ui-->
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner
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
    BListGroup, BListGroupItem , BSpinner
  
  },
  data(){
    return{
     id : router.currentRoute.params.id,
     title_en:'',
     title_ar:'',
     status:null,
     isLoading: true
    }
  },
  mounted(){
    this.fectchRecord();
  },
  methods:{
      fectchRecord:function(){

        //fetch record

        this.isLoading = true
        axios
        .get(`job-title/show/${this.id}`)
        .then(response => {
        this.isLoading = false 
        console.log('job-title/show record : ' , response.data)
        this.title_en = response.data.data.title_en
        this.title_ar = response.data.data.title_ar
        this.status = response.data.data.status ? 'Active' : 'Inactive'

        })
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

            console.log( 'slider error', error)
        })
    },
  }

    
 
}
</script>



