<template>
  <div class="position-relative">
      <b-card title="Tracking System Details">
       <!--new ui-->
       <!-- information content -->
        <b-tabs>
          <b-tab active>
            <template #title>
              <feather-icon icon="InfoIcon" />
              <span>Information</span>
            </template>

             <b-list-group class="mt-2">

              <b-list-group-item>
                <b-row>
                <b-col
                    cols="6"
                    md="6"
                >
                    Action
                </b-col>  

                <b-col
                    cols="6"
                    md="6"
                >

                <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="outline-primary"
                    :to="{ name: 'apps-tracking-system-details-activity-add' , params: { id: id , name : name_en , duration : duration } }"
                >
                    <feather-icon
                    icon="ActivityIcon"
                    class="mr-50"
                    />
                    <span class="align-middle">Add Activity</span>
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
                        Intro
                        </b-col>  

                        <b-col
                        cols="6"
                        md="6"
                        >
                        
                          <!-- <b-img :src="image_seo" fluid style="width: 400px; height:auto;"  /> -->
                          <b-img  v-if="intro_path_type == 'image'" :src="intro_path" fluid style="width: 400px; height:auto;"   />
                          <video v-else  class="w-100" controls id="video" >
                              <source :src="intro_path" type="video/mp4">
                          </video>
                          
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="6"
                        md="6"
                        >
                        Image
                        </b-col>  

                        <b-col
                        cols="6"
                        md="6"
                        >
                        <b-img :src="image" fluid style="width: 400px; height:auto;"  />
                        </b-col>

                    </b-row>
                </b-list-group-item>
              
              <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Name EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{name_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Name AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{name_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               

                <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Short Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{short_description_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Short Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{short_description_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Long Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{long_description_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Long Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{long_description_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Fields
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{fields}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Duration
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{duration}}
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
                    {{status}}
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
                {{seo_title_en}}
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
                {{seo_title_ar}}
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
                {{seo_desc_en}}
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
                {{seo_desc_ar}}
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
                            :src="seo_image"
                            size="104px"
                            rounded
                        />
                        </b-col>

                    </b-row>
                </b-list-group-item>
                
            </b-list-group>
          </b-tab>  

          <b-tab @click.once="FetechEnrolledUsers">
            <template #title>
              <feather-icon icon="UsersIcon" />
              <span>Enrolled Users</span>
            </template>

            <b-table 
            responsive="sm"
            :items="items"
            show-empty
            :empty-text="loading_msg"
            :fields="fields"
            >
              <template #cell(avatar)="data">
                <b-avatar
                  class="mr-1"
                  :src="data.item.avatar"
                />
              </template>
            </b-table>


          </b-tab>  

          </b-tabs>
           

            <template>
                <div class="text-center loading-spinner" id="loading-spinner" v-if="isLoading">
                <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
                </div>
            </template>
       <!--new ui-->
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,BListGroup, BListGroupItem, BSpinner,BTabs, BTab, BCardText, BPagination,BImg
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'
import Ripple from 'vue-ripple-directive'
import getDomain from '@/helperFunctions/getDomain'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


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
    BListGroup, BListGroupItem , BSpinner, BTabs, BTab, BCardText, BPagination,BImg
  
  },
  data(){
    return{
     id : router.currentRoute.params.id,
     intro_path:null,
     intro_path_type:null,
     image:'',
     name_en:'',
     name_ar:'',
     short_description_en:'',
     short_description_ar:'',
     long_description_en:'',
     long_description_ar:'',
     status:'',
     type:'',
     parent:null,
     parent_ar:null,
     seo_title_en:'',
     seo_title_ar:'',
     seo_desc_en:'',
     seo_desc_ar:'',
     seo_image:null,
     isLoading: true,
     items: [],
     loading_msg:'',
     fields:'',
     duration:null,
    }
  },
  directives: {
    Ripple,
  },
  mounted(){
    this.isLoading = false
    this.fectchRecord()
  },
  methods:{
    fectchRecord:function(){

        //fetch record

        this.isLoading = true
        axios
        .get( getDomain('no') + `trackingsystem/show/${this.id}`)
        .then(response => {
        this.isLoading = false 
        console.log('trackingsystem/show : ' , response.data)
        let record = response.data.data

        this.intro_path = record.intro_path
        
        let intro_path_ext = this.intro_path.split('.').pop();
        let video_arr = [ 'png','PNG','jpg','JPG','jpeg','JPEG','webp','WEBP','svg','SVG' ]
        if( video_arr.includes(intro_path_ext) ){
          this.intro_path_type = 'image'
        }else{
          document.getElementById('video').load();
        }

        this.image = record.image
        this.name_en = record.name_en
        this.name_ar = record.name_ar
        this.short_description_en = record.short_description_en
        this.short_description_ar = record.short_description_ar_original
        this.long_description_en = record.long_description_en
        this.long_description_ar = record.long_description_ar_original
        this.status = record.is_published ? 'Published' : 'Drafted'
        this.seo_title_en = record.seo_title_en ? record.seo_title_en : '' 
        this.seo_title_ar = record.seo_title_ar ? record.seo_title_ar : ''
        this.seo_desc_en = record.seo_desc_en ? record.seo_desc_en : ''
        this.seo_desc_ar = record.seo_desc_ar ? record.seo_desc_ar : ''


        this.seo_image = record.seo_image
        this.duration = record.duration

        for( let f=0 ; f < record.fields.length ; f++  ){
          this.fields += record.fields[f].field + ', '
        }

        this.fields = this.fields.replace(/(^\s*,)|(,\s*$)/g, '');

        })
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

            console.log( 'error', error)
        })
    },
    FetechEnrolledUsers(){
      this.isLoading = true
      var url = getDomain('no') + `trackingsystem/enrolledUsers/${this.id}`
      console.log(url)
      axios
      .get(url)
      .then(response => {
         console.log('trackingsystem/usera:' , response.data )
         let data = response.data.data;
         this.items = [];
         for( let i=0 ; i< data.length ; i++ ){
           this.items.push(
             { 
               id:data[i].id ,
               name : data[i].username ,
               avatar : data[i].avatar ,
               email: data[i].email,
               phone: data[i].phone,
               
               
             })
         }
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
  }

    
 
}
</script>



