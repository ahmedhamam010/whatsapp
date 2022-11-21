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
          Add New Section
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
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="courseIdError">{{ courseIdError }}</div>
            </b-form-group>
          </validation-provider>


          <!-- Status -->
          <validation-provider
            #default="validationContext"
            name="Status"
            rules="required"
          >
            <b-form-group
              label="Status"
              label-for="status"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.status"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="statusOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="status"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="statusError">{{ statusError }}</div>
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
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormFile
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import countries from '@/@fake-db/data/other/countries'
import store from '@/store'
import checkError from '@/helperFunctions/helper'

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
    }
  },
  setup(props, { emit }) {
    const blankUserData = {
      
      title:"",
      course_id : null,
      status : 1,
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    let titleError = ref('');
    let courseIdError = ref('');
    let statusError = ref('');

    const onSubmit = () => {

      titleError.value = ''
      courseIdError.value = ''
      statusError.value = ''


      console.log('user data :' ,JSON.parse(JSON.stringify(userData.value)))
      store.dispatch('app-user/addUser', JSON.parse(JSON.stringify(userData.value)))
        .then((response) => {
           console.log('add resposne is : ' ,response)
          emit('refetch-data')
          emit('success-msg')
          emit('update:is-add-new-user-sidebar-active', false)
        })
        .catch( (error) => {
          console.log( 'add error is :' ,error)

          titleError.value = checkError(error.title)
          courseIdError.value = checkError(error.course_id)
          statusError.value = checkError(error.status)
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
      titleError,
      courseIdError,
      statusError,
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
