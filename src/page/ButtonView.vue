<template>
  <div class="home">
    <ui-button-future leftIcon="leftIcon">默認大小</ui-button-future>
    <ui-button-future type="primary">默認大小</ui-button-future>
    <ui-button-future type="success" size="medium">中等大小</ui-button-future>
    <ui-button-future type="danger" size="medium">中等大小</ui-button-future>
    <ui-button-future type="warning" size="small">小型按鈕</ui-button-future>
    <ui-button-future type="dashed" size="mini">超小按鈕</ui-button-future>
    <ui-button-future type="text" size="mini">超小按鈕</ui-button-future>
    <hr/>
    <ui-button-future type="custom" customColor="#9935f5">自定義顔色</ui-button-future> 
    <ui-button-future type="custom" customColor="#1ba7dd">自定義顔色</ui-button-future> 
    <hr/>
    <ui-button-future round>默認大小</ui-button-future>
    <ui-button-future type="primary" round>默認大小</ui-button-future>
  </div>
  <br>
  <br>
  <br>
  <div class="home-phm">
    <h2>AIS-PHM use</h2>
  </div>
  <div class="home home-phm">
    <h3>Basic</h3>
    <ui-button type="basic" round>Basic</ui-button>
    <ui-button type="basic" disabled round>Basic Disabled</ui-button>
    <p>type="basic" round</p>
    <hr/>
    <h3>Importance</h3>
    <ui-button type="importance" round>Importance</ui-button>
    <ui-button type="importance" disabled round>Importance</ui-button>
    <p>type="importance" round</p>
    <hr/>
    <h3>Small</h3>
    <ui-button type="small" round>Small</ui-button>
    <ui-button type="small" disabled round>Small</ui-button>
    <p>type="small" round</p>
    <hr/>
    <h3>Small Important</h3>
    <ui-button type="small-important" round>Important</ui-button>
    <ui-button type="small-important" disabled round>Important</ui-button>
    <p>type="small-important" round</p>
    <hr/>
    <h3>Custom 160px(width="lg")</h3>
    <ui-button type="small" width="lg" round>Small Custom</ui-button>
    <ui-button type="small-important" width="lg" disabled round>Small Custom</ui-button>
    <p>type="small" width="lg" round </p>
    <hr/>
    <h3>Custom 132px(width="md")</h3>
    <ui-button type="small" width="md" round>Small Custom</ui-button>
    <ui-button type="small-important" width="md" disabled round>Small Custom</ui-button>
    <p>type="small" width="md" round</p>
    <hr/>
    <h3>Custom 69px(width="sm")</h3>
    <ui-button type="small" width="sm" round>Small</ui-button>
    <ui-button type="small-important" width="sm" disabled round>Small</ui-button>
    <p>type="small" width="sm" round</p>
    <hr/>
    <h3>btn-icon right</h3>
    <div class="flex-center">
      <ui-button type="add-icon" round rightIcon icon="modelmanagement">Small Custom</ui-button>
      <ui-button type="add-icon" disabled round rightIcon icon="modelmanagement">Small Custom</ui-button>
    </div>
    <p>type="add-icon" round rightIcon icon="modelmanagement"</p>
    <hr/>
    <h3>btn-icon left</h3>
    <div class="flex-center">
      <ui-button type="add-icon" round leftIcon icon="modelmanagement">Small Custom</ui-button>
      <ui-button type="add-icon" disabled round leftIcon icon="modelmanagement">Small Custom</ui-button>
    </div>
    <p>type="add-icon" round leftIcon icon="modelmanagement"</p>
    <hr/>
    <h3>icon</h3>
    <div class="flex-center">
      <ui-button type="icon" icon="modelmanagement" leftIcon>Text + icon</ui-button>
      <ui-button type="icon" icon="modelmanagement" leftIcon disabled>Text + icon</ui-button>
    </div>
    <p>type="icon" icon="modelmanagement" leftIcon</p>
    <a href="https://codepen.io/martinridgway/pen/jOqVOgg">color change to svg filter</a>
    <hr/>
    <h3>HyperLink</h3>
    <ui-button type="hyperLink">HyperLink</ui-button>
    <ui-button type="hyperLink" disabled>HyperLink</ui-button>
    <p>type="hyperLink"</p>
  </div>
    <!-- <router-view /> -->
</template>

<script>
  // import { defineComponent } from 'vue';
  import UiButtonFuture from '@/components/UiButtonFuture/index.vue'; // @ is an alias to /src
  import UiButton from '@/components/UiButton/index.vue'; // @ is an alias to /src

  export default {
    name: 'ButtonView',
    components: {
      UiButtonFuture,
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
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
