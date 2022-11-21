<template>
    <edit-tab-account
      :user-data="userData"
      class="mt-2 pt-75"
      @update-msg="updateMsg"
    />
</template>

<script>
import {
  BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import useList from '../list/useList'
import storeModule from '../storeModule'
import EditTabAccount from './EditTabAccount.vue'

export default {
  components: {
    BCard,
    BAlert,
    BLink,
    EditTabAccount,
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
        userData.value = JSON.parse(JSON.stringify(response.data.course))
        console.log('data is' , response.data)
        })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
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
