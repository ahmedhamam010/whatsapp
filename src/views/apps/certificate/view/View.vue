<template>
  <div class="position-relative">
    <b-row>
      
      <b-col md="8">
        <b-card>
            <template v-if="preview">
              <div class="position-relative img-preview-container" id="img-preview-container" style="width:750px;height:500px" >
                  <p class="position-absolute titleText" id="titleText" >{{ title }}</p>
                  <p class="position-absolute bodyText" id="bodyText">{{ body }}</p>
                  <p class="position-absolute dateText" id="dateText" >{{ date }}</p>
                  <img :src="preview" id="preview-img" class="img-fluid" style="width:750px;height:500px" />
              </div>  
            </template>
        </b-card>
      </b-col>

      <b-col md="4">
        <b-card>
        <b-row>
          <b-col md="12">
            <h4>Certificate Details</h4>
          </b-col>
          
          <b-col class="mt-1">
            <table class="mt-xl-0 w-100">
              <tr>
                <th class="pb-50">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Name EN</span>
                </th>
                <td class="pb-50">
                  {{ name }}
                </td>
              </tr>

              <tr class="d-none">
                <th class="pb-50">
                  <feather-icon
                    icon="CodeIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Name AR</span>
                </th>
                <td class="pb-50">
                  {{ name_ar }}
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
                <th>
                  <feather-icon
                    icon="TwitchIcon"
                    class="mr-75"
                  />
                  <span class="font-weight-bold">Seo Image</span>
                </th>
                <td class="pb-50">
                  <b-avatar
                    :src="image_seo"
                    style="background:transparent"
                    size="104px"
                    rounded
                  />
                </td>
              </tr>
            </table>
          </b-col>  
        </b-row>
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
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormCheckbox, BFormTextarea ,  BAvatar, BCard, BCardText, BImg, BLink, BAvatarGroup, VBTooltip, BCardBody, BCardTitle,BMedia,BMediaAside,BMediaBody , BFormFile
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import vSelect from 'vue-select'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import { BSpinner } from 'bootstrap-vue'

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
    BFormFile,
    BSpinner,
  },
  

  data() {
    return {
     id : router.currentRoute.params.id,   
    preview: require('@/assets/images/certificate.jpeg'),
    title : 'Rosland',
    name : '',
    name_ar : '',
    image: null,
    certificateWidth:750,
    certificateHeight:500,
    titlePostionX: null,
    titlePostionY:null,
    body:'Awarded For completing [course]',
    bodyPostionX: null,
    bodyPostionY:null,
    date : '01/11/2021',
    datePostionX: null,
    datePostionY:null,
    headersObj  : { 
        headers: 
            { 
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Access-Control-Allow-Methods': 'POST,post',
            }
    },
    title_seo_en: '',
    title_seo_ar: '',
    description_seo_en:'',
    description_seo_ar: '',
    image_seo:null,
    
     
    }
  },


  mounted() {

    //title position x
    var imageCertificate = document.getElementById('preview-img');
    var positionImageInfo = imageCertificate.getBoundingClientRect();
    var imgWidth = parseInt(positionImageInfo.width);
    this.certificateWidth = imgWidth;
    
    // var element = document.getElementById('titleText');
    // var positionInfo = element.getBoundingClientRect();
    // var elementwidth = parseInt(positionInfo.width);
    // console.log(elementwidth)
    // var elementPositionLeft = parseInt(((imgWidth - elementwidth) / 2 )) 
    // document.getElementById('titleText').style.left =  elementPositionLeft + 'px';
    // this.titlePostionX = elementPositionLeft
    
    
    // var element2 = document.getElementById('bodyText');
    // var positionInfo2 = element2.getBoundingClientRect();
    // var elementwidth2 = parseInt(positionInfo2.width);
    // console.log(elementwidth2)
    // var elementPositionLeft2 = parseInt(((imgWidth - elementwidth2) / 2 )) 
    // this.bodyPostionX = elementPositionLeft2

    //title postion y 
    // this.movetitlePostionX(this.titlePostionX)

    //title postion y  
    // this.movetitlePostionY(this.titlePostionY);

    //body postion x
    // this.moveBodyPostionX(this.bodyPostionX)

    //body postion y  
    // this.moveBodyPostionY(this.bodyPostionY);

    //body postion x 
    // this.moveDatePostionX(this.datePostionX)

    //body postion y  
    // this.moveDatePostionY(this.datePostionY);

    //fetch categories data
    axios
    .get(`certificates/${router.currentRoute.params.id}`)
    .then(response => {
        console.log( 'show certifcate' , response.data )
        this.name = response.data.data.name
        this.preview = response.data.data.image_path
        var titlePosition = JSON.parse(response.data.data.title)
        this.titlePostionX = +titlePosition.x
        document.getElementById('titleText').style.left =  this.titlePostionX + 'px';
        this.titlePostionY = +titlePosition.y
        document.getElementById('titleText').style.top =  this.titlePostionY + 'px';

        var bodyPosition = JSON.parse(response.data.data.body)
        this.bodyPostionX = +bodyPosition.x
        document.getElementById('bodyText').style.left =  this.bodyPostionX + 'px';
        this.bodyPostionY = +bodyPosition.y
        document.getElementById('bodyText').style.top =  this.bodyPostionY + 'px';

        var datePosition = JSON.parse(response.data.data.date)
        console.log( 'datePosition ' , datePosition )
        this.datePostionX = +datePosition.x
        document.getElementById('dateText').style.left =  this.datePostionX + 'px';
        this.datePostionY = +datePosition.y
        document.getElementById('dateText').style.top =  this.datePostionY + 'px';

        this.name_ar = response.data.data.name_ar

        this.title_seo_en = response.data.data.title_seo_en
        this.title_seo_ar = response.data.data.title_seo_ar
        this.description_seo_en = response.data.data.description_seo_en
        this.description_seo_ar = response.data.data.description_seo_ar
        this.image_seo = response.data.data.image_seo
        
        
    })
    .catch(error => {console.log( 'error fetch quiz', error)})
  },
  
  methods: {
    
    
    
    

    movetitlePostionX(position){
        document.getElementById("titleText").style.left = position + "px";
    },

    movetitlePostionY(position){
        document.getElementById("titleText").style.top = position + "px";
    },

    moveBodyPostionX(position){
        document.getElementById("bodyText").style.left = position + "px";
    },

    moveBodyPostionY(position){
        document.getElementById("bodyText").style.top = position + "px";
    },

    moveDatePostionX(position){
        document.getElementById("dateText").style.left = position + "px";
    },

    moveDatePostionY(position){
        document.getElementById("dateText").style.top = position + "px";
    },

    centerBodyText(){
        var imageCertificate = document.getElementById('preview-img');
        var positionImageInfo = imageCertificate.getBoundingClientRect();
        var imgWidth = parseInt(positionImageInfo.width);
        this.certificateWidth = imgWidth;

        var element2 = document.getElementById('bodyText');
        var positionInfo2 = element2.getBoundingClientRect();
        var elementwidth2 = parseInt(positionInfo2.width);
        console.log(elementwidth2)
        var elementPositionLeft2 = parseInt(((imgWidth - elementwidth2) / 2 )) 
        this.bodyPostionX = elementPositionLeft2
        this.moveBodyPostionX(this.bodyPostionX)
    },
  },
}
</script>

<style scoped>

.loading-spinner{
   display:none;
} 
p{
    font-size:17px;
    font-family: 'Montserrat', sans-serif;
    line-height: 0;
    margin:0;
    padding:0;
}
</style>