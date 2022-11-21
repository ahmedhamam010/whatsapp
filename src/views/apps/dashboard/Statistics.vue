<template>
  <b-card
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-title>Statistics</b-card-title>
      <b-card-text class="mr-25 mb-0">
        Last 30 days
      </b-card-text>
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>
        <b-col
          v-for="item in statisticsItems"
          :key="item.icon"
          md="4"
          sm="6"
          class="mb-2 mb-md-2"
          :class="item.customClass"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                :variant="item.color"
              >
                <feather-icon
                  size="24"
                  :icon="item.icon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ item.title }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
                {{ item.subtitle }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
  },
  data() {
    return {
      statisticsItems: [
        {
          icon: 'TrendingUpIcon',
          color: 'light-primary',
          title: '230',
          subtitle: 'Open Coma',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'UserIcon',
          color: 'light-info',
          title: '8',
          subtitle: 'Pending',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'CheckIcon',
          color: 'light-danger',
          title: '10',
          subtitle: 'Solved',
          customClass: 'mb-2 mb-sm-0',
        },
        {
          icon: 'UserCheckIcon',
          color: 'light-success',
          title: '9745',
          subtitle: 'Solved By BA',
          customClass: '',
        },
        {
          icon: 'CheckSquareIcon',
          color: 'light-success',
          title: '9745',
          subtitle: 'Solved By CS',
          customClass: '',
        },
        {
          icon: 'XIcon',
          color: 'light-danger',
          title: '9745',
          subtitle: 'Expired',
          customClass: '',
        },
      ],
    }
  },
}
</script>
