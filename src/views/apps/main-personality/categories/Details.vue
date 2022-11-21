<template>
  <div class="position-relative">
      <b-card :title="type == 'parent' ? 'Category Details' : 'Sub Category Details'">
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
                    {{title}}
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

               <b-list-group-item v-if="parent">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Parent Category En
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{parent}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item v-if="parent_ar">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Parent Category Ar
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{parent_ar}}
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

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      ID
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{code}}
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
                      Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{description}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{description_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

              
               

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Seo Name EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{title_seo_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Seo Name AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{title_seo_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Seo Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{description_seo_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Seo Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{description_seo_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Seo Image
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    <b-avatar
                        :src="image_seo"
                        size="104px"
                        rounded
                      />
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
     title : '',
     title_ar : '',
     status:'',
     code:'',
     type:'parent',
     parent: null,
     parent_ar: null,
     description:'',
     description_ar:'',
     title_seo_en:'',
     title_seo_ar:'',
     description_seo_en:'',
     description_seo_ar:'',
     image_seo:'',
    }
  },
  mounted(){
    axios
          .get(`personalityCategories/${this.id}`)
          .then(response => {
            console.log('response.data.category',response.data)
            this.title = response.data.data.title
            this.title_ar = response.data.data.title_ar
            this.code = response.data.data.code
            this.type = response.data.data.type
            this.description = response.data.data.description
            this.description_ar = response.data.data.description_ar
            this.status = response.data.data.status ? 'Active' : 'Inactive'
            this.title_seo_en = response.data.data.title_seo_en
            this.title_seo_ar = response.data.data.title_seo_ar
            this.description_seo_en = response.data.data.description_seo_en
            this.description_seo_ar = response.data.data.description_seo_ar
            this.image_seo = response.data.data.image_seo
            if(this.type == 'child'){
              this.parent = response.data.data.parent.title
              this.parent_ar = response.data.data.parent.title_ar
            }
            
          })
          .catch(error => {
            console.log(error.response)
          })
  }

    
 
}
</script>

