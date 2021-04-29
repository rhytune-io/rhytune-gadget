/* eslint-disable no-alert */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    langs: {
      list: [
        // { id: 'ja_jp', name: 'ja_jp' },
      ],
      listDrop: [
        // { id: 'en_jp', name: 'en_jp' },
      ],
    },
    output: {},
    sources: {
      sources_array: [
        { texts: '123', langs: '' },
      ],
    },
    system: {
      langs: {
        lang_array: [
          { id: 'ja_jp', name: 'ja_jp' },
          { id: 'ja_jp_romanji', name: 'ja_jp romanji' },
          { id: 'zh_cn', name: 'zh_cn' },
        ],
      },
    },
  },
  mutations: {
    updateLangsList(state, value) {
      state.langs.list = Array.from(new Set(value));
    },
    updateLangsListDrop(state, value) {
      state.langs.listDrop = Array.from(new Set(value));
    },
  },
  actions: {},
  modules: {},
});
