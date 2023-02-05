<template>
  <div class="home">
    <h2>Table </h2>
    <br/>
    <p>是否勾選全部：{{isTableCheckAll}}</p>
    <p>所有資料：</p>
    <ul>
      <li v-for="(item, index) in tableData" :key="index">
      {{index}} - {{item}}
      <hr/> <br/>
      </li>
    </ul>
    <!-- <p class="text-color-main">isTableCheckAll: {{isTableCheckAll}}</p> -->
    <br/>
    <div class="flex">
      <Button @onClick="checkAllControl" class=" w-160px mx-20px mb-0" type="full" text="從外面控制checkAll" ></Button>
      <Button @onClick="inputNewData()" class=" w-160px mx-20px mb-0" type="full" text="從外面加資料" ></Button>
    </div>
    
    <!-- <button @click="checkAllControl()">從外面控制checkAll</button> -->

    <!-- <button @click="inputNewData()">從外面加資料</button> -->
    <br>

    <!-- <UiTable v-model:isCheckedAll="isTableCheckAll" :datas="tableData" ></UiTable> -->
    <!-- <UiTable v-model:isCheckedAll="isTableCheckAll" :datas="tableData" ></UiTable> -->
    <UiTable v-model:isCheckedAll="isTableCheckAll" :datas="tableData"></UiTable>

  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiTable from '@/components/UiTable/index.vue'; // @ is an alias to /src
import Button from '@/components/UiButton/index.vue';
import { reactive, ref } from 'vue';

export default {
  name: 'TableView',
  components: {
    UiTable,
    Button,
  },
  setup(){
    let isTableCheckAll = ref(true)

    let tableData = reactive([{
    id: 'AAA',
    isCheck: true,
    isDisable: false,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1'
      }
  ]},
  {
    id: '002',
    isCheck: false,
    isDisable: false,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1'
      }
  ]},
  {
    id: '003',
    isCheck: false,
    isDisable: false,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:2'
      }
  ]},]) //end: tableData

    let checkAllControl = () => {
      console.log('all')
      isTableCheckAll.value = !isTableCheckAll.value;

    }//end: checkAllControl

    let inputNewData = () => {
      let _data = {
        id: Math.random().toString(),
        isCheck: true,
        isDisable: false,
        detail: [
          {
            txt: 'Test1Test333',
            type: 'default'
          },
          { 
            txt: '資料2資料2資料2資料2資料2',
            type: 'default'
          },
          { 
            txt: '資料3資料3資料3資料3資料3',
            type: 'default'
          },
          { 
            txt: '資料3資料3資料3資料3資料3',
            type: 'status:2'
          }
      ]}
      tableData.push(_data);

    }//end: inputNewData

    return{
      isTableCheckAll,
      tableData,
      checkAllControl,
      inputNewData,
    }

  },//end: setup

};
</script>
