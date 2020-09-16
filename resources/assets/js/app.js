import Vue from 'vue';
import "core-js/es/object/assign";
import { populateAmenitiesAndPrices } from './helpers';
import ImageCarousel from '../components/ImageCarousel.vue';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);
//-------------------------------------------------------------

    //---------------------------------------------
var app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        headerImageStyle: {
        'background-image': `url(${model.images[0]})`
        },
        contracted: true,
        modalOpen: false
        }),
        methods: {
            escapeKeyListener: function(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
            this.modalOpen = false;
            }
            }
            },
            components:{
                ImageCarousel
                }
         ,                
            
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created:  function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    }
            
        
    });

 

        