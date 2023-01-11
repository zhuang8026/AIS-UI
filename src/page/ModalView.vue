<template>
  <div class="home">
    <h2>Modal - wd: default  </h2>
    <ui-button type="basic" round  @click="onClickModal">OpenModal</ui-button>

    <UiModal content="" v-model:isOpen="isOpenNormalUiModal" btnArrange="reverse" @onClickCancel="onClickCancel">
      <div class="detail-block">
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
      </div>
    </UiModal>
  <h2>Modal - wd: lg  </h2>
    <ui-button type="basic" round  @click="onClickModal2">OpenModal2</ui-button>

    <UiModal :btnConfirm="{}" content="" title="AAA" wd="lg" v-model:isOpen="isOpenNormalUiModal2" btnArrange="reverse" @onClickCancel="onClickCancel">
      <div class="detail-block">
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
        <p>AAA</p>
      </div>
    </UiModal>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
  import UiButton from '@/components/UiButton/index.vue'; // @ is an alias to /src

import UiModal from '@/components/UiModal/index.vue'; // @ is an alias to /src
import {ref} from 'vue';
export default {
  name: 'ModalView',
  components: {
    UiModal,
    UiButton,
  },
  setup(){
    let isOpenNormalUiModal = ref(false);
    let isOpenNormalUiModal2 = ref(false);
    let onClickModal = () => {
      isOpenNormalUiModal.value = true;
    }//end: onClickModal

    let onClickModal2 = () => {
      isOpenNormalUiModal2.value = true;
    }//end: onClickModal

    let onClickCancel = () => {
      isOpenNormalUiModal.value = false;
      console.log('onClickCancel',isOpenNormalUiModal.value)
    }

    return{
      onClickModal,
      isOpenNormalUiModal,
      isOpenNormalUiModal2,
      onClickCancel,
      onClickModal2,
    }

  }

};
</script>
