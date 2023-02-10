"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var index_vue_1 = require("@/components/UiButton/index.vue");
exports["default"] = {
    components: {
        UiButton: index_vue_1["default"]
    },
    props: {
        isVerify: {
            type: String
        },
        isConfirmClose: {
            type: Boolean,
            "default": true
        },
        isOpen: {
            type: Boolean,
            "default": false
        },
        wd: {
            type: String,
            "default": 'default'
        },
        minH: {
            type: String,
            "default": "default"
        },
        titleH: {
            type: String,
            "default": 'default'
        },
        title: {
            type: String,
            "default": 'Title Main Here'
        },
        subTitle: {
            type: String,
            "default": ''
        },
        alignTitle: {
            type: String,
            "default": 'center'
        },
        alignBtn: {
            type: String,
            "default": 'center'
        },
        imgLink: {
            type: String,
            "default": '' // 
        },
        content: {
            type: String,
            "default": 'content here'
        },
        contentSpace: {
            type: String,
            "default": 'none'
        },
        contentTDSpace: {
            type: String,
            "default": 'default'
        },
        borderRadius: {
            type: String,
            "default": 'ehs'
        },
        // isHasCancel: {
        //   type: Boolean,
        //   default: true,
        // },
        // isHasConfirm: {     //是否需要關閉按鈕
        //   type: Boolean,
        //   default: false,
        // },
        btnCancel: {
            type: Object,
            "default": function () {
                return {
                    text: 'Cancel',
                    disable: false,
                    theme: '2',
                    color: 'transprent',
                    type: 'default',
                    wd: 'auto'
                };
            }
        },
        btnConfirm: {
            type: Object,
            "default": function () {
                return {
                    text: 'Confirm',
                    disable: false,
                    theme: '2',
                    color: 'transprent',
                    type: 'full',
                    wd: 'auto'
                };
            }
        },
        isHasClose: {
            type: Boolean,
            "default": false
        },
        btnArrange: {
            type: String,
            "default": 'default'
        }
    },
    setup: function (props, _a) {
        var emit = _a.emit;
        var wd = props.wd, title = props.title, subTitle = props.subTitle, alignTitle = props.alignTitle, alignBtn = props.alignBtn, isOpen = props.isOpen, isConfirmClose = props.isConfirmClose, contentSpace = props.contentSpace, btnArrange = props.btnArrange, contentTDSpace = props.contentTDSpace, titleH = props.titleH;
        var styleClass = vue_1.computed(function () { return [
            'wd--' + wd,
            { 'style--no-title': title === '' && subTitle == '' },
            'title--align-' + alignTitle,
            'btn--align-' + alignBtn,
            'space--content-' + contentSpace,
            'space--content-td-' + contentTDSpace,
            'h--title-' + titleH,
            'btn--arrange-' + btnArrange,
            'min-h--' + props.minH,
        ]; }); //end: styleCalsee
        var btnNum = vue_1.ref(0);
        var privateIsOpen = vue_1.computed({
            get: function () { return isOpen; },
            set: function (val) {
                emit('update:isOpen', val);
            }
        });
        var clickCancel = function () {
            privateIsOpen.value = false;
            emit('onClickCancel');
        };
        var clickConfirm = function () {
            if (isConfirmClose)
                privateIsOpen.value = false;
            emit('onClickConfirm');
        };
        vue_1.watch(function () { return props.isOpen; }, function (val) {
            if (val) {
                document.body.style.top = "-" + window.scrollY + "px";
                document.body.classList.add("style--fixed");
                // document.getElementById("app-main-page").className = 'style--fixed';
            }
            else {
                var scrollY = document.body.style.top;
                document.body.style.top = '';
                document.body.classList.remove('style--fixed');
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });
        vue_1.onMounted(function () {
            var isHasBtnCancel = props.btnCancel.hasOwnProperty('text');
            var isHasBtnConfirm = props.btnConfirm.hasOwnProperty('text');
            if (!(isHasBtnCancel && isHasBtnConfirm)) {
                btnNum.value = 1;
            }
        });
        var onClickCancel = function () {
            privateIsOpen.value = false;
            // store.commit('setCloseModal');
            emit('onClickCancel');
        };
        return {
            styleClass: styleClass,
            clickCancel: clickCancel,
            clickConfirm: clickConfirm,
            privateIsOpen: privateIsOpen,
            onClickCancel: onClickCancel,
            btnNum: btnNum
        };
    }
};
