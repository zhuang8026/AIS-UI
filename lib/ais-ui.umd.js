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

/***/ "0b6d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a5a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f30":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "97e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_6c4f7258_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a5a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_6c4f7258_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_6c4f7258_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a9a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fba9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_eeb94a06_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b8e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_dc19f78c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db7c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_dc19f78c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_dc19f78c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "db7c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
__webpack_require__.d(__webpack_exports__, "UiCheckbox_2", function() { return /* reexport */ UiCheckbox_2; });
__webpack_require__.d(__webpack_exports__, "UiInput", function() { return /* reexport */ UiInput; });

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiCheckbox_2/index.vue?vue&type=template&id=6c4f7258&scoped=true

const UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-6c4f7258"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);
const UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_hoisted_1 = {
  class: "ui-checkbox"
};
const UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_hoisted_2 = ["id", "value"];
const _hoisted_3 = ["for"];
function UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "checkbox",
    id: $data.id,
    value: $props.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.privateIsCheck = $event),
    onChange: _cache[1] || (_cache[1] = $event => $options.checkChange($props.value))
  }, null, 40, UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_hoisted_2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelCheckbox"], $options.privateIsCheck]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: $data.id,
    class: "checkbox-style-block"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.text), 9, _hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)]);
}
// CONCATENATED MODULE: ./src/components/UiCheckbox_2/index.vue?vue&type=template&id=6c4f7258&scoped=true

// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_browser_stringify(b);
}

/* harmony default export */ var esm_browser_v1 = (v1);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/parse.js


function parse(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ var esm_browser_parse = (parse);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ var v35 = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_browser_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/md5.js
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ var esm_browser_md5 = (md5);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v3.js


var v3 = v35('v3', 0x30, esm_browser_md5);
/* harmony default export */ var esm_browser_v3 = (v3);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/sha1.js
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ var esm_browser_sha1 = (sha1);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v5.js


var v5 = v35('v5', 0x50, esm_browser_sha1);
/* harmony default export */ var esm_browser_v5 = (v5);
// CONCATENATED MODULE: ./node_modules/vue-uuid/dist/index.esm.js


// @ts-check
/**
 * @typedef {Object} UUID
 * @property {typeof v1} v1
 * @property {typeof v3} v3
 * @property {typeof v4} v4
 * @property {typeof v5} v5
 */

/**
 * An object with uuid's v1, v3, v4 and v5 functions.
 * @type {UUID}
 */

var index_esm_uuid = {
  v1: esm_browser_v1,
  v3: esm_browser_v3,
  v4: esm_browser_v4,
  v5: esm_browser_v5
};
/**
 * @typedef {import('vue').App<HostElement>} App
 * @template HostElement
 */

/**
 * Defines '$uuid' property globally, to be accessed in any component instance
 * inside the application. The '$uuid' is an object with uuid's v1, v3, v4 and
 * v5 functions.
 *
 * @example
 * import Vue from 'vue';
 * import withUUID from 'vue-uuid';
 *
 * const app = withUUID(
 *   createApp({
 *     // ...
 *   }),
 * );
 *
 * app.component('c-button', {
 *   created() {
 *     this.id = this.$uuid.v4();
 *   }
 * });
 * @param {App<HostElement>} app
 * @returns {App<HostElement>}
 * @template HostElement
 */

function withUUID(app) {
  app.config.globalProperties["$uuid"] = index_esm_uuid;
  return app;
}



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiCheckbox_2/index.vue?vue&type=script&lang=js

/* harmony default export */ var UiCheckbox_2vue_type_script_lang_js = ({
  name: 'UiCheckbox',
  props: {
    text: {
      type: String,
      default: ''
    },
    isCheck: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: index_esm_uuid.v4()
    };
  },
  computed: {
    privateIsCheck: {
      get() {
        return this.isCheck;
      },
      set(val) {
        this.$emit('update:isCheck', val);
      }
    }
  },
  methods: {
    checkChange(val) {
      console.log('checkbox ui status ->', val);
      this.$emit('checkChange', val);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UiCheckbox_2/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UiCheckbox_2/index.vue?vue&type=style&index=0&id=6c4f7258&lang=scss&scoped=true
var UiCheckbox_2vue_type_style_index_0_id_6c4f7258_lang_scss_scoped_true = __webpack_require__("97e1");

// CONCATENATED MODULE: ./src/components/UiCheckbox_2/index.vue







const UiCheckbox_2_exports_ = /*#__PURE__*/exportHelper_default()(UiCheckbox_2vue_type_script_lang_js, [['render',UiCheckbox_2vue_type_template_id_6c4f7258_scoped_true_render],['__scopeId',"data-v-6c4f7258"]])

/* harmony default export */ var UiCheckbox_2 = (UiCheckbox_2_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiInput/index.vue?vue&type=template&id=dc19f78c&scoped=true

const UiInputvue_type_template_id_dc19f78c_scoped_true_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-dc19f78c"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);
const UiInputvue_type_template_id_dc19f78c_scoped_true_hoisted_1 = ["value"];
function UiInputvue_type_template_id_dc19f78c_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("input", {
    type: "text",
    value: $props.msg
  }, null, 8, UiInputvue_type_template_id_dc19f78c_scoped_true_hoisted_1);
}
// CONCATENATED MODULE: ./src/components/UiInput/index.vue?vue&type=template&id=dc19f78c&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UiInput/index.vue?vue&type=script&lang=js
/* harmony default export */ var UiInputvue_type_script_lang_js = ({
  name: 'UiInput',
  props: {
    msg: {
      type: String,
      default: '人生漫漫, 喜樂無常'
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/components/UiInput/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UiInput/index.vue?vue&type=style&index=0&id=dc19f78c&scoped=true&lang=css
var UiInputvue_type_style_index_0_id_dc19f78c_scoped_true_lang_css = __webpack_require__("b8e8");

// CONCATENATED MODULE: ./src/components/UiInput/index.vue







const UiInput_exports_ = /*#__PURE__*/exportHelper_default()(UiInputvue_type_script_lang_js, [['render',UiInputvue_type_template_id_dc19f78c_scoped_true_render],['__scopeId',"data-v-dc19f78c"]])

/* harmony default export */ var UiInput = (UiInput_exports_);
// CONCATENATED MODULE: ./src/index.js
/*Wed Jan 11 2023 14:58:26 GMT+0800 (台北標準時間)*/






// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fba9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=ais-ui.umd.js.map