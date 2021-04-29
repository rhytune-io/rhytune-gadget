<template lang="pug">
  li(:id="id") {{ title }}
</template>

<script>
/* eslint-disable no-alert */
export default {
  name: 'MenuItem',
  props: {
    title: String,
    id: String,
    action: Object,
  },
  methods: {
    alertAction(item) {
      if (typeof item.action === 'object') {
        item.action();
      } else {
        alert(item.action);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.menu
  position relative
  border 1px solid #777
  cursor pointer
  &:hover
    ul.menu_list
      display block
  .menu_btn
    background #ddd
  ul.menu_list
    display none
    border 1px solid #ddd
    box-shadow 0 0 3px #ddd
    position absolute
    top 100%
    left 0
    margin 0
    padding 0
    min-width 100px
    li
      list-style none
      padding 0
      margin 0
</style>
