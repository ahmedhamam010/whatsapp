<template>
  <div class="position-relative">
    <b-row>
      
      <b-col md="4">
        <validation-observer ref="simpleRules">
        <b-form
            ref="form"
            @submit.prevent="addCertificate()"
            enctype="multipart/form-data"
        >
          <b-card>
            <b-row>  
                <b-col>
                    <h4 class="mb-2">Certificate Configurations</h4>
                </b-col>
                <!-- Image -->
                <b-col md="12">
                    <b-form-group
                        label="Image"
                        label-for="image"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="Image"
                        rules="image"
                        
                       
                        >
                        <b-form-file
                        id="image"
                        v-model="image"
                        :state="errors.length > 0 ? false:null"
                        @change="previewImage"
                        accept="image/*"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        
                    </b-form-group>
                </b-col>

                <!-- name -->
                <b-col md="12">
                    <b-form-group
                    label="Name"
                    label-for="name"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="name"
                    rules="required"
                    >
                    <b-form-input
                        id="name"
                        type="text"
                        v-model="name"
                        :state="errors.length > 0 ? false:null"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                    <div class="invalid-feedback d-block" v-if="formErrors.name">{{ formErrors.name }}</div>
                    </validation-provider>
                    
                    </b-form-group>
                    
                </b-col>

                <!-- Name AR-->
                <b-col md="12" class="d-none">
                    <b-form-group
                    label="Name AR"
                    label-for="name_ar"
                    >
                    <validation-provider
                    #default="{ errors }"
                    name="name_ar"
                    
                    >
                    <b-form-input
                        id="name_ar"
                        type="text"
                        v-model="name_ar"
                        :state="errors.length > 0 ? false:null"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    
                    </b-form-group>
                    
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Title Position X"
                        label-for="positionX"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="position X"
                        rules="required"
                        >
                        <b-form-input
                            id="titlePostionX"
                            type="number"
                            :state="errors.length > 0 ? false:null"
                            @input="movetitlePostionX($event)"
                            v-model="titlePostionX"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Title Position Y"
                        label-for="positionY"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="position Y"
                        rules="required"
                        >
                        <b-form-input
                            id="titlePostionY"
                            type="number"
                            :state="errors.length > 0 ? false:null"
                            @input="movetitlePostionY($event)"
                            v-model="titlePostionY"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                       
                    </b-form-group>
                </b-col>

                <!-- Body -->
                <b-col md="12" class="d-none">
                    <b-form-group
                    label="Body"
                    label-for="body"
                    >
                    <validation-provider
                    #default="{ errors }"
                    body="body"
                    rules="required"
                    >
                    <b-form-textarea
                        id="body"
                        type="text"
                        v-model="body"
                        :state="errors.length > 0 ? false:null"
                        rows="5"
                        @input="centerBodyText()"
                        
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                    
                    </b-form-group>
                    
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Body Position X"
                        label-for="positionX"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="position X"
                        rules="required"
                        >
                        <b-form-input
                            id="positionX"
                            type="number"
                            :state="errors.length > 0 ? false:null"
                            @input="moveBodyPostionX($event)"
                            v-model="bodyPostionX"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Body Position Y"
                        label-for="positionBodyY"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="positionBody Y"
                        rules="required"
                        >
                        <b-form-input
                            id="positionBodyY"
                            type="number"
                            :state="errors.length > 0 ? false:null"
                            @input="moveBodyPostionY($event)"
                            v-model="bodyPostionY"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Date Position X"
                        label-for="datepositionX"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="date position X"
                        rules="required"
                        >
                        <b-form-input
                            id="datepositionX"
                            type="number"
                            :state="errors.length > 0 ? false:null"
                            @input="moveDatePostionX($event)"
                            v-model="datePostionX"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group
                        label="Date Position Y"
                        label-for="positionDateY"
                    >
                        <validation-provider
                        #default="{ errors }"
                        name="positionDate Y"
                        rules="required"
                        >
                        <b-form-input
                            id="positionDateY"
                            type="number"
                            :state="errors.length > 0 ? false:null"
                            @input="moveDatePostionY($event)"
                            v-model="datePostionY"
                            
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                    </b-form-group>
                </b-col>

                <!-- Seo Name EN -->
                    <b-col md="12">
                        <b-form-group
                        label="Seo Name EN"
                        label-for="seo Name EN"
                        >
                        <b-form-input
                            id="seo_name_en"
                            type="text"
                            v-model="title_seo_en"
                            
                        />
                        </b-form-group>
                    </b-col>

                    <!-- Seo Name AR -->
                    <b-col md="12">
                        <b-form-group
                        label="Seo Name AR"
                        label-for="seo Name AR"
                        >
                        <b-form-input
                            id="seo_name_ar"
                            type="text"
                            v-model="title_seo_ar"
                            
                        />
                        </b-form-group>
                    </b-col>

                    <!-- Seo Description EN-->
                    <b-col md="12">
                        <b-form-group
                        label="Seo Description EN"
                        label-for="Seo Description EN"
                        >
                       
                          <b-form-textarea
                              id="seo_description_en"
                              type="text"
                              v-model="description_seo_en"
                              rows="8"
                              
                          />
                        </b-form-group>
                    </b-col>

                    <!-- Seo Description AR-->
                    <b-col md="12">
                        <b-form-group
                        label="Seo Description AR"
                        label-for="Seo Description AR"
                        >
                          <b-form-textarea
                              id="seo_description_ar"
                              type="text"
                              v-model="description_seo_ar"
                              rows="8"
                              
                          />
                        </validation-provider>
                        </b-form-group>
                    </b-col>

                    <!-- Seo Image -->
                    <b-col md="12">
                      <b-form-group
                        label="Seo Image"
                        label-for="Soe image"
                      >
                        <b-form-file
                          id="image_seo"
                          v-model="image_seo"
                          accept="image/*"
                        />
                      </b-form-group>
                    </b-col>

        

                
                
                <b-col>
                    <b-button
                    type="submit"
                    variant="primary"
                    >
                    Submit
                    </b-button>
                </b-col>
            </b-row>
          </b-card>
        </b-form>
        </validation-observer>
      </b-col>
      


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
import { ValidationProvider, ValidationObserver , extend  } from 'vee-validate'
import { image } from 'vee-validate/dist/rules';
import { required, email } from '@validations'
import { BSpinner } from 'bootstrap-vue'
extend('image', image);

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
    formErrors : {
        name:null
    },
     
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
        
    })
    .catch(error => {console.log( 'error fetch quiz', error)})
  },
  
  methods: {
    previewImage: function(event) {
        var input = event.target;
        if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
        }
    },
    
    
    addCertificate: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          
          //show spinner
          document.getElementById('loading-spinner').style.display = 'block'

          var formData = new FormData();
          var imageFile = document.querySelector('#image')
          if( imageFile.files[0] ){
           formData.append("image", imageFile.files[0] )
          }

          formData.append("_method", "put" )
          formData.append("image_width", 750 )
          formData.append("image_height", 500 )

          formData.append("name", this.name )
        //   formData.append("name_en", this.name )
        //   formData.append("name_ar", this.name_ar )
          formData.append("title_x", ((+this.titlePostionX)) )
          formData.append("title_y", ((+this.titlePostionY)) )

          console.log( 'title x : ' ,formData.get("title_x" ))
          console.log( 'title y : ' , formData.get("title_y" ))

          formData.append("body", this.body )
          formData.append("body_x", ((+this.bodyPostionX) ) )
          formData.append("body_y", +((+this.bodyPostionY) ) )
          formData.append("signature", "ETESDDDD" )
          formData.append("signature_x", ((+this.titlePostionX)) )
          formData.append("signature_y", "400" )
          formData.append("date_x", ((+this.datePostionX)) )
          formData.append("date_y", ((+this.datePostionY)) )
          formData.append("type", "course" )

          formData.append("title_seo_en", this.title_seo_en )
          formData.append("title_seo_ar", this.title_seo_ar )
          formData.append("description_seo_en", this.description_seo_en )
          formData.append("description_seo_ar", this.description_seo_ar )

          var seoImage = document.querySelector('#image_seo')
          if( seoImage.files[0] ){
           formData.append("image_seo", seoImage.files[0] )
          }else{
               formData.append("image_seo", this.image_seo )
          }

           axios
            .post(`certificates/${this.id}`, formData, this.headersObj)
            .then(response => {
                console.log('certificate succuss' , response)

                //hide spinner
                document.getElementById('loading-spinner').style.display = 'none'

                router.replace('/apps/certificates/list')

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
             .catch( error => {

                //hide spinner
                document.getElementById('loading-spinner').style.display = 'none'
                
                var errorsResponse = error.response.data.errors
                console.log('errorsResponse',errorsResponse)
                this.formErrors.name = checkError(errorsResponse.name)
             } )

         
          

        }
      })
    },

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