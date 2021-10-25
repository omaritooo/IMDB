import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
  },
  mutations: {
    setMode(state) {
      state.dark = !state.dark;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getState: (state) => state.dark,
  },
});
