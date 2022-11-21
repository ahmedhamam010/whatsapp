import axios from '@axios'
import getDomain from '@/helperFunctions/getDomain'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import router from '@/router'
import checkError from '@/helperFunctions/helper'
export const FormInputsData = {
  data() {
    return {
      
      video:null,
      intro_video:null,
      videoPreview:null,
      name_en:"",
      name_ar:"",
      image:null,
      short_desc_en:'',
      short_desc_ar:'',
      long_desc_en:'',
      long_desc_ar:'',
      tracking_id: null,
      trackingSystemOptions:[],
      quiz_id: null,
      quizOptions:[],
      type: null,
      repetitionCriteriaOptions:[
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value:'weekly'  },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
        { label: 'One Time', value: 'one_time' },
      ],
      date_type:null,
      dateTypeOptions:[
        { label: 'Date', value: 'date' },
        { label: 'Date Range', value: 'date_range' },
      ],
      free:0,
      freeOptions : [
        { label: 'Free', value: 1 },
        { label: 'Paid', value: 0 },
      ],
      price:10,
      showPriceInput : 1,
      duration:10,
      formErrors : {
        intro:null,
        intro_video:null,
        name:null,
        name_ar:null,
        type_id: null,
        status : null,
      },
    
    attachments:[],
    attachmentCounter:0,
    isLoading:false,
    attach:null,
    retrived_attachments:[],
    retrived_video:null,
    retrived_intro_video:null,
    add_your_proof:false,
    selectedTrackingDuration:0,
    selectedReptitionType:0,
    hiddenTrackingId:null,
    }
  },
  methods: {
    addForm: function () {
     

      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          this.isLoading = true
          
          var formData = new FormData();

          formData.append("name_en",this.name_en )
          formData.append("name_ar",this.name_ar )

          var introFile = document.querySelector('#intro')
          if( introFile.files[0] ){
           formData.append("intro_video", introFile.files[0] )
           
          }

          formData.append("short_desc_en",this.short_desc_en )
          formData.append("short_desc_ar",this.short_desc_ar )
          formData.append("long_desc_en",this.long_desc_en )
          formData.append("long_desc_ar",this.long_desc_ar )

          formData.append("type",this.type )

          

          var videoFile = document.querySelector('#video')
          if( videoFile.files[0] ){
           formData.append("attachments[0][file]", videoFile.files[0] )
           formData.append("attachments[0][type]", 'video' )
           formData.append("attachments[0][name_en]", 'video-en' )
           formData.append("attachments[0][name_ar]", 'video-ar' )
           
            
          }

          if( this.quiz_id ){
            formData.append("attachments[1][id]", this.quiz_id )
            formData.append("attachments[1][type]", 'quiz' )
            formData.append("attachments[1][name_en]", 'quiz-en' )
            formData.append("attachments[1][name_ar]", 'quiz-ar' )
          }

          const attachmentsLength = document.querySelector('.attachments-container').childElementCount
          if( attachmentsLength == 1 ){

            formData.append("attachments[2][file]", document.querySelector('#attachment-1').files[0]);
            formData.append("attachments[2][type]", 'document' )
            formData.append("attachments[2][name_en]", document.querySelector('#attachment-1').files[0].name.split('.')[0] )
            formData.append("attachments[2][name_ar]", document.querySelector('#attachment-1').files[0].name.split('.')[0] )

          }else if( attachmentsLength == 2 ){

            formData.append("attachments[2][file]", document.querySelector('#attachment-1').files[0]);
            formData.append("attachments[2][type]", 'document' )
            formData.append("attachments[2][name_en]", document.querySelector('#attachment-1').files[0].name.split('.')[0] )
            formData.append("attachments[2][name_ar]", document.querySelector('#attachment-1').files[0].name.split('.')[0] )

            formData.append("attachments[3][file]", document.querySelector('#attachment-2').files[0]);
            formData.append("attachments[3][type]", 'document' )
            formData.append("attachments[3][name_en]", document.querySelector('#attachment-2').files[0].name.split('.')[0] )
            formData.append("attachments[3][name_ar]", document.querySelector('#attachment-2').files[0].name.split('.')[0] )

          }else if( attachmentsLength == 3 ){

            formData.append("attachments[2][file]", document.querySelector('#attachment-1').files[0]);
            formData.append("attachments[2][type]", 'document' )
            formData.append("attachments[2][name_en]", document.querySelector('#attachment-1').files[0].name.split('.')[0] )
            formData.append("attachments[2][name_ar]", document.querySelector('#attachment-1').files[0].name.split('.')[0] )

            formData.append("attachments[3][file]", document.querySelector('#attachment-2').files[0]);
            formData.append("attachments[3][type]", 'document' )
            formData.append("attachments[3][name_en]", document.querySelector('#attachment-2').files[0].name.split('.')[0] )
            formData.append("attachments[3][name_ar]", document.querySelector('#attachment-2').files[0].name.split('.')[0] )

            formData.append("attachments[4][file]", document.querySelector('#attachment-3').files[0]);
            formData.append("attachments[4][type]", 'document' )
            formData.append("attachments[4][name_en]", document.querySelector('#attachment-3').files[0].name.split('.')[0] )
            formData.append("attachments[4][name_ar]", document.querySelector('#attachment-3').files[0].name.split('.')[0] )

          }

          formData.append("tracking_id", this.tracking_id )
          if( this.type == 'one_time' ){
            formData.append("date_type", this.date_type  )
          }

          formData.append("prof", this.add_your_proof ? 1 : 0  )
                
          axios
            .post(getDomain('no') + `trackingsystem/activities/add`, formData)
            .then(response => {
                console.log('trackingsystem/activities/add succuss' , response)
                router.replace('/apps/trackingSystem/activity/list')

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
              this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                  title: `${error.response.data.msg}`,
                  icon: 'CoffeeIcon',
                  variant: 'danger',
                  },
              })

              //hide spinner
              this.isLoading = false              
              
              
              var errorsResponse = error.response.data.errors
              console.log('errorsResponse',checkError(errorsResponse.intro_video))
              
              this.formErrors.intro_video = checkError(errorsResponse.intro_video)
              this.formErrors.name_en = checkError(errorsResponse.name_en)
              this.formErrors.name_ar = checkError(errorsResponse.name_ar)
              this.formErrors.field_id = checkError(errorsResponse.field_id)
              this.formErrors.short_description = checkError(errorsResponse.short_description)
              this.formErrors.short_description_ar = checkError(errorsResponse.short_description_ar)
              this.formErrors.long_description = checkError(errorsResponse.long_description)
              this.formErrors.long_description_ar = checkError(errorsResponse.long_description_ar)
            })

        }
      })
    },
    editForm: function () {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {

          //show spinner
          this.isLoading = true
          
          var formData = new FormData();
          formData.append("_method",'put' )
          
          formData.append("name_en",this.name_en )
          formData.append("name_ar",this.name_ar )

          var introFile = document.querySelector('#intro')
          if( introFile.files[0] ){
           formData.append("intro_video", introFile.files[0] )
           
          }

          formData.append("short_desc_en",this.short_desc_en )
          formData.append("short_desc_ar",this.short_desc_ar )
          formData.append("long_desc_en",this.long_desc_en )
          formData.append("long_desc_ar",this.long_desc_ar )

          formData.append("type",this.type )

          

          var videoFile = document.querySelector('#video')
          if( videoFile.files[0] ){
           formData.append("attachments[0][file]", videoFile.files[0] )
           formData.append("attachments[0][type]", 'video' )
           formData.append("attachments[0][name_en]", 'video-en' )
           formData.append("attachments[0][name_ar]", 'video-ar' )
           
            
          }

          if( this.quiz_id ){
            formData.append("attachments[1][id]", this.quiz_id )
            formData.append("attachments[1][type]", 'quiz' )
            formData.append("attachments[1][name_en]", 'quiz-en' )
            formData.append("attachments[1][name_ar]", 'quiz-ar' )
          }

          const attachmentsLength = document.querySelector('.attachments-container').childElementCount
          if( attachmentsLength == 1 ){

            formData.append("attachments[2][file]", document.querySelector('#attachment-1').files[0]);
            formData.append("attachments[2][type]", 'document' )
            formData.append("attachments[2][name_en]", 'attchment-1-en' )
            formData.append("attachments[2][name_ar]", 'attchment-1-ar' )

          }else if( attachmentsLength == 2 ){

            formData.append("attachments[2][file]", document.querySelector('#attachment-1').files[0]);
            formData.append("attachments[2][type]", 'document' )
            formData.append("attachments[2][name_en]", 'attchment-1-en' )
            formData.append("attachments[2][name_ar]", 'attchment-1-ar' )

            formData.append("attachments[3][file]", document.querySelector('#attachment-2').files[0]);
            formData.append("attachments[3][type]", 'document' )
            formData.append("attachments[3][name_en]", 'attchment-2-en' )
            formData.append("attachments[3][name_ar]", 'attchment-2-ar' )

          }else if( attachmentsLength == 3 ){

            formData.append("attachments[2][file]", document.querySelector('#attachment-1').files[0]);
            formData.append("attachments[2][type]", 'document' )
            formData.append("attachments[2][name_en]", 'attchment-1-en' )
            formData.append("attachments[2][name_ar]", 'attchment-1-ar' )

            formData.append("attachments[3][file]", document.querySelector('#attachment-2').files[0]);
            formData.append("attachments[3][type]", 'document' )
            formData.append("attachments[3][name_en]", 'attchment-2-en' )
            formData.append("attachments[3][name_ar]", 'attchment-2-ar' )

            formData.append("attachments[4][file]", document.querySelector('#attachment-3').files[0]);
            formData.append("attachments[4][type]", 'document' )
            formData.append("attachments[4][name_en]", 'attchment-3-en' )
            formData.append("attachments[4][name_ar]", 'attchment-3-ar' )

          }

          formData.append("tracking_id", this.tracking_id )
          if( this.type == 'one_time' ){
            formData.append("date_type", this.date_type  )
          }

          formData.append("prof", this.add_your_proof ? 1 : 0  )
                
          axios
            .post(getDomain('no') + `trackingsystem/activities/update/${this.id}`, formData)
            .then(response => {
                console.log('trackingsystem/activities/add succuss' , response)
                router.replace('/apps/trackingSystem/activity/list')

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
              this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                  title: `${error.response.data.msg}`,
                  icon: 'CoffeeIcon',
                  variant: 'danger',
                  },
              })

              //hide spinner
              this.isLoading = false              
             
              var errorsResponse = error.response.data.errors
              
              this.formErrors.intro = checkError(errorsResponse.intro)
              this.formErrors.name_en = checkError(errorsResponse.name_en)
              this.formErrors.name_ar = checkError(errorsResponse.name_ar)
              this.formErrors.field_id = checkError(errorsResponse.field_id)
              this.formErrors.short_description = checkError(errorsResponse.short_description)
              this.formErrors.short_description_ar = checkError(errorsResponse.short_description_ar)
              this.formErrors.long_description = checkError(errorsResponse.long_description)
              this.formErrors.long_description_ar = checkError(errorsResponse.long_description_ar)
            })

        }
      })
    },
    getFreeValue(event){
        this.showPriceInput = event  ? 0 : 1
        console.log( 'free state  ' , this.showPriceInput )
    },
    addAttachmentFile() {
      if( this.attachmentCounter <= 2 ){
        this.attachments.push(this.attachmentCounter++);
      }
    },
    removeQualificationFile(index) {
      this.attachments.splice(index, 1);
      this.attachmentCounter--
    },
    previewVideo(){
      let video = document.getElementById('video');
      let reader = new FileReader();

      reader.readAsDataURL( this.videoPreview );
      reader.addEventListener('load', function(){
          video.src = reader.result;
      });
    },
    handleFileUpload( event ){
      this.videoPreview = event.target.files[0];
      this.previewVideo();
    },
    fetchQuizzes(){
      this.isLoading = true
      //fetch fields
      var url = `quizzes/index/quiz`
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url)
      .then(response => {
        this.isLoading = false
        console.log('Quiz list' , response.data.quizzes)
        for( let q=0 ; q< response.data.quizzes.length; q++  ){
            this.quizOptions.push( {label: response.data.quizzes[q].title_en  , value: `${response.data.quizzes[q].id}` })
        }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        this.isLoading = false
      })
    
    },
    getTrackingSystems(){
      this.isLoading = true
      //fetch fields
      var url = getDomain('no') + `trackingsystem/index?flag=dash&type=tracking`
      
      if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
      }
      axios
      .get(url)
      .then(response => {
        this.isLoading = false
        console.log('trackingsystem/index : ' , response.data.data)
        for( let s=0 ; s< response.data.data.length; s++  ){
            this.trackingSystemOptions.push( {
              label: response.data.data[s].name_en  ,
              value: `${response.data.data[s].id}`,
            duration: response.data.data[s].duration
           })
          
        }
        
        
      })
      .then(response => {
        if( this.trackingSystemOptions.filter(x => x.value == this.hiddenTrackingId ).length == 0){
         
         this.tracking_id = null
        }else{
          
          this.tracking_id = this.hiddenTrackingId
        }
      })
      .catch(error => {
        console.log( 'error fetch course', error)
        this.isLoading = false
      })
    },
    downloadFile(urlTask){
      window.open(urlTask); 
    },
  },
  computed:{
    imageOrVideo(){
      return 'ext::png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG,mp4,MP4,mpg,mpeg,avi,wmv,mov,rm,ram,ogg,webm';
    },
    onlyVideo(){
      return 'ext:mp4,MP4,mpg,mpeg,avi,wmv,mov,rm,ram,ogg,webm';
    }
    
  },
  mounted() {
    this.fetchQuizzes()

    //check if we come from tracking details to add activity or not
    if( router.currentRoute.params.id == undefined  ||  router.currentRoute.params.name == undefined){
      
      this.getTrackingSystems()
    }
    
  },
  watch:{
    tracking_id(newVal,oldVal){
      if( this.tracking_id && this.trackingSystemOptions.length > 0 ){
        let trackDuration = this.trackingSystemOptions.filter(x => x.value == this.tracking_id)[0].duration
        this.selectedTrackingDuration = trackDuration
        console.log('this.selectedTrackingDuration' , this.selectedTrackingDuration )
      }
      
    },
    type(newVal,oldVal){

      if( newVal != 'one_time' ){
        this.date_type = null
      }
     
      this.selectedReptitionType = newVal
      let activityReptitation = 0
      if( newVal == 'weekly' ){
        activityReptitation = 7
      }else if( newVal == 'monthly' ){
        activityReptitation = 30
      }else if( newVal == 'yearly' ){
        activityReptitation = 365
      }
      this.selectedReptitionType = activityReptitation
      console.log('this.selectedReptitionType' , this.selectedReptitionType )
    }
  }
}

export const _ = null
