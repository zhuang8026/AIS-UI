<template>
  <div class="home">
    <h2>Check Box</h2>
    <hr class="bg-grey-97 my-14px">
    <h2 class="my-14px">Normal</h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check" @changeValue="isCheck"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check1" @changeValue="isCheck"></Checkbox>
    </div>
    <hr class="bg-grey-97 my-14px">
    <h2 class="my-14px">Small </h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check2" @changeValue="isCheck" size="small"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check3" @changeValue="isCheck" size="small"></Checkbox>
    </div>

    <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">Show 展示用，不能勾也沒有cursor </h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check4" @changeValue="isCheck" show="true"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check5" @changeValue="isCheck" size="small" show="true"></Checkbox>
    </div>


    <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">Disable &  Disable卻被預設勾選</h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList2" displayColumn="h" 
        label="" :value="check6" @changeValue="isCheck" ></Checkbox>
        <Checkbox class="mt-30px" :options="validList2" 
        label="" :value="check7" @changeValue="isCheck" ></Checkbox>
    </div>


    <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">樣式 是槓槓</h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check8" @changeValue="isCheck"  theme="line"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check9" @changeValue="isCheck" theme="line" ></Checkbox>
    </div>

    <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">綜合</h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList2" displayColumn="h" 
        label="" :value="check8" @changeValue="isCheck"  theme="line" size="small" ></Checkbox>
        <Checkbox class="mt-30px" :options="validList2" 
        label="" :value="check9" @changeValue="isCheck" theme="line" ></Checkbox>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import Checkbox from '@/components/UiCheckbox/index.vue'; // @ is an alias to /src

export default {
  name: 'checkboxView',
  components: {
    Checkbox,
  },
  data() {
    return {
      validList:  [
        {
          name:  '8-16characters',
          val: '0',
          disabled: false,
        },
        {
          name:  'include numbers',
          val: '1',
          disabled: false,
        },
        {
          name: 'include uppercase and lowercase',
          val: '2',
          disabled: false,
        },
        {
          name: 'include special characters',
          val: '3',
          disabled: false,
        }
      ],

      validList2:  [
        {
          name:  'aaaaaaa',
          val: '0',
          disabled: true,
        },
        {
          name:  'bbbbbbb',
          val: '1',
          disabled: true,
        },
        {
          name: 'gggggggg',
          val: '2',
          disabled: true,
        },
        {
          name: 'hhhhhhh',
          val: '3',
          disabled: false,
        }
      ],
      check: ['1','2'],
      check1: ['1','2'],
      check2: ['0'],
      check3: ['0'],
      check4: ['1','3'],
      check5: ['1','3'],
      check6: ['2'],
      check7: ['0'],
      check8: ['1','2','3'],
      check9: ['0','3'],

    };
  },
  methods: {
    isCheck(val: any) {
      console.log('checkChangeType1 checkbox: ', val);
    },

  },
};
</script>

