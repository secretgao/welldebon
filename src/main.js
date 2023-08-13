import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/utils/flexible.js";
import wow from 'wowjs'

// import animated from 'animate.css'

import 'wowjs/css/libs/animate.css';
Vue.config.productionTip = false
Vue.prototype.$wow = wow
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
