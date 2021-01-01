<template>
    <v-app-bar app
      flat
      color="transparent"
    >
      <v-container>
        <v-row class="align-center">
          <v-col>
            <logo />
          </v-col>

          <v-col
            class="text-right d-none d-sm-block"
          >
            <social-media />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
import Logo from '../Logo'
import SocialMedia from '../SocialMedia'

export default {
  components: {
    Logo,
    SocialMedia
  }
}
</script>
