<template>
  <div class="home">
    <!-- <ui-button-future leftIcon="leftIcon">默認大小</ui-button-future>
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
    <ui-button-future type="primary" round>默認大小</ui-button-future> -->
  </div>
  <br>
  <br>
  <br>
  <div class="home-phm">
    <h2>AIS-PHM use</h2>
  </div>
  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">方圓角 normal</h2>
  <div class="flex justify-center my-30px">
    <Button class=" w-160px mx-20px mb-0" type="" text="Button"></Button>
    <Button class=" w-160px mx-20px mb-0" type="" :disable="true" text="Button" ></Button>
  </div>


  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">方圓角 full</h2>  
  <div class="flex justify-center my-30px">
    <Button class=" w-160px mx-20px mb-0" type="full" text="Button" ></Button>
    <Button class=" w-160px mx-20px mb-0" type="full" :disable="true" text="Button" ></Button>
  </div>

  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">方圓角 Icon</h2>  

  <div class="flex justify-center my-30px">
    <Button class=" w-140px mx-20px mb-0" type="empty" text="Button" icon="dropdown"></Button>
    <Button class=" w-140px mx-20px mb-0" type="empty" :disable="true" text="Button" icon="add"></Button>
  </div>

  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">方圓角 link</h2>  

  <div class="flex justify-center my-30px">
      <Button class=" w-140px mx-20px mb-0" type="link" text="Button"  ></Button>
      <Button class=" w-140px mx-20px mb-0" type="link" :disable="true" text="Button" ></Button>
  </div>


  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">圓角 normal</h2>


  <div class="flex justify-center my-30px">
    <Button class=" w-160px mx-20px mb-0" type="" text="Button" borderRadius="" height="36"></Button>
    <Button class=" w-160px mx-20px mb-0" type="" :disable="true" text="Button"  borderRadius="" height="36"></Button>
  </div>

  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">圓角 full</h2>  

  <div class="flex justify-center my-30px">
    <Button class=" w-160px mx-20px mb-0" type="full" text="Button"  borderRadius="" height="36"></Button>
    <Button class=" w-160px mx-20px mb-0" type="full" :disable="true" text="Button"  borderRadius="" height="36"></Button>
  </div>

  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">圓角 Icon</h2>  
  <div class="flex justify-center my-30px">
    <Button class=" w-140px mx-20px mb-0" type="empty" text="Button" icon="dropdown"  borderRadius="" height="36"></Button>
    <Button class=" w-140px mx-20px mb-0" type="empty" :disable="true" text="Button" icon="dropdown"  borderRadius="" height="36"></Button>
  </div>
  <hr class="bg-grey-97 my-14px">
  <h2 class="my-14px">圓角 link</h2>  

  <div class="flex justify-center my-30px">
      <Button class=" w-140px mx-20px mb-0" type="link" text="Button" borderRadius="" height="36"></Button>
      <Button class=" w-140px mx-20px mb-0" type="link" :disable="true" text="Button" borderRadius="" height="36"></Button>
  </div>

  <hr class="bg-grey-97 my-30px">
    <!-- <router-view /> -->
</template>

<script>
  // import { defineComponent } from 'vue';
  import UiButtonFuture from '@/components/UiButtonFuture/index.vue'; // @ is an alias to /src
  import Button from '@/components/UiButton/index.vue'; // @ is an alias to /src

  export default {
    name: 'ButtonView',
    components: {
      UiButtonFuture,
      Button,
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
