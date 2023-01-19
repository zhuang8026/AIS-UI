"use strict";
exports.__esModule = true;
var routerList = [
    {
        path: '/',
        name: '主頁',
        component: function () { return Promise.resolve().then(function () { return require('@/views/index.vue'); }); }
    },
    {
        path: '/ais',
        name: '元件頁面',
        component: function () { return Promise.resolve().then(function () { return require('@/views/Home.vue'); }); },
        children: [
            //   {
            //     path: '',
            //     name: '貢獻指南',
            //     component: () => import('/packages/Participation/doc/doc.md'),
            //   },
            //   {
            //     path: 'updatelog',
            //     name: '更新日志',
            //     component: () => import('/packages/updatelog/doc/doc.md'),
            //   },
            //   {
            //     path: 'install',
            //     name: '安裝使用',
            //     component: () => import('/packages/install/doc/doc.md'),
            //   },
            //   {
            //     path: 'demo',
            //     name: 'demo 範例',
            //     component: () => import('/packages/demo/doc/doc.md'),
            //   },
            //   {
            //     path: 'layout',
            //     name: 'Layout 佈局',
            //     component: () => import('/packages/layout/doc/doc.md'),
            //   },
            //   {
            //     path: 'color',
            //     name: 'Color 顔色',
            //     component: () => import('/packages/color/doc/doc.md'),
            //   },
            {
                path: 'iconPage',
                name: 'Icon 圖標',
                component: function () { return Promise.resolve().then(function () { return require('@/page/IconListView.vue'); }); }
            },
            // {
            //   path: 'iconPage',
            //   name: 'iconPage',
            //   component: () => import('@/page/IconListView.vue'),
            // },
            {
                path: 'button',
                name: 'Button 按鈕',
                component: function () { return Promise.resolve().then(function () { return require('@/page/ButtonView.vue'); }); }
            },
            {
                path: 'input',
                name: 'Input 輸入框',
                component: function () { return Promise.resolve().then(function () { return require('@/page/InputView.vue'); }); }
            },
            {
                path: 'modal',
                name: 'Modal',
                component: function () { return Promise.resolve().then(function () { return require('@/page/ModalView.vue'); }); }
            },
            //   {
            //     path: 'textarea',
            //     name: 'Textarea 文本域',
            //     component: () => import('/packages/textarea/doc/doc.md'),
            //   },
            //   {
            //     path: 'Space',
            //     name: 'Space 間距',
            //     component: () => import('/packages/Space/doc/doc.md'),
            //   },
            {
                path: 'newselect',
                name: 'Select',
                component: function () { return Promise.resolve().then(function () { return require('@/page/NewSelectView.vue'); }); }
            },
            {
                path: 'newmultiselect',
                name: 'multiSelect ',
                component: function () { return Promise.resolve().then(function () { return require('@/page/NewMultiSelectView.vue'); }); }
            },
            {
                path: 'select',
                name: 'VSelect',
                component: function () { return Promise.resolve().then(function () { return require('@/page/SelectView.vue'); }); }
            },
            {
                path: 'multiselect',
                name: 'multiVSelect',
                component: function () { return Promise.resolve().then(function () { return require('@/page/MultiSelectView.vue'); }); }
            },
            {
                path: 'datePicker',
                name: 'DatePicker',
                component: function () { return Promise.resolve().then(function () { return require('@/page/DatePickerView.vue'); }); }
            },
            //   {
            //     path: 'dropDown',
            //     name: 'Dropdown 下拉選單',
            //     component: () => import('/packages/dropDown/doc/doc.md'),
            //   },
            {
                path: 'radio',
                name: 'Radio 單選',
                component: function () { return Promise.resolve().then(function () { return require('@/page/RadioView.vue'); }); }
            },
            {
                path: 'checkbox',
                name: 'Checkbox 多選',
                component: function () { return Promise.resolve().then(function () { return require('@/page/checkboxView.vue'); }); }
            },
            {
                path: 'table',
                name: 'Table 表格',
                component: function () { return Promise.resolve().then(function () { return require('@/page/TableView.vue'); }); }
            },
        ]
    },
];
exports["default"] = routerList;
