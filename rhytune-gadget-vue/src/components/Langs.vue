<template lang="pug">
<!-- /* eslint-disable max-len */ -->
div.langs
  header
    h3.gadget-header langs
    Menu(title="+ ADD")
      MenuItem(
        v-for="lang in this.$store.state.system.langs.lang_array" :key="lang.id"
        :id="lang.id",:title="lang.name"
        @click.native="commit('updateLangsList', $store.state.langs.list.concat(lang))"
      )
    Menu(title="+ PRESETS")
      MenuItem(id="1",title="测试1",@click.native="alertMethod")
  div
    //- p {{ this.$store.state.langs.list }}
    draggable.dragArea.list-group(
      v-model="langList"
      :group="{ name: 'people', pull: 'clone', put: false }"
      @change="log"
    )
        div.list-group-item(
          class="dragItem"
          v-for="lang in this.$store.state.langs.list",:key="lang.id") {{ lang.name }}
    draggable.dragArea.list-group(
      v-model="langDropList"
      group="people"
      @change="log"
    )
        div.list-group-item(
          class="dragItem"
          v-for="lang in this.$store.state.langs.listDrop",:key="lang.id") {{ lang.name }}
</template>

<script>
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import draggable from 'vuedraggable';

export default {
  name: 'Langs',
  props: {
    msg: String,
  },
  components: {
    Menu,
    MenuItem,
    draggable,
  },
  methods: {
    log(evt) {
      window.console.log(evt);
    },
    commit(mutations, payload) {
      this.$store.commit(mutations, payload);
    },
  },
  computed: {
    langList: {
      get() {
        return this.$store.state.langs.list;
      },
      set(value) {
        this.$store.commit('updateLangsList', value);
      },
    },
    langDropList: {
      get() {
        return this.$store.state.langs.listDrop;
      },
      set(value) {
        this.$store.commit('updateLangsListDrop', value);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
.langs
  max-width 200px
h3
  // font-size 1
</style>
