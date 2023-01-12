<template>
  <div class="home">
    <h2>Check Box</h2>
    <hr />
    <h2>Normal</h2>
    <div class="main_checkbox">
      <ui-checkbox
        type="default"
        v-model:checked="checked1"
        @change="checkChangeType1($event)"
      >Normal - {{ checked1 }}</ui-checkbox>
      <ui-checkbox
        type="selectbox"
        v-model:checked="checked2"
        @change="checkChangeType2($event)"
      >Normal - {{ checked2 }}</ui-checkbox>
    </div>
    <hr />
    <h2>Disable</h2>
    <div class="main_checkbox">
      <ui-checkbox
        type="default"
        v-model:checked="checked3"
        :disabled="disabled"
        @change="checkChangeType1($event)"
      >Disable</ui-checkbox>
      <ui-checkbox
        type="selectbox"
        v-model:checked="checked3"
        :disabled="disabled"
        @change="checkChangeType2($event)"
      >Disable</ui-checkbox>
      <ui-checkbox type="default" :disabled="disabled">Disable</ui-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiCheckbox from '@/components/UiCheckbox/index.vue'; // @ is an alias to /src

export default {
  name: 'checkboxView',
  components: {
    UiCheckbox,
  },
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: true,
      disabled: true,
    };
  },
  methods: {
    checkChangeType1(val: any) {
      console.log('checkChangeType1 checkbox: ', val);
    },
    checkChangeType2(val: any) {
      console.log('checkChangeType2 checkbox: ', val);
    },
  },
};
</script>

<style lang="scss">
.home {
  margin-top: 20px;
}
.main_checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
