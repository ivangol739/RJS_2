/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin.js
function goblin() {
  const cell = Array.from(document.querySelectorAll(".cell"));
  let i = 0;
  setInterval(() => {
    cell[i].classList.remove("img");
    i = Math.floor(Math.random() * 16);
    cell[i].classList.add("img");
  }, 1000);
}
;// CONCATENATED MODULE: ./src/js/app.js

goblin();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;