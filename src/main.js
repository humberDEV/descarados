import Vue from 'vue'
import App from './App.vue'
import ConstantsPlugin from './plugins/contants';
import "./assets/styles/main.css";
import vuetify from './plugins/vuetify'

Vue.use(ConstantsPlugin);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
