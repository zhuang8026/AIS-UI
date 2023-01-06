<template>
  <div class="home">
    <ui-button type="0" msg="0"/>
    <ui-button type="1" msg="1"/>
    <ui-button type="1" msg="Welcome to Your Vue.js + 1"/>
    <ui-button type="2"/>
    <ui-button type="2" msg="Welcome to Your Vue.js + 2"/>
  </div>
    <!-- <router-view /> -->
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiButton from '@/components/UiButton/index.vue'; // @ is an alias to /src

export default {
  name: 'ButtonView',
  components: {
    UiButton,
  },
  data() {
    return {
      radius: true,
    };
  },
};
</script>
<style lang="scss">
  .home {
    margin-top: 20px;
  }
</style>
