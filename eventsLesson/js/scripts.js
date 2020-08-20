'use strict';

let counter = 0;

const btn = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper'),
    counterWrapper = document.querySelector('.counter');


// btn.onclick = function(){
//     alert('hi');
// };

const buttonEvent = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', buttonEvent);
// wrapper.addEventListener('click', buttonEvent);


btn.forEach(item => {
    item.addEventListener('click', () => {
        console.log(++counter);
        counterWrapper.innerHTML = `<h1>${counter}</h1>`;
    }, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(e){
    e.preventDefault();

    console.log(e.target);
});

