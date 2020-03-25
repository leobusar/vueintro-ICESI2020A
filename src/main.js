import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import vuetify from './config/vuetify';
import Home from './views/Home';
import Pets from './views/Pets';
import Favorites from './views/Favorites';

import store from "./config/store"

Vue.config.productionTip = false;
Vue.use(VueRouter);

const  routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets },
  { path: "/favorites", component: Favorites },
]

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
