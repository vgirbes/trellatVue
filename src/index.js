import Vue from 'vue';
import './index.scss';
import App from './app/containers/App.vue';
import List from './app/containers/List.vue';
import store from './app/store/index';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: App
      }
    },
    {
      path: '/:hash',
      components: {
        default: List
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  store,
  router,
  render: h => h('router-view')
});
