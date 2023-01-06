// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { defineStore } from 'pinia';
const useMainStore = defineStore('main', {
  state: () => {
    return {
      lang: 'CN',
    };
  },
  actions: {
    setLang(langs: string) {
      this.lang = langs;
    },
  },
  getters: {
    getLang: (state) => {
      return state.lang;
    },
  },
});

export default useMainStore;
