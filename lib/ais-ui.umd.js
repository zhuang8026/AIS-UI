(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ais-ui"] = factory(require("vue"));
	else
		root["ais-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b6d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f30":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6141":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_5d5c63ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bda");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_5d5c63ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_5d5c63ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "6eaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_f4c3d538_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1f30");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_f4c3d538_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_f4c3d538_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9bda":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fba9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b33c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_a7e78166_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02f3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_a7e78166_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_a7e78166_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e0de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_222019a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0b6d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_222019a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_222019a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Icon", function() { return /* reexport */ Icon; });
__webpack_require__.d(__webpack_exports__, "UiButton", function() { return /* reexport */ UiButton; });
__webpack_require__.d(__webpack_exports__, "UiButtonFuture", function() { return /* reexport */ UiButtonFuture; });
__webpack_require__.d(__webpack_exports__, "UiCheckbox", function() { return /* reexport */ UiCheckbox; });
__webpack_require__.d(__webpack_exports__, "UiInput", function() { return /* reexport */ UiInput; });
__webpack_require__.d(__webpack_exports__, "UiRadio", function() { return /* reexport */ UiRadio; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Icon/index.vue?vue&type=template&id=74342726

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div");
}
// CONCATENATED MODULE: ./src/components/Icon/index.vue?vue&type=template&id=74342726

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Icon/index.vue?vue&type=script&lang=js
/* harmony default export */ var Iconvue_type_script_lang_js = ({
  name: 'Icon'
});
// CONCATENATED MODULE: ./src/components/Icon/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Icon/index.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(Iconvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var Icon = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiButton/index.vue?vue&type=script&setup=true&lang=js

const __default__ = {
  name: 'UiButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: String,
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: 'default'
    },
    customColor: {
      type: String,
      default: ''
    },
    leftIcon: Boolean,
    rightIcon: String,
    localing: Boolean
  },
  computed: {
    isClass() {
      /**
       * basic-button
       * importance-button
       * small-button
       * small-important-button
       * text-icon-button
       * hyperLink-button
       * */
      return [
      // this.size == 'default' ? 'basic-button'
      // : this.size == 'medium' ? 'ais-button-medium'
      // : this.size == 'small' ? 'ais-button-small'
      // : this.size == 'mini' ? 'ais-button-mini'
      // : 'ais-button',
      this.type ? `ais-button-${this.type}` : '',
      // className 3: disabled
      this.disabled ? `ais-button-${this.type}-disabled` : '', this.disabled && this.icon ? `btn-icon-disabled` : '',
      // className 4: border-radius
      {
        'ais-button-round': this.round
      }];
    },
    styles() {
      const mBtnDeaultStyle = {
        background: this.customColor,
        border: this.customColor,
        color: '#fff'
      };
      return [this.customColor == '' ? {} : this.type == 'default' ? {} : mBtnDeaultStyle];
    }
  }
};
/* harmony default export */ var UiButtonvue_type_script_setup_true_lang_js = (/*#__PURE__*/Object.assign(__default__, {
  setup(__props) {
    // import { computed, useSlots } from "vue";

    return (_ctx, _cache) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["ais-button", _ctx.isClass]),
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.styles)
      }, [__props.leftIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: 0,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["btn-icon", __props.icon])
      }, null, 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 6);
    };
  }
}));
// CONCATENATED MODULE: ./src/components/UiButton/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./src/components/UiButton/index.vue?vue&type=style&index=0&id=f4c3d538&scoped=true&lang=scss
var UiButtonvue_type_style_index_0_id_f4c3d538_scoped_true_lang_scss = __webpack_require__("6eaf");

// CONCATENATED MODULE: ./src/components/UiButton/index.vue






const UiButton_exports_ = /*#__PURE__*/exportHelper_default()(UiButtonvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-f4c3d538"]])

/* harmony default export */ var UiButton = (UiButton_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiButtonFuture/index.vue?vue&type=script&setup=true&lang=js

const UiButtonFuturevue_type_script_setup_true_lang_js_default_ = {
  name: 'UiButtonFuture',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: 'default'
    },
    customColor: {
      type: String,
      default: ''
    },
    leftIcon: String,
    rightIcon: String,
    localing: Boolean
  },
  computed: {
    isClass() {
      return [this.size == 'default' ? 'ais-button' : this.size == 'medium' ? 'ais-button-medium' : this.size == 'small' ? 'ais-button-small' : this.size == 'mini' ? 'ais-button-mini' : 'ais-button', this.type ? this.disabled ? '' : `ais-button-${this.type}` : '',
      // className 3: disabled
      this.disabled ? `ais-button-${this.type}-disabled` : '',
      // className 4: border-radius
      {
        'ais-button-round': this.round
      }];
    },
    styles() {
      const mBtnDeaultStyle = {
        background: this.customColor,
        border: this.customColor,
        color: '#fff'
      };
      return [this.customColor == '' ? {} : this.type == 'default' ? {} : mBtnDeaultStyle];
    },
    isIconClass() {
      return [this.leftIcon == 'leftIcon' ? 'icon-check-box-h' : ''];
    }
  }
};
/* harmony default export */ var UiButtonFuturevue_type_script_setup_true_lang_js = (/*#__PURE__*/Object.assign(UiButtonFuturevue_type_script_setup_true_lang_js_default_, {
  setup(__props) {
    // import { computed, useSlots } from "vue";

    return (_ctx, _cache) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.isClass),
        style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.styles)
      }, [__props.leftIcon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
        key: 0,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.isIconClass)
      }, null, 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 6);
    };
  }
}));
// CONCATENATED MODULE: ./src/components/UiButtonFuture/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./src/components/UiButtonFuture/index.vue?vue&type=style&index=0&id=eeb94a06&scoped=true&lang=scss
var UiButtonFuturevue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss = __webpack_require__("a9a0");

// CONCATENATED MODULE: ./src/components/UiButtonFuture/index.vue






const UiButtonFuture_exports_ = /*#__PURE__*/exportHelper_default()(UiButtonFuturevue_type_script_setup_true_lang_js, [['__scopeId',"data-v-eeb94a06"]])

/* harmony default export */ var UiButtonFuture = (UiButtonFuture_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiCheckbox/index.vue?vue&type=template&id=222019a7&scoped=true

const _withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-222019a7"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "ais-checkbox-selectbox"
}, null, -1));
const _hoisted_2 = {
  class: "ais-checkbox-test"
};
function UiCheckboxvue_type_template_id_222019a7_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([`ais-checkbox-${$props.type}`, $props.customClass])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["ais-checkbox-label", [{
      'ais-checkbox-label-active': $options.privateIsCheck,
      'ais-checkbox-active-disable': $options.privateIsCheck && $props.disabled,
      'ais-checkbox-disable': $props.disabled
    }]]),
    onClick: _cache[1] || (_cache[1] = (...args) => $options.checkChange && $options.checkChange(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.privateIsCheck = $event)
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelCheckbox"], $options.privateIsCheck]]), _hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)])], 2)], 2);
}
// CONCATENATED MODULE: ./src/components/UiCheckbox/index.vue?vue&type=template&id=222019a7&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiCheckbox/index.vue?vue&type=script&lang=js
/* harmony default export */ var UiCheckboxvue_type_script_lang_js = ({
  name: 'UiCheckbox',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClass: String
  },
  computed: {
    privateIsCheck: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('update:checked', val);
      }
    }
  },
  methods: {
    checkChange() {
      this.$emit('checkChange', this.checked);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UiCheckbox/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UiCheckbox/index.vue?vue&type=style&index=0&id=222019a7&lang=scss&scoped=true
var UiCheckboxvue_type_style_index_0_id_222019a7_lang_scss_scoped_true = __webpack_require__("e0de");

// CONCATENATED MODULE: ./src/components/UiCheckbox/index.vue







const UiCheckbox_exports_ = /*#__PURE__*/exportHelper_default()(UiCheckboxvue_type_script_lang_js, [['render',UiCheckboxvue_type_template_id_222019a7_scoped_true_render],['__scopeId',"data-v-222019a7"]])

/* harmony default export */ var UiCheckbox = (UiCheckbox_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiInput/index.vue?vue&type=template&id=5d5c63ab&scoped=true

const UiInputvue_type_template_id_5d5c63ab_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-5d5c63ab"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);
const UiInputvue_type_template_id_5d5c63ab_scoped_true_hoisted_1 = ["type", "value", "placeholder", "disabled"];
function UiInputvue_type_template_id_5d5c63ab_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("input", {
    type: $props.type,
    value: $props.defaultValue,
    placeholder: $props.placeholder,
    disabled: _ctx.disabled,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.privateDefaultValue = $event),
    onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.focus && _ctx.focus(...args)),
    onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.blur && _ctx.blur(...args)),
    onChange: _cache[3] || (_cache[3] = (...args) => _ctx.change && _ctx.change(...args))
  }, null, 40, UiInputvue_type_template_id_5d5c63ab_scoped_true_hoisted_1)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelDynamic"], $options.privateDefaultValue]]);
}
// CONCATENATED MODULE: ./src/components/UiInput/index.vue?vue&type=template&id=5d5c63ab&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiInput/index.vue?vue&type=script&lang=js
/* harmony default export */ var UiInputvue_type_script_lang_js = ({
  name: 'UiInput',
  props: {
    type: String,
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: String,
    autofocus: Boolean
  },
  computed: {
    privateDefaultValue: {
      get() {
        return this.defaultValue;
      },
      set(val) {
        this.$emit('update:defaultValue', val);
      }
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/components/UiInput/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UiInput/index.vue?vue&type=style&index=0&id=5d5c63ab&lang=scss&scoped=true
var UiInputvue_type_style_index_0_id_5d5c63ab_lang_scss_scoped_true = __webpack_require__("6141");

// CONCATENATED MODULE: ./src/components/UiInput/index.vue







const UiInput_exports_ = /*#__PURE__*/exportHelper_default()(UiInputvue_type_script_lang_js, [['render',UiInputvue_type_template_id_5d5c63ab_scoped_true_render],['__scopeId',"data-v-5d5c63ab"]])

/* harmony default export */ var UiInput = (UiInput_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiRadio/index.vue?vue&type=template&id=a7e78166&scoped=true

const UiRadiovue_type_template_id_a7e78166_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-a7e78166"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);
const UiRadiovue_type_template_id_a7e78166_scoped_true_hoisted_1 = {
  class: "ais-radio"
};
const UiRadiovue_type_template_id_a7e78166_scoped_true_hoisted_2 = ["name", "value"];
function UiRadiovue_type_template_id_a7e78166_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", UiRadiovue_type_template_id_a7e78166_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    onChange: _cache[1] || (_cache[1] = (...args) => $options.checkChange && $options.checkChange(...args)),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'ais-radio-disable': $props.disabled
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "radio",
    name: $props.name,
    value: $props.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.privateIsCheck = $event)
  }, null, 8, UiRadiovue_type_template_id_a7e78166_scoped_true_hoisted_2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], $options.privateIsCheck]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["ais-radio-selectbox", [{
      'ais-radio-active': $options.privateIsCheck == $props.value
    }]])
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)], 34)]);
}
// CONCATENATED MODULE: ./src/components/UiRadio/index.vue?vue&type=template&id=a7e78166&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiRadio/index.vue?vue&type=script&lang=js
/* harmony default export */ var UiRadiovue_type_script_lang_js = ({
  name: 'UiRadio',
  props: {
    name: {
      type: String,
      default: ''
    },
    checked: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    privateIsCheck: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('update:checked', val);
      }
    }
  },
  methods: {
    checkChange() {
      this.$emit('checkChange', this.checked);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UiRadio/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UiRadio/index.vue?vue&type=style&index=0&id=a7e78166&lang=scss&scoped=true
var UiRadiovue_type_style_index_0_id_a7e78166_lang_scss_scoped_true = __webpack_require__("b33c");

// CONCATENATED MODULE: ./src/components/UiRadio/index.vue







const UiRadio_exports_ = /*#__PURE__*/exportHelper_default()(UiRadiovue_type_script_lang_js, [['render',UiRadiovue_type_template_id_a7e78166_scoped_true_render],['__scopeId',"data-v-a7e78166"]])

/* harmony default export */ var UiRadio = (UiRadio_exports_);
// CONCATENATED MODULE: ./src/index.js
/*Wed Jan 11 2023 21:55:07 GMT+0800 (台北標準時間)*/






// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fba9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=ais-ui.umd.js.map