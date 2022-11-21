<template>
  <div class="position-relative">
      <b-card>
        <!-- User Info: Input Fields -->
        <b-row>
          <!-- Field: Question -->
            <b-col
              cols="12"
              md="6"
            >
                <b-form-group
                  label="Question EN"
                  label-for="question"
                >
                  <b-form-textarea
                    id="question"
                    v-model="question"
                    rows="8"
                    disabled
                  />
                </b-form-group>
              
            </b-col>  

            <!-- Field: Question -->
            <b-col
              cols="12"
              md="6"
            >
                <b-form-group
                  label="Question AR"
                  label-for="question_ar"
                >
                  <b-form-textarea
                    id="question_ar"
                    v-model="question_ar"
                    rows="8"
                    disabled
                  />
                </b-form-group>
              
            </b-col>  

          <!-- Field: Course -->
          <b-col
            cols="12"
            md="6"
          >
        
              <b-form-group
                label="Course EN"
                label-for="course"
                
              >
                <b-form-input
                  id="course"
                  v-model="course"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  input-id="course"
                  disabled
                />
              </b-form-group>
          
          </b-col>

          <!-- Field: Course AR -->
          <b-col
            cols="12"
            md="6"
          >
        
              <b-form-group
                label="Course AR"
                label-for="course_ar"
                
              >
                <b-form-input
                  v-model="course_ar"
                  dir="rtl"
                  input-id="course_ar"
                  disabled
                  id="course_ar"
                />
              </b-form-group>
          
          </b-col>

          <!-- Field: Section -->
          <b-col
            cols="12"
            md="6"
          >
        
              <b-form-group
                label="Section EN"
                label-for="section"
                
              >
                <b-form-input
                  v-model="section"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  input-id="section"
                  disabled
                  id="section"
                />
              </b-form-group>
          
          </b-col>

          <!-- Field: Section AR -->
          <b-col
            cols="12"
            md="6"
          >
        
              <b-form-group
                label="Section AR"
                label-for="section_ar"
                
              >
                <b-form-input
                  v-model="section_ar"
                  dir="rtl"
                  input-id="section_ar"
                  disabled
                  id="section_ar"
                />
              </b-form-group>
          
          </b-col> 

          <!-- Field: Privacy -->
          <b-col
            cols="12"
            md="12"
          >
        
              <b-form-group
                label="Privacy"
                label-for="privacy"
                
              >
                <b-form-input
                  v-model="privacy"
                  
                  input-id="privacy"
                  disabled
                  id="privacy"
                />
              </b-form-group>
          
          </b-col>     

          
        </b-row>
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'



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
  
  },
  data(){
    return{
      id : router.currentRoute.params.id,
     question : '',
      question_ar : '',
     course : '',
     course_ar : '',
     section : '',
     section_ar : '',
     privacy:'',
    }
  },
  mounted(){
    axios
          .get(`practicalTasks/${this.id}/show`)
          .then(response => {
            console.log('practicalTask show' , response.data)
            this.question = response.data.practicalTask.question
            this.question_ar = response.data.practicalTask.question_ar
            this.course = response.data.practicalTask.course.title
            this.course_ar = response.data.practicalTask.course.title_ar
            this.section = response.data.practicalTask.section.title
            this.section_ar = response.data.practicalTask.section.title_ar
            this.privacy = response.data.practicalTask.lesson.privacy ? 'Yes' : 'No'
            
            
          })
          .catch(error => {
            console.log(error)
          })
  }

    
 
}
</script>

