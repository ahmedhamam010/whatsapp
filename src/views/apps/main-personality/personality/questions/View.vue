<template>
  <b-row>
    <b-col md="12">
      <b-card title="Question Details">
        <!---->
        <b-row>
            <b-col
                cols="12"
                xl="12"
            >
            <b-list-group class="mt-2">

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Question EN
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{question}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Question AR
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{question_ar}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Type
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{type}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Test Name EN
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{test}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Test Name AR
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{test_ar}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Sub Category En
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{parent_category}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Sub Category Ar
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{parent_category_ar}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Sub Sub Category En
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{category}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Sub Sub Category Ar
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            {{category_ar}}
                        </b-col>

                    </b-row>
                </b-list-group-item>

                <b-list-group-item>
                    <b-row>
                        <b-col
                        cols="4"
                        md="4"
                        >
                        Answers
                        </b-col>  

                        <b-col
                        cols="8"
                        md="8"
                        >
                            <b-row v-for="answer in answers" :key="answer.id">
                                <b-col cols="4" >Answer EN: {{answer.answer}} </b-col>
                                <b-col cols="4" >Answer AR: {{answer.answer_ar}} </b-col>
                                <b-col cols="4">User Gains: {{answer.user_gains}}</b-col>
                            </b-row>
                        </b-col>

                    </b-row>
                </b-list-group-item>

            </b-list-group>

            

                
            </b-col>
        </b-row>
        <!---->  
      </b-card>
    </b-col>

    <template v-if="isLoading">
      <div class="text-center loading-spinner" id="loading-spinner">
        <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
      </div>
    </template>
    
  </b-row>
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar,BSpinner,BTable,BPagination,BMedia} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTab,
    BTabs,
    BCardText,
    BCardTitle,
    BButton,
    AppCollapse,
    AppCollapseItem,
    BFormRadioGroup,
    BFormRadio,
    BFormGroup,
    BListGroup,
    BListGroupItem,
    BDropdown,
    BDropdownItem,
    BAvatar,BSpinner,BTable,BPagination,BMedia,
    draggable,
  },
  directives: {
    Ripple,
  },
  data () {
    return{
    id: router.currentRoute.params.id,
    question: '',
    question_ar: '',
    type: '',
    test:'',
    test_ar:'',
    parent_category:'',
    parent_category_ar:'',
    category:'',
    category_ar:'',
    answers:[],
    isLoading:true,
    }
  },
  mounted() {
   
    this.fetchRecord();
  },
  methods :{
    fetchRecord: function(){
        //fetch categories
        var url = `personalityTestQuestions/${this.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            console.log('fetch question record : ' , response.data.data)
            let data = response.data.data
            this.question = data.question
            this.question_ar = data.question_ar
            this.type = data.type
            this.test = data.personality_test.name
            this.test_ar = data.personality_test.name_ar
            this.answers = data.answers
            this.category = data.personality_category ?  data.personality_category.title : '-'
            this.category_ar = data.personality_category ?  data.personality_category.title_ar : '-'
            this.parent_category = data.personality_category ?  data.personality_category.parent.title : '-'
            this.parent_category_ar = data.personality_category ?  data.personality_category.parent.title_ar : '-'
            
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
  }
 
 
  
 
}
</script>


<style scoped>
.tabs .nav-item,
.tabs .nav-item .feather{
  font-size: 1.1rem;
}
.list-group-item:hover{ cursor : pointer }
.loading-spinner{
   position: absolute;
   top: 50%; 
   left: 50%;
   transform: translate(-50%, -50%);
}
</style>