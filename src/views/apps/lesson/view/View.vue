<template>
  <b-row>
    <b-col md="12">
      <b-card>
        <b-row>
          <b-col md="12" class="mb-2">
            <h4>Lesson Details</h4>
          </b-col>
          <b-col md="6" v-if="content_type == 'video'">
            <video class="w-100" controls id="video">
              <source :src="video" type="video/mp4">
            </video>
          </b-col>
          <b-col>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Title EN</span>
              </b-col>
              <b-col sm="8">
                  {{ title }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Title AR</span>
              </b-col>
              <b-col sm="8">
                  {{ title_ar }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="FolderIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Course EN</span>
              </b-col>
              <b-col sm="8">
                  {{ course }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="FolderIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Course AR</span>
              </b-col>
              <b-col sm="8">
                  {{ course_ar }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="ListIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Section EN</span>
              </b-col>
              <b-col sm="8">
                  {{ section }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="ListIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Section ٌِِِِِِAR</span>
              </b-col>
              <b-col sm="8">
                  {{ section_ar }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="EyeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Privacy</span>
              </b-col>
              <b-col sm="8">
                  {{ privacy ? 'Yes' : 'No' }}
              </b-col>
            </b-row>
            <template v-if="content_type == 'meet'">
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Start Date Session</span>
              </b-col>
              <b-col sm="8">
                  {{ start_date_session }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Start Time</span>
              </b-col>
              <b-col sm="8">
                  {{ start_time }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Session Duration</span>
              </b-col>
              <b-col sm="8">
                  {{ session_duration }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Consultant Name</span>
              </b-col>
              <b-col sm="8">
                  {{ consultation_name }}
              </b-col>
            </b-row>
            </template>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Content Type</span>
              </b-col>
              <b-col sm="8">
                  {{ content_type }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="TwitchIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Seo Title EN</span>
              </b-col>
              <b-col sm="8">
                  {{ title_seo_en }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="TwitchIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Seo Title AR</span>
              </b-col>
              <b-col sm="8">
                  {{ title_seo_ar }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="TwitchIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Seo Description EN</span>
              </b-col>
              <b-col sm="8">
                  {{ description_seo_en }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="TwitchIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Seo Description AR</span>
              </b-col>
              <b-col sm="8">
                  {{ description_seo_ar }}
              </b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col sm="4">
                  <feather-icon
                    icon="TwitchIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Seo Image</span>
              </b-col>
              <b-col sm="8">
                  <b-avatar
                    :src="image_seo"
                    size="104px"
                    rounded
                  />
              </b-col>
            </b-row>
            
            
          </b-col>  
        </b-row>
      </b-card>
    </b-col>
    
  </b-row>
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'

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
  },
  directives: {
    Ripple,
  },
  data () {
    return{
    
      id : router.currentRoute.params.id,
      video : '',
      duration : '',
      title : '',
      title_ar : '',
      privacy : '',
      preview: '',
      description : '',
      description_ar : '',
      section : '',
      section_ar : '',
      course : '',
      course_ar : '',
      title_seo_en:'',
      title_seo_ar:'',
      description_seo_en:'',
      description_seo_ar:'',
      image_seo:'',
      content_type:'',
      start_date_session:'',
      start_time:'',
      session_duration:'',
      consultation_name:'',
    }
  },
  mounted() {
    axios
    .get(`lessons/${this.id}`)
    .then(response => {
      console.log( 'fetch lesson' , response.data.lesson )

      

      this.duration = response.data.lesson.duration
      this.title = response.data.lesson.title
      this.privacy = response.data.lesson.privacy
      this.preview = response.data.lesson.preview
      this.description = response.data.lesson.description
      this.section = response.data.lesson.section_title
      this.course = response.data.lesson.course_title
      this.description_ar = response.data.lesson.description_ar
      this.section_ar = response.data.lesson.section_title_ar
      this.course_ar = response.data.lesson.course_title_ar
      this.title_ar = response.data.lesson.title_ar
      this.title_seo_en = response.data.lesson.title_seo_en
      this.title_seo_ar = response.data.lesson.title_seo_ar
      this.description_seo_en = response.data.lesson.description_seo_en
      this.description_seo_ar = response.data.lesson.description_seo_ar
      this.image_seo = response.data.lesson.image_seo
      this.content_type = response.data.lesson.content_type
      if( this.content_type == 'video' || this.content_type == 'record' ){
      this.video = response.data.lesson.attachment.length > 0 ? response.data.lesson.attachment[0].aws_path : ''
      var video = document.getElementById('video')
      video.load();
      }
      if( this.content_type == 'meet' ){
            this.start_date_session = response.data.lesson.start_date_session.slice(0,10)
            this.start_time = response.data.lesson.start_time
            this.session_duration = response.data.lesson.session_duration
            this.price_per_period = response.data.lesson.price_per_period
            this.consultation_name = response.data.lesson.consultation_name
          }
    })


  },
  

}
</script>

<style scoped>
video{
    border-radius: 5px;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
}
</style>