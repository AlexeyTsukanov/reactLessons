/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  /**
   * 
   * ----------- Tabs ------------------------
   */
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTubContent() {
    tabsContent.forEach(item => {
      item.classList.remove('show');
      item.classList.add('hide');
    });
    tabs.forEach(tab => {
      tab.classList.remove('tabheader__item_active');
    });
  }

  function showTubContent(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTubContent();
  showTubContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTubContent();
          showTubContent(i);
        }
      });
    }
  });
  /** --------------modal----------- */

  const modal = document.querySelector('.modal'),
        modalOpen = document.querySelectorAll('[data-modal]');

  function closeModalWindow() {
    modal.style.display = 'none';
    document.body.style.overflow = "";
  }

  function openModalWindow() {
    modal.style.display = 'block';
    document.body.style.overflow = "hidden";
    clearTimeout(timerID);
  }

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWindow();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  modalOpen.forEach(btn => {
    btn.addEventListener('click', openModalWindow);
  });


  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModalWindow();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModalWindow();
    }
  }); 
  
  const timerID = setTimeout( openModalWindow , 50000);

  window.addEventListener('scroll', showModalByScroll);
  /** --------timer ---------- */

  const deadline = '2020-09-07';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function addZero(num) {
    if (num < 10 && num >= 0) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(upDateClock, 1000);
    upDateClock();

    function upDateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);
  /**
   * 
   * --------------cards------------------
   */

  class MenuCards {
    constructor(menuName, description, price, imagSrc, imagDescr, parrentSelector, ...classes) {
      this.menuName = menuName;
      this.description = description;
      this.price = price;
      this.imagSrc = imagSrc;
      this.imagDescr = imagDescr;
      this.parrentSelector = document.querySelector(parrentSelector);
      this.classes = classes;
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
                        <img src="${this.imagSrc}" alt="${this.imagDescr}">
                        <h3 class="menu__item-subtitle">${this.menuName}</h3>
                        <div class="menu__item-descr">${this.description}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>`;
      this.parrentSelector.append(element);
    }

  }

  const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
      throw new Error(`Couldn't fetch url ${url}, status: ${res.status}`);
    }

   return await res.json();
 }

//  getResource('http://localhost:3000/menu')
//  .then(data => {
//    data.forEach(({title, descr, price, altimg, img}) => {
//     new MenuCards(title, descr, price, img, altimg, '.menu .container', 'menu__item').render();
//    });
//  });

axios.get('http://localhost:3000/menu')
.then(item => {
     item.data.forEach(({title, descr, price, altimg, img}) => {
      new MenuCards(title, descr, price, img, altimg, '.menu .container', 'menu__item').render();
     })
    })
.catch(function (error) {
  console.log(error);
});

  /**
   * ------forms---------
   */

   const forms = document.querySelectorAll('form'),
        prevModalDialog = document.querySelector('.modal__dialog');

   const message = {
     loading: 'img/form/spinner.svg',
     seccess: 'We will call you soon!',
     failur: 'Error!'
   };

   forms.forEach(i => bindPostData(i));

   const postData = async (url, data) => {
     const res = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type' : 'application/json'
      }
    });
    return await res.json();
  }

   function bindPostData(form) {
     form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMassage = document.createElement('img');
      statusMassage.src = message.loading;
      statusMassage.style.cssText = `
        display: block;
        margin: 0 auto;
        backgroung: white;
      `;
      form.insertAdjacentElement('afterend', statusMassage);

      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');
      //request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      //const object = {};

      // formData.forEach(function(value, key){
      //   object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
      .then(data => {
        console.log(data);
        showThanksModal(message.seccess);
        statusMassage.remove();
      }).catch(request => {
        console.log(request);
        showThanksModal(message.failur);
      }).finally(() => {
        form.reset();
      });

      //const json = JSON.stringify(object);

      // request.send(json);
      
      // request.addEventListener('load', () => {
      //   if(request.status === 200){
      //     showThanksModal(message.seccess);
      //     form.reset();
      //     statusMassage.remove();
      //   }
      //   else{
      //     showThanksModal(message.failur);
      //   }
      // });
     });
   }


   function showThanksModal(message) {
      
     openModalWindow();

     const thanksModal = document.createElement('div');
     thanksModal.classList.add('modal__dialog');
     thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-close="" class="modal__close">×</div>
        <div class="modal__title">${message}</div>
      </div> 
     `;

     modal.innerHTML = '';

     document.querySelector('.modal').append(thanksModal);
     setTimeout(() => {
       thanksModal.remove();
       document.querySelector('.modal').append(prevModalDialog);
       closeModalWindow();
     }, 4000);
   }


   /**
    * 
    * ------slider--------
    */


    const slider = document.querySelector('.offer__slider'),
          sliderItems = slider.querySelectorAll('.offer__slide');
          sliderNav = document.createElement('div'),
          prevArrow = document.createElement('div'),
          nextArrow = document.createElement('div');
            
          sliderNav.classList.add('offer__slider-counter');
          prevArrow.classList.add('offer__slider-prev');
          nextArrow.classList.add('offer__slider-next');

          let currentSlideNumber = 0;

          function addSliderNav(prevAttowSrc, nextArrowSrc, length, ){
            prevArrow.innerHTML = `<img src="${prevAttowSrc}" alt="prev">`
            nextArrow.innerHTML = `<img src="${nextArrowSrc}" alt="next">`
            function sliderNumberBlock() {
              const currentNumber = document.createElement('span');
              const totalNumber = document.createElement('span');
              currentNumber.setAttribute("id", "current");
              totalNumber.setAttribute("id", "total");
              currentNumber.innerHTML = '01';
              totalNumber.innerHTML = addZero(length);
              return `${currentNumber.outerHTML} / ${totalNumber.outerHTML}`
            }
            sliderNav.insertAdjacentHTML('beforeend', prevArrow.outerHTML);
            sliderNav.insertAdjacentHTML('beforeend', sliderNumberBlock());
            sliderNav.insertAdjacentHTML('beforeend', nextArrow.outerHTML);
            return sliderNav;
          }

          slider.insertAdjacentHTML('afterbegin', addSliderNav('icons/left.svg', 'icons/right.svg', sliderItems.length).outerHTML);
          
          sliderItems.forEach(item => {
            item.classList.add('hide');
          });

          function showCurrentSlide(arr, numb = 0){
            arr.forEach((item, place) => {
              if(numb == place){
                item.classList.add('show');
                item.classList.remove('hide');
              }
              else{
                item.classList.add('hide');
                item.classList.remove('show');
              }
            })
          }

          showCurrentSlide(sliderItems, currentSlideNumber);


          document.querySelector('.offer__slider-next').addEventListener('click', () => {
            currentSlideNumber++;
            if(currentSlideNumber < sliderItems.length){
              showCurrentSlide(sliderItems, currentSlideNumber);
              showCurrentSlideNumber(currentSlideNumber);
            }
            else{
              currentSlideNumber = 0
              showCurrentSlide(sliderItems, currentSlideNumber);
              showCurrentSlideNumber(currentSlideNumber);
            }
          });

          document.querySelector('.offer__slider-prev').addEventListener('click', () => {
            currentSlideNumber--;
            if(currentSlideNumber >= 0){
              showCurrentSlide(sliderItems, currentSlideNumber);
              showCurrentSlideNumber(currentSlideNumber);
            }
            else{
              currentSlideNumber = --sliderItems.length;
              showCurrentSlide(sliderItems, currentSlideNumber);
              showCurrentSlideNumber(currentSlideNumber);
            }
          });

          function showCurrentSlideNumber(number){
            document.querySelector('#current').innerHTML = addZero(number+1);
          }



   /**
    * 
    * -------use API--------------
    */

  //  fetch('https://jsonplaceholder.typicode.com/posts', {
  //    method: 'POST',
  //    body: JSON.stringify({name: 'Alex'}),
  //    headers: {
  //      'Content-type' : 'application/json'
  //    }
  //  })
  //   .then(response => response.json())
  //   .then(json => console.log(json));
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map