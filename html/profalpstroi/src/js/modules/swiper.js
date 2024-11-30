import Swiper from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'

import 'swiper/scss'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const swiper = () => {
    new Swiper('.types-of-work__swiper', {
        loop: true,

        slidesPerView: 1,
        spaceBetween: 20,

        // Navigation arrows
        navigation: {
            nextEl: '.types-of-work__swiper-next',
            prevEl: '.types-of-work__swiper-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        modules: [Navigation, Pagination],

        breakpoints: {
            540: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    })
}
