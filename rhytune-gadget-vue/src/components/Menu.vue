<template lang="pug">
  a.menu
    //- pre {{ menu }}
    span.menu_btn {{ title }}
    ul.menu_list
      slot
</template>

<script>
/* eslint-disable no-alert */
export default {
  name: 'Menu',
  props: {
    title: String,
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
    background #fff
    display none
    border 1px solid #ddd
    box-shadow 0 0 3px #ddd
    position absolute
    top 100%
    left 0
    margin 0
    padding 0
    min-width 100px
</style>
