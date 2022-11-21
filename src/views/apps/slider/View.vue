<template>
  <div class="position-relative">
      <b-card title="Slider Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">
              
              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Name EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{name}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Name AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{name_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      URL
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{url}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Display In
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{display_in}}
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
                    {{active}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

              
               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      image EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    
                    <b-img :src="image" fluid style="width: 400px; height: 200px;"  />
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      image AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    <b-img :src="image_ar" fluid style="width: 400px; height: 200px;"  />
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner,BImg
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
    BListGroup, BListGroupItem , BSpinner,BImg
  
  },
  data(){
    return{
     id : router.currentRoute.params.id,
     name:'',
     name_ar:'',
     url:'',
     active:'',
     display_in:'',
     image:'',
     image_ar:'',
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
        .get(`sliders/${this.id}?not_mobile=1`)
        .then(response => {
        this.isLoading = false 
        console.log('slider record : ' , response.data)
        this.name = response.data.data.name
        this.name_ar = response.data.data.name_ar
        this.url = response.data.data.url
        this.active = response.data.data.active ? 'Active' : 'Inactive'
        this.display_in = response.data.data.display_in
        this.image = response.data.data.image_path
        this.image_ar = response.data.data.image_ar_path
        
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



