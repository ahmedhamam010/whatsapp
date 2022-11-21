<template>
  <div>
    <validation-observer
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >
    <!-- User Info: Input Fields -->
    <b-form @submit.prevent="handleSubmit(onSubmit)">
      <b-row>

          
        <!-- Field: File -->
        <b-col
          cols="12"
          md="4"
        >
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

        </b-col> 
      
        <!-- Field: Title -->
        <b-col
          cols="12"
          md="4"
        >
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
              />
              <b-form-invalid-feedback>
                <p>{{ validationContext.errors[0] }}</p>
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="titleError">{{ titleError }}</div>

            </b-form-group>
          </validation-provider>
        </b-col>  

        <!-- Field: Course -->
        <b-col
          cols="12"
          md="4"
        >
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
              />
              <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="courseIdError">{{ courseIdError }}</div>
            </b-form-group>
          </validation-provider>
        </b-col>  

        <!-- Field: Section -->
        <b-col
          cols="12"
          md="4"
        >
        <validation-provider
            #default="validationContext"
            name="Section"
            rules="required"
          >
            <b-form-group
              label="Section"
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
              <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="sectionIdError">{{ sectionIdError }}</div>
            </b-form-group>
          </validation-provider>
        </b-col> 

        <!-- Field: Preview -->
        <b-col
          cols="12"
          md="4"
        >
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
              <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="previewError">{{ previewError }}</div>
            </b-form-group>
          </validation-provider>
        </b-col>  

        <!-- Field: Content Type -->
        <b-col
          cols="12"
          md="4"
        >
        <validation-provider
            #default="validationContext"
            name="Content Type"
            
          >
            <b-form-group
              label="Content Type"
              label-for="content_type"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.content_type"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="contentTypeOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="content_type"
              />
              <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="contentTypeError">{{ contentTypeError }}</div>
            </b-form-group>
          </validation-provider>
        </b-col> 

        <!-- Field: Description -->
        <b-col
          cols="12"
          md="4"
        >
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
              />
              <b-form-invalid-feedback>
                <p>{{ validationContext.errors[0] }}</p>
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="descriptionError">{{ descriptionError }}</div>
            </b-form-group>
          </validation-provider>
        </b-col>

         <!-- Field: Duration -->
        <b-col
          cols="12"
          md="4"
        >
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
                step=".01"
                type="number"
              />
              <b-form-invalid-feedback>
                <p>{{ validationContext.errors[0] }}</p>
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="durationError">{{ durationError }}</div>
            </b-form-group>
          </validation-provider>
        </b-col>  

        <!-- Field: privacy -->
        <b-col
          cols="12"
          md="4"
        >
        <validation-provider
            #default="validationContext"
            name="privacy"
            rules="required"
          >
            <b-form-group
              label="privacy"
              label-for="preview"
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
              <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>  

       
        
      </b-row>

      <!-- Action Buttons -->
      <b-button
        variant="primary"
        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        type="submit"
      >
        Save Changes
      </b-button>
      <b-button
        variant="outline-secondary"
        type="reset"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      >
        Reset
      </b-button>
    </b-form>

    </validation-observer>

    <!-- PERMISSION TABLE -->
    <b-card
      no-body
      class="border mt-1 d-none"
    >
      <b-card-header class="p-1">
        <b-card-title class="font-medium-2">
          <feather-icon
            icon="LockIcon"
            size="18"
          />
          <span class="align-middle ml-50">Permission</span>
        </b-card-title>
      </b-card-header>
      <b-table
        striped
        responsive
        class="mb-0"
        :items="permissionsData"
      >
        <template #cell(module)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <b-form-checkbox :checked="data.value" />
        </template>
      </b-table>
    </b-card>

  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox, BFormInvalidFeedback, BFormTextarea, BFormFile
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import router from '@/router'
import useList from '../list/useList'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import store from '@/store'
import checkError from '@/helperFunctions/helper'
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
    BFormCheckbox,
    BFormTextarea,
    BFormFile,
    vSelect,
    BFormInvalidFeedback,
    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  data(){
    return{
      required,
      alphaNum,
      email,
    }
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup(props,{ emit }) {

    let coursesNames = ref([])
    store.dispatch('app-user/fetchCourses')
    .then(response => { 
      let courses = response.data.data
      console.log('courses are' , courses)
        for( let x=0 ; x < courses.length ; x++ ){
          coursesNames.value.push({ label : courses[x].title , value : courses[x].id })
        }
      })
    .catch(error => {
      console.log('failed to catch courses' , error)
    })

    const courseOptions = coursesNames

    let sectionOptions = ref([]) 

    sectionOptions.value = props.userData.sections


    const { resolveUserRoleVariant } = useList()

    const languageOptions = [
      { label: 'Canadian', value: '1' },
      { label: 'Egyption', value: '2' },
    ]

    const previewOptions = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 },
    ]

    const privacyOptions = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 }
    ]

    const contentTypeOptions = [
      { label: 'Video', value: 'video' },
      { label: 'Youtube', value: 'youtube' },
      { label: 'Article', value: 'article' },
    ]


    const permissionsData = [
      {
        module: 'Admin',
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'Staff',
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: 'Author',
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: 'Contributor',
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'User',
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ]

    //submit code
    const blankUserData = {
      file:null,
      title:"",
      course_id : null,
      section_id: null,
      description:"",
      content_type:null,
      preview: null,
      duration:"",
      privacy:null,
    }

    const userData = { user : ref(JSON.parse(JSON.stringify(blankUserData))).value }
    userData.id = router.currentRoute.params.id
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
     
      const updatedUserData = JSON.parse(JSON.stringify(props.userData))
      delete updatedUserData.sections
      delete updatedUserData.finished
      updatedUserData.file = props.userData.file ? props.userData.file : null 
      console.log( 'updated lessons : ', updatedUserData)
      store.dispatch('app-user/updateUser', updatedUserData )
        .then((response) => {
          emit('update-msg')
          console.log('dispatch suucess', response) 
        })
        .catch( (error) => { 
          console.log('dispatch error' , error)

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
    //submit code

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      props.userData.avatar = base64
    })

    const {
      refFormObserver,
      getValidationState,
    } = formValidation(resetuserData)

    return {
      resolveUserRoleVariant,
      avatarText,
      languageOptions,
      permissionsData,
      courseOptions,
      coursesNames,

      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,

      onSubmit,

      refFormObserver,
      getValidationState,
      
      sectionOptions,
      previewOptions,
      privacyOptions,
      contentTypeOptions,

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
.invalid-feedback{
  p{
    margin-bottom : .1rem
  }
}
</style>
