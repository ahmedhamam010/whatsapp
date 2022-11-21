<template>
  <b-row>
    <b-col md="12">
      <b-card>
        <h3 class="pt-2">{{catTitle}}</h3>  
        <b-tabs>

            <!--details tab-->
            <b-tab active>
                <template #title>
                <feather-icon icon="FileTextIcon" />
                <span>Category Details</span>
                </template>
                <br>

                <b-list-group class="mt-2">
                    <b-list-group-item>
                        <b-row>
                            <b-col
                            cols="6"
                            md="6"
                            >
                            Title EN
                            </b-col>  

                            <b-col
                            cols="6"
                            md="6"
                            >
                            {{catTitle}}
                            </b-col>

                        </b-row>
                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                            <b-col
                            cols="6"
                            md="6"
                            >
                            Title AR
                            </b-col>  

                            <b-col
                            cols="6"
                            md="6"
                            >
                            {{title_ar}}
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
                            ID
                            </b-col>  

                            <b-col
                            cols="6"
                            md="6"
                            >
                            {{code}}
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
                            >
                            {{type}}
                            </b-col>

                        </b-row>
                    </b-list-group-item>

                    <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Description EN
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{description}}
                    </b-col>

                  </b-row>
               </b-list-group-item>

               <b-list-group-item>
                  <b-row>
                    <b-col
                      cols="6"
                      md="6"
                    >
                      Description AR
                    </b-col>  

                    <b-col
                      cols="6"
                      md="6"
                    >
                    {{description_ar}}
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
                </b-list-group>
            </b-tab>
            <!--/details tab-->

            <!--strength score tab-->
            <b-tab>
                <template #title>
                <feather-icon icon="CheckIcon" />
                <span>Sten Scores</span>
                </template>
                <br>

                <!--form-->
                <validation-observer ref="simpleRules1">  
                <b-form
                    ref="form"
                    class="repeater-form"
                    @submit.prevent="submitStrengthScoreForm()"
                    
                >
                    <b-row>
                        
                        <!--gender field-->
                        <b-col md="3">
                            <b-form-group
                                label="Gender"
                                label-for="Gender"
                                
                                >
                                <v-select
                                    v-model="strenScoreObj.gender"
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :options="genderOptions"
                                    :reduce="val => val.value"
                                    :clearable="false"
                                    input-id="Gender"
                                />
                                
                            </b-form-group>
                        </b-col>

                        <!-- gains from -->
                        <b-col md="3">
                            <b-form-group
                            label="User Gains From"
                            label-for="from_score"
                          
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="from_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="from_score"
                                type="text"
                                placeholder=""
                                v-model="strenScoreObj.from_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- gains to -->
                        <b-col md="3">
                            <b-form-group
                            label="User Gains To"
                            label-for="to_score"
                           
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="to_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="to_score"
                                type="text"
                                placeholder=""
                                v-model="strenScoreObj.to_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- stength score -->
                        <b-col md="3">
                            <b-form-group
                            label="Stength Score"
                            label-for="sten_score"
                           
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="sten_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="sten_score"
                                type="text"
                                placeholder=""
                                v-model="strenScoreObj.sten_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col> 
                        
                    </b-row>

                

                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    type="submit"
                    class="mb-3"
                    >
                    
                    <span>Submit</span>
                    </b-button>
                </b-form>
                </validation-observer>
                <!--form-->

                <h3>Sten Scores List</h3>

                <b-list-group-item
                v-for="s in strenScoreObj.relatedStenScores"
                :key="s.id"
                tag="li"
                >
                    <div class="d-flex justify-content-between align-items-center">
                        <b-row class="w-100">
                            <b-col md="3">Gender: {{ s.gender }}</b-col>
                            <b-col md="3">Gains From: {{ s.from_score }}</b-col>
                            <b-col md="3">Gains To: {{ s.to_score }}</b-col>
                            <b-col md="3">Sten Score: {{ s.sten_score }}</b-col>
                        </b-row>

                        <div>
                            <b-dropdown
                            variant="link"
                            no-caret
                            :right="$store.state.appConfig.isRTL"
                            >

                                <template #button-content>
                                    <feather-icon
                                    icon="MoreVerticalIcon"
                                    size="16"
                                    class="align-middle text-body"
                                    />
                                </template>
                                
                                <b-dropdown-item @click="updateStrengthScore(s.id)">
                                    <feather-icon icon="EditIcon" />
                                    <span class="align-middle ml-50">Edit</span>
                                </b-dropdown-item>

                                <b-dropdown-item @click="confirmDeleteStrenMsg(s.id,'personalityStenScores')">
                                    <feather-icon icon="TrashIcon" />
                                    <span class="align-middle ml-50">Delete</span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                </b-list-group-item>

            </b-tab>
            <!--/strength score tab-->

            <!--score result tab-->
            <b-tab @click.once="getStenScoresResults">
                <template #title>
                <feather-icon icon="UserCheckIcon" />
                <span>Interpreting Results</span>
                </template>
                <br>

                <!--form-->
                <validation-observer ref="simpleRules2">  
                <b-form
                    ref="form"
                    class="repeater-form"
                    @submit.prevent="submitScoreResultForm()"
                    
                >
                    <b-row>

                        <!-- gains from -->
                        <b-col md="6">
                            <b-form-group
                            label="From"
                            label-for="from_stens_score"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="from_stens_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="from_stens_score"
                                type="text"
                                placeholder=""
                                v-model="scoreResultObj.from_stens_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- gains to -->
                        <b-col md="6">
                            <b-form-group
                            label="To"
                            label-for="to_stens_score"
                           
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="to_stens_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="to_stens_score"
                                type="text"
                                placeholder=""
                                v-model="scoreResultObj.to_stens_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Result  En-->
                        <b-col md="6">
                            <b-form-group
                            label="Result En"
                            label-for="result"
                           
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="result"
                            rules="required"
                            mode="passive"
                            
                            >
                            <b-form-textarea
                                id="result"
                                type="text"
                                placeholder=""
                                v-model="scoreResultObj.result"
                                :state="errors.length > 0 ? false:null"
                                rows="5"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                         <!-- Result Ar -->
                        <b-col md="6">
                            <b-form-group
                            label="Result Ar"
                            label-for="result_ar"
                           
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="result_ar"
                            mode="passive"
                            
                            >
                            <b-form-textarea
                                id="result_ar"
                                type="text"
                                placeholder=""
                                v-model="scoreResultObj.result_ar"
                                :state="errors.length > 0 ? false:null"
                                rows="5"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>  
                        
                    </b-row>

                  

                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    type="submit"
                    class="mb-3"
                    >
                    
                    <span>Submit</span>
                    </b-button>
                </b-form>
                </validation-observer>
                <!--form-->

                <h3>Scores Results List</h3>

                <b-list-group-item
                v-for="s in scoreResultObj.relatedScoreResults"
                :key="s.id"
                tag="li"
                >
                    <div class="d-flex justify-content-between align-items-center">
                        <b-row class="w-100">
                            <b-col md="2">From: {{ s.from_stens_score }}</b-col>
                            <b-col md="2">To: {{ s.to_stens_score }}</b-col>
                            <b-col md="4">Result En: {{ s.result }}</b-col>
                            <b-col md="4">Result Ar: {{ s.result_ar }}</b-col>
                        </b-row>

                        <div>
                            <b-dropdown
                            variant="link"
                            no-caret
                            :right="$store.state.appConfig.isRTL"
                            >

                                <template #button-content>
                                    <feather-icon
                                    icon="MoreVerticalIcon"
                                    size="16"
                                    class="align-middle text-body"
                                    />
                                </template>
                                
                                <b-dropdown-item @click="updateScoreResult(s.id)">
                                    <feather-icon icon="EditIcon" />
                                    <span class="align-middle ml-50">Edit</span>
                                </b-dropdown-item>

                                <b-dropdown-item @click="confirmDeleteStrenMsg(s.id,'personalityStenScoreResults')">
                                    <feather-icon icon="TrashIcon" />
                                    <span class="align-middle ml-50">Delete</span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                </b-list-group-item>

            </b-tab>
            <!--/score result tab-->

            <!--advice tab-->
            <b-tab @click.once="getAdvices">
                <template #title>
                <feather-icon icon="ThumbsUpIcon" />
                <span>Advices</span>
                </template>
                <br>

                <!--form-->
                <validation-observer ref="simpleRules3">  
                <b-form
                    ref="form"
                    class="repeater-form"
                    @submit.prevent="submitAdviceForm()"
                    
                >
                    <b-row>

                        <!-- gains from -->
                        <b-col md="6">
                            <b-form-group
                            label="From"
                            label-for="from_stens_score"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="from_stens_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="from_stens_score"
                                type="text"
                                placeholder=""
                                v-model="adviceObj.from_stens_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- gains to -->
                        <b-col md="6">
                            <b-form-group
                            label="To"
                            label-for="to_stens_score"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="to_stens_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="to_stens_score"
                                type="text"
                                placeholder=""
                                v-model="adviceObj.to_stens_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Advice En-->
                        <b-col md="6">
                            <b-form-group
                            label="Advice En"
                            label-for="advice"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="advice"
                            rules="required"
                            mode="passive"
                            rows="5"
                            
                            >
                            <b-form-textarea
                                id="advice"
                                type="text"
                                placeholder=""
                                v-model="adviceObj.advice"
                                :state="errors.length > 0 ? false:null"
                                rows="5"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col> 

                        <!-- Advice Ar-->
                        <b-col md="6">
                            <b-form-group
                            label="Advice Ar"
                            label-for="advice_ar"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="advice_ar"
                            rules="required"
                            mode="passive"
                            
                            >
                            <b-form-textarea
                                id="advice_ar"
                                type="text"
                                placeholder=""
                                v-model="adviceObj.advice_ar"
                                :state="errors.length > 0 ? false:null"
                                rows="5"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>
                        
                    </b-row>

                  

                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    type="submit"
                    class="mb-3"
                    >
                    
                    <span>Submit</span>
                    </b-button>
                </b-form>
                </validation-observer>
                <!--form-->

                <h3>Advices List</h3>

                <b-list-group-item
                v-for="s in adviceObj.relatedAdviceResults"
                :key="s.id"
                tag="li"
                >
                    <div class="d-flex justify-content-between align-items-center">
                        <b-row class="w-100">
                            <b-col md="2">From: {{ s.from_stens_score }}</b-col>
                            <b-col md="2">To: {{ s.to_stens_score }}</b-col>
                            <b-col md="4">Advice En: {{ s.advice }}</b-col>
                            <b-col md="4">Advice Ar: {{ s.advice_ar }}</b-col>
                        </b-row>

                        <div>
                            <b-dropdown
                            variant="link"
                            no-caret
                            :right="$store.state.appConfig.isRTL"
                            >

                                <template #button-content>
                                    <feather-icon
                                    icon="MoreVerticalIcon"
                                    size="16"
                                    class="align-middle text-body"
                                    />
                                </template>
                                
                                <b-dropdown-item @click="updateAdviceResult(s.id)">
                                    <feather-icon icon="EditIcon" />
                                    <span class="align-middle ml-50">Edit</span>
                                </b-dropdown-item>

                                <b-dropdown-item @click="confirmDeleteStrenMsg(s.id,'personalityAdvices')">
                                    <feather-icon icon="TrashIcon" />
                                    <span class="align-middle ml-50">Delete</span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                </b-list-group-item>

            </b-tab>
            <!--/advice tab-->

            <!--skills tab-->
            <b-tab @click.once="getSkills">
                <template #title>
                <feather-icon icon="TrendingUpIcon" />
                <span>Educational Skills</span>
                </template>
                <br>

                <!--form-->
                <validation-observer ref="simpleRules4">  
                <b-form
                    ref="form"
                    class="repeater-form"
                    @submit.prevent="submitSkillForm()"
                    
                >
                    <b-row>

                        <!-- gains from -->
                        <b-col md="3">
                            <b-form-group
                            label="From"
                            label-for="from_stens_score"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="from_stens_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="from_stens_score"
                                type="text"
                                placeholder=""
                                v-model="skillObj.from_stens_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- gains to -->
                        <b-col md="3">
                            <b-form-group
                            label="To"
                            label-for="to_stens_score"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="to_stens_score"
                            rules="required|integer"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="to_stens_score"
                                type="text"
                                placeholder=""
                                v-model="skillObj.to_stens_score"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Skill -->
                        <b-col md="6">
                            <b-form-group
                            label="Skill Code"
                            label-for="skill_code"
                          
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="skill_code"
                            rules="required"
                            mode="passive"
                            
                            >
                            <b-form-input
                                id="skill_code"
                                type="text"
                                placeholder=""
                                v-model="skillObj.skill_code"
                                :state="errors.length > 0 ? false:null"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Skill -->
                        <b-col md="6">
                            <b-form-group
                            label="Skill En"
                            label-for="skill"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="skill"
                            rules="required"
                            mode="passive"
                            
                            >
                            <b-form-textarea
                                id="skill"
                                type="text"
                                placeholder=""
                                v-model="skillObj.skill"
                                :state="errors.length > 0 ? false:null"
                                rows="5"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col> 

                        <!-- Skill Ar-->
                        <b-col md="6">
                            <b-form-group
                            label="Skill Ar"
                            label-for="skill_ar"
                            
                            >
                            <validation-provider
                            #default="{ errors }"
                            name="skill_ar"
                            rules="required"
                            mode="passive"
                            
                            >
                            <b-form-textarea
                                id="skill_ar"
                                type="text"
                                placeholder=""
                                v-model="skillObj.skill_ar"
                                :state="errors.length > 0 ? false:null"
                                rows="5"
                                
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>
                        </b-col>

                        

                        
                        
                    </b-row>

                  

                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    type="submit"
                    class="mb-3"
                    >
                    
                    <span>Submit</span>
                    </b-button>
                </b-form>
                </validation-observer>
                <!--form-->

                <h3>Skills List</h3>

                <b-list-group-item
                v-for="s in skillObj.relatedSkills"
                :key="s.id"
                tag="li"
                >
                    <div class="d-flex justify-content-between align-items-center">
                        <b-row class="w-100">
                            <b-col md="2">From: {{ s.from_stens_score }}</b-col>
                            <b-col md="2">To: {{ s.to_stens_score }}</b-col>
                            <b-col md="3">Skill En: {{ s.skill }}</b-col>
                            <b-col md="3">Skill Ar: {{ s.skill_ar }}</b-col>
                            <b-col md="2">Code: {{ s.skill_code }}</b-col>
                        </b-row>

                        <div>
                            <b-dropdown
                            variant="link"
                            no-caret
                            :right="$store.state.appConfig.isRTL"
                            >

                                <template #button-content>
                                    <feather-icon
                                    icon="MoreVerticalIcon"
                                    size="16"
                                    class="align-middle text-body"
                                    />
                                </template>

                                
                                <b-dropdown-item @click="updateSkill(s.id)">
                                    <feather-icon icon="EditIcon" />
                                    <span class="align-middle ml-50">Edit</span>
                                </b-dropdown-item>

                                <b-dropdown-item  @click="confirmDeleteStrenMsg(s.id,'personalityEducationSkills')">
                                    <feather-icon icon="TrashIcon" />
                                    <span class="align-middle ml-50">Delete</span>
                                </b-dropdown-item>

                                <b-button
                                    id="toggle-btn"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    v-b-modal.modal-prevent-closing
                                    @click="addNote(s.id)"
                                    variant="flat-secondary"
                                    >
                                    <feather-icon icon="PlusSquareIcon" /> <span>Add notes</span>
                                </b-button>
                            </b-dropdown>
                        </div>
                    </div>

                    <div class="related-notes ml-md-5 mr-md-5">
                        <app-collapse accordion type="shadow">
                            <app-collapse-item title="Notice List">
                                <b-list-group>
                                    <b-list-group-item v-for="n in s.notices" :key="n.id">
                                    <div class="row d-flex align-items-center">
                                        <div class="col-md-5">Notice En: {{n.notice}}</div>
                                        <div class="col-md-5">Notice Ar: {{n.notice_ar}}</div>
                                        <div class="col-md-2">
                                            <b-button
                                                v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                                                variant="flat-danger"
                                                class="btn-icon"
                                                @click="confirmDeleteStrenMsg(n.id,'personalitySkillNotices')"
                                                >
                                                <feather-icon icon="TrashIcon" />
                                            </b-button>
                                        </div>
                                    </div>
                                    </b-list-group-item>
                                        
                                </b-list-group>
                            </app-collapse-item>
                        </app-collapse>    
                    </div>
                </b-list-group-item>

            </b-tab>
            <!--/skills tab-->
        
        </b-tabs>
      </b-card>
    </b-col>

    <!--add note modal-->
    <b-modal
      id="modal-prevent-closing"
      ref="my-modal"
      title="Add Notes"
      ok-title="Submit"
      cancel-variant="outline-secondary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          :state="noteState"
          label="Notes"
          label-for="note-input"
          invalid-feedback="notes is required"
          class="w-100"
        >
          <b-form-input
            id="note-input"
            v-model="note"
            :state="noteState"
            required
          />
        </b-form-group>

        <b-form-group
          :state="noteState"
          label="Notes Ar"
          label-for="note-input-ar"
          class="w-100"
        >
          <b-form-input
            id="note-input-ar"
            v-model="note_ar"
            :state="noteState"
          />
        </b-form-group>
      </form>
    </b-modal>

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
import {  BFormRadioGroup, BFormRadio, BFormGroup ,  BTabs, BTab, BCardText , BRow, BCol, BCard, BCardTitle, BButton, BListGroup, BListGroupItem ,BDropdown, BDropdownItem, BAvatar,BSpinner,BTable,BPagination,BMedia,BForm, BFormInput,BModal, VBModal,BFormTextarea} from 'bootstrap-vue'
import axios from '@axios'
import router from '@/router'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import draggable from 'vuedraggable'
import { ValidationProvider, ValidationObserver,setInteractionMode  } from 'vee-validate'
import { required } from '@validations'
import vSelect from 'vue-select'

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
    BForm, BFormInput,
    ValidationProvider,
    ValidationObserver,
    vSelect,
    BModal,
    BFormTextarea
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data () {
    return{
        showModel : false,
    //start strength score data
    strenScoreObj:{
        gender: 'male',
        from_score: null,
        to_score: null,
        sten_score: null, 
        relatedStenScores: [],
        strenScoreId:null,
        personality_category_id: router.currentRoute.params.id
    },
    //end strength score data

    //start strength score results
    scoreResultObj:{
        from_stens_score: null,
        to_stens_score: null,
        result: '',
        result_ar: '',
        relatedScoreResults: [],
        scoreResultId:null,
        personality_category_id: router.currentRoute.params.id
    },
    //end strength score results

    //start advice
    adviceObj:{
        from_stens_score: null,
        to_stens_score: null,
        advice: '',
        advice_ar: '',
        relatedAdviceResults: [],
        adviceId:null,
        personality_category_id: router.currentRoute.params.id
    },
    //end advice

    //start skill
    skillObj:{
        from_stens_score: null,
        to_stens_score: null,
        skill: '',
        skill_ar: '',
        skill_code:'',
        relatedSkills: [],
        skillId:null,
        personality_category_id: router.currentRoute.params.id,
        selecteSkillToAddEditNote:null
    },
    //end skill
    
    formStatus : 'add',    
    id: router.currentRoute.params.id,
    isLoading:true,
    genderOptions : [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ],
    headersObj  : { 
        headers: 
        { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Methods': 'POST,post',
        }  
     },
    note: '',
    note_ar: '',
    noteState: null,
    personality_education_skill_id : null,
    catTitle: '',
    title_ar : '',
    status:'',
    code:'',
    type:'',
    description:'',
    description_ar:'',
    title_seo_en:'',
    title_seo_ar:'',
    description_seo_en:'',
    description_seo_ar:'',
    image_seo:'',
    }
    
  },
  mounted() {
      this.fetchCategory();
      this.getPersonalityStenScores()
  },
  methods :{
    fetchCategory: function(){
        //fetchCategory data
        var url = `personalityCategories/${this.id}`
        
        axios
        .get(url)
        .then(response => {
            console.log( 'fetchCategory record ' , response.data.data.title )
            this.catTitle = response.data.data.title;
            this.title_ar = response.data.data.title_ar
            this.code = response.data.data.code
            this.type = response.data.data.type
            this.description = response.data.data.description
            this.description_ar = response.data.data.description_ar
            this.status = response.data.data.status ? 'Active' : 'Inactive'
            this.title_seo_en = response.data.data.title_seo_en
            this.title_seo_ar = response.data.data.title_seo_ar
            this.description_seo_en = response.data.data.description_seo_en
            this.description_seo_ar = response.data.data.description_seo_ar
            this.image_seo = response.data.data.image_seo
            // let category = response.data.data 
            // this.title = category.title
            // this.code = category.code
            // this.status = category.status
            // this.type = category.type
            // this.parent_id = category.parent_id
            // this.description = category.description
           

        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    }, 
    getPersonalityStenScores(){
        this.isLoading = true
        var url = `personalityStenScores?personality_category_id=${router.currentRoute.params.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            console.log('fetch relatedStenScores : ' , response.data.data)
            this.strenScoreObj.relatedStenScores = response.data.data
            
        })
        .catch(error => {
            this.isLoading = false
            console.log( 'error fetch test Questions', error)
        })
    },
    getStenScoresResults(){
        this.isLoading = true
        var url = `personalityStenScoreResults?personality_category_id=${router.currentRoute.params.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            console.log('fetch personalityStenScoreResults : ' , response.data.data)
            this.scoreResultObj.relatedScoreResults = response.data.data
            
        })
        .catch(error => {
            this.isLoading = false
            console.log( 'error fetch test Questions', error)
        })
    },
    getAdvices(){
        this.isLoading = true
        var url = `personalityAdvices?personality_category_id=${router.currentRoute.params.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            console.log('fetch personalityAdvices : ' , response.data.data)
            this.adviceObj.relatedAdviceResults = response.data.data
            
        })
        .catch(error => {
            this.isLoading = false
            console.log( 'error fetch test Questions', error)
        })
    },
    getSkills(){
        this.isLoading = true
        var url = `personalityEducationSkills?personality_category_id=${router.currentRoute.params.id}`
        axios
        .get(url)
        .then(response => {
            this.isLoading = false
            console.log('fetch personalityEducationSkills : ' , response.data.data)
            this.skillObj.relatedSkills = response.data.data
            
        })
        .catch(error => {
            this.isLoading = false
            console.log( 'error fetch relatedSkills', error)
        })
    },
    deleteItem(id=0,route){
            
      axios.delete(`${route}/${id}`, 
        {
          headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,},
        })
        .then(response => {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `Deleted Successfully`,
            icon: 'CoffeeIcon',
            variant: 'success',
            text: '',
          },
        })  
        
        if( route == 'personalityStenScores' ){this.getPersonalityStenScores()}
        else if( route == 'personalityStenScoreResults' ){this.getStenScoresResults()}
        else if( route == 'personalityAdvices' ){this.getAdvices()}
        else if( route == 'personalityEducationSkills' || route == 'personalitySkillNotices' ){this.getSkills()}
        console.log( 'succes delete axios response:' , response )
        
        })
        .catch(error => {
        console.log( 'error delete axios error:' , error )
        });
    },

    confirmDeleteStrenMsg(id,route) {
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
        if( this.deleteConfirmed ){ this.deleteItem(id,route) }
      })
    },
    
    submitStrengthScoreForm: function () {
        
         this.$refs.simpleRules1.validate().then(success => {
        if (success) {
            this.isLoading = true

            if( this.formStatus == 'add' ){
            axios
                .post(`personalityStenScores`, this.strenScoreObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.strenScoreObj={
                        gender: 'male',
                        from_score: null,
                        to_score: null,
                        sten_score: null, 
                        relatedStenScores: [],
                        strenScoreId:null,
                        personality_category_id: router.currentRoute.params.id
                    },
                    this.getPersonalityStenScores();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add question');
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

            }else{
                axios
                .put(`personalityStenScores/${this.strenScoreObj.strenScoreId}`, this.strenScoreObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.strenScoreObj={
                        gender: 'male',
                        from_score: null,
                        to_score: null,
                        sten_score: null, 
                        relatedStenScores: [],
                        strenScoreId:null,
                        personality_category_id: router.currentRoute.params.id
                    },
                    this.formStatus = 'add'
                    this.getPersonalityStenScores();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add question');
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

            }
        }
      })
        
        
    },
    submitScoreResultForm: function () {
        
         this.$refs.simpleRules2.validate().then(success => {
             this.isLoading = true
        if (success) {
            this.scoreResultObj.result_en = this.scoreResultObj.result 
            if( this.formStatus == 'add' ){
            axios
                .post(`personalityStenScoreResults`, this.scoreResultObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.scoreResultObj= {
                        from_stens_score: null,
                        to_stens_score: null,
                        result: '',
                        result_ar: '',
                        relatedScoreResults: [],
                        scoreResultId:null,
                        personality_category_id: router.currentRoute.params.id
                    },
                    this.getStenScoresResults();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add data');
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

            }else{
                console.log('hi this.scoreResultObj' , this.scoreResultObj)
                axios
                .put(`personalityStenScoreResults/${this.scoreResultObj.scoreResultId}`, this.scoreResultObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.scoreResultObj= {
                        from_stens_score: null,
                        to_stens_score: null,
                        result: '',
                        result_ar: '',
                        relatedScoreResults: [],
                        scoreResultId:null,
                        personality_category_id: router.currentRoute.params.id
                    },
                    this.formStatus = 'add'
                    this.getStenScoresResults();
                    console.log('sucess updated question' , response);
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
                    this.isLoading = false
                console.log('error add question');
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

            }
        }
      })
        
        
    },
    submitAdviceForm: function () {
        
         this.$refs.simpleRules3.validate().then(success => {
        if (success) {
            this.isLoading = true
            this.adviceObj.advice_en = this.adviceObj.advice 
            if( this.formStatus == 'add' ){ 
            axios
                .post(`personalityAdvices`, this.adviceObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.adviceObj={
                        from_stens_score: null,
                        to_stens_score: null,
                        advice: '',
                        advice_ar: '',
                        relatedAdviceResults: [],
                        adviceId:null,
                        personality_category_id: router.currentRoute.params.id
                    },
                    this.getAdvices();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add data');
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

            }else{
                axios
                .put(`personalityAdvices/${this.adviceObj.adviceId}`, this.adviceObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.adviceObj={
                        from_stens_score: null,
                        to_stens_score: null,
                        advice: '',
                        advice_ar: '',
                        relatedAdviceResults: [],
                        adviceId:null,
                        personality_category_id: router.currentRoute.params.id
                    },
                    this.formStatus = 'add'
                    this.getAdvices();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add question');
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

            }
        }
      })
        
        
    },
    submitSkillForm: function () {
        
         this.$refs.simpleRules4.validate().then(success => {
        if (success) {
            this.isLoading = true

            console.log(this.skillObj)
            this.skillObj.skill_en = this.skillObj.skill 
            if( this.formStatus == 'add' ){
                console.log('this.skillObj',this.skillObj)
            axios
                .post(`personalityEducationSkills`, this.skillObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.getSkills();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add data');
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

            }else{
                axios
                .put(`personalityEducationSkills/${this.skillObj.skillId}`, this.skillObj, this.headersObj)
                .then(response => {
                    this.isLoading = false
                    this.formStatus = 'add'
                    this.getSkills();
                    console.log('sucess add question');
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
                    this.isLoading = false
                console.log('error add Skill');
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

            }
        }
      })
        
        
    },
    updateStrengthScore(id){
        this.isLoading = true
        this.strenScoreObj.strenScoreId = id
        //fetch record
        var url = `personalityStenScores/${id}`
        axios
        .get(url)
        .then(response => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.isLoading = false
            this.formStatus = 'edit'
            console.log('fetch strnegth scroe record : ' , response.data.data)
            let data = response.data.data
            this.strenScoreObj.gender = data.gender
            this.strenScoreObj.from_score = data.from_score
            this.strenScoreObj.to_score = data.to_score
            this.strenScoreObj.sten_score = data.sten_score   
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    updateScoreResult(id){
        this.isLoading = true
        this.scoreResultObj.scoreResultId = id
        //fetch record
        var url = `personalityStenScoreResults/${id}`
        axios
        .get(url)
        .then(response => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.isLoading = false
            this.formStatus = 'edit'
            console.log('fetch  scroe result record : ' , response.data.data)
            let data = response.data.data
            this.scoreResultObj.result = data.result
            this.scoreResultObj.result_ar = data.result_ar
            this.scoreResultObj.from_stens_score = data.from_stens_score
            this.scoreResultObj.to_stens_score = data.to_stens_score
            console.log('interpting obj' , this.scoreResultObj)  
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    updateAdviceResult(id){
        this.isLoading = true
        this.adviceObj.adviceId = id
        //fetch record
        var url = `personalityAdvices/${id}`
        axios
        .get(url)
        .then(response => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.isLoading = false
            this.formStatus = 'edit'
            console.log('fetch Advice record : ' , response.data.data)
            let data = response.data.data
            this.adviceObj.advice = data.advice
            this.adviceObj.advice_ar = data.advice_ar
            this.adviceObj.from_stens_score = data.from_stens_score
            this.adviceObj.to_stens_score = data.to_stens_score  
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    updateSkill(id){
        this.isLoading = true
        this.skillObj.skillId = id
        //fetch record
        var url = `personalityEducationSkills/${id}`
        axios
        .get(url)
        .then(response => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.isLoading = false
            this.formStatus = 'edit'
            console.log('fetch skill record : ' , response.data.data)
            let data = response.data.data
            this.skillObj.skill = data.skill
            this.skillObj.skill_ar = data.skill_ar
            this.skillObj.skill_code = data.skill_code
            this.skillObj.from_stens_score = data.from_stens_score
            this.skillObj.to_stens_score = data.to_stens_score  
        })
        .catch(error => {
            console.log( 'error fetch course', error)
        })
    },
    addNote(skillId){
        this.skillObj.selecteSkillToAddEditNote = skillId
        this.showModel =true
        this.personality_education_skill_id =skillId
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.noteState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.noteState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      let noteObj = {
          personality_education_skill_id: this.personality_education_skill_id,
          notice: this.note,
          notice_en: this.note,
          notice_ar: this.note_ar
      }
      axios
            .post(`personalitySkillNotices`, noteObj, this.headersObj)
            .then(response => {
                console.log('note succuss' , response)

                this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Added Successfully`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                      },
                })
                this.getSkills();
            } )
             .catch(error => {
            console.log('note error' , error)

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
      
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
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
.loading-spinner{
   position: fixed;
   top: 50%; 
   left: 50%;
   transform: translateX(-50%);
}
.list-group-item {
  transition: all 1s
}
#toggle-btn{padding: 0.65rem 1.28rem;}
</style>