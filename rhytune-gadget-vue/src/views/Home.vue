<template lang="pug">
  div.home
    div 测试区
      Menu
        MenuItem(id="1",title="测试1",@click.native="alertMethod")
        MenuItem(id="2",title="测试2",@click.native="alertMethod")
    hr
    div 正式区
      Langs
</template>

<script>
/* eslint-disable no-alert */
// @ is an alias to /src
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import Langs from '@/components/Langs.vue';

export default {
  name: 'Home',
  components: {
    Menu,
    MenuItem,
    Langs,
  },
  computed: {
  },
  methods: {
    alertMethod() {
      alert(1);
    },
  },
};
</script>
