"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
exports["default"] = {
    components: {},
    props: {
        error: String,
        displayColumn: String,
        optionDisplayColumn: {
            type: Boolean,
            required: false,
            "default": false
        },
        options: {
            type: Array,
            required: true
        },
        label: {
            type: String,
            required: false
        },
        value: {
            type: Array,
            required: true
        },
        theme: {
            type: String,
            required: false,
            "default": ''
        },
        size: {
            type: String,
            required: false,
            "default": ''
        },
        required: Boolean,
        show: {
            type: Boolean,
            required: false,
            "default": false
        },
        margin: {
            type: String,
            required: false,
            "default": ''
        }
    },
    setup: function (props, _a) {
        // const { isCheck, text, layout, size, isError, isDisable, isSlot } = props;
        var emit = _a.emit;
        var state = vue_1.reactive({});
        var checkedValue = vue_1.computed({
            get: function () { return props.value; },
            set: function (val) {
                emit('update:value', val);
                emit('changeValue', val);
            }
        });
        return {
            state: state,
            checkedValue: checkedValue
        };
    } // end: setup
};
