<template>

  <div>

    <list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :status-options="statusOptions"
      :level-options="levelOptions"
      :published-options="publishedOptions"
      :course-options="courseOptions"
      :approved-options="approvedOptions"
      :free-options="freeOptions"
      :language-options="languageOptions"
      :plan-options="planOptions"
      @refetch-data="refetchData"
      @success-msg="successMsg"
    />
    <!-- Filters -->
    <list-filters
      :role-filter.sync="roleFilter"
      :plan-filter.sync="planFilter"
      :status-filter.sync="statusFilter"
      :plan-options="planOptions"
      :status-options="statusOptions"
      class="d-none"
    />

    <!-- Table Container Card -->
    <b-card
      no-body
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
              <b-button
                variant="primary"
                @click="redirectToAddForm()"
              >
                <span class="text-nowrap">Add Section</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="fetchUsers"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

    
        <!-- Column: Title -->
        <template #cell(title)="data">
            {{ data.item.title }}
        </template>

        <template #cell(course_id)="data">
            {{ data.item.course_id }}
        </template>
        

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            class="text-capitalize"
          >
            {{ data.item.status ? 'Active' : 'Inctive' }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>

            <!-- <b-dropdown-item :to="{ name: 'apps-quizzes-add-section' , params: { id: data.item.id }}">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Add Quiz</span>
            </b-dropdown-item> -->

            <b-dropdown-item :to="{ name: 'apps-sections-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>
            
            <b-dropdown-item :to="{ name: 'apps-sections-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item @click="confirmDeleteMsg(data.item.id)">
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
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
import ListFilters from './ListFilters.vue'
import useList from './useList'
import storeModule from '../storeModule'
import ListAddNew from './ListAddNew.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
export default {
  components: {
    ListFilters,
    ListAddNew,
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
    deleteConfirmed: '',
    }
  },
  methods: {
    deleteItem(id=0){
            
    axios.delete(`sections/${id}`, 
      {
        headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,},
      })
      .then(response => { 
      console.log( 'delete axios response:' , response )
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Deleted Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
          },
        })
        this.refetchData()
      })
      .catch(error => {
      console.log( 'delete axios error:' , error )
      });
        

      },

      redirectToAddForm(){
        router.replace('/apps/sections/add')
      },

       confirmDeleteMsg(id) {
        this.deleteConfirmed = ''
        this.$bvModal
        .msgBoxConfirm('Please confirm that you want to delete this record.', {
          title: 'Please Confirm',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Yes',
          cancelTitle: 'No',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        })
        .then(value => {
          this.deleteConfirmed = value
          if( this.deleteConfirmed ){ this.deleteItem(id) }
        })
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


    //fetch courses
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





    const isAddNewUserSidebarActive = ref(false)

    const levelOptions = [
      { label: 'Beginner', value: 'beginner' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Advanced', value: 'advanced' },
      { label: 'All', value: 'all' },
      
    ]

    const publishedOptions = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 }
    ]

    const approvedOptions = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 }
    ]

    const statusOptions = [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ]

    const freeOptions = [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ]

    const languageOptions = [
      { label: 'Canadian', value: '1' },
      { label: 'Egyption', value: '2' },
    ]

    const planOptions = [
      { label: 'Basic', value: 'basic' },
      { label: 'Company', value: 'company' },
      { label: 'Enterprise', value: 'enterprise' },
      { label: 'Team', value: 'team' },
    ]

    const {
      fetchUsers,
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

      // Sidebar
      isAddNewUserSidebarActive,

      fetchUsers,
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

      levelOptions,
      planOptions,
      statusOptions,
      publishedOptions,
      courseOptions,
      freeOptions,
      approvedOptions,
      languageOptions,
      coursesNames,

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
