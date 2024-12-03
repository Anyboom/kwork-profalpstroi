import {swiper} from './modules/swiper.js'
import {mobileMenu} from "./modules/mobile-menu.js";
import {twentytwenty} from "./modules/twentytwenty.js";
import {modal} from "./modules/modal.js";

window.addEventListener('DOMContentLoaded', () => {

    swiper();

    twentytwenty();

    mobileMenu();

    modal();
})
