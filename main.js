/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("if (window.SimpleSlide) {\n  new SimpleSlide({\n    slide: \"quote\",\n    // nome do atributo data-slide=\"principal\"\n    time: 5000 // tempo de transição dos slides\n  });\n\n  new SimpleSlide({\n    slide: \"anuncios\",\n    time: 10000,\n    nav: true\n  });\n}\nif (window.SimpleAnime) {\n  new SimpleAnime();\n}\nif (window.SimpleForm) {\n  new SimpleForm({\n    form: \".formphp\",\n    // seletor do formulário\n    button: \"#enviar\",\n    // seletor do botão\n    erro: \"<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>\",\n    // mensagem de erro\n    sucesso: \"<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>\" // mensagem de sucesso\n  });\n}\n\n// Get the modal\nvar modal = document.getElementById(\"myModal\");\n\n// Get the image and insert it inside the modal - use its \"alt\" text as a caption\nvar img = document.getElementById(\"myImg\");\nvar modalImg = document.getElementById(\"img01\");\nvar captionText = document.getElementById(\"caption\");\nimg.onclick = function () {\n  modal.style.display = \"block\";\n  modalImg.src = this.src;\n  captionText.innerHTML = this.alt;\n};\n\n// Get the <span> element that closes the modal\nvar span = document.getElementsByClassName(\"close\")[0];\n\n// When the user clicks on <span> (x), close the modal\nspan.onclick = function () {\n  modal.style.display = \"none\";\n};\n\n//# sourceURL=webpack://portfolio/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;