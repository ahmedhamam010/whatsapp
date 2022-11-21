<template>
  <b-row>
    <b-col md="12">
    <section id="faq-search-filter">
    <b-card
        no-body
        class="faq-search"
        :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">
            {{ title }} <br> {{ title_ar }}
          </h2>
          <div class="text-center">
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="flat-secondary"
                class="mb-2"
                :to="{ name: 'apps-questionnaires-edit', params: { id: id } }"
              >
                <feather-icon
                  icon="EditIcon"
                  class="mr-50"
                />
                <span class="align-middle">Edit Survey</span>
              </b-button>
            </div>

          
        </b-card-body>
    </b-card>
    </section>
    </b-col>

    <b-col md="12">
    <b-card>
      <b-list-group class="mt-2">
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
    </b-card>
    </b-col>  

    <b-col md="12">
      <b-card title="Survey Questions">
            <app-collapse
              accordion
              :type="collapseType"
              
            >

              <app-collapse-item v-for="(question , index) in surveyDetails" :key="index" :title="question.question">
                <h5 style="padding: 0.438rem 1rem;">
                  Question EN: {{question.question}}<br><br>
                  Question AR: {{question.question_ar}}
                  </h5>
                <!--rating-->   
                <div>
                  <b-form-rating
                    no-border
                    v-model="question.rate"
                    readonly
                    show-value
                    variant="warning"
                    inline
                    precision="2"
                  />
                </div>
                <!--/rating-->  
              </app-collapse-item>


            </app-collapse>
      </b-card>
    </b-col>

  </b-row>
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar, BMedia , BMediaAside, BMediaBody, BCardBody, BFormRating } from 'bootstrap-vue'
import router from '@/router'
import axios from '@axios'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTab,
    BTabs,
    BCardText,
    BCardTitle,
    BButton,
    AppCollapse,
    AppCollapseItem,
    BFormRadioGroup,
    BFormRadio,
    BFormGroup,
    BListGroup,
    BListGroupItem,
    BDropdown,
    BDropdownItem,
    BAvatar,
    BMedia,
    BMediaAside,
    BMediaBody,
    BCardBody,
    BFormRating,

  },
  directives: {
    Ripple,
  },
  mounted() {

    //fetch survey record
    axios
    .get(`questionnaires/${this.id}`)
    .then(response => {
      console.log("fetch survey ",response)
      // this.course = response.data.questionnaire.course.title
      this.title = response.data.questionnaire.title
      this.title_ar = response.data.questionnaire.title_ar
      this.type = response.data.questionnaire.type
      for( let q=0 ; q< response.data.questionnaire.questionnaire_questions.length; q++  ){
          this.surveyDetails.push( 
            {
              'question': response.data.questionnaire.questionnaire_questions[q].question ,
              'question_ar': response.data.questionnaire.questionnaire_questions[q].question_ar ,
              'rate' : response.data.questionnaire.questionnaire_questions[q].rate_questions
            })
      }
      this.title_seo_en = response.data.questionnaire.title_seo_en
      this.title_seo_ar = response.data.questionnaire.title_seo_ar
      this.description_seo_en = response.data.questionnaire.description_seo_en
      this.description_seo_ar = response.data.questionnaire.description_seo_ar
      this.image_seo = response.data.questionnaire.image_seo
      
      console.log(  'edited array ' , this.surveyDetails )
    })
    .catch(error => console.log(error))

  },
  data() {
    return {
    id : router.currentRoute.params.id,
    title : '',
    title_ar : '',
    type:'',
    collapseType: 'shadow',
    surveyDetails : [],
    title_seo_en:'',
    title_seo_ar:'',
    description_seo_en:'',
    description_seo_ar:'',
    image_seo:'',
    }
  },
 
 
  
 
}
</script>


<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>