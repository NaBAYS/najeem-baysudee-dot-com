<style lang="scss" scoped>
  .gradient-bg {
    position: relative;

    > * {
      z-index: 1;
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(120deg, #6C9D9B 0%, var(--v-secondary-base) 100%);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
</style>

<template>
  <v-app>
    <app-bar />

    <v-main class="grey lighten-3">
      <div class="d-flex flex-column" style="height: 100%;">
        <hero />

        <v-sheet class="secondary flex-grow-1 d-flex pb-5 flex-column gradient-bg">
          <image-loader />

          <social-media
            large
            spacing
            class="d-sm-none text-center"
            style="width: 100%;"
            :color="false"
          />
        </v-sheet>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/layout/AppBar'
import Hero from './components/Hero';
import SocialMedia from './components/SocialMedia'
import ImageLoader from './components/ImageLoader'

export default {
  name: 'App',

  components: {
    AppBar,
    Hero,
    ImageLoader,
    SocialMedia
  }
};
</script>
