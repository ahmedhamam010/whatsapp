<template>
  
    <div>

      <b-tabs>
        <b-tab active>
          <template #title>
            <feather-icon icon="UserIcon" />
            <span>Information</span>
          </template>

          <!--basic info-->
          <b-row>
            <b-col md="12">
              <b-card title="Information">
                <b-list-group class="w-100">
                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Title EN</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ title }}</span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Title AR</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ title_ar }}</span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>
                  
                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Passing Percentage</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ passing_percentage }} %</span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Timer</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ timer }} Min</span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>

                  <!-- <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>is Free</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ price ? 'No' : 'Yes' }} </span>
                      </b-col>
                    </b-row>
                  </b-list-group-item> -->

                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Price</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ price }} </span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Description EN</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ description }}</span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                    <b-row class="w-100">
                      <b-col md="3" class="text-left d-flex align-items-center" >
                        <span>Description AR</span>
                      </b-col>

                      <b-col md="9" class="text-left d-flex align-items-center" >
                        <span>{{ description_ar }}</span>
                      </b-col>
                    </b-row>
                  </b-list-group-item>

                  <b-list-group-item>
                  <b-row class="w-100">
                    <b-col
                      cols="3"
                      md="3"
                    >
                      Seo Name EN
                    </b-col>  

                    <b-col
                      cols="9"
                      md="9"
                    >
                    {{title_seo_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row class="w-100">
                    <b-col
                      cols="3"
                      md="3"
                    >
                      Seo Name AR
                    </b-col>  

                    <b-col
                      cols="9"
                      md="9"
                    >
                    {{title_seo_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row class="w-100">
                    <b-col
                      cols="3"
                      md="3"
                    >
                      Seo Description EN
                    </b-col>  

                    <b-col
                      cols="9"
                      md="9"
                    >
                    {{description_seo_en}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row class="w-100">
                    <b-col
                      cols="3"
                      md="3"
                    >
                      Seo Description AR
                    </b-col>  

                    <b-col
                      cols="9"
                      md="9"
                    >
                    {{description_seo_ar}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row class="w-100">
                    <b-col
                      cols="3"
                      md="3"
                    >
                      Seo Image
                    </b-col>  

                    <b-col
                      cols="9"
                      md="9"
                    >
                    <b-avatar
                        :src="image_seo"
                        size="104px"
                        rounded
                      />
                    </b-col>

                  </b-row>
                </b-list-group-item>

                </b-list-group>
              </b-card>
            </b-col>
          
            <b-col md="12">
              <b-card title="Questions">
                <app-collapse
                  accordion
                  type="shadow"
                  
                >
                  <app-collapse-item 
                  v-for="(parent, index) in form.parent"
                  :key="index"
                  :title="parent.question"
                  >
                    <h5 class="pl-md-2 pr-md-2 mb-2">Question EN: {{parent.question}}</h5>
                    <h5 class="pl-md-2 pr-md-2 mb-2">Question AR: {{parent.question_ar}}</h5>

                    <h5 class="pl-md-2 pr-md-2">Answers</h5>
                    <app-collapse
                      accordion
                      type="margin"
                      class="pl-md-2 pr-md-2"
                      
                    >
                      <app-collapse-item v-if="parent != undefined" v-for="(answer, indexs) in parent.answers" :key="indexs" :title="answer.answer">
                        <b-list-group class="d-flex" >
                          <!--Answer-->
                          <b-list-group-item 
                                
                                >
                                  <b-row class="w-100">
                                  <b-col md="3" class="text-left d-flex align-items-center" >
                                    <span class="mr-1">
                                      <feather-icon
                                        icon="CheckCircleIcon"
                                        size="17"
                                      />
                                    </span>
                                    <span>Answer EN</span>
                                  </b-col>

                                  <b-col md="9" class="text-left d-flex align-items-center" >
                                    <span>{{answer.answer}}</span>
                                  </b-col>
                                  
                                  </b-row>
                          </b-list-group-item>
                          <!--/Answer-->

                          <!--Answer-->
                          <b-list-group-item 
                                
                                >
                                  <b-row class="w-100">
                                  <b-col md="3" class="text-left d-flex align-items-center" >
                                    <span class="mr-1">
                                      <feather-icon
                                        icon="CheckCircleIcon"
                                        size="17"
                                      />
                                    </span>
                                    <span>Answer AR</span>
                                  </b-col>

                                  <b-col md="9" class="text-left d-flex align-items-center" >
                                    <span>{{answer.answer_ar}}</span>
                                  </b-col>
                                  
                                  </b-row>
                          </b-list-group-item>
                          <!--/Answer-->
                          <!--Is  Correct-->
                          <b-list-group-item 
                                class="d-flex" 
                                >
                                  <b-row class="w-100">
                                  <b-col md="3" class="text-left d-flex align-items-center" >
                                    <span class="mr-1">
                                      <feather-icon
                                        icon="CheckCircleIcon"
                                        size="17"
                                      />
                                    </span>
                                    <span>Is Correct</span>
                                  </b-col>

                                  <b-col md="9" class="text-left d-flex align-items-center" >
                                    <span>{{answer.is_correct ? 'Yes' : 'No'}}</span>
                                  </b-col>
                                  
                                  </b-row>
                          </b-list-group-item>
                          <!--/Is  Correct-->

                          <!--Strength Points-->
                          <b-list-group-item 
                                class="d-flex"
                                v-if="parent != undefined && answer.strength.length > 0" 
                                >
                                  <b-row class="w-100">
                                  <b-col md="3" class="text-left d-flex align-items-center" >
                                    <span class="mr-1">
                                      <feather-icon
                                        icon="CheckCircleIcon"
                                        size="17"
                                      />
                                    </span>
                                    <span>Strength Points</span>
                                  </b-col>

                                  <b-col md="9" class="text-left d-flex align-items-center w-100" >
                                    <b-list-group class="w-100">
                                      <b-list-group-item
                                      v-if="parent != undefined && answer.strength.length > 0" v-for="(strength, sindex) in answer.strength"
                                      :key="sindex"
                                      >
                                      Point En : {{strength.point}}
                                      <br>
                                      Point Ar : {{strength.point_ar}}
                                      </b-list-group-item>
                                      <div v-if="parent != undefined && answer.strength.length == 0" >
                                      There is no strength points for this answer
                                      </div>
                                    </b-list-group>
                                  </b-col>
                                  
                                  </b-row>
                          </b-list-group-item>
                          <!--/Strength Points-->

                          <!--Weekness Points-->
                          <b-list-group-item 
                                class="d-flex"
                                v-if="parent != undefined && answer.weaknesses.length > 0" 
                                >
                                  <b-row class="w-100">
                                  <b-col md="3" class="text-left d-flex align-items-center" >
                                    <span class="mr-1">
                                      <feather-icon
                                        icon="CheckCircleIcon"
                                        size="17"
                                      />
                                    </span>
                                    <span>Weakness Points</span>
                                  </b-col>

                                  <b-col md="9" class="text-left d-flex align-items-center w-100" >
                                    <b-list-group class="w-100">
                                      <app-collapse
                                        accordion
                                        type="margin"
                                        
                                      >
                                        <app-collapse-item v-if="parent != undefined && answer.weaknesses.length > 0" v-for="(weak, windex) in answer.weaknesses" :key="windex" :title="weak.point" style="font-weight: normal !important;">
                                          <b-list-group class="w-100 pl-md-3 pr-md-3">
                                            <h6 class="mb-1">Advices</h6>
                                            <b-list-group-item v-if="weak.advices.length > 0"  v-for="(advice, aindex) in weak.advices" :key="aindex">
                                              <b-row class="w-100">
                                                <b-col md="3" class="text-left d-flex align-items-center" >
                                                  <span>Advice {{ aindex+1 }}</span>
                                                </b-col>

                                                <b-col md="9" class="text-left " >
                                                  <div>Advice En: {{advice.advice}}</div>
                                                  
                                                   <div>Advice Ar: {{advice.advice_ar}}</div>
                                                </b-col>
                                              </b-row>
                                            </b-list-group-item>

                                            <b-list-group-item v-if="weak.advices.length == 0">
                                              <b-row class="w-100">
                                                <b-col md="3" class="text-left d-flex align-items-center" >
                                                  <span>There is no advices till now</span>
                                                </b-col>

                                              </b-row>
                                            </b-list-group-item>
                                            

                                          </b-list-group>
                                        </app-collapse-item>
                                        <div v-if="parent != undefined && answer.weaknesses.length == 0">
                                          There is no weakness points for this answer
                                        </div>
                                      </app-collapse>
                                    </b-list-group>
                                  </b-col>
                                  
                                  </b-row>
                          </b-list-group-item>
                          <!--/Weekness Points-->
                        </b-list-group>
                      </app-collapse-item>
                    </app-collapse>
                  </app-collapse-item>
                </app-collapse>
              </b-card>
            </b-col>
          </b-row>
          <!--bacic info-->
        </b-tab>

        <b-tab @click.once="getRecords">
          <template #title>
            <feather-icon icon="UsersIcon" />
            <span>Users</span>
          </template>

          <b-card>
            <!--users table-->
            <b-table 
              responsive
              :busy="isBusy"
              :items="items"
              class="mt-2"
              show-empty
              empty-text="No matching records found"
              :fields="fields"
            >

              <!-- Column: User -->
              <template #cell(avatar)="data">
                <b-media vertical-align="center">
                  <template #aside>
                    <b-avatar
                      size="32"
                      :src="data.item.avatar"
                    />
                  </template>
                </b-media>
              </template>

              <template #cell(phone)="data">
                <div class="text-nowrap">
                  <span class="align-text-top text-capitalize">{{ data.item.phone }}</span>
                </div>
              </template>

              <!-- Column: Role -->
              <template #cell(role)="data">
                <div class="text-nowrap">
                  <feather-icon
                    :icon="resolveUserRoleIcon(data.item.type)"
                    size="18"
                    class="mr-50"
                    :class="`text-${resolveUserRoleVariant(data.item.type)}`"
                  />
                  <span class="align-text-top text-capitalize">{{ data.item.type }}</span>
                </div>
              </template>

              <!-- Column: Status -->
              <template #cell(status)="data">
                <b-badge
                  pill
                  class="text-capitalize"
                >
                  {{ data.item.status }}
                </b-badge>
              </template>

            </b-table>
            
            <div class="mx-2 mb-2">
              <b-row>

                <b-col
                  cols="12"
                  sm="6"
                  class="d-flex align-items-center justify-content-center justify-content-sm-start"
                >
                  <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
                </b-col>
                <!-- Pagination -->
                <b-col
                  cols="12"
                  sm="6"
                  class="d-flex align-items-center justify-content-center justify-content-sm-end"
                >

                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                      first-number
                      last-number
                      class="mb-0 mt-1 mt-sm-0"
                      prev-class="prev-item"
                      next-class="next-item"
                      @change="pageChanged"
                    >
                      <template #prev-text>
                        <feather-icon
                          icon="ChevronLeftIcon"
                          size="18"
                        />
                      </template>
                      <template #next-text>
                        <feather-icon
                          icon="ChevronRightIcon"
                          size="18"
                        />
                      </template>
                    </b-pagination>

                </b-col>

              </b-row>
            </div>
            <!--users table-->
          </b-card>
        </b-tab>
      </b-tabs> 

      <template v-if="loading">
        <div class="text-center loading-spinner" id="loading-spinner">
          <b-spinner variant="primary" label="Text Centered"  style="width: 4rem; height: 4rem;" />
        </div>
      </template>

    </div> 

    
    

  
</template>


<script>
import Ripple from 'vue-ripple-directive'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar, BMedia , BMediaAside, BMediaBody, BCardBody,BTable,BPagination,BSpinner} from 'bootstrap-vue'
import router from '@/router'
import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

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
    BAvatar,
    BMedia,
    BMediaAside,
    BMediaBody,
    BCardBody,
    BTable,
    BPagination,
    BSpinner

  },
   data() {
    return {
      id:router.currentRoute.params.id,
      collapseType: 'shadow',
      description : '',  
      description_ar : '',  
      passing_percentage : null, 
      timer : null,  
      title : '',
      title_ar : '',
      price:null,
      form  : {parent: []},  
      items: [],
      currentPage: 1,
      perPage: 10,
      rows: null,
      fields : [
        { key: 'id'},
        { key: 'avatar',label :'avatar' },
        { key: 'username',label :'username' },
        { key: 'email',label :'email' },
        { key: 'phone', label :'phone'},
        { key: 'result', label :'result'},
      ],
      dataMeta:{
        from : '',
        to: '',
        of: '',
      },
      perPageOptions:[10, 25, 50, 100],
      isBusy:false,  
      loading:true,
      title_seo_en: '',
      title_seo_ar: '',
      description_seo_en:'',
      description_seo_ar: '',
      image_seo:null,
      }
  },
  directives: {
    Ripple,
  },
  mounted() {
    
    //fetch quiz data
    axios
    .get(`quizzes/${this.id}`)
    .then(response => {
      console.log('assemsnt record' , response.data.quizze)
        this.loading = false
        this.title = response.data.quizze.title
        this.title_ar = response.data.quizze.title_ar
        this.passing_percentage = response.data.quizze.passing_percentage
        this.timer = response.data.quizze.timer
        this.price = response.data.quizze.price ? response.data.quizze.price : 'Free'
        this.description = response.data.quizze.description
        this.description_ar = response.data.quizze.description_ar
        // this.description = response.data.quizze.description
        
        
        for( let q=0 ; q< response.data.quizze.questions.length; q++  ){

            this.form.parent.push({
              question : response.data.quizze.questions[q].question,
               question_ar : response.data.quizze.questions[q].question_ar,
              type : response.data.quizze.questions[q].type,
              answers : response.data.quizze.questions[q].answers
            })
        }

        this.title_seo_en = response.data.quizze.title_seo_en
        this.title_seo_ar = response.data.quizze.title_seo_ar
        this.description_seo_en = response.data.quizze.description_seo_en
        this.description_seo_ar = response.data.quizze.description_seo_ar
        this.image_seo = response.data.quizze.image_seo


        console.log( 'personality questions is' , this.form.parent )
      
      })
      .catch(error => {
        this.loading = false
        console.log( 'error fetch quiz', error)
        })
    },

    methods:{
    getRecords(){
        this.loading = true
        this.isBusy = true
        var url = `personality/${this.id}/users?paginate=${this.perPage}&page=${this.currentPage}`
        if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
          url += `&user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
        }
        axios
        .get(url, this.headersObj)
        .then(response => {
          this.loading = false
          console.log('lessons:' , response.data.data )
          let data = response.data.data.data;
          this.rows= response.data.data.total
          this.perPage=response.data.data.per_page
          this.dataMeta.from = response.data.data.from
          this.dataMeta.to = response.data.data.to
          this.dataMeta.of = response.data.data.total
          console.log('drows and per_page: ' , this.rows , ' ' , this.perPage )
          this.items = [];
          for( let i=0 ; i< data.length ; i++ ){
            this.items.push(
              { 
                id:data[i].id ,
                avatar:data[i].user.avatar,
                username : data[i].user.username ,
                email : data[i].user.email ,
                phone : data[i].user.phone ,
                result: Math.round((data[i].percent + Number.EPSILON) * 100) / 100 + '%'

              })
          }
          this.isBusy = false
        } )
        .catch(error => {
                this.loading = false
                this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                          title: `${error.response.data.msg}`,
                          icon: 'CoffeeIcon',
                          variant: 'danger',
                        },
                  })

              })
     
    },
    pageChanged(page) {            
      this.currentPage = page
      this.isBusy = true
      this.getRecords()
    },
    paginateChanged(paginate){
      this.currentPage = 1
      this.isBusy = true
      this.perPage = paginate;
      this.getRecords()
    },
  }
 
}
</script>


<style lang="scss" scoped>
@import '@core/scss/vue/pages/page-faq.scss';
.tabs .nav-item,
.tabs .nav-item .feather{
  font-size: 1.1rem;
}

</style>
