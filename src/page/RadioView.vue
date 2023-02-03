<template>
  <div class="home">
    <h2>Radio btn</h2>
    <hr/>
    <h2 class="my-14px">Normal</h2>
    <div class="flex">
      <Radio class="mt-5px" :options="validList" displayColumn="h" 
        label="" v-model:value="check" @changeValue="isCheck"></Radio>
        <Radio class="mt-30px" :options="validList" 
        label="" v-model:value="check1" @changeValue="isCheck"></Radio>
    </div>
    <hr class="bg-grey-97 my-14px">
    <h2 class="my-14px">Small </h2>
    <div class="flex">
      <Radio class="mt-5px" :options="validList" displayColumn="h" 
        label="" v-model:value="check2" @changeValue="isCheck" size="small"></Radio>
        <Radio class="mt-30px" :options="validList" 
        label="" v-model:value="check3" @changeValue="isCheck" size="small"></Radio>
    </div>

    <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">Show 展示用，不能勾也沒有cursor </h2>
    <div class="flex">
      <Radio class="mt-5px" :options="validList" displayColumn="h" 
        label="" v-model:value="check4" @changeValue="isCheck" show="true"></Radio>
        <Radio class="mt-30px" :options="validList" 
        label="" v-model:value="check5" @changeValue="isCheck" size="small" show="true"></Radio>
    </div>


    <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">Disable &  Disable卻被預設勾選</h2>
    <div class="flex">
      <Radio class="mt-5px" :options="validList2" displayColumn="h" 
        label="" v-model:value="check6" @changeValue="isCheck" ></Radio>
        <Radio class="mt-30px" :options="validList2" 
        label="" v-model:value="check7" @changeValue="isCheck" ></Radio>
    </div>



    <!-- <hr class="bg-grey-97 my-14px">
    <h2  class="my-14px">綜合</h2>
    <div class="flex">
      <Radio class="mt-5px" :options="validList2" displayColumn="h" 
        label="" v-model:value="check8" @changeValue="isCheck"  theme="line" size="small" ></Radio>
        <Radio class="mt-30px" :options="validList2" 
        label="" v-model:value="check9" @changeValue="isCheck" theme="line" ></Radio>
    </div> -->
  </div>
</template>

<script lang="ts">
  import Radio from '@/components/UiRadio/index.vue'; // @ is an alias to /src

  export default {
    name: 'RadioView',
    components: {
      Radio,
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
        check: '1',
        check1: '3',
        check2: '0',
        check3: '2',
        check4: '3',
        check5: '1',
        check6: '1',
        check7: '',
        check8: '',
        check9: '',
      };
    },
    methods: {
    },
  };
</script>
