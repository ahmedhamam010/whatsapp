import axios from '@axios'
import getDomain from '@/helperFunctions/getDomain'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
export const FormInputsData = {
  data() {
    return {
      intro:null,
      name_en:"",
      name_ar:"",
      image:null,
      short_description_en:'',
      short_description_ar:'',
      long_description_en:'',
      long_description_ar:'',
      field_id: [],
      fieldOptions:[],
      status:0,
      statusOptions : [
        { label: 'Published', value: 1 },
        { label: 'Drafted', value: 0 },
      ],
      free:1,
      freeOptions : [
        { label: 'Free', value: 1 },
        { label: 'Paid', value: 0 },
      ],
      price:null,
      showPriceInput : 0,
      duration:null,
      formErrors : {
        intro_path:null,
        name_en:null,
        name_ar:null,
        image:null,
        short_description_en:null,
        short_description_ar:null,
        long_description_en:null,
        long_description_ar:null,
        duration:null,
        is_published:null,
        is_paid:null,
        price:null,
      },
    

    seo_title_en: '',
    seo_title_ar: '',
    seo_desc_en:'',
    seo_desc_ar: '',
    image_seo:null,
    isLoading:true,
    intro_path_type:'video',
    introPathOptions:[
      { label: 'Video', value: 'video' },
      { label: 'Image', value: 'image' },
    ]
    }
  },
  methods: {
    addForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          this.isLoading = true
          
          var formData = new FormData();

          formData.append("name_en",this.name_en )
          formData.append("name_ar",this.name_ar )
          formData.append("short_description_en",this.short_description_en )
          formData.append("short_description_ar",this.short_description_ar )
          formData.append("long_description_en",this.long_description_en )
          formData.append("long_description_ar",this.long_description_ar )
          formData.append("duration",this.duration )

          if( this.price){
            formData.append("price",this.price )
          }

          var introFile = document.querySelector('#intro')
          if( introFile.files[0] ){
           formData.append("intro_path", introFile.files[0] )
          }

          var imageFile = document.querySelector('#image')
          if( imageFile.files[0] ){
           formData.append("image", imageFile.files[0] )
          }

          formData.append("is_published",this.status )
          formData.append("is_paid",this.free ? '0' : '1' )
          
          console.log('this.field_id',this.field_id)
          for(let f=0; f < this.field_id.length ; f++ ){

            formData.append("fields[]", this.field_id[f] )
          }
          formData.append("seo_title_en",this.seo_title_en )
          formData.append("seo_title_ar",this.seo_title_ar )
          formData.append("seo_desc_en",this.seo_desc_en )
          formData.append("seo_desc_ar",this.seo_desc_ar )

          var image_seo = document.querySelector('#image_seo')
          if( image_seo.files[0] ){
           formData.append("seo_image", image_seo.files[0] )
          }

          formData.append("intro_path_type",this.intro_path_type )
                
          axios
            .post(getDomain('no') + `trackingsystem/store`, formData)
            .then(response => {
                console.log('trackingsystem/store' , response)
                router.push({ path: '/apps/trackingSystem/list'})

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

             this.isLoading = false
              
            
              
              var errorsResponse = error.response.data.errors
              
              this.formErrors.intro_path = checkError(errorsResponse.intro_path)
              this.formErrors.name_en = checkError(errorsResponse.name_en)
              this.formErrors.name_ar = checkError(errorsResponse.name_ar)
              this.formErrors.fields = checkError(errorsResponse.fields)
              this.formErrors.short_description_en = checkError(errorsResponse.short_description_en)
              this.formErrors.short_description_ar = checkError(errorsResponse.short_description_ar)
              this.formErrors.long_description_en = checkError(errorsResponse.long_description_en)
              this.formErrors.long_description_ar = checkError(errorsResponse.long_description_ar)
              this.formErrors.image = checkError(errorsResponse.image)
              this.formErrors.duration = checkError(errorsResponse.duration)
              this.formErrors.is_published = checkError(errorsResponse.is_published)
              this.formErrors.is_paid = checkError(errorsResponse.is_paid)
              this.formErrors.price = checkError(errorsResponse.price)
            })

        }
      })
    },
    editForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          this.isLoading = true
          
          var formData = new FormData();
          // formData.append("_method", "put" )
          formData.append("name_en",this.name_en )
          formData.append("name_ar",this.name_ar )
          formData.append("short_description_en",this.short_description_en )
          formData.append("short_description_ar",this.short_description_ar )
          formData.append("long_description_en",this.long_description_en )
          formData.append("long_description_ar",this.long_description_ar )
          formData.append("duration",this.duration )

         
          
          if( this.price != 0 ){
            formData.append("price",this.price )
          }
          

          var introFile = document.querySelector('#intro')
          if( introFile.files[0] ){
           formData.append("intro_path", introFile.files[0] )
          }

          var imageFile = document.querySelector('#image')
          if( imageFile.files[0] ){
           formData.append("image", imageFile.files[0] )
          }

          formData.append("is_published",this.status )
          formData.append("is_paid",this.free ? '0' : '1' )
          
          console.log('this.field_id',this.field_id)
          for(let f=0; f < this.field_id.length ; f++ ){

            formData.append("fields[]", this.field_id[f] )
          }
          formData.append("seo_title_en",this.seo_title_en )
          formData.append("seo_title_ar",this.seo_title_ar )
          formData.append("seo_desc_en",this.seo_desc_en )
          formData.append("seo_desc_ar",this.seo_desc_ar )

          var image_seo = document.querySelector('#image_seo')
          if( image_seo.files[0] ){
           formData.append("seo_image", image_seo.files[0] )
          }

          formData.append("intro_path_type",this.intro_path_type )
                
          axios
            .post(getDomain('no') + `trackingsystem/update/${this.id}`, formData)
            .then(response => {
                console.log('trackingsystem/store' , response)
                router.push({ path: '/apps/trackingSystem/list'})

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
              // console.log('category error' , error.response)

              this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `${error.response.data.msg}`,
                      icon: 'CoffeeIcon',
                      variant: 'danger',
                    },
              })

             this.isLoading = false
              
             
              var errorsResponse = error.response.data.errors
              
              this.formErrors.intro_path = checkError(errorsResponse.intro_path)
              this.formErrors.name_en = checkError(errorsResponse.name_en)
              this.formErrors.name_ar = checkError(errorsResponse.name_ar)
              this.formErrors.fields = checkError(errorsResponse.fields)
              this.formErrors.short_description_en = checkError(errorsResponse.short_description_en)
              this.formErrors.short_description_ar = checkError(errorsResponse.short_description_ar)
              this.formErrors.long_description_en = checkError(errorsResponse.long_description_en)
              this.formErrors.long_description_ar = checkError(errorsResponse.long_description_ar)
              this.formErrors.image = checkError(errorsResponse.image)
              this.formErrors.duration = checkError(errorsResponse.duration)
              this.formErrors.is_published = checkError(errorsResponse.is_published)
              this.formErrors.is_paid = checkError(errorsResponse.is_paid)
              this.formErrors.price = checkError(errorsResponse.price)
            })

        }
      })
    },
    fectchRecord:function(){

      //fetch record

      this.isLoading = true
      axios
      .get( getDomain('no') + `trackingsystem/show/${this.id}?flag=dash`)
      .then(response => {
      this.isLoading = false 
      console.log('trackingsystem/show : ' , response.data)
      let record = response.data.data
     
     
      this.name_en = record.name_en
      this.name_ar = record.name_ar
      this.short_description_en = record.short_description_en
      this.short_description_ar = record.short_description_ar_original
      this.long_description_en = record.long_description_en
      this.long_description_ar = record.long_description_ar_original
      this.status = record.is_published
      this.seo_title_en = record.seo_title_en ? record.seo_title_en : '' 
      this.seo_title_ar = record.seo_title_ar ? record.seo_title_ar : ''
      this.seo_desc_en = record.seo_desc_en ? record.seo_desc_en : ''
      this.seo_desc_ar = record.seo_desc_ar ? record.seo_desc_ar : ''
      this.duration = record.duration

      if( record.fields ){
        for( let f=0 ; f < record.fields.length ; f++  ){
          this.field_id.push(`${record.fields[f].field.id}`)
        }
      }else{
        this.field_id = []
      }

      this.price = record.price
      this.free = record.price ? 0 : 1
      this.showPriceInput = this.price ? 1 : 0 
      
      this.intro_path_type = record.intro_path_type ? record.intro_path_type : 'video'  
      
     

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
    getFreeValue(event){
        this.showPriceInput = event  ? 0 : 1
        if(event == 0 ){
          this.price = null
        } 
        console.log( 'free state  ' , this.showPriceInput )
    },
    getFields(){
      this.isLoading = true
      //fetch fields
      var url = getDomain('no') + `trackingsystem/fieldsGoals/index?flag=dash&is_published=1`
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
          url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url)
      .then(response => {
        this.isLoading = false
        console.log('trackingsystem/fieldsGoals/index : ' , response.data.data)
        for( let s=0 ; s< response.data.data.length; s++  ){
            this.fieldOptions.push( {label: response.data.data[s].name_en  , value: `${response.data.data[s].id}` })
        }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        this.isLoading = false
      })
    }
  },
  mounted(){
    this.getFields()
  },
  computed:{
    introPathExtinsions(){
      if( this.intro_path_type == 'video' ){
        return 'ext:mp4,MP4,mpg,mpeg,avi,wmv,mov,rm,ram,ogg,webm';
      }else{
        console.log('fff')
        return 'ext:png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG|maxFileIntro';
      }
      
    }
  },
}

export const _ = null
