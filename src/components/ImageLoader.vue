<style scoped>
.image-slider {
  overflow: hidden;
  visibility: hidden;
}
</style>

<template>
  <v-container class="py-10 py-sm-0">
    <v-row>
      <v-col
        class="py-0"
        cols="12"
        sm="4"
        offset-sm="8"
      >
        <v-sheet
          ref="image"
          color="grey lighten-2"
          elevation="4"
          class="image-slider"
          rounded="xl"
        >
          <v-carousel
            hide-delimiters
            :cycle="animHasRun"
            :show-arrows="animHasRun"
            :show-arrows-on-hover="animHasRun"
          >
            <v-carousel-item
              src="../assets/family-pic.png"
              v-on:load="animateImage"
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/najeem_and_kira.png"
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/najeem_and_fam_on_beach.jpg"
            ></v-carousel-item>
            <v-carousel-item
              src="../assets/najeem_one.jpg"
            ></v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      animHasRun: false,
      animDelay: true
    }
  },

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xs
    }
  },

  watch: {
    isMobile () {
      this.animHasRun = false
      this.animateImage()
    }
  },

  methods: {
    animateImage () {
      anime({
        targets: '.image-slider',
        translateY: this.isMobile ? 0 : [ '-50%' , '-50%' ],
        rotate: [ '20deg', '0deg' ],
        scale: [ 0, 1 ],
        duration: 2500,
        easing: 'spring(1, 80, 10, 0)',
        delay: this.animDelay ? 2000 : 0,
        begin: () => {
          this.$refs.image.$el.style.visibility = 'visible'
        },
        complete: () => {
          if (!this.animHasRun) {
            this.animHasRun = true
            this.animDelay = false
          }
        }
      })
    }
  }
}
</script>
