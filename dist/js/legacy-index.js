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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollToTop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollToTop.js */ "./src/js/scrollToTop.js");
/* harmony import */ var _pageDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageDown.js */ "./src/js/pageDown.js");
/* harmony import */ var _skipToSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skipToSection.js */ "./src/js/skipToSection.js");
/* harmony import */ var _loadingScreen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingScreen.js */ "./src/js/loadingScreen.js");
/* harmony import */ var _stateOnScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateOnScroll.js */ "./src/js/stateOnScroll.js");
/* harmony import */ var _projectsMobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectsMobile.js */ "./src/js/projectsMobile.js");







window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const mobileMenuButton = document.querySelector('.mobile-button');
  const mobileMenu = document.querySelector('.mobileMenu');
  const backButton = document.querySelector('.back-button');
  const helloButton = document.querySelector('.button');
  const nav = document.querySelector('.nav');
  const navList = document.querySelectorAll('.menu__item');
  const mobileNav = document.querySelectorAll('.list__item');
  const projectWatch = document.querySelectorAll('.project__watch');

  // display menu

  function navState() {
    const navPosition = {};
    navPosition.initial = nav.offsetTop;
    if (window.scrollY >= nav.offsetTop) {
      nav.classList.add('nav--active');
    }
    if (window.scrollY <= window.innerHeight) {
      nav.classList.remove('nav--active');
    }
  }

  // mobile menu open/close
  function toggleMenu() {
    mobileMenuButton.classList.toggle('mobile-button--active');
    mobileMenu.classList.toggle('mobileMenu--active');
  }

  // toggle disply/hide of back button
  function displayBackButton() {
    if (window.scrollY >= window.innerHeight) {
      backButton.style.display = 'flex';
      backButton.style.opacity = '1';
    } else {
      backButton.style.display = 'none';
      backButton.style.opacity = '0';
    }
  }

  // event listeners
  mobileMenuButton.addEventListener('click', toggleMenu);
  backButton.addEventListener('click', _scrollToTop_js__WEBPACK_IMPORTED_MODULE_0__["scrollBack"]);
  window.addEventListener('scroll', _.debounce(displayBackButton, 50));
  window.addEventListener('scroll', _.debounce(navState, 10));
  window.addEventListener('scroll', _.debounce(_stateOnScroll_js__WEBPACK_IMPORTED_MODULE_4__["stateOnScroll"], 20));
  helloButton.addEventListener('click', _pageDown_js__WEBPACK_IMPORTED_MODULE_1__["pageDown"]);
  navList.forEach(item => item.addEventListener('click', _skipToSection_js__WEBPACK_IMPORTED_MODULE_2__["skipToSection"]));
  mobileNav.forEach(item => item.addEventListener('click', _skipToSection_js__WEBPACK_IMPORTED_MODULE_2__["skipToSection"]));
  window.addEventListener('load', _loadingScreen_js__WEBPACK_IMPORTED_MODULE_3__["endLoading"]);
  projectWatch.forEach(item => item.addEventListener('click', _projectsMobile_js__WEBPACK_IMPORTED_MODULE_5__["handleMobile"]));
});


/***/ }),

/***/ "./src/js/loadingScreen.js":
/*!*********************************!*\
  !*** ./src/js/loadingScreen.js ***!
  \*********************************/
/*! exports provided: endLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endLoading", function() { return endLoading; });
function endLoading() {
  // DOM elements
  const body = document.querySelector('body');
  const loader = document.querySelector('.loading-screen');
  const header = document.querySelectorAll('.hello__intro');
  const button = document.querySelector('.button');

  body.classList.remove('loading');

  const removeLoader = () => {
    if (loader.style.backgroundColor == 0) {
      loader.style.display = 'none';
      header.forEach(el => el.classList.add('hello__intro--active'));
      setTimeout(() => button.classList.add('button--active'), 700);
    }
  };

  loader.addEventListener('transitionend', removeLoader);
}


/***/ }),

/***/ "./src/js/pageDown.js":
/*!****************************!*\
  !*** ./src/js/pageDown.js ***!
  \****************************/
/*! exports provided: pageDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDown", function() { return pageDown; });
function pageDown() {
  window.scroll({
    top: window.innerHeight + 3,
    behavior: 'smooth',
  });
}


/***/ }),

/***/ "./src/js/projectsMobile.js":
/*!**********************************!*\
  !*** ./src/js/projectsMobile.js ***!
  \**********************************/
/*! exports provided: handleMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobile", function() { return handleMobile; });
function handleMobile(e) {
  const details = document.querySelector('.details');
  const close = details.querySelector('.details__close');
  const detailsImg = details.querySelector('.details__min-img');
  const detailsInfo = details.querySelector('.details__info');
  const detailsLink = details.querySelector('.datails__git');

  // update with new projects info
  const pictures = {
    project1: './dist/images/Queen-tribute-page.png',
    project2: './dist/images/survey-form.png',
    project3: './dist/images/bikeLandingPage2.png',
    project4: './dist/images/background3-mod.jpg',
    project5: './dist/images/background3-mod.jpg',
    project6: './dist/images/background3-mod.jpg',
  };

  // update with new projects info
  const texts = {
    project1: 'This is a tribute page about Queen band. I prepared it as an exercise for FCC certification in Responsive Web Design. It was prepared with pure ES6 and SASS for styling. It is a quite simple desing but I tried to make it a bit more attractive.',
    project2: 'This project is my approach to make a solid survey-form example with solid semantics and custom form validation with JS used. In the future there might be additional backend script added to handle data got from the form. Besides that, all functionality is fully prepared. Form is prepared with CSS grid usage. I also added custom feel and look to inputs.',
    project3: 'It is a landing page for selling a bike. Website is prepared for FCC RWD certification. Made using SASS and vanilla JS. Burger menu in this project is quite good. It was inspired by project found on web, but built on my own.',
    project4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
    project5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
    project6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
  };

  // update with new projects info
  const links = {
    project1: 'https://github.com/RXstoinkboy/Tribute-page',
    project2: 'https://github.com/RXstoinkboy/survey-form',
    project3: 'https://github.com/RXstoinkboy/bikeLandingPage',
    project4: 'https://github.com/RXstoinkboy/Tribute-page',
    project5: 'https://github.com/RXstoinkboy/Tribute-page',
    project6: 'https://github.com/RXstoinkboy/Tribute-page',
  };

  details.style.display = 'block';
  detailsImg.src = `${pictures[e.target.dataset.project]}`;
  detailsInfo.innerText = `${texts[e.target.dataset.project]}`;
  detailsLink.href = `${links[e.target.dataset.project]}`;

  close.addEventListener('click', () => {
    details.style.display = 'none';
  });
}


/***/ }),

/***/ "./src/js/scrollToTop.js":
/*!*******************************!*\
  !*** ./src/js/scrollToTop.js ***!
  \*******************************/
/*! exports provided: scrollBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollBack", function() { return scrollBack; });
function scrollBack() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}


/***/ }),

/***/ "./src/js/skipToSection.js":
/*!*********************************!*\
  !*** ./src/js/skipToSection.js ***!
  \*********************************/
/*! exports provided: skipToSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipToSection", function() { return skipToSection; });
function skipToSection(e) {
  const projects = document.querySelector('.projects');
  const about = document.querySelector('.about');
  const header = document.querySelector('.header');
  const contact = document.querySelector('.contact');

  if (this.dataset.nav === 'projects') {
    projects.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  } else if (this.dataset.nav === 'about') {
    about.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  } else if (this.dataset.nav === 'header') {
    header.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  } else if (this.dataset.nav === 'contact') {
    contact.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  }

  // close menu if it is mobileMenu
  if (this.className === 'list__item') {
    const mobileMenuButton = document.querySelector('.mobile-button');
    const mobileMenu = document.querySelector('.mobileMenu');
    mobileMenuButton.classList.toggle('mobile-button--active');
    mobileMenu.classList.toggle('mobileMenu--active');
  }
}


/***/ }),

/***/ "./src/js/stateOnScroll.js":
/*!*********************************!*\
  !*** ./src/js/stateOnScroll.js ***!
  \*********************************/
/*! exports provided: stateOnScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateOnScroll", function() { return stateOnScroll; });
function stateOnScroll() {
  const titles = document.querySelectorAll('.title');
  const projects = document.querySelectorAll('.project');
  const about = document.querySelector('.about__container');
  const aboutEls = about.querySelectorAll('.about__element');

  titles.forEach((title) => {
    // half way through the item
    const itemMidY = (window.scrollY + window.innerHeight) - title.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = title.offsetTop + title.getBoundingClientRect().height;
    const isHalfShown = itemMidY > title.offsetTop;
    const notScrolledPast = window.scrollY < itemBottom;

    // logic
    if (isHalfShown && notScrolledPast) {
      title.classList.add('title--active');
    }
    // add only if item should be hidden after being scrolled past
    // else {
    //   title.classList.remove('title--active');
    // }
  });

  projects.forEach((project) => {
    const itemMidY = (window.scrollY + window.innerHeight) - project.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = project.offsetTop + project.getBoundingClientRect().height;
    const isHalfShown = itemMidY > project.offsetTop;
    const notScrolledPast = window.scrollY < itemBottom;
    // logic
    if (isHalfShown && notScrolledPast) {
      project.classList.add('project--active');
    }
  });


  aboutEls.forEach((aboutItem) => {
    const itemMidY = (window.scrollY + window.innerHeight) - aboutItem.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = aboutItem.offsetTop + aboutItem.getBoundingClientRect().height;
    const isHalfShown = itemMidY > aboutItem.offsetTop;
    const notScrolledPast = window.scrollY < itemBottom;
    // logic
    if (isHalfShown && notScrolledPast) {
      aboutItem.classList.add('about__element--active');
    }
  });
}


/***/ })

/******/ });
//# sourceMappingURL=legacy-index.js.map