<template>
  <layout-vertical>

    <router-view :key="$route.fullPath"></router-view>

    <div class="d-none">
      <app-customizer
        v-if="showCustomizer"
        slot="customizer"
      />
    </div>

  </layout-vertical>
</template>

<script>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    AppCustomizer,
    LayoutVertical,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
}
</script>
