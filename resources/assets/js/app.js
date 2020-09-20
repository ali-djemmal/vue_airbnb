import "core-js/es/object/assign";

import Vue from 'vue';
import router from './router'

import ListingPage from '../components/ListingPage.vue';
var app = new Vue({
el: '#app',
render: h => h(ListingPage),
router
});
