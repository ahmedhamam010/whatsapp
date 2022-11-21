<template>
  <b-row>
    <b-col md="12">
    <section id="faq-search-filter">
    <b-card
        no-body
        class="faq-search"
        :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">
            {{ title }} <br> {{ title_ar }}
          </h2>
          <div class="text-center">
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="flat-secondary"
                class="mb-2"
                :to="{ name: 'apps-sections-edit', params: { id: id } }"
              >
                <feather-icon
                  icon="EditIcon"
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
                  courseTitle : course ,
                  courseId : courseId ,
                  sectionTitle : title ,
                  sectionId : id,
                  coursePrivacy : price,
                  courseType : type } }"
              >
                <feather-icon
                  icon="ColumnsIcon"
                  class="mr-50"
                />
                <span class="align-middle">Add Lesson</span>
              </b-button>

              

              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="flat-primary"
                class="mb-2"
                :to="{ name: 'apps-quizzes-add-section' , params: { courseId : courseId , id: id }}"
              >
                <feather-icon
                  icon="FileIcon"
                  class="mr-50"
                />
                <span class="align-middle">Add Quiz</span>
              </b-button>

              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="flat-info"
                class="mb-2"
                :to="{ name: 'apps-practicalTasks-add-from-section', params: { courseTitle : course , courseId : courseId , sectionTitle : title , sectionId : id , coursePrivacy : price } }"

               
              >
                <feather-icon
                  icon="LayoutIcon"
                  class="mr-50"
                />
                <span class="align-middle">Add Practical Task</span>
              </b-button>

            </div>

          
        </b-card-body>
    </b-card>
    </section>
    </b-col>

    <b-col md="12">
      <b-card>
      <b-list-group class="mt-2">
        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Title EN
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
            {{title}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Title AR
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
            {{title_ar}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Status
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
            {{status ? 'Active' : 'Inactive'}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Course EN
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
            {{course}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Course AR
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
          {{course_ar}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Seo Name EN
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
          {{title_seo_en}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Seo Name AR
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
          {{title_seo_ar}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Seo Description EN
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
          {{description_seo_en}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
              Seo Description AR
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
          {{description_seo_ar}}
            </b-col>

          </b-row>
        </b-list-group-item>

        <b-list-group-item>
          <b-row>
            <b-col
              cols="6"
              md="6"
            >
            Seo Image 
            </b-col>  

            <b-col
              cols="6"
              md="6"
            >
              <b-avatar
                :src="image_seo"
                size="104px"
                rounded
              />
            </b-col>

          </b-row>
        </b-list-group-item>

      </b-list-group>
      </b-card>
    </b-col>

    <b-col md="12" v-if="lessons.length > 0">
      <b-card>
       <b-list-group>

         <!--lesson-->
         <b-list-group-item 
              class="d-flex" 
              v-for="(lesson , indexs) in lessons" 
              :key="indexs"
              >
                <b-row class="w-100">
                <b-col md="11" class="text-left d-flex align-items-center" >
                <span class="mr-1">
                  <feather-icon
                    :icon="lesson.content_type == 'Quizze' ? 'FileIcon' : 'CheckCircleIcon'"
                    size="17"
                  />
                </span>
                <div>
                <span>Title EN: {{ lesson.title }}</span>
                <br>
                <span>Title AR: {{ lesson.title_ar }}</span>
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
          
                  <b-dropdown-item :to="{ name: lesson.content_type == 'Quizze' ? 'apps-quizzes-edit-section' : 'apps-lessons-edit', 
                                          params: { id: lesson.content_type == 'Quizze' ? lesson.quizze_id : lesson.id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>


                  <b-dropdown-item v-if="lesson.content_type == 'Quizze'">
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50" @click="confirmDeleteMsg(lesson.quizze_id , indexs , 'quizzes')">Delete</span>
                  </b-dropdown-item>

                  <b-dropdown-item v-if="lesson.content_type != 'Quizze'">
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50" @click="confirmDeleteMsg(lesson.id ,indexs ,'lessons')">Delete</span>
                  </b-dropdown-item>

                </b-dropdown>
                <!---->
                </b-col>
                </b-row>
        </b-list-group-item>
         <!--/lesson-->
      </b-list-group>
      </b-card>
    </b-col> 

    <template>
      <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
      <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
  </b-row>

  
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar, BMedia , BMediaAside, BMediaBody, BCardBody,BSpinner} from 'bootstrap-vue'
import router from '@/router'
import axios from '@axios'
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
    BAvatar,
    BMedia,
    BMediaAside,
    BMediaBody,
    BCardBody,
    BSpinner

  },
  directives: {
    Ripple,
  },
  mounted() {

    //fetch survey record
     axios
          .get(`sections/${this.id}`)
          .then(response => {
            this.isLoading = false
            console.log("fetch section details ",response)
            this.title = response.data.section.title
            this.title_ar = response.data.section.title_ar
            this.status = response.data.section.status
            this.course = response.data.section.course ? response.data.section.course.title : ''
            this.course_ar = response.data.section.course ? response.data.section.course.title_ar : ''
            this.courseId = response.data.section.course ? response.data.section.course.id : ''
            this.price = response.data.section.course ? response.data.section.course.price : ''
            this.type = response.data.section.course.is_live ? 'Live' : 'Online'
            this.lessons = response.data.section.lessons
            this.title_seo_en = response.data.section.title_seo_en
            this.title_seo_ar = response.data.section.title_seo_ar
            this.description_seo_en = response.data.section.description_seo_en
            this.description_seo_ar = response.data.section.description_seo_ar
            this.image_seo = response.data.section.image_seo

          

                
           
            
            
          })
          .catch(error => console.log(error))

  },
  data() {
    return {
    id : router.currentRoute.params.id,
    title : '',
    title_ar : '',
    status:'',
    course:'',
    course_ar:'',
    courseId : '',
    collapseType: 'shadow',
    lessons : [],
    deleteConfirmed: '',
    title_seo_en:'',
    title_seo_ar:'',
    description_seo_en:'',
    description_seo_ar:'',
    image_seo:'',
    price:null,
    type:null,
    isLoading:true,
    }
  },

  methods :{
    openFile(path){
      window.open(path)
    },

    deleteItem(id,indexs , type){
            
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
        var lessonsAfterDelete = JSON.parse(JSON.stringify(this.lessons))
            lessonsAfterDelete.splice(indexs,1);
            this.lessons = lessonsAfterDelete;
      })
      .catch(error => {
      console.log( 'delete axios error:' , error )
      });
        
    },

    confirmDeleteMsg(id , indexs , type) {
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
            this.deleteItem(id , indexs , type)
            
          }
        })
       
    },
  }
 
 
  
 
}
</script>


<style lang="scss" scoped>
@import '@core/scss/vue/pages/page-faq.scss';
.tabs .nav-item,
.tabs .nav-item .feather{
  font-size: 1.1rem;
}
.list-group-item:hover{ cursor : pointer }
</style>
