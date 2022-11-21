<template>
  <div class="position-relative">
      <b-card title="Enrolled User Details">

        <h3 v-if="noRecords" class="text-center">{{ noRecords }}</h3>

        <!--main info-->
        <b-tabs>

            <b-tabs
                vertical
                nav-wrapper-class="nav-vertical"
                class="all-day-tabs"
            >
                <b-tab
                v-for="(day ,index) in activitiesDays"
                :key="index"
                :title="'Day ' + (index + 1) "
                :active=" index == 0 "
                >

                    <b-tabs v-if="day.activities.length > 0">
                        <b-tab 
                        v-for="(activity ,indx) in day.activities"
                        :key="indx"
                        :title="'Activity ' + (indx + 1) "
                        :active=" indx == 0 "
                        >
                            <b-list-group class="mt-2">
                                <b-list-group-item>
                                    <b-row>
                                        <b-col
                                        cols="6"
                                        md="6"
                                        >
                                        Progress
                                        </b-col>  

                                        <b-col
                                        cols="6"
                                        md="6"
                                        >

                                        {{ activity.progress ? activity.progress + '%' : '' }}
                                        </b-col>

                                    </b-row>
                                </b-list-group-item>
                                <b-list-group-item>
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

                                        
                                        </b-col>

                                    </b-row>
                                </b-list-group-item>
                                
                                <b-list-group-item>
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

                                        <video controls id="video" style="width:250px;height:auto;object-fit:fill" v-if="video" poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg">
                                        <source :src="video" type="video/mp4">
                                        </video>
                                        <span v-else>No Video Found</span>
                                        </b-col>

                                    </b-row>
                                </b-list-group-item>
                            </b-list-group>
                        </b-tab>
                    </b-tabs>

                </b-tab>

            </b-tabs>

        </b-tabs>
        <!--/main info-->

        <!--spinner loader-->
        <template>
            <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
            <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
            </div>
        </template>
        <!--/spinner loader-->
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner, BTabs, BTab, BCardText
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
    BListGroup, BListGroupItem , BSpinner,
    BTabs, BTab, BCardText
  
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isLoading:false,  
      track_id: router.currentRoute.params.initiativeId,
      user_id:router.currentRoute.params.userId,
      video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      activitiesDays :[],
      noRecords:null

    }
  },
  methods: {
    fectchRecord:function(){

        //fetch record

        this.isLoading = true
        axios
        .get( getDomain('no') + `trackingsystem/get/users/${this.user_id}/trackings/${this.track_id}/details`)
        .then(response => {
        this.isLoading = false 
        console.log('show/user/tracking/details : ' , response.data.data)
        this.activitiesDays = response.data.data
        this.noRecords = this.activitiesDays.length == 0 ? 'No Records Found Till Now' : null 
        })
        .catch(error => {
            this.isLoading = false 
            console.log( 'error', error)
        })
    },
    
  },
  mounted() {
   this.fectchRecord();
  },
 

    
 
}
</script>

<style>
.all-day-tabs .nav-vertical li{
    padding: .5rem 3rem;
    border: 2px solid #eee;
    border-radius: 5px;
    margin-bottom: 5px;
}
.all-day-tabs .nav-vertical .nav.nav-tabs .nav-item .nav-link{
    padding: 0;
}
.all-day-tabs .nav-vertical .nav-tabs .nav-link::after{
    background: none !important;
}
</style>



