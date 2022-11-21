<template>
  <b-row>
    <b-col md="12">
      <b-card>
    <b-tabs>
      <b-tab active>
        <template #title>
          <feather-icon icon="FileTextIcon" />
          <span>Course Details</span>
        </template>

        <br>

        <!---->
        <b-row>

      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="5"
        class="d-flex flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="image"
            style="background: #eee;"
            variant="light-admin"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 style="margin-bottom: .5rem !important;">
                Title EN: &nbsp;{{ title }}
              </h4>
              <h4 style="margin-bottom: .5rem !important;">
                Title AR: &nbsp;{{ title_ar }}
              </h4>
              <span class="card-text">By Nurabi</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                :to="{ name: 'apps-courses-edit', params: { id: id } }"
                variant="primary"
                class="mb-1"
              >
                Edit
              </b-button>
              &nbsp;&nbsp;

              <b-button
                :to="{ name: 'apps-practicalTasks-add-from-course', params: { courseTitle : title , courseId: id } }"
                variant="primary"
                class="mb-1 d-none"
              >
                Add Practical Task
              </b-button>
              &nbsp;&nbsp;

              <b-button
                :to="{ name: 'apps-courses-add-section', params: { courseTitle : title , courseId : id } }"
                variant="primary"
                class="mb-1"
              >
                Add Section
              </b-button>

              <b-button
                variant="outline-danger"
                class="d-none ml-1 mb-1 "
              >
                Delete
              </b-button>
            </div>
          </div>
        </div>

        <div v-if="preview">
          <h4 class="mb-1">
            Preview
          </h4>
          <video class="w-100" controls id="video">
              <source :src="preview" type="video/mp4">
          </video>
        </div>

        <!-- User Stats -->
        <div class="d-none">
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              variant="light-primary"
              rounded
            >
              <feather-icon
                icon="DollarSignIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                23.3k
              </h5>
              <small>Monthly Sales</small>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <b-avatar
              variant="light-success"
              rounded
            >
              <feather-icon
                icon="TrendingUpIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                $99.87k
              </h5>
              <small>Annual Profit</small>
            </div>
          </div>
        </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="7"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Thumbnail</span>
            </th>
            <td class="pb-50">
              <b-avatar
                v-if="thumbnail"
                :src="thumbnail"
                text="cdscsd"
                variant="light-admin"
                class="h-auto"
                style="max-width:130px"
                rounded
              />
            </td>
          </tr>
          <tr>
            <th width="30%" class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Slug</span>
            </th>
            <td class="pb-50">
              {{ slug }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="GridIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Category</span>
            </th>
            <td class="pb-50 text-capitalize">
              Category En: {{ category }}<br>
              Category Ar: {{ category_ar }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Level</span>
            </th>
            <td class="pb-50 text-capitalize">
             {{level}}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="BarChartIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Status</span>
            </th>
            <td class="pb-50">
              {{status ? 'Published' : 'Drafted' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">language</span>
            </th>
            <td class="pb-50">
              {{ language }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="DollarSignIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Price</span>
            </th>
            <td class="pb-50">
              {{ price ? price + ' ' + currency.symbol : 'Free' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Survey</span>
            </th>
            <td class="pb-50">
              {{ survey }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">certificate</span>
            </th>
            <td class="pb-50">
              {{ certificate }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Type</span>
            </th>
            <td class="pb-50">
              {{ type }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Description EN</span>
            </th>
            <td class="pb-50">
              {{ description_en }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Description AR</span>
            </th>
            <td class="pb-50">
              {{ description_ar }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Seo Title EN</span>
            </th>
            <td class="pb-50">
              {{ title_seo_en }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Seo Title AR</span>
            </th>
            <td class="pb-50">
              {{ title_seo_ar }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Seo Description EN</span>
            </th>
            <td class="pb-50">
              {{ description_seo_en }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Seo Description AR</span>
            </th>
            <td class="pb-50">
              {{ description_seo_ar }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CodeIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Seo Image</span>
            </th>
            <td class="pb-50">
              <b-avatar
                v-if="image_seo"
                :src="image_seo"
                text="cdscsd"
                variant="light-admin"
                size="104px"
                rounded
              />
            </td>
          </tr>

          
        </table>
      </b-col>
    </b-row>
        <!---->
      </b-tab>
      
      <b-tab>
        <template #title>
          <feather-icon icon="FileIcon" />
          <span>Course Content</span>
        </template>
        <br>

      
      <div>
       
        <!-- types -->
        <app-collapse
          accordion
          :type="collapseType"
        >

          <app-collapse-item v-for="(section , index) in courseDetails" :key="index" :title="section.section">
            <h5>
              Title EN: {{section.section}}<br><br>
              Title AR: {{section.section_ar}}
            </h5>
            <div class="text-center">
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="flat-primary"
                class="mb-2"
                :to="{ name: 'apps-sections-edit-from-course', params: { id:  section.id } }"
              >
                <feather-icon
                  icon="ListIcon"
                  class="mr-50"
                />
                <span class="align-middle">Edit Section</span>
              </b-button>

              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="flat-success"
                class="mb-2"
                :to="{ name: 'apps-sections-add-lesson', 
                params: { 
                  courseTitle : title ,
                  courseId : id ,
                  sectionTitle : section.section ,
                  sectionId : section.id,
                  coursePrivacy : price,
                  courseType : type  } }"
              >
                <feather-icon
                  icon="ColumnsIcon"
                  class="mr-50"
                />
                <span class="align-middle">Add Lesson</span>
              </b-button>

              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="flat-secondary"
                class="mb-2"
                :to="{ name: 'apps-quizzes-add-section' , params: { courseId : id , id: section.id }}"
              >
                <feather-icon
                  icon="FileTextIcon"
                  class="mr-50"
                />
                <span class="align-middle">Add Quiz</span>
              </b-button>

              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-info"
                class="mb-2"
                :to="{ name: 'apps-practicalTasks-add-from-section', params: { courseTitle : title , courseId : id , sectionTitle : section.section , sectionId : section.id , coursePrivacy : price } }"
              >
                <feather-icon
                  icon="LayoutIcon"
                  class="mr-50"
                />
                <span class="align-middle">Add Practical Task </span>
              </b-button>
            </div>


            <b-list-group>
              <b-list-group-item 
              class="d-flex" 
              v-for="(lesson , indexs) in section.lessons" 
              :key="indexs"
              >
                <b-row class="w-100">
                <b-col md="11" class="text-left d-flex align-items-center" >
                <span class="mr-1">
                  <feather-icon
                    v-if="lesson.content_type == 'Quizze'"
                    icon="FileIcon"
                    size="17"
                  />
                  <feather-icon
                    v-else-if="lesson.content_type == 'PracticalTask'"
                    icon="FileTextIcon"
                    size="17"
                  />
                  <feather-icon
                    v-else
                    icon="CheckCircleIcon"
                    size="17"
                  />
                </span>
                <div>
                <span>Title EN: {{ lesson.content_type != 'PracticalTask' ? lesson.title : lesson.practical_task.question_en }}</span>
                <br>
                <span>Title AR: {{ lesson.content_type != 'PracticalTask' ? lesson.title_ar : lesson.practical_task.question_ar }}</span>
              
                
                </div>
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

                  <b-dropdown-item 
                  v-if="lesson.content_type == 'Quizze'"
                  :to="{ name: 'apps-quizzes-view-section' , params: { id:  lesson.quizze_id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>

                  <b-dropdown-item 
                  v-if="lesson.content_type != 'Quizze' && lesson.content_type != 'PracticalTask'"
                  :to="{ name: 'apps-lessons-view' , params: { id:  lesson.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>

                  <b-dropdown-item 
                  v-if="lesson.content_type == 'PracticalTask'"
                  :to="{ name: 'apps-practical-tasks-view' , params: { id:  lesson.practical_task_id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>

                  

                <!--edit-->
                <b-dropdown-item 
                  v-if="lesson.content_type == 'Quizze'"
                  :to="{ name: 'apps-quizzes-edit-section' , params: { id:  lesson.quizze_id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>

                  <b-dropdown-item 
                  v-if="lesson.content_type != 'Quizze' && lesson.content_type != 'PracticalTask'"
                  :to="{ name: 'apps-lessons-edit-from-course' , params: { id:  lesson.id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>

                  <b-dropdown-item 
                  v-if="lesson.content_type == 'PracticalTask'"
                  :to="{ name: 'apps-practical-tasks-edit-from-course' , params: { id:  lesson.practical_task_id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>
                <!--edit-->
                  
        

                  <b-dropdown-item v-if="lesson.content_type == 'Quizze'" @click="confirmDeleteMsg(lesson.quizze_id , index ,indexs , 'quizzes')">
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50">Delete</span>
                  </b-dropdown-item>

                  <b-dropdown-item v-if="lesson.content_type != 'Quizze'" @click="confirmDeleteMsg(lesson.id , index ,indexs ,'lessons')">
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50">Delete</span>
                  </b-dropdown-item>

                </b-dropdown>
                <!---->
                </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>

          </app-collapse-item>


        </app-collapse>
      </div>

      </b-tab>

      <b-tab @click.once="getEnrolledUsers()">
        <template #title>
          <feather-icon icon="UsersIcon" />
          <span>Enrolled Users</span>
        </template>

        <!--users table-->
        <b-table 
          responsive
          :busy="isBusy"
          :items="items"
          class="mt-2"
          show-empty
          empty-text="No matching records found"
          :fields="fields"
        >

          <!-- Column: User -->
          <template #cell(image)="data">
            <b-media vertical-align="center">
              <template #aside>
                <b-avatar
                  size="32"
                  :src="data.item.image"
                />
              </template>
            </b-media>
          </template>
        </b-table>
        
        <div class="mx-2 mb-2">
          <b-row>

            
            <!-- Pagination -->
            <b-col
              cols="12"
              sm="12"
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
        <!--/users table-->
      </b-tab>

       <b-tab @click.once="getPracticalTasks()">
        <!-- <template #title>
          <feather-icon icon="LayoutIcon" />
          <span>Pending Practical Tasks</span>
        </template> -->
        <br>

      
        <div>
       
        <!-- types -->
        <app-collapse
          accordion
          :type="collapseType"
          v-if="practicalTaskQuestions.length > 0"
        >

          <app-collapse-item v-for="(practicalQuestion , index) in practicalTaskQuestions" :key="index" :title="practicalQuestion.question">
            <!--users list-->
            <b-list-group>
              <b-list-group-item 
              class="d-flex" 
              v-for="(usersQuestion , indexs) in practicalQuestion.practicalTasksUsers" 
              :key="indexs"
              >
                <b-row class="w-100">
                <b-col md="11" class="text-left d-flex align-items-center" >
                  <span>{{ usersQuestion.user.username }}</span>
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

                  <b-dropdown-item @click="downloadTask(usersQuestion.attachment)">
                    <feather-icon icon="DownloadCloudIcon" />
                    <span class="align-middle ml-50">Download</span>
                  </b-dropdown-item>

                  <b-dropdown-item @click="changeApproveStatus(usersQuestion.id , 'finished' , index , indexs)">
                    <feather-icon icon="CheckIcon"/>
                    <span class="align-middle ml-50">Accept</span>
                  </b-dropdown-item>

                  <b-dropdown-item @click="changeApproveStatus(usersQuestion.id , 'rejected')">
                    <feather-icon icon="XIcon"/>
                    <span class="align-middle ml-50">Reject</span>
                  </b-dropdown-item>
                  
          

                </b-dropdown>
                <!---->
                </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>
            <!--users list-->
          </app-collapse-item>


        </app-collapse>
      </div>

      </b-tab>

      
      
      
    
    </b-tabs>
      </b-card>
    </b-col>

    <template v-if="loading">
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
    id: router.currentRoute.params.id,
    courseTitle : '',

    image:null,
    thumbnail:null,
      title:"",
      title_ar:"",
      slug:"",
      category: "",
      category_ar: "",
      level:"",
      status:null,
      requirements:'Req',
      price: '',
      language :'',
      currency : '',


    collapseType: 'shadow',
    courseDetails : [],

    practicalTaskQuestions : [],
    loading:true,

    headersObj  : { 
      headers: 
        { 
          // Accept: 'application/json', 'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Methods': 'PUT,put',
        }
    
      },
      items: [],
      currentPage: 1,
      perPage: 10,
      rows: null,
      fields:[],
      isBusy:false,

      survey: '',
      preview: '',
      type: '',
      description_en: '',
      description_ar: '',
      title_seo_en: '',
      title_seo_ar: '',
      description_seo_en: '',
      description_seo_ar: '',
      image_seo: '',
      certificate: '',
     

    }
  },
  mounted() {
   
    //fetch course data
    axios
    .get(`courses/${this.id}`)
    .then(response => {
    this.loading = false
    this.title = response.data.course.title
    this.title_ar = response.data.course.title_ar
    this.slug = response.data.course.slug
    this.level = response.data.course.level
    this.status = response.data.course.status
    this.price = response.data.course.price
    this.currency = response.data.course.currency
    this.image = response.data.course.image
    this.category = response.data.course.category.name
    this.category_ar = response.data.course.category.name_ar
    this.language = response.data.course.language.name
    
    console.log( 'course details' , response.data.course )
    for( let s=0 ; s< response.data.course.sections.length; s++  ){

        this.courseDetails.push({
          section : response.data.course.sections[s].title,
          section_ar : response.data.course.sections[s].title_ar,
          id : response.data.course.sections[s].id,
          lessons : response.data.course.sections[s].lessons,
       
        })
    }

    this.survey = response.data.course.questionnaire ? response.data.course.questionnaire.title :''
    this.certificate = response.data.course.certificate != null ? response.data.course.certificate.name : ''
    this.type = response.data.course.is_live ? 'Live' : 'Online'
    this.description_en = response.data.course.description_en
    this.description_ar = response.data.course.description_ar
    this.title_seo_en = response.data.course.title_seo_en
    this.title_seo_ar = response.data.course.title_seo_ar
    this.description_seo_en = response.data.course.description_seo_en
    this.description_seo_ar = response.data.course.description_seo_ar
    this.image_seo = response.data.course.image_seo
    this.thumbnail = response.data.course.thumbnail
    this.preview = response.data.course.preview
    
    if( this.preview ){
    var video = document.getElementById('video')
    video.load();
    }
    
 

    console.log( 'final course Detials' , this.courseDetails )
    
    })
    .catch(error => {
      this.loading = false
      console.log( 'error fetch course', error)
      })

  },
  methods :{
    changeApproveStatus(id , status , index , indexs){
     //change status
      var formData = new FormData();
      formData.append("status", status);

       axios
            .get(`practicalTasksUser/${id}/users/pending`, formData, this.headersObj)
            .then(response => {
                
                console.log('courses succuss' , response)
                var task = this.practicalTaskQuestions[index].practicalTasksUsers;
                task.splice(indexs,1);
                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Updated Successfully`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
            } )
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

             })
     //change status
    },
    openFile(path){
      window.open(path)
    },
    deleteItem(id, index ,indexs , type){   
      axios.delete(`${type}/${id}`, 
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
        var lessonsAfterDelete = this.courseDetails[index].lessons;
            lessonsAfterDelete.splice(indexs,1);
      })
      .catch(error => {
      console.log( 'delete axios error:' , error )
      });
        
    },

    confirmDeleteMsg(id , index , indexs , type) {
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
          if( this.deleteConfirmed ){ 
            this.deleteItem(id , index ,indexs , type)
            // alert( id +","+ index +","+ indexs +","+ type )
            
          }
        })
       
    },
    getPracticalTasks(){
      
      //axios to fetch tasks

      axios
      
      .get(`practicalTasksUser/${this.id}/users/pending`)
      .then(response => {
          console.log( 'pending practical task details : ' , response.data.data[0].question )
          for( let s=0 ; s< response.data.data.length; s++  ){

            this.practicalTaskQuestions.push({
              id : response.data.data[s].id,
              question : response.data.data[s].question,
              practicalTasksUsers : response.data.data[s].practical_tasks_users
          
            })
        }

        console.log( 'this.practicalTaskQuestions : ' ,this.practicalTaskQuestions )

        })
        .catch(error => {
          console.log( 'pending practical task details : ' , response.data )
        })

        //axios to fetch tasks
    },
    downloadTask(urlTask){
    
     window.open(urlTask); 
    
    },
    getEnrolledUsers(){
      this.setAllData()
      this.loading = true
      axios
      .get(`courses/${this.id}/enrolled/users?paginate=10&page=${this.currentPage}`, this.headersObj)
      .then(response => {
         this.loading = false
         console.log('enrolled users:' , response.data.data )
         this.fields = [
            { key: 'id', label : 'id' },
            { key: 'image', label :'image'},
            { key: 'username',label :'name' },
            { key: 'email',label :'email' },
            { key: 'phone', label :'phone'},
            
         ]
         
         let data = response.data.data.data;
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].user.id ,
               username : data[i].user.username ,
               image : data[i].user.avatar ? data[i].user.avatar : '' ,
               email : data[i].user.email ,
               phone : data[i].user.phone ,
             })
         }
         this.isBusy = false
      } )
      .catch(error => {
              this.loading = false
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
    setAllData(){
      this.items= []
      this.currentPage = 1
      this.perPage= 10
      this.rows= null
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getEnrolledUsers()
    },
    paginateChanged(paginate){
      this.currentPage = 1
      this.isBusy = true
      this.perPage = paginate;
      this.getEnrolledUsers()
    },
    
  }
 
 
  
 
}
</script>


<style scoped>
.tabs .nav-item,
.tabs .nav-item .feather{
  font-size: 1.1rem;
}
.list-group-item:hover{ cursor : pointer }
video{
    border-radius: 5px;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
}
th.pb-50,td.pb-50{
  padding-bottom: 1rem !important;
}
</style>