<template>
  <div class="position-relative">
      <b-card title="Field & Goal Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">
              
              <b-list-group-item class="name-en">
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
                    {{name_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="name-ar">
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


               <b-list-group-item v-if="parent" class="feild-parent-en">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Parent
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{parent}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item v-if="parent" class="feild-parent-ar d-none">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Parent Ar
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{parent_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="feild-status">
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

               <b-list-group-item v-if="goals" class="feild-goals" >
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Goals
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{goals}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="title-seo-en">
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

                <b-list-group-item class="title-seo-ar">
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

                <b-list-group-item class="description-seo-en">
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

                <b-list-group-item class="description-seo-ar">
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

                <b-list-group-item class="seo-image">
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
import getDomain from '@/helperFunctions/getDomain'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'



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
     name_en:'',
     name_ar:'',
     status:null,
     parent:null,
     goals:'',
     parent_ar:null,
     title_seo_en:'',
     title_seo_ar:'',
     description_seo_en:'',
     description_seo_ar:'',
     image_seo:null,
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
        .get(getDomain('no') +  `trackingsystem/fieldsGoals/show/${this.id}`)
        .then(response => {
        this.isLoading = false 
        console.log('trackingsystem/fieldsGoals/show/ : ' , response.data.data)
        let record = response.data.data
        this.name_en = record.name_en
        this.name_ar = record.name_ar
        this.parent = record.parent
        this.status = record.is_published ? 'Published' : 'Drafted'
        this.title_seo_en = record.seo_title_en
        this.title_seo_ar = record.seo_title_ar
        this.description_seo_en = record.seo_desc_en
        this.description_seo_ar = record.seo_desc_ar
        this.image_seo = record.seo_image
        if( record.goals ){
          for( let g=0 ; g < record.goals.length ; g++ ){
            this.goals += record.goals[g].name_en + ', '
          }
          this.goals = this.goals.slice(0, -2)
        }
        // this.parent = record.parent.title
        // this.parent_ar = record.parent.title_ar
        

        

        })
        .catch(error => {

            this.isLoading = false 
            this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                title: `${error}`,
                icon: 'CoffeeIcon',
                variant: 'danger',
                },
            })

            console.log( 'speciality error', error)
        })
    },
  }

    
 
}
</script>



