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
li
  list-style none
  padding 0
  margin 0
  &:hover
    background #DDD
</style>
