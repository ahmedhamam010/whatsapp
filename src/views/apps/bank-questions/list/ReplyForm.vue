<template>
  <div class="position-relative">
    <b-row>
      
      <b-col md="9">
        <validation-observer ref="simpleRules">
        <b-form
            ref="form"
            @submit.prevent="replyForm()"
        >
          <b-card>
            <div
              class="d-flex justify-content-start align-items-center mb-1"
            >
              <!-- avatar -->
              <b-avatar
                :src="avatarData.avatar"
                size="50"
                class="mr-1"
              />
              <!--/ avatar -->
              <div class="profile-user-info">
                <h6 class="mb-0">
                  {{username}}
                </h6>
                <small class="text-muted">{{ questionDate }}</small>
              </div>
            </div>
            <b-card-text>
              {{ question }}
            </b-card-text>


            <!-- comment box -->
            <b-form-group>
              <validation-provider
                #default="{ errors }"
                name="answer"
                rules="required"
              >
                <b-form-textarea
                  rows="7"
                  placeholder="Type Answer Here"
                  :state="errors.length > 0 ? false:null"
                  v-model="answer"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
              <div class="invalid-feedback d-block" v-if="formErrors.answer">{{ formErrors.answer }}</div>
            </b-form-group>
            <!--/ comment box -->

            <!--status field-->
              
            <b-form-group
            label="Status"
            label-for="status"
            class="d-none"
            
            >
            <v-select
                v-model="status"
                :options="statusOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="Status"
            />  
            </b-form-group>
           

            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="primary"
            >
              Reply
            </b-button>
          </b-card>
        </b-form>
        </validation-observer>
      </b-col>
      


      <b-col md="3">
        <b-card
          no-body
          class="card-developer-meetup"
        >
          <div class="bg-light-primary rounded-top text-center">
            <b-img
              :src="require('@/assets/images/illustration/email.svg')"
              alt="Meeting Pic"
              height="170"
            />
          </div>
          <b-card-body>
            

            <!-- media -->
            <b-media
              v-for="media in mediaData"
              :key="media.avatar"
              no-body
            >
              <b-media-aside class="mr-1">
                <b-avatar
                  rounded
                  variant="light-primary"
                  size="34"
                >
                  <feather-icon
                    :icon="media.avatar"
                    size="18"
                  />
                </b-avatar>
              </b-media-aside>
              <b-media-body>
                <h6 class="mb-0">
                  {{ media.title }}
                </h6>
                <small>{{ media.subtitle }}</small>
              </b-media-body>
            </b-media>

            

          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <template>
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>

  </div>
</template>


<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormTextarea ,  BAvatar, BCard, BCardText, BImg, BLink, BAvatarGroup, VBTooltip, BCardBody, BCardTitle,BMedia,BMediaAside,BMediaBody
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import moment from 'moment'
import { BSpinner } from 'bootstrap-vue'
import { required } from '@validations'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    vSelect,
    ValidationProvider,
    ValidationObserver,
    BFormTextarea,
    BAvatar, BCard, BCardText, BImg, BLink, BAvatarGroup, VBTooltip,
    BCardBody,
    BCardTitle,
    BMedia,
    BMediaAside,
    BMediaBody,
    BSpinner,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
   
  mixins: [heightTransition],
  data() {
    return {
      id : router.currentRoute.params.id,
       mediaData: [
        { avatar: 'FileIcon', title: 'Course', subtitle: '' },
        { avatar: 'ThumbsUpIcon', title: 'Likes', subtitle: '' },
        { avatar: 'ThumbsDownIcon', title: 'Dislikes', subtitle: '' },
        { avatar: 'EyeIcon', title: 'Views', subtitle: '' },
      ],

      avatarData : {
        username :null,
        avatar : null
      },
      profileData: { },
      username: '',
    question : '',
    answer : '',
    likes : '',
    dislikes : '',
    views : '',
    status : 0 ,
    statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Unpublished', value: 0 }
    ],
    questionDate:'',
    formErrors : {
      answer : null,
    },
    
     headersObj  : { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          }  ,
    logged_in_user_type: JSON.parse(localStorage.getItem('userData')).type       
    
     
    }
  },


  mounted() {
   
    //fetch bank question
    axios
    .get(`bank-questions/${this.id}`)
    .then(response => {
    console.log('bank question : ' , response.data)
    this.answer = response.data.data[0].answer
    this.question =  response.data.data[0].question
    this.username =  response.data.data[0].user.username
    this.mediaData[0].subtitle = response.data.data[0].course.title
    this.mediaData[1].subtitle = response.data.data[0].likes
    this.mediaData[2].subtitle = response.data.data[0].dislikes
    this.mediaData[3].subtitle = response.data.data[0].views
    this.questionDate = moment(String( response.data.data[0].created_at)).format('MM-DD-YYYY') + ' at ' + moment(String( response.data.data[0].created_at)).format('hh:mm')
    this.status =  response.data.data[0].is_show ? 1 : 0
    this.avatarData.avatar = response.data.data[0].user.avatar ? response.data.data[0].user.avatar : '' 
    })
    .catch(error => {console.log( 'bank question error', error)})

  },
  
  methods: {
    
    replyForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'
          
          var formData = new FormData();
        
          formData.append("_method", "put");
          formData.append("answer",this.answer )
          formData.append("is_show",this.status )
      
          axios
            .post(`bank-questions/${this.id}`, formData, this.headersObj)
            .then(response => {
                console.log('reply succuss' , response)
                router.replace('/apps/baankQuestions/answeredList')

                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Added Successfully`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
            } )
            .catch(error => {
              // console.log('category error' , error.response)

              //hide spinner
              document.getElementById('loading-spinner').style.display = 'none'

              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: error.response.data.message,
                        icon: 'XIcon',
                        variant: 'danger',
                      },
                })
              
              var errorsResponse = error.response.data.errors
              this.formErrors.answer = checkError(errorsResponse.answer)

            })

            }
      })
    },
    

  },
  // computed: {
  //   id: function() {
  //     return this.id;
  //   }
  // }
}
</script>

<style scoped>
.loading-spinner{
   display:none;
}
</style>