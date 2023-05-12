import { RouteRecordRaw } from "vue-router";

const routerList: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '主頁',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/ais',
    name: '元件頁面',
    component: () => import('@/views/Home.vue'),
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
        component: () => import('@/page/IconListView.vue'),
      },
      // {
      //   path: 'iconPage',
      //   name: 'iconPage',
      //   component: () => import('@/page/IconListView.vue'),
      // },
      {
        path: 'button',
        name: 'Button 按鈕',
        component: () => import('@/page/ButtonView.vue'),
      },
      {
        path: 'input',
        name: 'Input 輸入框',
        component: () => import('@/page/InputView.vue'),
      },
      {
        path: 'modal',
        name: 'Modal',
        component: () => import('@/page/ModalView.vue'),
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
      component: () => import('@/page/NewSelectView.vue'),
    },
    {
      path: 'newmultiselect',
      name: 'multiSelect ',
      component: () => import('@/page/NewMultiSelectView.vue'),
    },
    {
      path: 'select',
      name: 'VSelect',
      component: () => import('@/page/SelectView.vue'),
    },
    {
      path: 'multiselect',
      name: 'multiVSelect',
      component: () => import('@/page/MultiSelectView.vue'),
    },
    {
      path: 'datePicker',
      name: 'DatePicker',
      component: () => import('@/page/DatePickerView.vue'),
    },
    //   {
    //     path: 'dropDown',
    //     name: 'Dropdown 下拉選單',
    //     component: () => import('/packages/dropDown/doc/doc.md'),
    //   },
      {
        path: 'radio',
        name: 'Radio 單選',
        component: () => import('@/page/RadioView.vue'),
      },
      {
        path: 'checkbox',
        name: 'Checkbox 多選',
        component: () => import('@/page/checkboxView.vue'),
      },
      {
        path: 'hint',
        name: 'hint 提示',
        component: () => import('@/page/hintView.vue'),
      },
      {
        path: 'table',
        name: 'Table 表格',
        component: () => import('@/page/TableView.vue'),
      },
    //   {
    //     path: 'optfile',
    //     name: 'Optfile 文件選擇',
    //     component: () => import('/packages/optfile/doc/doc.md'),
    //   },
    //   // {
    //   //   path: 'badge',
    //   //   name: 'badge 徽章',
    //   //   component: () => import('/packages/badge/doc/doc.md')
    //   // },
    //   {
    //     path: 'table',
    //     name: 'Table 表格',
    //     component: () => import('/packages/table/doc/doc.md'),
    //   },
    //   {
    //     path: 'pagination',
    //     name: 'Pagination 分頁',
    //     component: () => import('/packages/pagination/doc/doc.md'),
    //   },
    //   {
    //     path: 'date',
    //     name: 'Datepicker 日期選擇',
    //     component: () => import('/packages/date/doc/doc.md'),
    //   },
    //   {
    //     path: 'tree',
    //     name: 'Tree 樹型控制',
    //     component: () => import('/packages/tree/doc/doc.md'),
    //   },
    //   {
    //     path: 'menu',
    //     name: 'Menu 菜單',
    //     component: () => import('/packages/menu/doc/doc.md'),
    //   },
    //   {
    //     path: 'tabs',
    //     name: 'Tab 切換',
    //     component: () => import('/packages/tabs/doc/doc.md'),
    //   },
    //   {
    //     path: 'progress',
    //     name: 'Progress 進度條',
    //     component: () => import('/packages/progress/doc/doc.md'),
    //   },
    //   {
    //     path: 'message',
    //     name: 'Message 消息提示',
    //     component: () => import('/packages/message/doc/doc.md'),
    //   },
    //   {
    //     path: 'confirm',
    //     name: 'Confirm 消息確認',
    //     component: () => import('/packages/confirm/doc/doc.md'),
    //   },
    //   {
    //     path: 'modal',
    //     name: 'Modal 弹窗',
    //     component: () => import('/packages/modal/doc/doc.md'),
    //   },
    //   {
    //     path: 'drawer',
    //     name: 'Drawer 抽屜',
    //     component: () => import('/packages/drawer/doc/doc.md'),
    //   },
    //   {
    //     path: 'loading',
    //     name: 'Loading 載入中',
    //     component: () => import('/packages/loading/doc/doc.md'),
    //   },
    //   {
    //     path: 'backtop',
    //     name: 'Backtop 回到頂部',
    //     component: () => import('/packages/backtop/doc/doc.md'),
    //   },
    //   // {
    //   //   path: 'popover',
    //   //   name: 'Popover 弹窗框',
    //   //   component: () => import('/packages/popover/doc/doc.md')
    //   // },
    //   // {
    //   //   path: 'colorPicker',
    //   //   name: 'colorPicker 顔色選擇器',
    //   //   component: () => import('/packages/colorPicker/doc/doc.md')
    //   // },
    //   // {
    //   //   path: 'breadcrumb',
    //   //   name: 'breadcrumb 面包屑',
    //   //   component: () => import('/packages/breadcrumb/doc/doc.md')
    //   // },
    //   {
    //     path: 'divider',
    //     name: 'divider 分割缐',
    //     component: () => import('/packages/divider/doc/doc.md'),
    //   },
    ],
  },
]

export default routerList;