import Vue from 'vue'
import App from './App.vue'

import 'vue-coe-image/dist/vue-coe-image.css'
// import { VueCoeImage } from 'vue-coe-image'

// Vue.use(VueCoeImage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
