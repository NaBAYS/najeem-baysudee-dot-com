<template>
  <div class="social-links">
    <template v-for="(social, index) in socials">
      <v-btn
        icon
        :x-large="large"
        :large="!large"
        target="_blank"
        :color="color ? social.color : 'black'"
        :href="social.href"
        :key="social.icon"
        :class="{
          'ml-5': spacing && index !==0
        }"
      >
        <v-icon
          :x-large="large"
        >
          {{ social.icon }}
        </v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
import { socials } from '../scripts/data'

export default {
  props: {
    color: {
      type: Boolean,
      default: true
    },
    large: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      socials
    }
  }
}
</script>
