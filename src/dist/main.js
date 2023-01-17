"use strict";
exports.__esModule = true;
require("./assets/scss/style-global.scss");
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
require("./index.css");
var vue_select_1 = require("vue-select");
// import store from "./store";
var app = vue_1.createApp(App_vue_1["default"]).use(router_1["default"]);
//iCon component register globally (全局註冊的話要加這段喔!!!!)
// import PicIcon from './components/Icon/index.vue';
// const requireAll = (requireContext) => requireContext.keys().map(requireContext);
// const req = require.context('@/components/assets/icon', false, /.svg$/);
// requireAll(req);
// app.component('Icon', PicIcon)
//替換掉原本的下拉選單下拉icon
var OpenIndicator_vue_1 = require("@/components/Icon/OpenIndicator.vue"); //原本的icon長相
var SelectIcon_vue_1 = require("@/components/Icon/SelectIcon.vue"); //新的icon長相
vue_select_1["default"].props.components["default"] = function () { return ({ OpenIndicator: OpenIndicator_vue_1["default"], SelectIcon: SelectIcon_vue_1["default"] }); };
app.component('v-select', vue_select_1["default"]);
// .use(store)
app.mount('#app');
