/* eslint-disable no-alert */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    langs: {},
    output: {},
    sources: {},
    system: {
      menus: {
        test: [
          { id: 1, title: '功能1', action: 11 },
          { id: 2, title: '功能2', action: 122 },
          { id: 3, title: 'alert3', action: 3 },
        ],
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
