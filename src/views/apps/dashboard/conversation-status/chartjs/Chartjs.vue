<template>
  <b-row class="match-height">
    
    <b-col cols="6">
      <ConversationStatus />
    </b-col>

    <b-col cols="6">
      <ConversationStatusCount />
    </b-col>

    <b-col cols="6">
      <TotalMessages />
    </b-col>

    <b-col cols="6">
      <MeaasgeVolumeStatus />
    </b-col>

    <b-col cols="4">
      <Rates />
    </b-col>

    <b-col cols="4">
      <TopOperatorsByDunates />
    </b-col>

    <b-col cols="4">
      <TopOperatorsByChats />
    </b-col>

    <b-col cols="12">
      <SentRecievedMessages />
    </b-col>

    <b-col md="6">
      <chartjs-polar-area-chart />
    </b-col>

    <b-col md="6">
      <ChatDuration />
    </b-col>

    

    

    



    

    <!-- <b-col md="6">
      <chartjs-bar-chart />
    </b-col>
    <b-col md="6">
      <chartjs-horizontal-bar-chart />
    </b-col> -->
    
    
    

    <!-- <b-col md="6">
      <chartjs-radar-chart />
    </b-col>

    <b-col cols="12">
      <chartjs-bubble-chart />
    </b-col>
    <b-col lg="4">
      <chartjs-doughnut-chart />
    </b-col>
    <b-col lg="8">
      <chartjs-scatter-chart />
    </b-col>
    <b-col cols="12">
      <chartjs-line-area-chart />
    </b-col> -->
  </b-row>
</template>

<script>
import { BRow, BCol, BLink } from 'bootstrap-vue'


import ConversationStatus from './ConversationStatus.vue'
import ConversationStatusCount from './ConversationStatusCount.vue'
import TotalMessages from './TotalMessages.vue'
import MeaasgeVolumeStatus from './MeaasgeVolumeStatus.vue'
import Rates from './Rates.vue'
import TopOperatorsByDunates from './TopOperatorsByDunates.vue'
import TopOperatorsByChats from './TopOperatorsByChats.vue'
import SentRecievedMessages from './SentRecievedMessages.vue'






import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import ChatDuration from './ChatDuration.vue'


export default {
  components: {
    BRow,
    BCol,
    BLink,
    
    ConversationStatus,
    ConversationStatusCount,
    TotalMessages,
    MeaasgeVolumeStatus,
    Rates,
    TopOperatorsByDunates,
    TopOperatorsByChats,
    SentRecievedMessages,
    ChatDuration,


    ChartjsBarChart,
    ChartjsLineChart,
    ChartjsLineAreaChart,
    ChartjsRadarChart,
    ChartjsPolarAreaChart,
    ChartjsDoughnutChart,
    ChartjsHorizontalBarChart,
    ChartjsScatterChart,
    ChartjsBubbleChart,
  },
}
</script>
