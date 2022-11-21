<template>
  <div class="position-relative">
      <!-- modal -->
      <b-modal
        id="modal-prevent-closing-form"
        ref="my-modal-form"
        title="Send New Campaign"
        ok-title="Submit"
        cancel-variant="outline-secondary"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        size="lg"
        
      >
        <form
          ref="form"
          @submit.stop.prevent="handleSubmit"
        >
          <b-row>
            <b-col md="6">
              <b-form-group
                          
                label="Campaign Name"
                label-for="name-input"
                invalid-feedback="Name is required"
              >
                <b-form-input
                  id="name-input"
                  v-model="name"
                  required
                />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group
                          
                label="Select Template Message"
                label-for="template-message"
                invalid-feedback="Date Message is required"
                required
              >   
                  <b-form-select
                      v-model="templateMsg"
                      :options="templateMsgOptions"
                  />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <label for="example-datepicker">Choose a date</label>
              <b-form-datepicker
                id="example-datepicker"
                v-model="date"
                class="mb-1"
              />
            </b-col>

            <b-col md="6">
              <b-form-group 
              class='mb-1'
              label="Choose Date"
              label-for="input-time"
              invalid-feedback="Time is required"
              >
                <b-form-input 
                id='input-time'
                v-model='time'
                type='text'
                placeholder='HH:mm:ss'
               
                />
                  <b-form-timepicker
                  v-model='time'
                  button-only
                  right
                  show-seconds
                  locale='en'
                  aria-controls='input-time'
                  style="position: absolute;right: 0px;top: 0px;transform: translate(-23%,50%);z-index: 9999;" />
              </b-form-group>
            </b-col>

            <b-col>
              <b-form-group>
                <label class="mb-1">Choose Contacts</label>
                
                  
                <b-form-input
                  id="name-input"
                  v-model="contactSearch"
                  required
                  class="mb-1"
                  placeholder="Seach For Contacts ...."
                />
                  
                
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  class="contact-checkboxes"
                  v-model="selected"
                  :options="options"
                  name="flavour-1"
                  stacked
                />
              </b-form-group>
            </b-col>
            <b-col md="12" class="mb-2 d-flex justify-content-between">
              <div>
                <b-form-checkbox
                  v-model="selectAll"
                  class="custom-control-primary"
                  @change="toggleSelectAll"
                >
                  Select All
                </b-form-checkbox>
              </div>
              <div>{{selected.length}} Contact Selected</div>
            </b-col>
            

            <b-col md="12">
              <b-form-group
                          
                label="Uploade CSV File...."
                label-for="upload-csv"
                invalid-feedback="Template Message is required"
                required
              >   
                  <b-form-file
                      id="csv"
                      v-model="csv"
                      placeholder="Upload new csv or drop it here..."
                      drop-placeholder="Drop file here..."
                    />
              </b-form-group>
            </b-col>
            

          </b-row>
        </form>
      </b-modal>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner, BTabs, BTab, BCardText,BFormSelect,BFormFile,BProgress, BProgressBar,BModal, VBModal,BFormDatepicker,BFormTimepicker,BFormCheckboxGroup,BFormCheckbox
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
    BTabs, BTab, BCardText,BFormSelect,BFormFile,
    BProgress,
    BProgressBar,
    BModal, VBModal,BFormDatepicker,BFormTimepicker,BFormCheckboxGroup,BFormCheckbox 
  
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      name: null,
      templateMsg:'template 1',
      templateMsgOptions:['template 1' , 'template 2' , 'template 3' ],
      date: null,   
      time:null,
      csv:null,
      options: [
        { text: 'Ahmed (01020101254) ', value: 'orange' },
        { text: 'Ahmed (01020101254) ', value: 'apple' },
        { text: 'Ahmed (01020101254) ', value: 'pineapple' },
        { text: 'Ahmed (01020101254) ', value: 'grape' },
      ],
      selected: [],
      selectAll:false,
      contactSearch:null,
    }
  },
  methods: {
    resetModal() {
      this.name = ''
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal-form'].toggle('#toggle-form')
      })
    },
    toggleSelectAll(){
      if(this.selectAll){

        var users = []
        
        this.selected = []

        this.options.forEach(function (item) {
            users.push(item.value);
        });

        this.selected = users;

      }else{
        this.selected = []
      }
    }
    
  },
  mounted() {
  
  },
  watch:{
    
  }
 

    
 
}
</script>

<style scoped>
.contact-checkboxes{
  padding: 0.438rem 1rem;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
}
</style>


