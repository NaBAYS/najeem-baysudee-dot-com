import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import './styles/main.scss'

import anime from 'animejs/lib/anime.es.js'

window.anime = anime

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
