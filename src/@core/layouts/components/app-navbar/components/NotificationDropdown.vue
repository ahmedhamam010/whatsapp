<template>
  <b-nav-item-dropdown
    class="dropdown-notification mr-25"
    menu-class="dropdown-menu-media"
    right
  >
    <template #button-content>
      <feather-icon
        :badge="count"
        badge-classes="bg-danger"
        class="text-body"
        icon="BellIcon"
        size="21"
        @click="showNotificationBox()"
      />
    </template>

       
    

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto not-item">
          Notifications <span class="d-none">{{ notifications}}</span>
        </h4>
        <b-badge
          pill
          variant="light-primary"
        >
          {{count ? count + ' New' : '0' }}
        </b-badge>
      </div>
    </li>

    <!-- Notifications -->
    <vue-perfect-scrollbar
      v-once
      :settings="perfectScrollbarSettings"
      class="scrollable-container media-list scroll-area ps--scrolling-y"
      tagname="li"
    >
      <!-- Account Notification -->
      <b-link
        v-for="(notification, index) in notifications"
        :key="index"

      >
        <b-media 
        v-if="notification.type == 'BankQuestion'"
        @click="replyBankQuestion(index,notification.id,notification.bank_question_id)"
        :class="{ newNotification : !notification.admin_read }"
        :item="'item-'+index"
        >
          <template #aside>
            <b-avatar
              size="32"
              :src="require('@/assets/images/avatars/question.png')"
              :text="require('@/assets/images/avatars/question.png')"
              variant="light-info"
            />
          </template>
          <p class="media-heading">
            <span class="font-weight-bolder">
              {{ notification.title }}
            </span>
          </p>
          <small class="notification-text">{{ notification.body }}</small>
          <div class="notification-text mb-0">{{ notification.updated_at | formatDate }}</div>
        </b-media>

        <b-media 
        v-if="notification.type == 'PracticalTaskUser'"
        @click="answerPracticalTask(index,notification.id,notification.practical_task_user_id)"
        :class="{ newNotification : !notification.admin_read } "
        :item="'item-'+index"
        >
          <template #aside>
            <b-avatar
              size="32"
              :src="require('@/assets/images/avatars/task.png')"
              :text="require('@/assets/images/avatars/task.png')"
              variant="light-info"
            />
          </template>
          <p class="media-heading">
            <span class="font-weight-bolder">
              {{ notification.title }}
            </span>
          </p>
          <small class="notification-text">{{ notification.body }}</small>
          <div class="notification-text mb-0">{{ notification.updated_at | formatDate }}</div>
        </b-media>

         
      </b-link>

     

    

     
    </vue-perfect-scrollbar>

    <!-- Cart Footer -->
    <li class="dropdown-menu-footer d-none"><b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      block
    >Read all notifications</b-button>
    </li>
  </b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BBadge, BMedia, BLink, BAvatar, BButton, BFormCheckbox,
} from 'bootstrap-vue'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Ripple from 'vue-ripple-directive'
import router from '@/router'
import moment from 'moment'

export default {
  components: {
    BNavItemDropdown,
    BBadge,
    BMedia,
    BLink,
    BAvatar,
    VuePerfectScrollbar,
    BButton,
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  setup() {

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
      
    }

    return {
      perfectScrollbarSettings,
    }
  },
  data(){
      return {
        notifications :[],
        count : 0,
        headers : {headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}}
      }
  },
  mounted() {
    this.fetchNotifications()
    var that = this
    setInterval(function(){ that.fetchNotifications() }, (1000 * 60 * 15) );
  },
  methods : {
      fetchNotifications(){
            let userType = JSON.parse(localStorage.getItem('userData')).type
            userType = userType == 'admin' ? 'admin' : 'normal' 
            //fetch notifications
            axios
            .get(`notifications?type=${userType}` , this.headers ) 
            .then(response => {
            
           
            this.count =  response.data.noReadCount
            this.notifications = response.data.notifications
             
           
            
            })
            .catch(error => {
           
            // this.$toast({
            //         component: ToastificationContent,
            //         position: 'top-right',
            //         props: {
            //         title: `${error.response.data.msg}`,
            //         icon: 'CoffeeIcon',
            //         variant: 'danger',
            //         },
            // })
            })
      },
      updateReadedNotification(id){
        document.querySelector('.nav-item.b-nav-dropdown.dropdown.dropdown-notification').classList.remove("show");
        document.querySelector('.nav-item.b-nav-dropdown.dropdown.dropdown-notification > ul').classList.remove("show");
        document.querySelector('.nav-item.b-nav-dropdown.dropdown.dropdown-notification > a').setAttribute("aria-expanded", "false");
        var formData = new FormData();
                
        formData.append("_method", "put");
        formData.append("status","read" )

        axios
        .post(`notifications/${id}/update`, formData, this.headers)
        .then(response => {
           
        } )
        .catch(error => {
            this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                    title: 'error',
                    icon: 'XIcon',
                    variant: 'danger',
                    },
            })
            
            

        })
        //update
      },
      replyBankQuestion(index,id,bankUserId){
          this.updateReadedNotification(id)
          if( this.notifications[index].admin_read == 0 ){
            this.count = this.count - 1
            this.notifications[index].admin_read = 1
          }
          document.querySelector(`[item=item-${index}]`).style.backgroundColor = '#fff';
          router.push(`/apps/baankQuestions/reply/${bankUserId}`)
          
      },
      answerPracticalTask(index,id,taskUserId){
          this.updateReadedNotification(id)
          if( this.notifications[index].admin_read == 0 ){
            this.count = this.count - 1
            this.notifications[index].admin_read = 1
          }
          document.querySelector(`[item=item-${index}]`).style.backgroundColor = '#fff';
          router.push(`/apps/pendingPracticalTasks/view/${taskUserId}/pending`)
      },
      showNotificationBox(){
        document.querySelector('.nav-item.b-nav-dropdown.dropdown.dropdown-notification').classList.add("d-block");
        document.querySelector('.nav-item.b-nav-dropdown.dropdown.dropdown-notification > ul').classList.add("d-block");
        document.querySelector('.nav-item.b-nav-dropdown.dropdown.dropdown-notification > a').setAttribute("aria-expanded", "true");
        return ;
      }
  }
}
</script>

<style>
.newNotification{background-color: #f8f8f8;}
.ps__rail-x,
.ps__rail-y {
  opacity: 0.6;
}
</style>
