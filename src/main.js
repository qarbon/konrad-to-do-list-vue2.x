import Vue from 'vue';
import App from './App.vue';
import 'vue-select/dist/vue-select.css';
import './style/style.css';
import store from '@/store';
import vSelect from 'vue-select';

Vue.component('VSelect', vSelect);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
