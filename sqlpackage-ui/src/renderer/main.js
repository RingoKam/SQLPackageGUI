import Vue from 'vue'
import axios from 'axios'
import fs from 'fs'
import App from './App'
import path from 'path'
import router from './router'
import store from './store'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(VueFormGenerator)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

let fileContents = fs.readFileSync(path.join(__static, '/config.json'));

Vue.prototype.$FormConfig = JSON.parse(fileContents);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
