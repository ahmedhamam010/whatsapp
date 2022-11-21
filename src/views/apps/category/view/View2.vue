<template>
  <div class="position-relative">
      <b-card title="Category Details">
        <!-- User Info: Input Fields -->
        <b-row>

        <!-- Field: Name -->
          <b-col
            cols="12"
            md="6"
          >
              <b-form-group
                label="Name EN"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="name"
                  disabled
                />
                

              </b-form-group>
           
          </b-col>

          <b-col
            cols="12"
            md="6"
          >
              <b-form-group
                label="Name AR"
                label-for="name_ar"
              >
                <b-form-input
                  id="name_ar"
                  v-model="name_ar"
                  disabled
                />
                

              </b-form-group>
           
          </b-col>
          
          <!-- Field: Slug -->
          <b-col
            cols="12"
            md="6"
          >
              <b-form-group
                label="Slug"
                label-for="slug"
              >
                <b-form-input
                  id="slug"
                  v-model="slug"
                  disabled
                />
                

              </b-form-group>
           
          </b-col>

          <!-- Field: status -->
          <b-col
            cols="12"
            md="6"
          >
              <b-form-group
                label="Status"
                label-for="status"
              >
                <b-form-input
                  id="status"
                  v-model="status"
                  disabled
                />
                

              </b-form-group>
           
          </b-col>
          
        </b-row>
      </b-card>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormTextarea,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import axios from '@axios'
import router from '@/router'



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
  
  },
  data(){
    return{
      id : router.currentRoute.params.id,
     name : '',
     name_ar : '',
     slug : '',
     status : '',
    }
  },
  mounted(){
    axios
          .get(`categories/${this.id}`)
          .then(response => {
            this.name = response.data.category.name
            this.name_ar = response.data.category.name_ar
            this.slug = response.data.category.slug
            this.status = response.data.category.status ? 'Active' : 'Inactive'
            
          })
          .catch(error => {
            console.log(error.response.data.errors)
          })
  }

    
 
}
</script>

