<template>
  <div class="position-relative">
      <b-card title="Practical Task Details">
        
        <!-- User Info: Input Fields -->
        <b-list-group>
            <b-list-group-item>
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Name
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >
                  {{ name }}
                </b-col>

              </b-row>
            </b-list-group-item>

            <b-list-group-item>
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Question
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >
                  {{ question }}
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
                  Section EN
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >
                  {{section}}
                </b-col>

              </b-row>
            </b-list-group-item>

            <b-list-group-item>
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Section AR
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >
                  {{section_ar}}
                </b-col>

              </b-row>
            </b-list-group-item>

            <b-list-group-item v-if="status == 'pending'">
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Actions
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >

                <b-button
                  v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                  variant="outline-success"
                 @click="changeApproveStatus(practicalTaskId , 'finished' )"
                 class="mr-1"
                >
                  <feather-icon
                    icon="CheckIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Accept</span>
                </b-button>

                 <b-button
                  v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                  variant="outline-danger"
                 @click="changeApproveStatus(practicalTaskId , 'rejected' )"
                 
                >
                  <feather-icon
                    icon="XIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Reject</span>
                </b-button>
              

                </b-col>

              </b-row>
            </b-list-group-item>
          

          <b-list-group-item v-if="status == 'answered'">
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
               
                  <span class="align-middle text-success" v-if="practicalStatus == 'finished'">Accepted</span>
                  <span class="align-middle text-danger" v-if="practicalStatus == 'rejected'">Rejected</span>
                </b-col>

              </b-row>
            </b-list-group-item>
          

          <b-list-group-item >
              <b-row>
                <b-col
                  cols="6"
                  md="6"
                >
                  Answer
                </b-col>  

                <b-col
                  cols="6"
                  md="6"
                >

                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline-primary"
                  @click="downloadTask(attachment)"
                >
                  <feather-icon
                    icon="DownloadCloudIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Download Answer</span>
                </b-button>

                </b-col>

              </b-row>
            </b-list-group-item>
       </b-list-group>

      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'




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
    BListGroup,
    BListGroupItem,
  
  },
  data(){
    return{
      id : router.currentRoute.params.id,
      status : router.currentRoute.params.status,
     question : '',
     name : '',
     course : '',
     course_ar : '',
     section : '',
     section_ar : '',
     attachment: '',
     practicalStatus:'',

    }
  },
  directives: {
    Ripple,
  },
  mounted(){
    
    axios
          .get(`practicalTasksUser/${this.id}`)
          .then(response => {
           
        
          console.log( 'this.practicalTaskQuestions ' , response.data.data )
          this.question = response.data.data.practical_task.question
          this.name = response.data.data.user.username
          this.attachment = response.data.data.attachment
          this.practicalTaskId = response.data.data.id
          this.practicalStatus = response.data.data.status
          this.course = response.data.data.practical_task.course.title
          this.course_ar = response.data.data.practical_task.course.title_ar
          this.section = response.data.data.practical_task.section.title
          this.section_ar = response.data.data.practical_task.section.title_ar
            
          })
          .catch(error => {
            console.log(error)
          })
  },
  methods:{
     downloadTask(urlTask){
      window.open(urlTask); 
    },
    changeApproveStatus(id , status ){
     //change status
     
      var statusMsg = status == 'finished' ? 'Accepted Successfully' : 'Rejected Successfully';
      var formData = new FormData();
      formData.append("status", status);
      formData.append("_method", "put");
       axios
      .post(`practicalTasksUser/${id}`, formData, this.headersObj)
      .then(response => {
          this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  title: `${statusMsg}`,
                  icon: 'CoffeeIcon',
                  variant: 'success',
                },
          })
           router.replace('/apps/pending/practicalTasks/list')
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
  }

    
 
}
</script>

