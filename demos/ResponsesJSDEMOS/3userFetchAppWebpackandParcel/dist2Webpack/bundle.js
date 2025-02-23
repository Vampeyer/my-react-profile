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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("// import axios from 'axios'; //for webpack \r\n\r\n// Un comment the code above to build with webpack ! \r\n\r\nconst userForm = document.getElementById('userForm');\r\nconst userList = document.getElementById('userList');\r\n\r\nuserForm.addEventListener('submit', function(event) {\r\n    event.preventDefault();\r\n\r\n    const formData = new FormData(userForm);\r\n    const searchParams = new URLSearchParams(formData);\r\n    const url = 'https://reqres.in/api/users?' + searchParams.toString();\r\n\r\n    axios.get(url)\r\n        .then(response => {\r\n            const data = response.data; // Axios automatically parses JSON\r\n            userList.innerHTML = '';\r\n\r\n            data.data.forEach(user => {\r\n                const userDiv = document.createElement('div');\r\n                userDiv.classList.add('user');\r\n\r\n                userDiv.innerHTML = `\r\n                    <div class=\"user-container\">\r\n                        <img src=\"${user.avatar}\" alt=\"${user.first_name} ${user.last_name}\" width=\"50\" height=\"50\">\r\n                        <div>\r\n                            <strong>${user.first_name} ${user.last_name}</strong><br>\r\n                            Email: ${user.email}\r\n                        </div>\r\n                    </div>\r\n                `;\r\n                userList.appendChild(userDiv);\r\n            });\r\n        })\r\n        .catch(error => {\r\n            console.error('Request failed:', error);\r\n        });\r\n});\n\n//# sourceURL=webpack://userfetchappwebpack1/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;