'use strict';

const box = document.querySelector('#box'),
    btns = document.querySelectorAll('button'),
    circles = document.querySelectorAll('.circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


    box.style.backgroundColor = "red";
    box.style.width = "500px";

    btns[2].style.borderRadius = "100%";
    circles.forEach(item => item.style.backgroundColor = "black");

    box.style.cssText = 'background-color: blue; width: 700px';

    const div = document.createElement('div');
    //const text = document.createTextNode('I am here');

    div.classList.add('black');

    wrapper.append(div);

    //wrapper.prepend(div);

    //hearts[1].before(div);
    // hearts[1].after(div);

    // circles[1].remove();

    // hearts[0].replaceWith(circles[0]);


    /** old versions */

    //wrapper.appendChild(div);

    // wrapper.insertBefore(div, hearts[1]);

    // wrapper.removeChild(hearts[0]);

    // wrapper.replaceChild(btns[1], hearts[2]);

    /** ----------------- */

    div.innerHTML = '<h1>Hello World!!</h1>';

    //div.textContent = 'hello!';

    div.insertAdjacentHTML('afterend', '<h2>Hello!</h2>');

