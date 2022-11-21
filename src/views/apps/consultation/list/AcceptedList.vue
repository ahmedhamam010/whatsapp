<template>

  <div>

    <!-- Table Container Card -->
    <b-card
      title="Consultants List"
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0 invisible"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                style="display:none !important"
                placeholder="Search..."
              />
              
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="fetchAcceptedList"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

       <template #cell(user.avatar)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1641086103~hmac=a9c5dc920808033471019558a26a12ec"
              />
            </template>
          </b-media>
        </template>      

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-button
            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
            variant="outline-danger"
            @click="changeConsultantStatus(data.item.id , 'rejected')"
            class="d-none"
            
          >
            <feather-icon icon="XIcon" class="mr-50" />
            <span class="align-middle">Remove</span>
          </b-button>

          &nbsp;

          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
           :to="{ name: 'apps-consultation-view', params: { id: data.item.user.id } }"
          >
            <feather-icon icon="FileTextIcon" class="mr-50" />
            <span class="align-middle">Details</span>
          </b-button>

          
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalUsers"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import useList from './useList'
import storeModule from '../storeModule'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'

export default {
  components: {
    
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
  },
  data (){
    return {
      headersObj  : { 
          headers: 
            { 
              // Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'PUT,put',
            }
          
          }  ,
    }
  },
  methods: {
    changeConsultantStatus(id,status){
      var formData = new FormData();
       formData.append("_method", "put");
       console.log(id,status)
       formData.append("status",status )
       axios.post(`consultationInfos/requests/${id}`, formData, this.headersObj)
      .then(response => { 
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Status Changed Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
          },
        })
        this.refetchData()
      })
      .catch(error => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `${error.response.data.msg}`,
            icon: 'CoffeeIcon',
            variant: 'danger',
          },
        })
      });
    },
   

     

      

      
    },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, storeModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

   



    const {
      fetchAcceptedList,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,
      successMsg,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = useList()

    return {

   

      fetchAcceptedList,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,
      successMsg,

      // Filter
      avatarText,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
