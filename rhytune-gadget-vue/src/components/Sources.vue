<template lang="pug">
div.sources
  header
    h3.gadget-header sources
    a.add(@click="commit('addSources')") +ADD
  div.sources_list
    div.source_item(v-for="(source,idx) in this.$store.state.sources.sources_array")
      textarea(v-model="source.texts")
      //- draggable.dragArea.list-group(
      //-   v-model="sourceLangs[idx]"
      //-   group="people"
      //-   @change="log"
      //- )
      //-   div.list-group-item(
      //-     class="dragItem"
      //-     v-for="lang in sourceLangs[idx]",:key="lang.id") {{ lang.name }}
      draggable.dragArea.list-group(
        :value="sources_array[idx].langs"
        @change="changeSourcesArray($event, idx, $event.added.element)"
        group="people"
      )
        div.list-group-item(
          class="dragItem"
          v-for="lang in sources_array[idx].langs",:key="lang.id") {{ lang.name }}
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'Sources',
  props: {
    msg: String,
  },
  components: {
    draggable,
  },
  methods: {
    changeSourcesArray(evt, idx, item) {
      const sourcesArray = this.$store.state.sources.sources_array;
      sourcesArray[idx].langs = Array.from(new Set(sourcesArray[idx].langs.concat(item)));
      window.console.log(evt, idx, { name: item.name, id: item.id });
      this.$store.commit('updateSourcesArray', sourcesArray);
    },
    commit(mutations, payload) {
      this.$store.commit(mutations, payload);
    },
  },
  data() {
    return {
      sourceLangs: Array(100).fill([])
      ,
    };
  },
  computed: {
    sources_array: {
      get() {
        return this.$store.state.sources.sources_array;
      },
      set(value) {
        this.$store.commit('updateSourcesArray', value);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.sources_list
  display flex
  .source_item
    // min-width 300px
    // max-width 400px
    textarea
      min-width 250px
      min-height 300px
</style>
