!function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([22,1]),n()}([,,function(e,t,n){var r=n(1),o=n(21);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},,,,,,,,,,function(e,t,n){var r=n(1),o=n(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){},,,,,,,function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),i=n(3);function a(){var e=document.querySelector(".header-mob"),t=document.querySelector("body"),n=document.querySelector(".header"),r=document.querySelector(".marketing"),o=document.querySelector(".btn-scroll-top"),i=document.querySelector(".header__burger"),a=n.clientHeight,c=r.clientHeight;i.addEventListener("click",(function(n){n.preventDefault(),t.classList.toggle("lock"),i.classList.toggle("active"),e.classList.toggle("active")})),o.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(e){var t=window.pageYOffset;t>a/2?n.classList.add("active"):n.classList.remove("active"),t>c/1.5?o.classList.add("hidden"):o.classList.remove("hidden")}))}var c=n(6);n(10);function l(){var e=document.querySelectorAll(".tabs__link"),t=document.querySelectorAll(".tabs__item");function n(){e.forEach((function(e){e.classList.remove("active")})),this.classList.add("active"),function(e){t.forEach((function(t){t.classList.contains(e)?t.classList.add("active"):t.classList.remove("active")}))}(this.getAttribute("data-tab"))}e.forEach((function(e){e.addEventListener("click",n)}))}function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e,t=document.querySelectorAll(".popup-link"),n=document.querySelector("body"),r=document.querySelectorAll(".close-popup"),o=document.querySelector(".popup.open"),i=document.querySelectorAll(".popup"),a=s(t);try{var c=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var r=t.getAttribute("href");!function(e){var t,r=s(i);try{for(r.s();!(t=r.n()).done;){var o=t.value;o.classList.contains("open")&&o.classList.remove("open")}}catch(e){r.e(e)}finally{r.f()}n.classList.add("lock"),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__body")||f(e.target.closest(".popup"))}))}(document.querySelector(r))}))};for(a.s();!(e=a.n()).done;)c()}catch(e){a.e(e)}finally{a.f()}var l,u=s(r);try{var d=function(){var e=l.value;e.addEventListener("click",(function(t){t.preventDefault(),f(e.closest(".popup"))}))};for(u.s();!(l=u.n()).done;)d()}catch(e){u.e(e)}finally{u.f()}function f(e){e.classList.remove("open"),n.classList.remove("lock")}document.addEventListener("keydown",(function(e){if(27===e.which){var t,n=s(i);try{for(n.s();!(t=n.n()).done;){t.value.classList.contains("open")&&f(o)}}catch(e){n.e(e)}finally{n.f()}}}))}r.a.registerPlugin(i.a),r.a.registerPlugin(o.a),r.a.registerPlugin(i.a),r.a.registerPlugin(o.a),window.addEventListener("load",(function(){var e,t,n,o;r.a.timeline({defaults:{duration:1.55,opacity:0,ease:"expo.inout"}}).from(".marketing__img",{x:280,duration:1.85},0).from(".marketing__col",{x:-200},0).from(".marketing__social .social__col",{y:20,duration:1,stagger:.3},1),r.a.timeline({scrollTrigger:{trigger:".about",start:"top center"}}).from(".about__title",{x:200,opacity:0,duration:1.65,ease:"expo.inout"},0).from(".about__body",{x:-200,opacity:0,duration:1.65,ease:"expo.inout"},0),document.querySelectorAll(".menu__link").forEach((function(e,t){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-link");r.a.to(window,{duration:.65,scrollTo:{y:"."+t,offsetY:100},ease:"power2"})}))})),l(),a(),d(),document.querySelectorAll(".swiper-container").length>0?(e=document.querySelector(".play-slider-btn"),t=document.querySelector(".slider-pagination-count__current"),n=new c.a(".slider-img",{direction:"horizontal",speed:1800,parallax:!0,loop:!0,autoplay:{delay:5e3},slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),o=new c.a(".slider-text",{direction:"horizontal",speed:2100,parallax:!0,loop:!0,pagination:{el:".slider-pagination-count__total",type:"custom",renderCustom:function(e,t,n){return"0".concat(n)}}}),n.controller.control=o,o.controller.control=n,o.on("slideChange",(function(){var e=o.realIndex+1;t.innerHTML="0".concat(e)})),e.addEventListener("click",(function(){this.classList.contains("active")?(n.autoplay.start(),this.classList.remove("active")):(n.autoplay.stop(),this.classList.add("active"))}))):console.log("Chunk script is not work!")}));n(12);var f=n(8),p=n.n(f);n(17),n(19);window.Vue=n(7),Vue.component("VueSlider",p.a),Vue.component("example-component",n(23).default);new Vue({el:"#app",data:function(){return{show:!1}}})},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("div",{staticClass:"container"},[t("img",{attrs:{src:"/assets/img/logo.png",alt:this.message}}),this._v(" "),t("p",[this._v(this._s(this.message))])])])};r._withStripped=!0;var o={data:function(){return{message:"Example Vue component"}}},i=(n(20),n(9)),a=Object(i.a)(o,r,[],!1,null,"02d8d4de",null);a.options.__file="src/js/componentsVue/Example.vue";t.default=a.exports}]);