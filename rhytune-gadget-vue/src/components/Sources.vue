<template lang="pug">
div.sources
  header
    h3.gadget-header langs
  div.sources_list
    div(v-for="source in this.$store.state.sources.sources_array")
      {{source.texts}}
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
