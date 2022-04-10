import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router, //各ページで $this.routeで呼び出せる
  render: h => h(App) //templateのレンダリング
}).$mount('#app')
