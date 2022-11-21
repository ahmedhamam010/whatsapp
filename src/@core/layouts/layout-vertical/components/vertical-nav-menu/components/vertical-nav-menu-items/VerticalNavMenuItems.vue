<template>
  <ul>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
      v-if="userType == 'admin' && userPermissions.indexOf(item.moduleName) !== -1 && (item.isAdmin =='yes' || item.isAdmin == undefined) "
    />

    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
      v-if="userType != 'admin' && userPermissions.indexOf(item.moduleName) !== -1 && (item.isAdmin =='no' || item.isAdmin == undefined) "
    />
    
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import axios from '@axios'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  data(){
    return {
     userPermissions :[],
     userType:'',
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
  mounted(){
    this.userType =  JSON.parse(localStorage.getItem('userData')).type;
    
    //get user permisions
    axios
    .get(`user/permission`)
    .then(response => {
      this.userPermissions.push('analysis-module')
      // this.userPermissions.push('payment-module')
      if( this.userType == 'admin' ){
        this.userPermissions.push('static-admin-module')
      }else{
        this.userPermissions.push('static-consultant-module')
      }
      console.log( 'user permisions from side component' , response.data )
      let userPermissions = response.data.data
      console.log( 'get userPermissions' , this.userPermissions )
      for( let i=0 ; i < userPermissions.length ; i++  ){
        this.userPermissions.push(userPermissions[i].name)
      }

    })
    .catch(error => {
      console.log('user permisions' , error)
    })

  }
}
</script>
