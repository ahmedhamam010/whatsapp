<template>
  <div class="position-relative">
      <!-- modal -->
      <b-modal
        id="modal-prevent-closing"
        ref="my-modal"
        title="Staticstics for [ Test Template ] Campaign "
        ok-title="Submit"
        cancel-variant="outline-secondary"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        size="lg"
        :hide-footer="true"
      >

        <b-list-group>
            <b-row>
                <b-col md="6" class="mb-1">
                    <b-list-group-item>
                        <b-row>
                            <b-col md="8">Contacts</b-col>
                            <b-col md="4">3</b-col>
                        </b-row>
                    </b-list-group-item>
                </b-col>
                <b-col md="6" class="mb-1">
                    <b-list-group-item>
                        <b-row>
                            <b-col md="8">Sending</b-col>
                            <b-col md="4">3</b-col>
                        </b-row>
                    </b-list-group-item>
                </b-col>

                <b-col md="6" class="mb-1">
                <b-list-group-item>
                    <b-row>
                        <b-col md="8">Failed</b-col>
                        <b-col md="4">0</b-col>
                    </b-row>
                </b-list-group-item>
                </b-col>

                <b-col md="6" class="mb-1">   
                <b-list-group-item>
                    <b-row>
                        <b-col md="8">Deliverd</b-col>
                        <b-col md="4">0</b-col>
                    </b-row>
                </b-list-group-item>
                </b-col>
                
                <b-col md="6" class="mb-1">
                <b-list-group-item>
                    <b-row>
                        <b-col md="8">Sent</b-col>
                        <b-col md="4">0</b-col>
                    </b-row>
                
                </b-list-group-item>
                </b-col>
                
                <b-col md="6" class="mb-1">
                <b-list-group-item>
                    <b-row>
                        <b-col md="8">Opened</b-col>
                        <b-col md="4">0</b-col>
                    </b-row>
                </b-list-group-item>
                </b-col>
                
                <b-col md="6" class="mb-1">
                <b-list-group-item>
                    <b-row>
                        <b-col md="8">Replied</b-col>
                        <b-col md="4">0</b-col>
                    </b-row>
                </b-list-group-item>
                </b-col>

            </b-row> 

        </b-list-group>

        <b-table 
              ref="selectableTable"
              selectable
              select-mode="multi"
              responsive
              :items="items"
              class="mt-2"
              :fields="fields"
              @row-selected="onRowSelected"
            >
             
              <template #cell(selected)="{ rowSelected }">
                <template v-if="rowSelected">
                 <i class="feather icon-check-square primary" />
                </template>

                <template v-else>
                  <i class="feather icon-square" />
                </template>
              </template>
        </b-table>

        <b-row class="d-flex justifiy-content-center align-items-center text-center mb-1">
            <b-col md="4">
                
                <b-button
                class="w-100"
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
                >
                Send SMS
                </b-button>
            </b-col>
            <b-col md="4">
                
                <b-button
                class="w-100"
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="outline-secondary"
                            >
                Export To CSV
                </b-button>
            </b-col>
            <b-col md="4">
                <b-button
                class="w-100"
                v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                variant="outline-danger"
                >
                Cancel
                </b-button>
            </b-col>
        </b-row>
        <!-- <form
          ref="form"
          @submit.stop.prevent="handleSubmit"
        >
          <b-form-group
            :state="nameState"
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            />
          </b-form-group>
        </form> -->
      </b-modal>
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
    BModal, VBModal,
  
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: [],
      items: [
        { id:1 , contact:'ahmed' , number:'01022222222' , status: 'replied' },
        { id:2 , contact:'ahmed' , number:'01022222222' , status: 'replied' },
      ],
      fields : [
        'selected',
        {key:'contact'},
        {key:'number'},
        {key:'status'},
      ],
    }
  },
  methods: {
    onRowSelected(){
      console.log('vvv')
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
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
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
      })
    },
    
  },
  mounted() {
  
  },
 

    
 
}
</script>



