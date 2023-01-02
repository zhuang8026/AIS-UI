<template>
  <div class="home">
    <ui-button msg="1" type="2" />
    <ui-button msg="Welcome to Your Vue.js + 1" type="1" />
    <ui-button type="0" />
    <ui-button msg="Welcome to Your Vue.js + 2" type="2" />
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
