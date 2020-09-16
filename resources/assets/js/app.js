import Vue from "vue";
import "core-js/es/object/assign";
import { populateAmenitiesAndPrices } from "./helpers";
import ModalWindow from "../components/ModalWindow.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import HeaderImage from "../components/HeaderImage.vue";

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);
//-------------------------------------------------------------

//---------------------------------------------
var app = new Vue({
    el: "#app",
    data: Object.assign(model, {
        headerImageStyle: {
            "background-image": `url(${model.images[0]})`,
        },
        contracted: true,
    }),
    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage,
    },
    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        },
    },
});