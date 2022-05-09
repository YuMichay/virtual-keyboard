/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* eslint-disable no-loop-func */\n\nconst body = document.querySelector('body'); // eslint-disable-next-line prefer-destructuring\n\nlet lang = document.documentElement.lang;\n\nconst createBlock = className => {\n  const div = document.createElement('div');\n  div.classList.add(`${className}`);\n  return div;\n};\n\nclass Button {\n  constructor(content) {\n    this.content = content;\n    this.className = content.toLowerCase();\n  }\n\n  createButton() {\n    const btn = document.createElement('button');\n    btn.textContent = this.content;\n    btn.classList.add(`${this.className}`);\n    return btn;\n  }\n\n}\n\nconst rows = {\n  row1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n  row2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\\\', 'Del'],\n  row3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\\'', 'Enter'],\n  row4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⮝', 'Shift'],\n  row5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '⮞', 'Ctrl']\n};\nconst rowsRu = {\n  row1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n  row2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\\\', 'Del'],\n  row3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],\n  row4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⮝', 'Shift'],\n  row5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '⮞', 'Ctrl']\n};\n\nconst createPage = () => {\n  const wrapper = createBlock('wrapper');\n  body.append(wrapper);\n  const textarea = document.createElement('textarea');\n  textarea.setAttribute('autofocus', 'autofocus');\n  const keyboard = createBlock('keyboard');\n  const textBlock = createBlock('info');\n  const textOS = document.createElement('p');\n  textOS.textContent = 'Клавиатура создана в операционной системе Windows';\n  const textLang = document.createElement('p');\n  textLang.textContent = 'Для переключения языка: Shift + Alt';\n  textBlock.append(textOS, textLang);\n  wrapper.append(textarea, keyboard, textBlock);\n  let rowsArr;\n  let choseRow;\n\n  if (lang === 'en') {\n    rowsArr = Object.keys(rows);\n    choseRow = rows;\n  } else if (lang === 'ru') {\n    rowsArr = Object.keys(rowsRu);\n    choseRow = rowsRu;\n  }\n\n  rowsArr.forEach(row => {\n    const rowBlock = document.createElement('div');\n\n    for (let i = 0; i < choseRow[row].length; i += 1) {\n      const button = new Button(choseRow[row][i]);\n      const btn = button.createButton();\n      rowBlock.append(btn);\n    }\n\n    keyboard.append(rowBlock);\n  });\n};\n\nwindow.addEventListener('load', createPage);\nlet buttons;\nlet shifts;\nlet alts;\nlet ctrls;\nconst text = [];\n\nconst createClass = () => {\n  buttons = document.querySelectorAll('button');\n  shifts = document.querySelectorAll('.shift');\n  const [shiftLeft, shiftRight] = shifts;\n  shiftLeft.classList.remove('shift');\n  shiftLeft.classList.add('shift-left');\n  shiftRight.classList.remove('shift');\n  shiftRight.classList.add('shift-right');\n  alts = document.querySelectorAll('.alt');\n  const [altLeft, altRight] = alts;\n  altLeft.classList.remove('alt');\n  altLeft.classList.add('alt-left');\n  altRight.classList.remove('alt');\n  altRight.classList.add('alt-right');\n  ctrls = document.querySelectorAll('.ctrl');\n  const [ctrlLeft, ctrlRight] = ctrls;\n  ctrlLeft.classList.remove('ctrl');\n  ctrlLeft.classList.add('ctrl-left');\n  ctrlRight.classList.remove('ctrl');\n  ctrlRight.classList.add('ctrl-right');\n\n  for (let i = 0; i < buttons.length; i += 1) {\n    if (buttons[i].classList === 'shift-left') {\n      buttons[i].setAttribute('keyname', 'shift-left');\n      buttons[i].setAttribute('lowerKeyname', 'shift-left');\n    } else if (buttons[i].classList === 'shift-right') {\n      buttons[i].setAttribute('keyname', 'shift-right');\n      buttons[i].setAttribute('lowerKeyname', 'shift-right');\n    } else if (buttons[i].classList === 'alt-left') {\n      buttons[i].setAttribute('keyname', 'alt-left');\n      buttons[i].setAttribute('lowerKeyname', 'alt-left');\n    } else if (buttons[i].classList === 'alt-right') {\n      buttons[i].setAttribute('keyname', 'alt-right');\n      buttons[i].setAttribute('lowerKeyname', 'alt-right');\n    } else if (buttons[i].classList === 'ctrl-left') {\n      buttons[i].setAttribute('keyname', 'ctrl-left');\n      buttons[i].setAttribute('lowerKeyname', 'ctrl-left');\n    } else if (buttons[i].classList === 'ctrl-right') {\n      buttons[i].setAttribute('keyname', 'ctrl-right');\n      buttons[i].setAttribute('lowerKeyname', 'ctrl-right');\n    } else {\n      buttons[i].setAttribute('keyname', buttons[i].innerText);\n      buttons[i].setAttribute('lowerKeyname', buttons[i].innerText.toLowerCase());\n    }\n  }\n};\n\nwindow.addEventListener('load', createClass);\n\nconst changeLang = () => {\n  if (lang === 'en') {\n    lang = 'ru';\n    createPage(lang = 'ru');\n    createClass();\n  } else if (lang === 'ru') {\n    lang = 'en';\n    createPage(lang = 'en');\n    createClass();\n  }\n};\n\nconst keyEvents = e => {\n  document.querySelector('textarea').focus();\n\n  for (let i = 0; i < buttons.length; i += 1) {\n    if ((e.key === buttons[i].getAttribute('keyname') || e.key === buttons[i].getAttribute('lowerKeyname')) && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Backspace' && e.key !== 'Enter' && e.key !== 'CapsLock' && e.key !== 'Tab') {\n      buttons[i].classList.add('active');\n      text.push(buttons[i].getAttribute('lowerKeyname'));\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === 'space' && e.code === 'Space') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === 'enter' && e.code === 'Enter') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === 'backspace' && e.code === 'Backspace') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === 'capslock' && e.code === 'CapsLock') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === 'tab' && e.code === 'Tab') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === '⮜' && e.code === 'ArrowLeft') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === '⮞' && e.code === 'ArrowRight') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === '⮝' && e.code === 'ArrowUp') {\n      buttons[i].classList.add('active');\n    }\n\n    if (buttons[i].getAttribute('lowerKeyname') === '⮟' && e.code === 'ArrowDown') {\n      buttons[i].classList.add('active');\n    }\n\n    if (e.code === 'ShiftLeft') {\n      document.querySelector('.shift-left').classList.add('active');\n      document.querySelector('.shift-right').classList.remove('active');\n    }\n\n    if (e.code === 'ShiftRight') {\n      document.querySelector('.shift-right').classList.add('active');\n      document.querySelector('.shift-left').classList.remove('active');\n    }\n\n    if (e.code === 'AltLeft') {\n      document.querySelector('.alt-left').classList.add('active');\n      document.querySelector('.alt-right').classList.remove('active');\n    }\n\n    if (e.code === 'AltRight') {\n      document.querySelector('.alt-right').classList.add('active');\n      document.querySelector('.alt-left').classList.remove('active');\n    }\n\n    if (e.code === 'ControlLeft') {\n      document.querySelector('.ctrl-left').classList.add('active');\n      document.querySelector('.ctrl-right').classList.remove('active');\n    }\n\n    if (e.code === 'ControlRight') {\n      document.querySelector('.ctrl-right').classList.add('active');\n      document.querySelector('.ctrl-left').classList.remove('active');\n    }\n\n    if (e.code === 'MetaLeft') {\n      document.querySelector('.win').classList.add('active');\n    }\n  }\n\n  if (e.key === 'Backspace') {\n    text.splice(text.length - 1, 1);\n  }\n\n  if (e.key === 'ShiftLeft' && e.key === 'AltLeft') {\n    changeLang();\n  }\n\n  document.querySelector('textarea').innerHTML = text.join('');\n};\n\nwindow.addEventListener('keydown', keyEvents);\n\nconst endAnimation = () => {\n  for (let i = 0; i < buttons.length; i += 1) {\n    setTimeout(() => {\n      buttons[i].classList.remove('active');\n    }, 300);\n  }\n};\n\nwindow.addEventListener('keyup', endAnimation); // function setLocalStorage() {\n//   localStorage.setItem('lang', lang.value);\n// }\n// window.addEventListener('beforeunload', setLocalStorage);\n// function getLocalStorage() {\n//   if (localStorage.getItem('lang')) {\n//     lang.value = localStorage.getItem('lang');\n//   }\n// }\n// window.addEventListener('load', getLocalStorage);\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;