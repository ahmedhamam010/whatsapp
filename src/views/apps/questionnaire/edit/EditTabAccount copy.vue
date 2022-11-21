<template>
  <div>
    <validation-observer
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >
    <!-- User Info: Input Fields -->
    <b-form @submit.prevent="handleSubmit(onSubmit)">
      <b-row>

      
        <!-- Field: Question -->
          <b-col
            cols="12"
            md="4"
          >
            <validation-provider
              #default="validationContext"
              name="Question"
              rules="required"
            >
              <b-form-group
                label="Question"
                label-for="question"
              >
                <b-form-input
                  id="question"
                  v-model="userData.question"
                  :state="getValidationState(validationContext)"
                />
                <b-form-invalid-feedback>
                  <p>{{ validationContext.errors[0] }}</p>
                </b-form-invalid-feedback>
                <div class="invalid-feedback d-block" v-if="questionError">{{ questionError }}</div>

              </b-form-group>
            </validation-provider>
          </b-col>



        <!-- Field: Type -->
        <b-col
          cols="12"
          md="4"
        >
          <validation-provider
            #default="validationContext"
            name="Type"
            rules="required"
          >
          <b-form-group
            label="Type"
            label-for="status"
            :state="getValidationState(validationContext)"
          >
            <v-select
              v-model="userData.type"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="typeOptions"
              :reduce="val => val.value"
              :clearable="false"
              input-id="type"
            />
            <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
            <div class="invalid-feedback d-block" v-if="typeError">{{ typeError }}</div>
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox,BFormInvalidFeedback
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
    const { resolveUserRoleVariant } = useList()

    const languageOptions = [
      { label: 'Canadian', value: '1' },
      { label: 'Egyption', value: '2' },
    ]

    const typeOptions = [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
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
     question : '',
     type : null,
    }

    const userData = { questionnaire : ref(JSON.parse(JSON.stringify(blankUserData))).value }
    userData.id = router.currentRoute.params.id
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    let questionError = ref('');
    let typeError = ref('');

    const onSubmit = () => {
      questionError.value = ''
      typeError.value = ''
      const updatedUserData = JSON.parse(JSON.stringify(props.userData))
      console.log( 'updated Cat : ', updatedUserData)
      store.dispatch('app-user/updateUser', updatedUserData )
        .then((response) => {
          console.log('dispatch suucess', response) 
          emit('update-msg')
        })
        .catch( (error) => { 
          console.log('dispatch error' , error)
          questionError.value = checkError(error.name)
          typeError.value = checkError(error.status)
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
      typeOptions,
      languageOptions,
      typeOptions,
      permissionsData,

      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,

      onSubmit,

      refFormObserver,
      getValidationState,
      questionError,
      typeError,
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
