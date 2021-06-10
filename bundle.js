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

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/cube.js":
/*!*********************!*\
  !*** ./src/cube.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst { Vector3 } = three__WEBPACK_IMPORTED_MODULE_0__;\n\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({ color: 0x5555aa });\n\nclass Cube {\n  constructor(position, size, parent = null) {\n    this.size = size || 1 / 3;\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.size, this.size, this.size);\n    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, material);\n    this.position = position;\n    this.mesh.position.set(...this.position.toArray());\n    this.parent = parent;\n  }\n\n  divide() {\n    let cubes = [];\n    let variations = [this.size / 3, -this.size / 3, 0];\n\n    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\n    this.mesh.position.set(...this.position.toArray());\n\n    for (let i of variations) {\n      for (let j of variations) {\n        if (i == 0 && j == 0) continue;\n        for (let k of variations) {\n          if (i == 0 && k == 0) continue;\n          if (j == 0 && k == 0) continue;\n          cubes.push(new Cube(new Vector3(i, j, k), this.size / 3, this.mesh));\n        }\n      }\n    }\n\n    return cubes;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cube);\n\n\n//# sourceURL=webpack://menger-sponge-fractal/./src/cube.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _cube_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cube.js */ \"./src/cube.js\");\n\n\n\nconst { Vector3, Scene, PerspectiveCamera } = three__WEBPACK_IMPORTED_MODULE_1__;\n\nlet scene, camera, renderer, light, ambientLight, pivot;\nlet cubes = [new _cube_js__WEBPACK_IMPORTED_MODULE_0__.default(new Vector3(0, 0, 0))];\nlet frame = 0;\n\nfunction init() {\n  scene = new Scene();\n  camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 10);\n  renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();\n  light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xaaaaaa, 1.75);\n  ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0x888888);\n  pivot = new three__WEBPACK_IMPORTED_MODULE_1__.Object3D();\n\n  renderer.shadowMap.enabled = true;\n  camera.position.z = 0.5;\n  light.castShadow = true;\n  light.position.set(-0.1, 1, 2);\n  light.shadow.camera.right = 1;\n  light.shadow.camera.left = -1;\n  light.shadow.camera.top = 1;\n  light.shadow.camera.bottom = -1;\n\n  renderer.setSize(innerWidth, innerHeight);\n  document.body.appendChild(renderer.domElement);\n\n  scene.add(ambientLight);\n\n  for (let cube of cubes) {\n    cube.parent = pivot;\n    pivot.add(cube.mesh);\n  }\n\n  scene.add(light);\n  scene.add(pivot);\n  animate();\n}\n\nfunction move() {\n  pivot.rotation.x += Math.PI / 100;\n\n  if (frame % 80 == 0 && frame <= 240) {\n    let arr = [];\n    for (let i in cubes) {\n      const cube = cubes[i];\n      cube.parent.remove(cube.mesh);\n      let newCubes = cube.divide();\n      cube.parent.add(cube.mesh);\n\n      for (let newCube of newCubes) {\n        cube.mesh.add(newCube.mesh);\n      }\n\n    console.log({newCubes})\n      arr = arr.concat(newCubes);\n    }\n    console.log(arr)\n    cubes = arr;\n  }\n}\n\nfunction animate() {\n  setTimeout(function () {\n    requestAnimationFrame(animate);\n  }, 1000 / 20);\n  frame++;\n  move();\n  renderer.render(scene, camera);\n}\n\nwindow.addEventListener(\"resize\", () => {\n  renderer.setSize(innerWidth, innerHeight);\n  camera.aspect = innerWidth / innerHeight;\n\n  camera.updateProjectionMatrix();\n});\n\nonload = () => init();\n\n\n//# sourceURL=webpack://menger-sponge-fractal/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;