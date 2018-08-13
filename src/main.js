
import Vue  from '../node_modules/vue/dist/vue.js';
import VueResource  from '../node_modules/vue-resource/dist/vue-resource.js';
import Hello from './components/Hello.vue';
import Albums from './components/albums.vue';
import kinto from '../node_modules/kinto/dist/kinto.js';

new Vue({
  el: '#app',
  template: '<div><Hello></Hello></div>',
  components: { Hello, Albums }
});
