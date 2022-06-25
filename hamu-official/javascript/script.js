'use strict';

document.querySelectorAll('.holyset-iline').forEach(function(items, index) {
    const mintext = items.dataset.m;
    const daytext = items.dataset.d;
    const onetext = items.dataset.one;
    const now = new Date();
    const getdays = now.getFullYear();
    const nowmin = now.getMonth();
    const nowday = now.getDate();
    const newyear = getdays - onetext;
    const newmin = nowmin - mintext;
    const newdays = nowday - daytext; 
    if(newyear === 0 && newmin === 0 && newdays < 4 ) {
        items.classList.add('newmark');
    }
})

document.querySelector('.holyset-iline').classList.add('lecent');

document.querySelectorAll('.types').forEach(function(items, index) {
    items.onclick = function() {
        this.parentElement.nextElementSibling.classList.toggle('hidden');
    }
})