import Vue from 'vue'
import './plugins/vuetify'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
// import App from './App_1.vue'
import App from './App.vue'
import router from './router'
import store from './Store/store'
import axios from 'axios'

Vue.use(VuetifyDialog)

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue();
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  //Vue 인스턴스에 등록
  store,
  router
}).$mount('#app')
