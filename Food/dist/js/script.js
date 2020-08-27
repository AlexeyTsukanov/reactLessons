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
        modalOpen = document.querySelectorAll('[data-modal]'),
        modalClose = document.querySelector('[data-close]');

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
  modalClose.addEventListener('click', closeModalWindow);
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModalWindow();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModalWindow();
    }

    ß;
  });
  const timerID = setTimeout(openModalWindow, 5000);
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

  const menuesDb = {
    fitnes: {
      name: 'Фитнес',
      description: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      price: '229',
      imagSrc: 'img/tabs/vegy.jpg',
      imagDescr: 'vegy'
    },
    premium: {
      name: 'Премиум',
      description: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      price: '550',
      imagSrc: 'img/tabs/elite.jpg',
      imagDescr: 'elite'
    },
    post: {
      name: 'Постное',
      description: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      price: '430',
      imagSrc: 'img/tabs/post.jpg',
      imagDescr: 'post'
    }
  };

  class menuCards {
    constructor(menuName, description, price, imagSrc, imagDescr) {
      this.menuName = menuName;
      this.description = description;
      this.price = price;
      this.imagSrc = imagSrc;
      this.imagDescr = imagDescr;
    }

    showCard() {
      return `<div class="menu__item">
                        <img src="${this.imagSrc}" alt="${this.imagDescr}">
                        <h3 class="menu__item-subtitle">Меню "${this.menuName}"</h3>
                        <div class="menu__item-descr">${this.description}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>`;
    }

  }

  const menuSection = document.querySelector('.menu'),
        menuContainer = menuSection.querySelector('.container');
  const cardFitness = new menuCards(menuesDb.fitnes.name, menuesDb.fitnes.description, menuesDb.fitnes.price, menuesDb.fitnes.imagSrc, menuesDb.fitnes.imagDescr);
  const cardPremium = new menuCards(menuesDb.premium.name, menuesDb.premium.description, menuesDb.premium.price, menuesDb.premium.imagSrc, menuesDb.premium.imagDescr);
  const cardPost = new menuCards(menuesDb.post.name, menuesDb.post.description, menuesDb.post.price, menuesDb.post.imagSrc, menuesDb.post.imagDescr);
  menuContainer.innerHTML = "";
  menuContainer.innerHTML += cardFitness.showCard();
  menuContainer.innerHTML += cardPremium.showCard();
  menuContainer.innerHTML += cardPost.showCard();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map