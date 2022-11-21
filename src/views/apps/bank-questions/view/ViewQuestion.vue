<template>
  <div class="position-relative">
      <b-card title="Bank Question Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">
              
              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Question EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{question}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Question AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{question_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Answer EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{answer}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Answer AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{answer_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <!-- <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Course EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{course}}
                    </b-col>

                  </b-row>
               </b-list-group-item> -->

               <!-- <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Course AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{course_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item> -->

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Views
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{views}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Likes
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{likes}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Dislikes
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{dislikes}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <!-- <b-list-group-item>
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
               </b-list-group-item> -->

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
     question : '',
     question_ar : '',
     answer:'',
     answer_ar : '',
     course: '',
     course_ar: '',
     views:null,
     likes:null,
     dislikes:null,
     status : '',
     title_seo_en:'',
     title_seo_ar:'',
     description_seo_en:'',
     description_seo_ar:'',
     image_seo:'',
     isLoading: true
    }
  },
  mounted(){
    this.fectchQuestion();
  },
  methods:{
      fectchQuestion:function(){

        //fetch bank question

        this.isLoading = true
        axios
        .get(`bank-questions/${this.id}`)
        .then(response => {
        this.isLoading = false 
        console.log('bank question : ' , response.data)
        this.answer = response.data.data[0].answer
        this.question =  response.data.data[0].question
        this.question_ar =  response.data.data[0].question_ar
        // this.course = response.data.data[0].course.title
        // this.course_ar = response.data.data[0].course.title_ar
        this.answer_ar = response.data.data[0].answer_ar
        
        this.title_seo_en = response.data.data[0].title_seo_en
        this.title_seo_ar = response.data.data[0].title_seo_ar
        this.description_seo_en = response.data.data[0].description_seo_en
        this.description_seo_ar = response.data.data[0].description_seo_ar
        this.image_seo = response.data.data[0].image_seo

        this.views = response.data.data[0].views
        this.likes = response.data.data[0].likes
        this.dislikes = response.data.data[0].dislikes
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

            console.log( 'bank question error', error)
        })
    },
  }

    
 
}
</script>



