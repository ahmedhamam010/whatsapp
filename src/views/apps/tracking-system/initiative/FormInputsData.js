import axios from '@axios'
import getDomain from '@/helperFunctions/getDomain'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
export const FormInputsData = {
  data() {
    return {
      id : router.currentRoute.params.id,
      intro:null,
      name_en:"",
      name_ar:"",
      image:null,
      short_description_en:'',
      short_description_ar:'',
      long_description_en:'',
      long_description_ar:'',
      tracking_id: null,
      trackingSystemOptions:[],
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
        tracking_id:null,
        start_date:null,
        
      },
    

      seo_title_en: '',
      seo_title_ar: '',
      seo_desc_en:'',
      seo_desc_ar: '',
      image_seo:null,
      isLoading:true,
      start_date:null,
      end_date:null,
      tracking_duration:0,
      intro_path_type:'video',
      introPathOptions:[
        { label: 'Video', value: 'video' },
        { label: 'Image', value: 'image' },
      ],
      activitiesDates:[],
      pageTitle:'',
      introPreview:null,
      imagePreview:null,
    }
  },
  methods: {
    submitForm: function () {
      console.log(this.activitiesDates)
      
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

          if(this.price){
            formData.append("price",this.price )
          }

          

          formData.append("is_published",this.status )
          formData.append("is_paid",this.free ? '0' : '1' )
          
          
          
          formData.append("seo_title_en",this.seo_title_en ? this.seo_title_en : '' )
          formData.append("seo_title_ar",this.seo_title_ar ? this.seo_title_ar : ''  )
          formData.append("seo_desc_en",this.seo_desc_en ? this.seo_desc_en : '' )
          formData.append("seo_desc_ar",this.seo_desc_ar ? this.seo_desc_ar : '' )

          

          formData.append("tracking_id",this.tracking_id )
          formData.append("start_date",this.start_date )
          formData.append("fields[]","1" )
          formData.append("intro_path_type",this.intro_path_type )

          
          //add activities list
          for( let ac=0 ; ac < this.activitiesDates.length ; ac++ ){
            
            
            
            formData.append(`activities[${ac}][id]`,this.activitiesDates[ac].id )
            
            
            if( this.activitiesDates[ac].date_type == 'date_range' ){
              
              formData.append(`activities[${ac}][date]`,this.activitiesDates[ac].start_date + ',' + this.activitiesDates[ac].end_date)
              
            }else{

              formData.append(`activities[${ac}][date]`,this.activitiesDates[ac].start_date)
            }

          }

          var introFile = document.querySelector('#intro')
          if( introFile.files[0] ){
           formData.append("intro_path", introFile.files[0] )
          }

          var imageFile = document.querySelector('#image')
          if( imageFile.files[0] ){
           formData.append("image", imageFile.files[0] )
          }

          var image_seo = document.querySelector('#image_seo')
          if( image_seo.files[0] ){
           formData.append("seo_image", image_seo.files[0] )
          }

          if( this.id ){

            var url = getDomain('no') + `trackingsystem/update/${this.id}?type=initiative`
            var message = `Updated Successfully`
          }else{

            var url = getDomain('no') + `trackingsystem/store?type=initiative`
            var message = `Added Successfully`
          }
                
          axios
            ({ method: 'POST', url ,data: formData})
            .then(response => {
                router.push({ path: '/apps/trackingSystem/initiative/list'})

                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: message,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
            } )
            .catch(error => {
              // console.log('category error' , error.response)

             this.isLoading = false

             this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                title: `${error.response.data.msg}`,
                icon: 'CoffeeIcon',
                variant: 'danger',
                },
            })
              
             
              
              var errorsResponse = error.response.data.errors
              
              this.formErrors.intro_path = checkError(errorsResponse.intro_path)
              this.formErrors.name_en = checkError(errorsResponse.name_en)
              this.formErrors.name_ar = checkError(errorsResponse.name_ar)
              this.formErrors.short_description_en = checkError(errorsResponse.short_description_en)
              this.formErrors.short_description_ar = checkError(errorsResponse.short_description_ar)
              this.formErrors.long_description_en = checkError(errorsResponse.long_description_en)
              this.formErrors.long_description_ar = checkError(errorsResponse.long_description_ar)
              this.formErrors.image = checkError(errorsResponse.image)
              this.formErrors.duration = checkError(errorsResponse.duration)
              this.formErrors.is_published = checkError(errorsResponse.is_published)
              this.formErrors.is_paid = checkError(errorsResponse.is_paid)
              this.formErrors.price = checkError(errorsResponse.price)
              this.formErrors.tracking_id = checkError(errorsResponse.tracking_id)
              this.formErrors.start_date = checkError(errorsResponse.start_date)
            })

        }
      })
    },
    fectchRecord:function(){

      //fetch record

      this.isLoading = true
      axios
      .get( getDomain('no') + `trackingsystem/show/${this.id}?type=initiative`)
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
      this.seo_title_en = record.seo_title_en
      this.seo_title_ar = record.seo_title_ar
      this.seo_desc_en = record.seo_desc_en
      this.seo_desc_ar = record.seo_desc_ar
      this.duration = record.duration
      this.tracking_duration = record.duration
      this.activities = record.activities.filter(x => x.type == 'one_time')
      for( let act=0 ; act< this.activities.length ; act++ ){
        let start_date = '';
        let end_date = '';
        if( this.activities[act].one_time_date ){
          if( this.activities[act].date_type == 'date_range' ){
            start_date = this.activities[act].one_time_date.split(",")[0]
            end_date = this.activities[act].one_time_date.split(",")[1]
          }else{
            start_date = this.activities[act].one_time_date
            end_date = ''
          }
        }
        this.activitiesDates.push({
          id: this.activities[act].id,
          name_en: this.activities[act].name_en,
          date_type: this.activities[act].date_type,
          start_date,
          end_date
        })
      }  
      console.log('my listed activities one time ', this.activitiesDates )


      this.start_date = record.start_date 
      this.end_date = record.end_date

      

      this.price = record.price
      this.free = record.price ? 0 : 1
      this.showPriceInput = this.price ? 1 : 0  
      this.tracking_id = record.parent
      this.start_date = record.start_date
      this.intro_path_type = record.intro_path_type ? record.intro_path_type : 'video' 
      this.introPreview = record.intro_path
      this.imagePreview = record.image
      
     

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
    getTrackingSystems(){
      this.isLoading = true
      //fetch fields
      var url = getDomain('no') + `trackingsystem/index?flag=dash&type=tracking&track_status=active`
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url)
      .then(response => {
        this.isLoading = false
        console.log('trackingsystem/index : ' , response.data.data)
        for( let s=0 ; s< response.data.data.length; s++  ){
            this.trackingSystemOptions.push( 
              {
                label: response.data.data[s].name_en,
                value: `${response.data.data[s].id}`,
                duration :response.data.data[s].duration,
                activities :response.data.data[s].activities,  })
        }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        this.isLoading = false
      })
    },
    getFreeValue(event){
        this.showPriceInput = event  ? 0 : 1
        if(event == 0 ){
          this.price = null
        } 
        console.log( 'free state  ' , this.showPriceInput )
    },
    trackingSystemChanged(event){
      this.start_date = null
      this.end_date = null
      const duration = this.trackingSystemOptions.filter(x => x.value == event)[0].duration;
      this.duration = duration
      if( duration ){
        this.tracking_duration = duration
      }else{
        this.tracking_duration = 0
      }
      //get related activities
      const activities = this.trackingSystemOptions.filter(x => x.value == event)[0].activities;
      this.listRelatedActivities(activities);

    },
    listRelatedActivities(activities = []){
      console.log('related activites ' , activities )
      if(activities && activities.length > 0 ){
        let oneTimeActivities = [];
        oneTimeActivities = activities.filter(x => x.type == 'one_time');
        
        this.activitiesDates = [];
        
        for(let a=0 ; a < oneTimeActivities.length ; a++ ){
          console.log('oneTimeActivities', oneTimeActivities[a])
          this.activitiesDates.push({
            
              id: oneTimeActivities[a].id,
              name_en: oneTimeActivities[a].name_en,
              date_type: oneTimeActivities[a].date_type,
              start_date: '',
              end_date: '',
            
          })
        }
      }
      
    }
  },
  mounted(){
    this.getTrackingSystems()
    if( this.id ){ 
      this.pageTitle = 'Edit Initiative'
      this.fectchRecord()
    }else{
      this.pageTitle = 'Add Initiative'
    }
  },
  computed:{
    imageOrVideo(){
      return 'ext:png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG,mp4,MP4,mpg,mpeg,avi,wmv,mov,rm,ram,ogg,webm';
    },
    introPathExtinsions(){
      if( this.intro_path_type == 'video' ){
        return 'ext:mp4,MP4,mpg,mpeg,avi,wmv,mov,rm,ram,ogg,webm';
      }else{
        console.log('fff')
        return 'ext:png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG|maxFileIntro';
      }
      
    },
    minDate(){
      var result = new Date();
        result.setDate(result.getDate() + 1 );
        return result.toISOString().split("T")[0];
    }
  },
  watch: {
    start_date(newVal, oldVal) {
      if( this.start_date ){
        console.log('start date' , newVal)
        var result = new Date(newVal);
        result.setDate(result.getDate() + this.tracking_duration - 1 );
        this.end_date = result.toISOString().split("T")[0]
        console.log('end date' , this.end_date)
      }else{
        this.end_date = null
      }
    }
  },
}

export const _ = null
