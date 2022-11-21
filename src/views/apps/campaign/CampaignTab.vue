<template>
  <div class="position-relative">
      <b-list-group>

          <b-list-group-item>  
              <b-row class="d-flex align-items-end align-items-center mb-1 mt-1">
                  
                  <b-col md="5">
                      
                      <b-button
                          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                          variant="outline-secondary"
                          id="toggle-form"
                          v-b-modal.modal-prevent-closing-form
                      
                      >
                          <feather-icon icon="SendIcon" class="mr-50" />
                          <span class="align-middle">Send New Campaign</span>
                      </b-button>
                  </b-col>

                 
                  <b-col md="5" class="text-right">
                      <div>
                        <label>Remaining Messages</label>
                        <b-progress
                          :max="max"
                        >
                          <b-progress-bar :value="value">
                            <strong>{{ value }} / {{ max }}</strong>
                          </b-progress-bar>
                        </b-progress>
                      </div>
                  </b-col>

                   <b-col md="2" class="text-right">
                      <feather-icon  class="wh-help-icon" icon="HelpCircleIcon"  />
                  </b-col>


              </b-row>
          </b-list-group-item>

          <b-list-group-item>  

              <h3>Scheduled Campaigns</h3>
              <b-row class="d-flex align-items-end align-items-center mb-1">

                  <b-list-group class="w-100 p-1">
                    <b-list-group-item>
                      <b-row class="d-flex align-items-center">
                        <b-col md="6">
                          <span>Test Template</span>
                        </b-col>
                        <b-col md="6">
                          <span class="mr-1">2202-10-10 00:00:00</span>
                          <span class="mr-1">
                            <b-button
                                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                variant="outline-danger"
                                class="btn-icon rounded-circle m-auto"
                                >
                                <feather-icon icon="XIcon" />
                            </b-button>
                          </span>
                          
                          <span>
                            <b-button
                                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                variant="outline-primary"
                                class="btn-icon rounded-circle m-auto"
                                >
                                <feather-icon icon="EditIcon" />
                            </b-button>
                          </span>
                          
                        </b-col>
                      </b-row>
                    </b-list-group-item>

                    
                    
                  </b-list-group>
              </b-row>
          </b-list-group-item>

          <b-list-group-item> 
              <b-row class="mb-1">

                  <!-- Search -->
                  <b-col
                  cols="12"
                  md="5"
                  >
                  <div class="">
                      <label>Search</label>
                      <b-form-input
                      v-model="searchParameter"
                      class="d-inline-block mr-1"
                      
                      
                      />
                  </div>
                  </b-col>
                  
                  <b-col
                  cols="12"
                  md="5"
                  class="ml-auto"
                  >
                  <label>Sort by</label>
                  
                  <b-form-select
                      v-model="sortVal"
                      :options="sortOptions"
                      
                  />
                  
                  </b-col>
              </b-row>
          </b-list-group-item> 


          <b-list-group-item>
              <b-table 
                      responsive
                      :items="items"
                      class="mt-2" 
                      :fields="fields"
              >

              

              <template #cell(statistics)="data">
                  <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-primary"
                      class="btn-icon rounded-circle m-auto"
                      id="toggle-btn"
                      v-b-modal.modal-prevent-closing
                      >
                      <feather-icon icon="BarChart2Icon" />
                  </b-button>
              </template> 

              </b-table>
          </b-list-group-item> 

      </b-list-group>

      <Statistics />
      <AddCampaignForm />
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner, BTabs, BTab, BCardText,BFormSelect,BFormFile,BProgress, BProgressBar,BModal, VBModal,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'
import Ripple from 'vue-ripple-directive'
import getDomain from '@/helperFunctions/getDomain'
import Statistics from '@/views/apps/campaign/Statistics'
import AddCampaignForm from '@/views/apps/campaign/AddCampaignForm'



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
    BProgress,
    BProgressBar,
    Statistics,
    AddCampaignForm
  
  },
  directives: {
    Ripple,
  },
  
  data() {
    return {
      file:null,
      sortOptions:['Latest', 'Oldest'],
      sortVal:'Latest',
      searchParameter:'',
      fields : [
        { key: 'name' },
        { key: 'date' },
        { key: 'success' },
        { key: 'sent' },
        { key: 'failed' },
        { key: 'status' },
        { key: 'statistics' },
       
      ],
      items: [
        {
          name: 'category one',
          date: '2202-10-10 00:00:00',
          success: '10%',
          sent: '3',
          failed: '0',
          status: 'approved',
        },
        {
          name: 'category one',
          date: '2202-10-10 00:00:00',
          success: '10%',
          sent: '3',
          failed: '0',
          status: 'approved',
        },
        {
          name: 'category one',
          date: '2202-10-10 00:00:00',
          success: '10%',
          sent: '3',
          failed: '0',
          status: 'approved',
        },
        {
          name: 'category one',
          date: '2202-10-10 00:00:00',
          success: '10%',
          sent: '3',
          failed: '0',
          status: 'approved',
        },
        {
          name: 'category one',
          date: '2202-10-10 00:00:00',
          success: '10%',
          sent: '3',
          failed: '0',
          status: 'approved',
        },
        
      ],
      value: 1750,
      max: 2000,
    }
  },
  methods: {
    
    
  },
  mounted() {
  
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
.wh-help-icon{
    width: 30px;
    height: 30px;
}
.progress{
height: 1.1rem;
}




</style>



