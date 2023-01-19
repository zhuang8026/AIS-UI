"use strict";
exports.__esModule = true;
exports.clickOutside = void 0;
exports.clickOutside = {
    beforeMount: function (el, binding) {
        el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: function (el) {
        document.removeEventListener("click", el.clickOutsideEvent);
    }
};
