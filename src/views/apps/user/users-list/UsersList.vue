<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card > 

            <div class="mt-3 mb-0">

              <!-- Table Top -->
              <b-row>

                

                <!-- Per Page -->
                <b-col
                  cols="12"
                  md="3"
                  class="d-flex align-items-center justify-content-start mr-auto"
                >
                  <label>Sort by</label>
                  
                  <b-form-select
                    v-model="sortVal"
                    :options="sortOptions"
                    @input="paginateChanged"
                  />
                  
                </b-col>

                
                <b-col
                  cols="12"
                  md="3"
                 
                >
                <b-form-file
                  v-model="file"
                  placeholder="Upload csv..."
                  drop-placeholder="Drop file here..."
                />

                </b-col>

                <b-col
                  cols="12"
                  md="2"
                  class="text-center"
                 
                >
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline-primary"
                >
                  <feather-icon
                    icon="DownloadCloudIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Download Sample</span>
                </b-button>

                </b-col>

                <b-col md="3" class="d-none">
                  <b-form-group
                      label="Status"
                      label-for="status"
                      >
                      <v-select
                          v-model="tableFilters.status"
                          :options="statusOptions"
                          :clearable="false"
                          input-id="Status"
                          @input="statusFilter"
                      />
                  </b-form-group>
                </b-col>

                <!-- Search -->
                <b-col
                  cols="12"
                  md="4"
                >
                  <div class="d-flex align-items-center justify-content-end">
                    <b-form-input
                      v-model="searchParameter"
                      class="d-inline-block mr-1"
                      placeholder="Search..."
                      @keypress.enter="searchParameterChanged"
                    />
                    <b-button
                      variant="primary"
                      @click="redirectToAddForm()"
                      
                    >
                      <span class="text-nowrap">Add Contact</span>
                    </b-button>
                  </div>
                </b-col>

              
              </b-row>

            </div>

            
            <b-table 
              responsive
              :busy="isBusy"
              :items="items"
              class="mt-2"
              show-empty
              :empty-text="loading_msg"
              :fields="fields"
            >

              <!-- Column: User -->
              <template #cell(avatar)="data">
                <b-avatar
                  class="mr-1"
                  :src="data.item.avatar"
                />
              </template>

              <template #cell(phone)="data">
                <div class="text-nowrap">
                  <span class="align-text-top text-capitalize">{{ data.item.phone }}</span>
                </div>
              </template>

              <!-- Column: Role -->
              <template #cell(role)="data">
                <div class="text-nowrap">
                  <feather-icon
                    :icon="resolveUserRoleIcon(data.item.type)"
                    size="18"
                    class="mr-50"
                    :class="`text-${resolveUserRoleVariant(data.item.type)}`"
                  />
                  <span class="align-text-top text-capitalize">{{ data.item.type }}</span>
                </div>
              </template>

              <!-- Column: Role -->
              <template #cell(broadcast)="data"  >
               
                  <feather-icon
                    icon="CheckIcon"
                    v-if="data.item.broadcast"
                    color="#25d366"
                  />
                  
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
                 

                  <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
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
                      :total-rows="rows"
                      :per-page="perPage"
                      first-number
                      last-number
                      class="mb-0 mt-1 mt-sm-0"
                      prev-class="prev-item"
                      next-class="next-item"
                      @change="pageChanged"
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

      <template>
        <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
        </div>
      </template>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BCardText, BPagination ,BBadge ,BSpinner, BFormSelect, BFormFile 
} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'




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
    BFormTextarea,
    BDropdown,
    BDropdownItem,
    BCardText, BPagination, vSelect, BBadge,BSpinner,BFormSelect,BFormFile 
  
  },
  data(){
    return{
      id :'',
      status:'',
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.userListPerPage,
      rows: null,
      fields : [
       
        { key: 'avatar',label :'avatar' },
        { key: 'username',label :'username' },
        { key: 'custom_attributes',label :'custom attributes' },
        { key: 'broadcast' },
        { key: 'status', label :'status'},
        { key: 'actions' }
       
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      statusOptions:['pending', 'accepted', 'rejected'],
      sortOptions:['Latest', 'Oldest'],
      sortVal:'Latest',
      searchParameter: '',
      tableFilters : {
        status : null,
      },
      isBusy:false,
      deleteConfirmed: '',
      isLoading:true,
      loading_msg:'',
      file: null,
    }
  },
  directives: {
    Ripple,
  },
  mounted(){
      this.getRecords();
  },
  methods:{
    redirectToAddForm(){
      router.push({ path: '/apps/users/add/user' })
    },
    deleteItem(id=0){
            
      axios.delete(`users/${id}`, 
        {
          headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,},
        })
        .then(response => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Deleted Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
            text: '',
          },
        })  
        this.getRecords()
        console.log( 'delete axios response:' , response )
        
        })
        .catch(error => {
        console.log( 'delete axios error:' , error )
        });
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
    getRecords(){
      this.isBusy = false
      this.isLoading = false
      var url = `users/index/user?paginate=${this.perPage}&page=${this.currentPage}`
      url +=  this.searchParameter != '' ? `&search[username]=${this.searchParameter}` : ''
      this.items = [ 
        
          { 
               id:1 ,
               avatar : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
               username : 'Ahmed' ,
               custom_attributes: 'attr1 att2',
               status: 'valid',
               broadcast:true,
          },
          { 
               id:2 ,
               avatar : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
               username : 'Ahmed' ,
               custom_attributes: 'attr1 att2',
               status: 'valid',
               broadcast:true,
          },
          { 
               id:3 ,
               avatar : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
               username : 'Ahmed' ,
               custom_attributes: 'attr1 att2',
               status: 'valid',
               broadcast:false,
          },
          { 
               id:4 ,
               avatar : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
               username : 'Ahmed' ,
               custom_attributes: 'attr1 att2',
               status: 'valid',
               broadcast:false,
          }
        
       ]
      
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.$store.state.appConfig.userListPerPage = paginate
      this.currentPage = 1
      this.isBusy = true
      this.perPage = paginate;
      this.getRecords()
    },
    searchParameterChanged(value){
      this.currentPage = 1
      this.isBusy = true
      this.searchParameter = value.target.value;
      this.getRecords()
    },
    statusFilter(value){
      this.currentPage = 1
      this.isBusy = true
      this.statusFilter.status = value 
      this.getRecords()
    }
  },
  

    
 
}
</script>

