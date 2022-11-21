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
              <div class="invalid-feedback d-block" v-if="courseError">{{ courseError }}</div>
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
                :options="userData.sections"
                :reduce="val => val.value"
                :clearable="false"
                input-id="section"
              />
              <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
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
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
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
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
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
                trim
                step=".01"
                type="number"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        
        </b-col>

        
        <!-- Field: Privacy -->
        <b-col
          cols="12"
          md="4"
        >
        
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox,BFormInvalidFeedback , BFormFile , BFormTextarea
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
import axios from '@axios'
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
    vSelect,
    BFormInvalidFeedback,
    BFormFile,
    BFormTextarea,
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

    const { resolveUserRoleVariant } = useList()

    const languageOptions = [
      { label: 'Canadian', value: '1' },
      { label: 'Egyption', value: '2' },
    ]

    const statusOptions = [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ]

    const previewOptions = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 }
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
      title:"PHP Basic lesson 1",
      course_id : null,
      section_id: 21,
      description:'PHP Desc',
      content_type:'video',
      preview: 1,
      duration:"4.50",
      privacy:0,
    }

    

    const userData = ref({})
    userData.value = JSON.parse(JSON.stringify(blankUserData))
    userData.value.id = router.currentRoute.params.id
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    let titleError = ref('');
    let courseError = ref('');
    let statusError = ref('');
    let fileError = ref('');

    const onSubmit = () => {

      console.log( 'edit inputs : ' , userData.value )

      titleError.value = ''
      courseError.value = ''
      statusError.value = ''

  
 
      store.dispatch('app-user/updateUser', updatedUserData )
        .then((response) => {
          console.log('dispatch suucess', response) 
         
        })
        .catch( (error) => { 
          console.log('dispatch error' , error)
          titleError.value = checkError(error.title)
          courseError.value = checkError(error.course_id)
          statusError.value = checkError(error.status)
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
      statusOptions,
      languageOptions,
      statusOptions,
      permissionsData,
      courseOptions,
      coursesNames,
      previewOptions,
      privacyOptions,
      contentTypeOptions,

      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,

      onSubmit,

      refFormObserver,
      getValidationState,
      titleError,
      courseError,
      statusError,
      fileError,
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
