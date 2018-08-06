
import Vue  from '../node_modules/vue/dist/vue.js';
import VueResource  from '../node_modules/vue-resource/dist/vue-resource.js';
import Hello from './components/Hello.vue';
import Albums from './components/albums.vue';

new Vue({
  el: '#app',
  template: '<div><albums></albums></div>',
  components: { Hello, Albums }
});
