import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const theme = {
  options: {
    customProperties: true
  },
  themes: {
    light: {
      primary: '#EF6461',
      secondary: '#BEE3DB'
    }
  }
}

export default new Vuetify({
  theme
})
