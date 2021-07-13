'use strict';

const header = document.querySelector('.header-area'),
        preloader = document.querySelector('#preloader'),
        burgerBtn = document.querySelector('.menu-trigger'),
        headerNav = document.querySelector('.nav');

window.onload = function(){
    preloader.classList.add('hidden');
}
window.addEventListener('scroll', () => {
    const scrolledScreen = document.documentElement.scrollTop;
    if(scrolledScreen > 50){
        header.classList.add('header-sticky');
    } else{
        header.classList.remove('header-sticky');
    }
});

burgerBtn.addEventListener('click', e => {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    if(burgerBtn.classList.contains('active')){
        headerNav.style.display = 'block';
    } else {
        headerNav.style.display = 'none';
    }
});