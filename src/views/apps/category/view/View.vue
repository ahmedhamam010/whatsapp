<template>
  <div class="position-relative">
      <b-card title="Category Details">
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
                      Seo Name EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{name_seo_en}}
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
                    {{name_seo_ar}}
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
     name : '',
     name_ar : '',
     slug : '',
     status : '',
     name_seo_en:'',
     name_seo_ar:'',
     description_seo_en:'',
     description_seo_ar:'',
     image_seo:'',
    }
  },
  mounted(){
    axios
          .get(`categories/${this.id}`)
          .then(response => {
            console.log('response.data.category',response.data.category)
            this.name = response.data.category.name
            this.name_ar = response.data.category.name_ar
            this.slug = response.data.category.slug
            this.status = response.data.category.status ? 'Active' : 'Inactive'
            this.name_seo_en = response.data.category.name_seo_en
            this.name_seo_ar = response.data.category.name_seo_ar
            this.description_seo_en = response.data.category.description_seo_en
            this.description_seo_ar = response.data.category.description_seo_ar
            this.image_seo = response.data.category.image_seo
            
          })
          .catch(error => {
            console.log(error.response.data.errors)
          })
  }

    
 
}
</script>

