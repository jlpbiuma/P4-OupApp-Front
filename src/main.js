import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { WebCam } from 'vue-web-cam'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(pinia)
Vue.use(WebCam)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
