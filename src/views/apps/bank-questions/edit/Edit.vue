<template>
  <b-card>
        <edit-tab-account
          :user-data="userData"
          class="mt-2 pt-75"
          @update-msg="updateMsg"
        />
  </b-card>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import useList from '../list/useList'
import storeModule from '../storeModule'
import EditTabAccount from './EditTabAccount.vue'
import EditTabInformation from './EditTabInformation.vue'
import EditTabSocial from './EditTabSocial.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    EditTabAccount,
    EditTabInformation,
    EditTabSocial,
  },
  setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, storeModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { 
        userData.value = JSON.parse(JSON.stringify(response.data.practicalTask))
        console.log('data is' , response.data)
        })
      .catch(error => {
        console.log('practicalTask error' , error)
      })

    const {updateMsg} = useList()

    return {
      userData,
      updateMsg,
    }
  },
}
</script>

<style>

</style>
