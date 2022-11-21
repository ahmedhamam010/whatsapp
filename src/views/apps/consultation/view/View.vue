<template>
  <div class="position-relative">
      <b-card title="Consultant Details">
        <b-tabs>
          <b-tab active>
            <template #title>
              <feather-icon icon="InfoIcon" />
              <span>Information</span>
            </template>

            <!-- information content -->
            <b-list-group class="mt-2">
              
              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Avatar
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    <b-avatar
                        :src="avatar"
                        size="104px"
                        rounded
                      />
                    </b-col>

                  </b-row>
                </b-list-group-item>

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
                      Email
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ email }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Phone
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ phone }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Type
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                      style="text-transform: capitalize;"
                    >
                      {{ category }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Fields EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ fields }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Fields AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ fields_ar }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Job Title EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ job_title }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Job Title AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ job_title_ar }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Specialties EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ specialties }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Specialties AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ specialties_ar }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Age Stage
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                      style="text-transform:capitalize"
                    >
                      {{ type_age }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Session Period
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ session_period }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Price Per Period
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ price_per_period }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Languages
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ languages }}
                    </b-col>

                  </b-row>
                </b-list-group-item>


                <!-- <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Job Position
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ jobPosition }}
                    </b-col>

                  </b-row>
                </b-list-group-item> -->

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      About EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ about }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      About AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ about_ar }}
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Is Top
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                      {{ is_top }}
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

                

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      CV
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >

                    <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-primary"
                      @click="downloadTask(cv)"
                    >
                      <feather-icon
                        icon="DownloadCloudIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Download CV</span>
                    </b-button>
                    
                    
                    </b-col>

                  </b-row>
                </b-list-group-item>

                <b-list-group-item>
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
                      v-if="status == 'pending' || status == 'rejected'"
                      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                      variant="outline-success"
                      @click="changeApproveStatus(consultantId , 'accepted' )"
                      class="ml-1 mr-1"
                    >
                      <feather-icon
                        icon="CheckIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Accept</span>
                    </b-button>
                  
                    <b-button
                    v-if="status == 'pending'"
                      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                      variant="outline-danger"
                    @click="changeApproveStatus(consultantId , 'rejected' )"
                    class="ml-1 mr-1"
                    
                    >
                      <feather-icon
                        icon="XIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Reject</span>
                    </b-button>

                    <b-button
                    v-if="status == 'accepted' && userType == 'admin' "
                      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                      variant="outline-danger"
                      @click="confirmDeleteMsg(consultantId , 'rejected' )"
                      
                    
                    >
                      <feather-icon
                        icon="XIcon"
                        class="mr-50"
                      />
                      <span class="align-middle">Remove</span>
                    </b-button>

                    
                  

                    </b-col>

                  </b-row>
                </b-list-group-item>
            
            </b-list-group>
            <!-- /information content -->

          </b-tab>
          <b-tab @click.once="getConsultantSessions" v-if="adminLogged">
            <template #title>
              <feather-icon icon="CalendarIcon" />
              <span>Consultant Sessions</span>
            </template>

            <template>
              <b-table 
              responsive="sm" 
              :busy="isBusy" 
              :items="items" 
              :fields="tableFields" 
              class="mt-2"
              show-empty
              :empty-text="loading_msg"
              >
              
              
              
              </b-table>
              <b-pagination
                v-model="currentPage"
                hide-goto-end-buttons
                :total-rows="rows"
                :per-page="perPage"
                @change="pageChanged"
              />
            </template>
            
           
            
          </b-tab>
        </b-tabs>
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
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BDropdown , BFormTextarea, BDropdownItem, BListGroup, BListGroupItem, BTabs, BTab, BCardText, BPagination  ,BSpinner
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
    BTabs, BTab, BCardText, BPagination,BSpinner
  
  },
  data(){
    return{
      isLoading:true,
      id : router.currentRoute.params.id,
      name : '',
      email:'',
      phone:'',
      avatar:'',
      jobPosition:'',
      cv:'',
      consultantId : '',
      defaultImg : 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1641086103~hmac=a9c5dc920808033471019558a26a12ec',
      cv: '',
      about:'',
      about_ar:'',
      status:'',
      category:'',
      session_period:'',
      price_per_period:'',
      fields:'',
      fields_ar:'',
      job_title:'',
      job_title_ar:'',
      specialties:'',
      specialties_ar:'',
      type_age:null,
      languages:'',
      items: [],
      currentPage: 1,
      perPage: null,
      rows: null,
      isBusy:false,
      adminLogged:false,
      title_seo_en:'',
      title_seo_ar:'',
      description_seo_en:'',
      description_seo_ar:'',
      image_seo:'',
      loading_msg:'',
      tableFields:[
        { key: 'id', label : 'id' },
        { key: 'username', label : 'username' },
        { key: 'time_from', label : 'time_from' },
        { key: 'time_to', label : 'time_to' },
        { key: 'price', label : 'price' },
        { key: 'time', label : 'time' },
        { key: 'status', label : 'status' },
      ],
      is_top:0,
      userType:JSON.parse(localStorage.getItem('userData')).type,
      deleteConfirmed: '',
      user_id:null,
       

    }
  },
  directives: {
    Ripple,
  },
  mounted(){

    //chekc logged in user type
    this.adminLogged = JSON.parse(localStorage.getItem('userData')).consultant_status ? false : true
    
          axios
          .get(`consultationInfos/requests/${this.id}`)
          .then(response => {
           
          this.isLoading = false
          
          console.log( `this.consultationInfos/requests/${this.id} ` , response.data.data )
          this.id = response.data.data.user_id
          this.user_id = response.data.data.user_id
          this.name = response.data.data.user.username
          this.email = response.data.data.user.email
          this.phone = response.data.data.user.phone
          this.avatar = response.data.data.user.avatar ? response.data.data.user.avatar : this.defaultImg
          this.jobPosition = response.data.data.user.consultation_info.job_position
          this.cv = response.data.data.user.consultation_info.cv_path
          this.consultantId = response.data.data.user.consultation_info.id
          // response.data.data.user.consultation_info.id
          // response.data.data.invitations[0].id

          this.about = response.data.data.about
          this.about_ar = response.data.data.about_ar
          this.status = response.data.data.user.consultation_info.status
          this.category = response.data.data.user.consultation_info.type
          this.session_period = response.data.data.user.consultation_info.period
          this.price_per_period = response.data.data.user.consultation_info.price_per_period
          
          let fields = response.data.data.user.consultation_info.fields
          if( fields.length > 0 ){
            for( let f=0 ; f < fields.length ; f++ ){
              this.fields += fields[f].title + ', '
              this.fields_ar += fields[f].title_ar + ', '
            }
            this.fields = this.fields.replace(/,\s*$/, "")
            this.fields_ar = this.fields_ar.replace(/,\s*$/, "")
          }

         

          let languages = response.data.data.user.consultation_info.languages
          if( languages.length > 0 ){
            for( let l=0 ; l < languages.length ; l++ ){
              this.languages += languages[l].name + ', '
            }
            this.languages = this.languages.replace(/,\s*$/, "")
          }

          this.job_title = response.data.data.job_title ? response.data.data.job_title.title_en : ''
          this.job_title_ar = response.data.data.job_title ? response.data.data.job_title.title_ar : ''


          let specialties = response.data.data.consultation_info_specialties
          if( specialties.length > 0 ){
            for( let f=0 ; f < specialties.length ; f++ ){
              this.specialties += specialties[f].title + ', '
              this.specialties_ar += specialties[f].title_ar + ', '
            }
            this.specialties = this.specialties.replace(/,\s*$/, "")
            this.specialties_ar = this.specialties_ar.replace(/,\s*$/, "")
          }

          let ageStage = response.data.data.type_age
          if( ageStage == 1 ){
            this.type_age = 'Children'  
          }else if( ageStage == 2 ){
            this.type_age = 'Teenagers' 
          }else if( ageStage == 3 ){
            this.type_age = 'Adults' 
          }else if( ageStage == 4 ){
            this.type_age = 'All' 
          }
          

          this.title_seo_en = response.data.data.title_seo_en
          this.title_seo_ar = response.data.data.title_seo_ar
          this.description_seo_en = response.data.data.description_seo_en
          this.description_seo_ar = response.data.data.description_seo_ar
          this.image_seo = response.data.data.image_seo
          this.is_top = response.data.data.is_top == '1' ? 'Yes' : 'No'
          
          
            
          })
          .catch(error => {
            this.isLoading = false
            console.log(error)
          })


          

         
  },
  methods:{
     downloadTask(urlTask){
      window.open(urlTask); 
    },
    confirmDeleteMsg(id , status) {
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
        if( this.deleteConfirmed ){ this.changeApproveStatus(id , status) }
      })
    },
    changeApproveStatus(id , status ){
     //change status
      this.isLoading = true
      var statusMsg = 'Status Changed Successfully';
      var formData = new FormData();
      formData.append("status", status);
      formData.append("_method", "put");
       axios
      .post(`consultationInfos/${id}/request/update`, formData, this.headersObj)
      .then(response => {
          this.isLoading = false
          this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  title: `${statusMsg}`,
                  icon: 'CoffeeIcon',
                  variant: 'success',
                },
          })
           router.replace(`/apps/consultation/${status}/list`)
      } )
      .catch(error => {
              this.isLoading = false
              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })

             })
     
     //change status
    },
    getConsultantSessions(){
      this.isLoading = true
      axios
      .get(`consultationSessions/user/${this.user_id}?type=consultant&paginate=10&page=${this.currentPage}`, this.headersObj)
      .then(response => {
         this.isLoading = false
         console.log('consultant sessions:' , response.data )
         let sessions = response.data.data.data;
         this.rows= response.data.data.total
         this.perPage=response.data.data.per_page
         console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
         this.items = [];
         for( let i=0 ; i< sessions.length ; i++ ){
           this.items.push(
             { 
               id:sessions[i].id ,
               username : sessions[i].user ? sessions[i].user.username : '',
               time_from : sessions[i].time_from ,
               time_to : sessions[i].time_to,
               price : sessions[i].price,
               time : `${sessions[i].day}-${sessions[i].month}` ,
               status : sessions[i].status,
               
             })
         }
         this.isBusy = false
         this.loading_msg = this.items.length > 0 ? '' :  'No matching records found'
      } )
      .catch(error => {
              this.isLoading = false
              this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `${error}`,
                        icon: 'CoffeeIcon',
                        variant: 'danger',
                      },
                })

             })
     
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getConsultantSessions()
    }
  }

    
 
}
</script>

