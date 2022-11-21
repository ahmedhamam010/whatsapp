<template>
  <div class="position-relative">
      <b-list-group>

          <b-list-group-item>  
              <b-row class="d-flex align-items-end align-items-center mb-1 mt-1">
                  
                  <b-col md="5">
                      
                      <b-form-file
                      id="template"
                      v-model="file"
                      placeholder="Upload new template or drop it here..."
                      drop-placeholder="Drop file here..."
                      />
                  </b-col>

                  <b-col md="2" class="text-center">
                      <feather-icon  class="wh-help-icon" icon="HelpCircleIcon"  />
                  </b-col>

                  <b-col md="5" class="text-right">
                      <p class="m-0">Templates Must Be Approved From Whatsapp</p>
                  </b-col>
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

              <template #cell(take_approve)="data">
                  <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-primary"
                      class="btn-icon rounded-circle m-auto"
                      >
                      <feather-icon icon="CornerLeftUpIcon" />
                  </b-button>
              </template> 

              <template #cell(delete)="data">
                  <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-danger"
                      class="btn-icon rounded-circle m-auto"
                      >
                      <feather-icon icon="Trash2Icon" />
                  </b-button>
              </template> 

              </b-table>
          </b-list-group-item> 

      </b-list-group>
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
    BTabs, BTab, BCardText,BFormSelect,BFormFile
  
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
        { key: 'category' },
        { key: 'status' },
        { key: 'date' },
        { key: 'take_approve' },
        { key: 'delete' },
       
      ],
      items: [
        {
          name: 'category one', category: 'shipping', status: 'approved', date: '2022-10-10',
        },
        {
          name: 'category one', category: 'shipping', status: 'approved', date: '2022-10-10',
        },
        {
          name: 'category one', category: 'shipping', status: 'approved', date: '2022-10-10',
        },
        {
          name: 'category one', category: 'shipping', status: 'approved', date: '2022-10-10',
        },
        {
          name: 'category one', category: 'shipping', status: 'approved', date: '2022-10-10',
        },
        
      ],
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
</style>



