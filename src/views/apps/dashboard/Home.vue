<template>
  <div>
    <Statistics />  
    <Chartjs />
  </div>
</template>

<script>

import Statistics from './Statistics.vue'
import Chartjs from './conversation-status/chartjs/Chartjs.vue'


export default {
  components: {
    Statistics,
    Chartjs
  },
  data() {
    return {
      
    }
  },
}
</script>