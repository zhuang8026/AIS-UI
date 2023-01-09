<template>
  <div class="home">
    <ui-button leftIcon="leftIcon">默認大小</ui-button>
    <ui-button type="primary">默認大小</ui-button>
    <ui-button type="success" size="medium">中等大小</ui-button>
    <ui-button type="danger" size="medium">中等大小</ui-button>
    <ui-button type="warning" size="small">小型按鈕</ui-button>
    <ui-button type="dashed" size="mini">超小按鈕</ui-button>
    <ui-button type="text" size="mini">超小按鈕</ui-button>
    <hr/>
    <ui-button type="custom" customColor="#9935f5">自定義顔色</ui-button> 
    <ui-button type="custom" customColor="#1ba7dd">自定義顔色</ui-button> 
    <hr/>
    <ui-button round>默認大小</ui-button>
    <ui-button type="primary" round>默認大小</ui-button>
  </div>
    <!-- <router-view /> -->
</template>

<script>
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
<script setup>
  const openConfirm = () => {
      alert('here!');
  };
</script>

<style lang="scss">
  .home {
    margin-top: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>
