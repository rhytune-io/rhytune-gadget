<template lang="pug">
div.output
  header
    h3.gadget-header output
  div.outs
    //- pre {{ $store.getters.output }}
    div.outCol(v-for="lang in this.$store.state.langs.list.concat({id:'combined',name:'combined'})")
      h4 {{lang.name}}
      article
        p.line(v-for="line in $store.getters.output[lang.id]") {{line}}
</template>

<script>
export default {
  name: '',
  props: {
    msg: String,
  },
};
</script>

<style lang="stylus" scoped>
.output
  .outs
    display flex
    .outCol
      min-width 200px
</style>
