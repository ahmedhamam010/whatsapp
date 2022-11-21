<template>
  <div class="position-relative">   

      <b-card class="d-none">
      <h5>Filters</h5>  
      <b-row class="mt-md-2">
        
      </b-row>  
      </b-card> 

      <b-card title="Fields And Goals List"> 

            <div class="mt-3 mb-0">

              <!-- Table Top -->
              <b-row>

                <!-- Per Page -->
                <b-col
                  cols="12"
                  md="6"
                  class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
                >
                  <label>Show</label>
                  <v-select
                    v-model="perPage"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="perPageOptions"
                    :clearable="false"
                    class="per-page-selector d-inline-block mx-50"
                    @input="paginateChanged"
                  />
                  <label>entries</label>
                </b-col>

            
                <b-col
                  cols="12"
                  md="6"
                >
                  <div class="d-flex align-items-center justify-content-end">
                    <b-form-input
                      v-model="searchParameter"
                      class="search-name d-inline-block mr-1"
                      placeholder="Search..."
                      @keypress.enter="searchParameterChanged"
                    />
                    <b-button
                      variant="primary"
                      @click="redirectToAddForm()"
                    >
                      <span class="text-nowrap">Add Field & Goal</span>
                    </b-button>
                  </div>
                </b-col>

              
              </b-row>

            </div>

            
            <b-table 
              responsive
              :busy="isBusy"
              :items="items"
              class="mt-2 fieldsGoals"
              show-empty
              :empty-text="loading_msg"
              :fields="fields"
            >

                <!-- Column: Status -->
                <template #cell(status)="data">
                    {{ data.item.status ? 'Published' : 'Drafted' }}
                </template>


                <template #cell(show_goals)="row">
                    <b-form-checkbox
                    v-model="row.detailsShowing"
                    plain
                    class="vs-checkbox-con"
                    @change="row.toggleDetails"
                    >
                    
                    <span class="vs-label">{{ row.detailsShowing ? 'Hide' : 'Show' }}</span>
                    </b-form-checkbox>
                </template>

                <template #row-details="row">
                    <b-card>

                    <h4  class="text-center"  v-if="row.item.goals.length == 0">
                      No Goals Added Yet  
                    </h4>  

                    <b-list-group class="mb-2">
                        <b-list-group-item
                            v-for="goal in row.item.goals"
                            :key="goal.id"
                            tag="li"
                            class="dark-card-layout"
                            >
                            <div class="d-flex justify-content-between align-items-center">
                                <b-row class="w-100">
                                    <b-col md="4">Name En: {{ goal.name_en }}</b-col>
                                    <b-col md="4">Name AR: {{ goal.name_ar }}</b-col>
                                    <b-col md="4">Status: {{ goal.is_published ? 'Published' : 'Drafted' }}</b-col>
                                </b-row>

                                <div>
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

                                        <b-dropdown-item :to="{ name: 'apps-tracking-system-fields-and-goals-view', params: { id: goal.id } }">
                                            <feather-icon icon="FileTextIcon" />
                                            <span class="align-middle ml-50">Details</span>
                                        </b-dropdown-item>
                                        
                                        <b-dropdown-item :to="{ name: 'apps-tracking-system-fields-and-goals-edit', params: { id: goal.id } }">
                                            <feather-icon icon="EditIcon" />
                                            <span class="align-middle ml-50">Edit</span>
                                        </b-dropdown-item>

                                        <b-dropdown-item @click="confirmDeleteMsg(goal.id,goal.name_en,'goal')">
                                            <feather-icon icon="TrashIcon" />
                                            <span class="align-middle ml-50">Delete</span>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                        </b-list-group-item>
                    </b-list-group>

                    

                    <b-button
                        size="sm"
                        variant="outline-secondary"
                        @click="row.toggleDetails"
                        v-if="row.item.goals.length > 0"
                    >
                        Hide Details
                    </b-button>
                    </b-card>
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

                  <b-dropdown-item :to="{ name: 'apps-tracking-system-fields-and-goals-view', params: { id: data.item.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>
                  
                  <b-dropdown-item :to="{ name: 'apps-tracking-system-fields-and-goals-edit', params: { id: data.item.id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>

                  <b-dropdown-item @click="confirmDeleteMsg(data.item.id,data.item.name_en,'field')">
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

      <template v-if="isLoading">
          <div class="text-center loading-spinner" id="loading-spinner">
              <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
          </div>
      </template>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BCardText, BPagination ,BBadge, BSpinner, BFormCheckbox ,BListGroup, BListGroupItem 
} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import getDomain from '@/helperFunctions/getDomain'




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
    BCardText, BPagination, vSelect, BBadge, BSpinner, BFormCheckbox,BListGroup, BListGroupItem
  
  },
  data(){
    return{
      id :'',
      fields: [
            'show_goals',
            'name_en',
            'name_ar',
            'status',
            'actions'
            ],
      items: [],
      currentPage: 1,
      perPage: this.$store.state.appConfig.TrackingSystemFieldsListPerPage,
      rows: null,
      
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      isBusy:false,
      deleteConfirmed: '',
      isLoading:true,
      loading_msg:'',
      searchParameter:'',
    }
  },
  directives: {
    Ripple,
  },
  mounted(){
      this.getRecords()
  },
  methods:{
    getRecords(){
      this.isBusy = true
      this.isLoading = true
      var url = getDomain('no') + `trackingsystem/fieldsGoals/index?flag=dash&paginate=${this.perPage}&page=${this.currentPage}`
      // var url = getDomain('no') + `trackingsystem/fieldsGoals/index`
      console.log(url)
      url +=  this.searchParameter != '' ? `&search=${this.searchParameter}` : ''
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url, this.headersObj)
      .then(response => {
         console.log('trackingsystem/fieldsGoals/index' , response.data.data )
         let data = response.data.data.data;
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         this.dataMeta.from = response.data.data.from
         this.dataMeta.to = response.data.data.to
         this.dataMeta.of = response.data.data.total
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].id ,
               name_en : data[i].name_en ,
               name_ar : data[i].name_ar ,
               status : data[i].is_published ,
               goals : data[i].goals ,

               
             })
         }
         this.isBusy = false
         this.isLoading = false
         this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
      } )
      .catch(error => {

              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })
                this.isLoading = false

             })
     
    },
    redirectToAddForm(){
       router.push({ path: '/apps/trackingSystem/fieldsGoals/add/'})
    },
    deleteItem(id){   
      axios.delete( getDomain('no') + `trackingsystem/fieldsGoals/${id}` , 
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
         this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `${error.response.data.msg}`,
            icon: 'CoffeeIcon',
            variant: 'danger',
            text: '',
          },
        }) 
        });
    },

    confirmDeleteMsg(id,name,type) {
      this.deleteConfirmed = ''
      this.$bvModal
      .msgBoxConfirm(`Are you sure you want to delete the ${type} ${name}.`, {
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
    
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.$store.state.appConfig.categoryListPerPage = paginate
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
  },
  

    
 
}
</script>

<style scoped>
.fieldsGoals .list-group .list-group-item{background-color: #f8f8f8;}
</style>