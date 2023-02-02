"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var index_vue_1 = require("@/components/Icon/index.vue");
exports["default"] = {
    components: {
        Icon: index_vue_1["default"]
    },
    props: {
        disable: {
            type: Boolean,
            "default": false
        },
        text: {
            type: String,
            "default": ''
        },
        type: {
            type: String,
            "default": 'normal'
        },
        borderRadius: {
            type: String,
            required: false,
            "default": 'ehs'
        },
        icon: {
            type: String,
            "default": ''
        },
        custom: {
            type: String,
            "default": ''
        },
        forVal: {
            type: String,
            "default": ''
        },
        id: {
            type: String,
            "default": ''
        },
        height: {
            type: [String, Number],
            required: false
        },
        textSize: {
            type: String,
            required: false,
            "default": '14'
        }
    },
    setup: function (props, _a) {
        var emit = _a.emit;
        // const {  type, disable, wd, icon, h } = props;
        var icon = props.icon;
        var state = vue_1.reactive({
            disable: props.disable
        });
        // methods
        var onClick = function () {
            if (!state.disable) {
                emit('onClick');
            }
        };
        // computed
        var buttonStatus = vue_1.computed(function () { return [
            props.disable ? props.type + ' ' + 'disable' : props.type,
        ]; });
        vue_1.watch(function () { return (props); }, function (val) {
            state.disable = val.disable;
        }, { deep: true });
        return {
            state: state,
            buttonStatus: buttonStatus,
            onClick: onClick
        };
    } // end: setup
};
