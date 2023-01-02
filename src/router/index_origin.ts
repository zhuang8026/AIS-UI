import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView   from '@/page/HomeView.vue';
import ButtonView from '@/page/ButtonView.vue';
import InputView  from '@/page/InputView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'button',
    path: '/button',
    component: ButtonView,
    // 記得需要在“pageView”掛上“router-view”
    children: [
      {
        path: 'input2',
        name: 'input2',
        component: InputView,
      },
    ]
  },
  {
    name: 'input',
    path: '/input',
    component: InputView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
