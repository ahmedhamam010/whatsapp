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
          Add New Course
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
          enctype=multipart/form-data
        >

          <!-- Image -->
          <validation-provider
            #default="validationContext"
            name="Image"
            rules="required"
           
          >
            <b-form-group
              label="Image"
              label-for="image"
              
            >
              <b-form-file
                id="image"
                v-model="userData.image"
                :state="getValidationState(validationContext)"
                accept="image/*"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="imageError">{{ imageError }}</div>
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

          <!-- Slug -->
          <validation-provider
            #default="validationContext"
            name="Slug"
            rules="required"
          >
            <b-form-group
              label="Slug"
              label-for="slug"
            >
              <b-form-input
                id="slug"
                v-model="userData.slug"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="slugError">{{ slugError }}</div>
            </b-form-group>
          </validation-provider>

           <!-- Category -->
          <validation-provider
            #default="validationContext"
            name="Category"
            rules="required"
          >
            <b-form-group
              label="Category"
              label-for="category"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.category_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="categoryOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="category"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="categoryIdError">{{ categoryIdError }}</div>
            </b-form-group>
          </validation-provider>
 
          <!-- Level -->
          <validation-provider
            #default="validationContext"
            name="Level"
            rules="required"
          >
            <b-form-group
              label="Level"
              label-for="level"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.level"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="levelOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="level"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="levelError">{{ levelError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Published -->
          <validation-provider
            #default="validationContext"
            name="Published"
            rules="required"
          >
            <b-form-group
              label="Published"
              label-for="published"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.published"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="publishedOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="published"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="publishedError">{{ publishedError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Approved -->
          <validation-provider
            #default="validationContext"
            name="Approved"
            rules="required"
          >
            <b-form-group
              label="Approved"
              label-for="approved"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.approved"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="approvedOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="approved"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="approvedError">{{ approvedError }}</div>
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

          <!-- Requirements -->
          <validation-provider
            #default="validationContext"
            name="Requirements"
            rules="required"
          >
            <b-form-group
              label="Requirements"
              label-for="requirements"
            >
              <b-form-input
                id="requirements"
                v-model="userData.requirements"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="requirementsError">{{ requirementsError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Language -->
          <validation-provider
            #default="validationContext"
            name="Language"
            rules="required"
          >
            <b-form-group
              label="Language"
              label-for="language"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.language_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="languageOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="language"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <div class="invalid-feedback d-block" v-if="languageIdError">{{ languageIdError }}</div>
            </b-form-group>
          </validation-provider>

          <!-- Free -->
          <b-form-group
            label="Free"
            label-for="Free"
          >
            <v-select
              v-model="userData.free"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="freeOptions"
              :reduce="val => val.value"
              :clearable="false"
              input-id="free"
              @input="getFreeValue($event)"
            />
            <div class="invalid-feedback d-block" v-if="freeError">{{ freeError }}</div>
          </b-form-group>

          <!-- Price -->
          <b-form-group
            label="Price"
            label-for="price"
            v-if="showPriceInput"
          >
            <b-form-input
              id="price"
              v-model="userData.price"
              trim
            />
            <div class="invalid-feedback d-block" v-if="priceError">{{ priceError }}</div>
          </b-form-group>

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
    categoryOptions : {
      type: Array,
    },
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      countries,
      showPriceInput : false
    }
  },
  methods : {
    getFreeValue(event){
        this.showPriceInput = event  ? false : true
        console.log( 'free state  ' , this.showPriceInput )

    }
  },
  setup(props, { emit }) {
    const blankUserData = {
      category_id:1,
      title:"title",
      slug:"slug",
      level:'all',
      published:1,
      approved:1,
      status:1,
      requirements:"reqs",
      free:null,
      language_id: '1',
      image : null,
      price:null
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    let categoryIdError = ref('');
    let titleError = ref('');
    let slugError = ref('');
    let levelError = ref('');
    let publishedError = ref('');
    let approvedError = ref('');
    let statusError = ref('');
    let requirementsError = ref('');
    let freeError = ref('');
    let languageIdError = ref('');
    let imageError = ref('');
    let priceError = ref('');


    const onSubmit = () => {

      categoryIdError.value = ''
      titleError.value = ''
      slugError.value = ''
      levelError.value = ''
      publishedError.value = ''
      approvedError.value = ''
      statusError.value = ''
      requirementsError.value = ''
      freeError.value = ''
      languageIdError.value = ''
      imageError.value = ''
      priceError.value = ''

      var formData = new FormData();
      var imagefile = document.querySelector('#image')
     
      formData.append("category_id",1 )
      formData.append("title",userData.value.title )
      formData.append("slug",userData.value.slug )
      formData.append("level",userData.value.level )
      formData.append("published",userData.value.published )
      formData.append("approved",userData.value.approved )
      formData.append("status",userData.value.status )
      formData.append("requirements",userData.value.requirements )
      formData.append("free",userData.value.free )
      formData.append("level",userData.value.level )
      formData.append("language_id",userData.value.language_id )
      formData.append("image", imagefile.files[0] )
      if( userData.value.price ){
        formData.append("price",userData.value.price )
      }
      

      store.dispatch('app-user/addUser', formData)
        .then((response) => {
           console.log('add resposne is : ' ,response)
          emit('refetch-data')
          emit('success-msg')
          emit('update:is-add-new-user-sidebar-active', false)
        })
        .catch( (error) => {
          console.log( 'add error is :' ,error)

          categoryIdError.value = checkError(error.category_id)
          titleError.value = checkError(error.title)
          slugError.value = checkError(error.slug)
          levelError.value = checkError(error.level)
          publishedError.value = checkError(error.published)
          approvedError.value = checkError(error.approved)
          statusError.value = checkError(error.status)
          requirementsError.value = checkError(error.requirements)
          freeError.value = checkError(error.free)
          languageIdError.value = checkError(error.language_id)
          imageError.value = checkError(error.image)
          priceError.value = checkError(error.price)

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

      categoryIdError,
      titleError,
      slugError,
      levelError,
      publishedError,
      approvedError,
      statusError,
      requirementsError,
      freeError,
      languageIdError,
      imageError,
      priceError,

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
