import "core-js/es/object/assign";
import Vue from 'vue';
import router from './router'
import App from '../components/App.vue';
import store from './store';


var app = new Vue({
el: '#app',
render: h => h(App),
router,
store
});
