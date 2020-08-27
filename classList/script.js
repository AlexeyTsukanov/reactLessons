"use strict";

const btns = document.querySelectorAll('button'),
    header = document.querySelector('#first');
    

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));

 btns.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('blue');
    });
});

//  if(btns[1].classList.contains('red')){
//     console.log(true);
//  }

header.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == "BUTTON"){
        console.log('hello');
    }
});