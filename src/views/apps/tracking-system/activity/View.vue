<template>
  <div class="position-relative">
      <b-card title="Activity Details">
       <!--new ui-->
       <!-- information content -->
            <b-list-group class="mt-2">

              <b-list-group-item class="tracking-system">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Tracking System
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{tracking_system}}
                    </b-col>

                  </b-row>
               </b-list-group-item>
              
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

               <b-list-group-item class="intro-video">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Intro Video
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >

                    <video controls id="introVideo" style="width:600px">
                      <source :src="intro_video" type="video/mp4">
                    </video>

                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="short-desc-en">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Short Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                   {{short_desc_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="short-desc-ar">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Short Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{short_desc_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="long-desc-en">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Long Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                  {{long_desc_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="long-desc-en">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Long Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                   {{long_desc_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="activity-video">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Video
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >

                    <video controls id="video" style="width:600px" v-if="video">
                      <source :src="video" type="video/mp4">
                    </video>
                    <span v-else>No Video Found</span>
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="activity-quiz">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Quiz
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >

                    {{quiz}}

                    </b-col>

                  </b-row>
               </b-list-group-item>

               

               <b-list-group-item class="attachment-pdf-files">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Attachment PDF Files
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >

                    <b-button
                      v-for="(attach ,index) in attachments"
                      :key="attach.id"
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-primary"
                      @click="downloadFile(attach.media_path)"
                      class="mr-1"
                    >
                      <feather-icon
                        icon="DownloadCloudIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Attachment {{ index+1 }}</span>
                    </b-button>

                    

                    </b-col>

                  </b-row>
               </b-list-group-item>

               

               <b-list-group-item class="repetition-criteria">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Repetition Criteria
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{repetition_criteria}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="repetition-criteria" v-if="date_type">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Date Type
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{date_type}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item class="repetition-criteria">
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Prof
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{add_your_proof}}
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
import Ripple from 'vue-ripple-directive'
import getDomain from '@/helperFunctions/getDomain'


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
  directives: {
    Ripple,
  },
  data() {
    return {
      id : router.currentRoute.params.id,
      tracking_system:null,
      name_en:"",
      name_ar:"",
      intro_video:null,
      short_desc_en:'',
      short_desc_ar:'',
      long_desc_en:'',
      long_desc_ar:'',
      video:null,
      quiz: null,
      attachments:[],
      repetition_criteria: null,
      isLoading:false,
      tacking_id:null,
      data_type:null,
      add_your_proof:null,
      date_type:null,

    }
  },
  methods: {
     downloadFile(urlTask){
      window.open(urlTask); 
    },
    fetchRecord:function(){

      //fetch record

      this.isLoading = true
      axios
      .get(getDomain('no') +  `trackingsystem/activities/show/${this.id}`)
      .then(response => {
      this.isLoading = false 
      console.log('trackingsystem/activity/show/ : ' , response.data.activitiesService)
      let record = response.data.activitiesService

      this.tracking_system = record.tracking[0].name_en
      this.name_en = record.name_en
      this.name_ar = record.name_ar_original
      this.short_desc_en = record.short_desc_en_original
      this.short_desc_ar = record.short_desc_ar_original
      this.long_desc_en = record.long_desc_en_original
      this.long_desc_ar = record.long_desc_ar_original

      this.intro_video = record.intro_video
      if( this.intro_video ){
        // document.getElementById('introVideo').load()
      }
      
      
      if( record.videos.length > 0 ){
       this.video = record.videos[0].media_path 
      // document.getElementById('video').load()
      }
     

      

      if( record.quizs.length == undefined && record.quizs.data ){
        this.quiz = record.quizs.data.title
      }

      

      this.attachments = record.attachments

      this.repetition_criteria = record.type ? record.type.replace(/_/g, ' ') : ''
      this.date_type = record.date_type ? record.date_type.replace(/_/g, ' ') : '' 
      this.add_your_proof = record.prof ? 'Yes' : 'No'

    

      })
      .catch(error => {

          this.isLoading = false 
          

          console.log( 'activity error', error)
      })
  },
    
  },
  mounted() {
    this.fetchRecord()
  },
 

    
 
}
</script>



