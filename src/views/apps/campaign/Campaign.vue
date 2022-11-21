<template>
  <div class="position-relative">
      <b-card >

        <!--main info-->
        <b-tabs>

            <b-tabs
                vertical
                nav-wrapper-class="nav-vertical"
                class="all-day-tabs"
            >
                <b-tab title="Campaign" active >
                    <CampaignTab />
                </b-tab>

                <b-tab title="Templates">
                    
                    <TemplateTab />
                </b-tab>

            </b-tabs>

        </b-tabs>
        <!--/main info-->

       
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner, BTabs, BTab, BCardText,BFormSelect,BFormFile
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'
import Ripple from 'vue-ripple-directive'
import getDomain from '@/helperFunctions/getDomain'
import TemplateTab from '@/views/apps/campaign/TemplateTab'
import CampaignTab from '@/views/apps/campaign/CampaignTab'

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
    BTabs, BTab, BCardText,BFormSelect,BFormFile,
    TemplateTab,
    CampaignTab
  
  },
  directives: {
    Ripple,
  },
  data() {
    return {

    }
  },
  methods: {
    
    
  },
  mounted() {
  
  },
 

    
 
}
</script>
