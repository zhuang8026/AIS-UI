<template>
  <div class="home">
    <h2>TextBox</h2>
    <hr/>
    <ui-input 
      type="text"
      placeholder="基本使用"
      v-model:defaultValue="text"
    />
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput/index.vue'; // @ is an alias to /src

export default {
  name: 'ButtonView',
  components: {
    UiInput,
  },
  data() {
    return {
      text: 'Input Text',
    };
  },
};
</script>
<style lang="scss" scope>
//
</style>