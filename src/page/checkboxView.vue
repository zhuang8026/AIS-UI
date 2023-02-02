<template>
  <div class="home">
    <h2>Check Box</h2>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check" @changeValue="isCheck"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check1" @changeValue="isCheck"></Checkbox>
    </div>
    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check2" @changeValue="isCheck" size="small"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check3" @changeValue="isCheck" size="small"></Checkbox>
    </div>

    <div class="flex">
      <Checkbox class="mt-5px" :options="validList" displayColumn="h" 
        label="" :value="check4" @changeValue="isCheck" show="true"></Checkbox>
        <Checkbox class="mt-30px" :options="validList" 
        label="" :value="check5" @changeValue="isCheck" size="small" show="true"></Checkbox>
    </div>

    <div class="flex">
      <Checkbox class="mt-5px" :options="validList2" displayColumn="h" 
        label="" :value="check6" @changeValue="isCheck" ></Checkbox>
        <Checkbox class="mt-30px" :options="validList2" 
        label="" :value="check7" @changeValue="isCheck" ></Checkbox>
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
          disabled: false,
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
      check: [],
      check1: [],
      check2: [],
      check3: [],
      check4: [],
      check5: [],
      check6: ['0','2'],
      check7: ['0'],

    };
  },
  methods: {
    isCheck(val: any) {
      console.log('checkChangeType1 checkbox: ', val);
    },

  },
};
</script>

