import './assets/scss/style-global.scss';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'
import PicIcon from './components/Icon/index.vue';
import vSelect from 'vue-select'
// import store from "./store";

let app = createApp(App).use(router)

//iCon component register globally
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('@/assets/icon', false, /.svg$/);
requireAll(req);
app.component('Icon', PicIcon)


//替換掉原本的下拉選單下拉icon
// import OpenIndicator from '@/components/Icon/OpenIndicator.vue' //原本的icon長相
// import SelectIcon from '@/components/Icon/SelectIcon.vue' //新的icon長相

// vSelect.props.components.default = () => ({ OpenIndicator, SelectIcon });
// app.component('v-select', vSelect)


// .use(store)

app.mount('#app')
