<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Lesson
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

      <!-- BODY -->
      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >

          <!-- File -->
          <validation-provider
            #default="validationContext"
            name="File"
           
          >
            <b-form-group
              label="File"
              label-for="file"
            >
              <b-form-file
                id="file"
                v-model="userData.file"
                :state="getValidationState(validationContext)"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="fileError">{{ fileError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Title -->
          <validation-provider
            #default="validationContext"
            name="Title"
            rules="required"
          >
            <b-form-group
              label="Title"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="userData.title"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="titleError">{{ titleError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Course -->
          <validation-provider
            #default="validationContext"
            name="Course"
            rules="required"
          >
            <b-form-group
              label="Course"
              label-for="course"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.course_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="courseOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="course"
                @input="getRelatedSections($event)"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="courseIdError">{{ courseIdError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Sections -->
          <validation-provider
            #default="validationContext"
            name="Sections"
            rules="required"
          >
            <b-form-group
              label="Sections"
              label-for="section"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.section_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="sectionOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="section"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="sectionIdError">{{ sectionIdError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Description -->
          <validation-provider
            #default="validationContext"
            name="Description"
          >
            <b-form-group
              label="Description"
              label-for="description"
            >
              <b-form-textarea
                id="description"
                v-model="userData.description"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="descriptionError">{{ descriptionError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Preview -->
          <validation-provider
            #default="validationContext"
            name="Preview"
            rules="required"
          >
            <b-form-group
              label="Preview"
              label-for="preview"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.preview"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="previewOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="preview"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="previewError">{{ previewError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Content Type -->
          <validation-provider
            #default="validationContext"
            name="Content Type"
            rules="required"
          >
            <b-form-group
              label="Content Type"
              label-for="contentType"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.content_type"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="contentTypeOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="contentType"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="contentTypeError">{{ contentTypeError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Duration -->
          <validation-provider
            #default="validationContext"
            name="Duration"
            rules="required"
          >
            <b-form-group
              label="Duration"
              label-for="duration"
            >
              <b-form-input
                id="duration"
                v-model="userData.duration"
                :state="getValidationState(validationContext)"
                trim
                step=".01"
                type="number"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="durationError">{{ durationError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Privacy -->
          <validation-provider
            #default="validationContext"
            name="Privacy"
            rules="required"
          >
            <b-form-group
              label="Privacy"
              label-for="privacy"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.privacy"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="privacyOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="privacy"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="privacyError">{{ privacyError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>

        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormFile, BFormTextarea
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import countries from '@/@fake-db/data/other/countries'
import store from '@/store'
import axios from '@axios'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    BFormFile,
    BFormTextarea,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
   publishedOptions : {
      type: Array,
    },
    courseOptions : {
      type: Array,
    },
    contentTypeOptions : {
      type:Array
    },
    previewOptions : {
      type:Array
    },
    privacyOptions : {
      type:Array
    },
    levelOptions: {
      type: Array,
    },
    approvedOptions: {
      type: Array,
    },
    statusOptions: {
      type: Array,
    },
    freeOptions: {
      type: Array,
    },
    languageOptions: {
      type: Array,
    },
    planOptions: {
      type: Array,
    },
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      countries,
      sectionOptions : [{label: 'phping'  , value: 1 }]
    }
  },
  methods : {
    getRelatedSections(event){
    console.log(event)
    store.dispatch('app-user/fetchSections' , { id: event } )
        .then((response) => {
           console.log(response)
           this.sectionOptions = [];
           let returnedSectionOptions = [];
           for( let s=0 ; s< response.data.data.length; s++  ){
             returnedSectionOptions.push( {label: response.data.data[s].title  , value: response.data.data[s].id })
           }
           console.log('returnedSectionOptions', returnedSectionOptions)
           this.sectionOptions = returnedSectionOptions;
        })
        .catch( (error) => {
          console.log('selected sections error : ' ,error)
        } )
    }
  },
  setup(props, { emit }) {
    const blankUserData = {
      file:null,
      title:"PHP Basic lesson 1",
      course_id : null,
      section_id: null,
      description:'PHP Desc',
      content_type:'video',
      preview: 1,
      duration:"4.50",
      privacy:0,
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    let fileError = ref('');
    let titleError = ref('');
    let courseIdError = ref('');
    let sectionIdError = ref('');
    let descriptionError = ref('');
    let contentTypeError = ref('');
    let previewError = ref('');
    let durationError = ref('');
    let privacyError = ref('');

    const onSubmit = () => {

      fileError.value = ''
      titleError.value = ''
      courseIdError.value = ''
      sectionIdError.value = ''
      descriptionError.value = ''
      contentTypeError.value = ''
      previewError.value = ''
      durationError.value = ''
      privacyError.value = ''
      

      var formData = new FormData();
      var lessonFile = document.querySelector('#file')
     
      formData.append("file", lessonFile.files[0] )
      formData.append("title",userData.value.title )
      formData.append("course_id",userData.value.course_id )
      formData.append("section_id",userData.value.section_id )
      formData.append("description",userData.value.description )
      formData.append("content_type",userData.value.content_type )
      formData.append("preview",userData.value.preview )
      formData.append("duration",userData.value.duration )
      formData.append("privacy",userData.value.privacy )
     
      


      console.log('user data :' ,JSON.parse(JSON.stringify(userData.value)))
      store.dispatch('app-user/addUser', formData )
        .then((response) => {
           console.log('add resposne is : ' ,response)
          emit('refetch-data')
          emit('success-msg')
          emit('update:is-add-new-user-sidebar-active', false)
        })
        .catch( (error) => {
          console.log( 'add error is :' ,error)
          
          fileError.value = checkError(error.file)
          titleError.value = checkError(error.title)
          courseIdError.value = checkError(error.course_id)
          sectionIdError.value = checkError(error.section_id)
          descriptionError.value = checkError(error.description)
          contentTypeError.value = checkError(error.content_type)
          previewError.value = checkError(error.preview)
          durationError.value = checkError(error.duration)
          privacyError.value = checkError(error.privacy)

        } )
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetuserData)

    return {
      userData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,

      fileError,
      titleError,
      courseIdError,
      sectionIdError,
      descriptionError,
      contentTypeError,
      previewError,
      durationError,
      privacyError,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
