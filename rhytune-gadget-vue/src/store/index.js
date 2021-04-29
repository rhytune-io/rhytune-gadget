/* eslint-disable no-alert */
import Vue from 'vue';
import Vuex from 'vuex';
// import { uniqBy } from 'lodash';

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
        { texts: '', langs: [] },
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
  getters: {
    output: (state) => {
      const out = {};
      let idx = 0;
      state.sources.sources_array.forEach((item) => {
        item.texts.split('\n').forEach((line) => {
          if (line.length) {
            const langId = item.langs.length ? item.langs[(idx) % item.langs.length].id : 0;
            out[langId] = out[langId] ? out[langId].concat(line) : [line];
            idx += 1;
          // debugger;
          }
        });
      });
      // 取数组长度之间的最大值
      const maxLength = Math.max.apply('', Object.values(out).map((item) => item.length));
      // debugger;
      // 生成最长空数组，内部为 map
      const combined2d = Array(maxLength).fill([]).map((item, index) => Object.keys(out).map((langId) => (out[langId][index] ? out[langId][index] : '')));
      // 扁平化
      out.combined = combined2d.flat();
      // debugger;
      return out;
    },
  },
  mutations: {
    updateLangsList(state, value) {
      state.langs.list = Array.from(new Set(value));
    },
    updateLangsListDrop(state, value) {
      state.langs.listDrop = Array.from(new Set(value));
    },
    updateSourcesArray(state, value) {
      state.sources.sources_array = value.map((item) => ({
        texts: item.texts,
        langs: item.langs,
        // langs: uniqBy(item.langs, 'id'),
      }));
    },
    addSources(state) {
      state.sources.sources_array.push({ texts: '', langs: [] });
    },
  },
  actions: {},
  modules: {},
});
