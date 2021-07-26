// pollyfills for older browsers
// core-js v3.x.x:
import 'core-js/es/number'; 

import 'core-js/features/string/repeat';


import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination} from 'swiper/core';


//scroll logic

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollTopBtn = document.querySelector('.arrow-btn');

scrollTopBtn.addEventListener('click', scrollToTop);

//header logic

const hamburgerBtn = document.querySelector('.hamburger-btn');
const header = document.querySelector('header');

hamburgerBtn.addEventListener('click', () => {
  header.classList.toggle('menu-open');
})

// search logic

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('search-open');
})

// slider 

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

