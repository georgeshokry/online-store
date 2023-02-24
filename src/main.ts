import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyDspMGWGj4faqtSoW3hXXKOX5-d_jQegPk',
  authDomain: 'online-store-306f4.firebaseapp.com',
  databaseURL: 'https://online-store-306f4-default-rtdb.firebaseio.com',
  projectId: 'online-store-306f4',
  storageBucket: 'online-store-306f4.appspot.com',
  messagingSenderId: '75859788077',
  appId: '1:75859788077:web:5de3955f319678caa953a4'
}
initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
