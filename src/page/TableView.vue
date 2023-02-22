<template>
  <div class="home">
    <p>isI</p>
    <h2>Table </h2>

    <!-- table 2  -->

    <!-- <UiTable v-model:isCheckedAll="isTableCheckAll" :datas="tableData"></UiTable> -->


    <!-- table1 -->
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
    

    <br>
    <h5>tableHead: </h5>
    <ul>
      <li v-for="(item, index) in tableHead" :key="index">
      {{index}} - {{item}}
      <hr/> <br/>
      </li>
    </ul>
    <!-- :datas="[]" -->
    <p>v-model: selected: {{selectedArr}}</p>
    <p>isSelectedOne: {{isSelectedOne}}</p>
    <UiTable :isSelectedOne="isSelectedOne" v-model:selected="selectedArr" @onClickMoreItem="onClickMoreItem" :moreOption="moreOpt" @onClickItem="clickTableItem" :isItemClick="true" v-model:isCheckedAll="isTableCheckAll" :datas="tableData" :head="tableHead" @onClickFilter="onClickFilter" ></UiTable>

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

    let tableHead = reactive([
        {
          id: 'th0',
          txt: '標題1標題1標題1標題1'
      },
      // filter : 類型
      {
          id: 'th1',
          txt: '篩選篩選',
          options: [   // filter的選項
            { "id": "op1", "name": "很長很長很長很長的選項", "disabled": false }, 
            { "id": "op2", "name": "Option 2", "disabled": false },
          ],
          val: [   // 被選擇的值的id
            "op1", "op2"
          ]
      },
      {
          id: 'th2',
          txt: '篩選2篩選2',
          options: [
            { "id": "op2-1", "name": "Option 1", "disabled": false },
            { "id": "op2-2", "name": "Option 2", "disabled": false },
          ],
          val: [
            "op2-2"
          ]
      },
      {
          id: 'th3',
          txt: '標題3標題3標題3標題3'
      },])

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
        sub: '小資料小資料',
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

    let clickTableItem = (item) => {
      console.log('item', item)
      // alert('click id:'+item.id )

    }

    let onClickFilter = (e) => {
      // console.log('in ui lib onClickFilter',e);
    }

    let moreOpt = reactive([{
        id: 'del',
        text: 'Permanently Delete'
      },
      {
        id: 'restore',
        text: 'Restore'
      }])
    let onClickMoreItem = (val) => {
      console.log('onClickMoreItem',val);
    }//end: onClickMoreItem

    let selectedArr = ref(['AAA']);

    

    return{
      isTableCheckAll,
      tableData,
      checkAllControl,
      inputNewData,
      tableHead,
      clickTableItem,
      onClickFilter,
      moreOpt,
      onClickMoreItem,
      selectedArr,
      isSelectedOne: true,
    }

  },//end: setup

};
</script>
