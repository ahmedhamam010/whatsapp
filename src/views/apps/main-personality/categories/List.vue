<template>
  <b-row>
    <b-col md="12">
      <b-card>

        <div class="mt-3 mb-2 ml-2 mr-2">
          <b-row>

            <b-col md="6" class="p-md-0">
              <h3>Personality Categories</h3>
            </b-col>

            <!-- Search -->
            <b-col
              cols="12"
              md="6"
              class="p-md-0"
            >
              <div class="d-flex align-items-center justify-content-end">
                <b-button
                  variant="primary"
                  @click="redirectToAddForm()"
                >
                  <span class="text-nowrap">Add Category</span>
                </b-button>
              </div>
            </b-col>

          
          </b-row>

        </div> 
  
        <div>

          <!-- {{ data.item.title.length > 25 ? data.item.title.substring(0, 35) + '.....' : data.item.title }} -->
        
          <!-- types -->
          <app-collapse
            accordion
            :type="collapseType"
            
          >

            <app-collapse-item  v-for="field in fields" :key="field.id" 
            :title="
            'Title EN: ' + filterTitle(field.title) +
            ' , Title AR: ' + filterTitle(field.title_ar) +
            ' , Questions Number: ' + field.questions_number ">
              <div class="text-center">

                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="flat-primary"
                  class="mb-2"
                  :to="{ name: 'apps-personality-categories-edit', params: { id:  field.id } }"
                >
                  <feather-icon
                    icon="ListIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Edit</span>
                </b-button>

                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="flat-secondary"
                  class="mb-2"
                  :to="{ name: 'apps-personality-categories-details', params: { id:  field.id } }"
                >
                  <feather-icon
                    icon="EyeIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Details</span>
                </b-button>

                

                

                <b-button
                v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                  variant="flat-danger"
                  class="mb-2"
                  @click="confirmDeleteMsg(field.id)"
                >
                  <feather-icon
                    icon="TrashIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Delete</span>
                </b-button>

              </div>

              <app-collapse
                accordion
                :type="collapseType"
                
              >

              <!--second level-->
              <template v-if="field.nested_children && field.nested_children.length > 0">
                <app-collapse-item  
                v-for="subCategory in field.nested_children"
                :key="subCategory.id"
                
                :title="
                'Title EN: ' + 
                filterTitle(subCategory.title) + 
                ' , Title AR: ' + filterTitle(subCategory.title_ar)
                + ' , Questions Number: ' + subCategory.questions_number "
                >
                  <div class="text-center">

                    <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="flat-primary"
                      class="mb-2"
                      :to="{ name: 'apps-personality-categories-edit', params: { id:  subCategory.id } }"
                    >
                      <feather-icon
                        icon="ListIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Edit</span>
                    </b-button>

                    <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="flat-secondary"
                      class="mb-2"
                      :to="{ name: 'apps-personality-categories-details', params: { id:  subCategory.id } }"
                    >
                      <feather-icon
                        icon="EyeIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Details</span>
                    </b-button>


                    <b-button
                    v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                      variant="flat-danger"
                      class="mb-2"
                      @click="confirmDeleteMsg(subCategory.id)"
                    >
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Delete</span>
                    </b-button>

                  </div>

                  <app-collapse
                    accordion
                    :type="collapseType"
                    
                  >

                  </app-collapse>


                  <template v-if="subCategory.children && subCategory.children.length > 0">
                    <b-list-group>
                      <b-list-group-item 
                      class="d-flex" 
                      v-for="lastSubCategory in subCategory.children"
                      :key="lastSubCategory.id"
                      >
                        <b-row class="w-100">
                        <b-col md="11" class="text-left d-flex align-items-center" >
                        <span class="mr-1">
                          <feather-icon
                            icon="GridIcon"
                            size="17"
                          />
                        </span>
                        <span>
                          <span class="font-weight-bold">Title EN: </span> {{filterTitle(lastSubCategory.title)}} ,
                          <span class="font-weight-bold">Title AR: </span> {{filterTitle(lastSubCategory.title_ar)}} ,
                          <span class="font-weight-bold">Related Questions Number: </span> {{lastSubCategory.questions_number ? lastSubCategory.questions_number : '' }}
                          </span>
                        </b-col>
                        <b-col md="1">
                        <!---->
                        <b-dropdown
                          variant="link"
                          no-caret
                          :right="false"
                        >

                          <template #button-content>
                            <feather-icon
                              icon="MoreVerticalIcon"
                              size="16"
                              class="align-middle text-body"
                            />
                          </template>

                          <b-dropdown-item :to="{ name: 'apps-personality-categories-view', params: { id: lastSubCategory.id } }">
                            <feather-icon icon="FileTextIcon" />
                            <span class="align-middle ml-50">Details</span>
                          </b-dropdown-item>            
                  
                          <b-dropdown-item :to="{ name: 'apps-personality-categories-edit', params: { id: lastSubCategory.id } }">
                            <feather-icon icon="EditIcon" />
                            <span class="align-middle ml-50">Edit</span>
                          </b-dropdown-item>

                          <b-dropdown-item @click="confirmDeleteMsg(lastSubCategory.id)">
                            <feather-icon icon="TrashIcon" />
                            <span class="align-middle ml-50">Delete</span>
                          </b-dropdown-item>

                        </b-dropdown>
                        <!---->
                        </b-col>
                        </b-row>
                      </b-list-group-item>
                    </b-list-group>
                  </template>

                </app-collapse-item>
              </template>
              <!--second level-->

              </app-collapse> 

            </app-collapse-item>


          </app-collapse>
        </div>

      </b-card>
    </b-col>

    <template v-if="isLoading">
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
    
  </b-row>
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar,BSpinner,BTable,BPagination,BMedia} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTab,
    BTabs,
    BCardText,
    BCardTitle,
    BButton,
    AppCollapse,
    AppCollapseItem,
    BFormRadioGroup,
    BFormRadio,
    BFormGroup,
    BListGroup,
    BListGroupItem,
    BDropdown,
    BDropdownItem,
    BAvatar,BSpinner,BTable,BPagination,BMedia
  },
  directives: {
    Ripple,
  },
  data () {
    return{
    collapseType: 'shadow',
    items: [],
      currentPage: 1,
      perPage: 10,
      rows: null,
      fields : [],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      statusOptions:['pending', 'accepted', 'rejected'],
      searchParameter: '',
      tableFilters : {
        status : null,
      },
      isBusy:false,
      deleteConfirmed: '',
      isLoading:false
    }
  },
  mounted() {
   this.getRecords();
    
  },
  methods :{
    filterTitle(title){
      let filteredTitle = title.length > 25 ? title.substring(0, 35) + '.....' : title
      return filteredTitle

    },
   redirectToAddForm(){
      router.replace('/apps/personality/categories/add')
    },
     deleteItem(id=0){
            
      axios.delete(`personalityCategories/${id}`, 
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
      this.isLoading = true
      this.isBusy = true
      var url = `personalityCategories?treeList=1?paginate=${this.perPage}&page=${this.currentPage}`
      url +=  this.searchParameter != '' ? `&search[name]=${this.searchParameter}` : ''
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url, this.headersObj)
      .then(response => {
         this.isLoading = false
         console.log('personalityCategories:' , response.data.data )
         this.fields = response.data.data

        //add custom question number key to every category and sub category

        for( let mainCat = 0 ; mainCat < this.fields.length ; mainCat ++ ){
          
          for( let subCat = 0 ; subCat < this.fields[mainCat].nested_children.length ; subCat++  ){

            let subSub = this.fields[mainCat].nested_children[subCat].children.reduce((accumulator, object) => {

              return accumulator + object.questions_number;

            }, 0);

            this.fields[mainCat].nested_children[subCat]['questions_number'] = subSub

          }

          let sum = this.fields[mainCat].nested_children.reduce((accumulator, object) => {

            return accumulator + object.questions_number;

          }, 0);

          this.fields[mainCat]['questions_number'] = sum

        }

         this.isBusy = false
      } )
      .catch(error => {
              this.isLoading = false
              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error.response.data.msg}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })

             })
     
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.currentPage = 1
      this.isBusy = true
      this.perPage = paginate;
      this.getRecords()
    },
    searchParameterChanged(value){
      this.currentPage = 1
      this.isBusy = true
      this.searchParameter = value.target.value;;
      this.getRecords()
    },
    statusFilter(value){
      this.currentPage = 1
      this.isBusy = true
      this.statusFilter.status = value 
      this.getRecords()
    }
    
  }
 
 
  
 
}
</script>


<style scoped>
.tabs .nav-item,
.tabs .nav-item .feather{
  font-size: 1.1rem;
}
.list-group-item:hover{ cursor : pointer }

</style>