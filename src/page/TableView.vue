<template>
  <div class="home">
    <p>isI</p>
    <h2>Table </h2>

    <!-- table 2  -->
    <p>tableData: {{tableData}}</p>
    <p>isItemClick: {{false}}</p>

    <UiTable :isEdit="isEditTable"  :isItemClick="false" v-model:isCheckedAll="isTableCheckAll" v-model:datas="tableData"></UiTable>


    <!-- table1 -->
    <br/>
    <!-- <p>是否勾選全部：{{isTableCheckAll}}</p>
    <p>所有資料：</p>
    <ul>
      <li v-for="(item, index) in tableData" :key="index">
      {{index}} - {{item}}
      <hr/> <br/>
      </li>
    </ul> -->
    <!-- <p class="text-color-main">isTableCheckAll: {{isTableCheckAll}}</p> -->
    <br/>
    <div class="flex">
      <Button @onClick="checkAllControl" class=" w-160px mx-20px mb-0" type="full" text="從外面控制checkAll" ></Button>
      <Button @onClick="changeData()" class=" w-160px mx-20px mb-0" type="full" text="從外面改資料" ></Button>
      <Button @onClick="refresh()" class=" w-160px mx-20px mb-0" type="full" text="refresh" ></Button>
      
      <Button @onClick="inputNewData()" class=" w-160px mx-20px mb-0" type="full" text="從外面加資料" ></Button>
      <Button @onClick="onClickEditOrNot" class=" w-160px mx-20px mb-0" type="full" text="編輯/瀏覽" ></Button>
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
    <!-- <p>v-model: selected: {{selectedArr}}</p>
    <p>isSelectedOne: {{isSelectedOne}}</p> -->
    <!-- :moreOption="moreOpt"  -->
    <!-- :datas="tableData" -->
    <div >
      <UiTable @onEditFinish="onEditFinish" @onSelectItem="onSelectItem" :isEdit="isEditTable" class="h-[200px]" :isHasCheck="false" @onChangeCheck="onChangeCheck" :isSelectedOne="isSelectedOne" v-model:selected="selectedArr" @onClickMoreItem="onClickMoreItem" @onClickItem="clickTableItem" :isItemClick="true" v-model:isCheckedAll="isTableCheckAll"  :head="tableHead" @onClickFilter="onClickFilter" ></UiTable>
    </div>
    <h1></h1>
    <div >
      <UiTable  v-model:datas="editTableData" @onSelectItem="onSelectItem" :isEdit="true" class="h-[200px]" :isHasCheck="true" @onChangeCheck="onChangeCheck" :isSelectedOne="isSelectedOne" v-model:selected="selectedArr" @onClickMoreItem="onClickMoreItem" @onClickItem="clickTableItem" :isItemClick="true" v-model:isCheckedAll="isTableCheckAll"  :head="tableHead" @onClickFilter="onClickFilter" ></UiTable>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiTable from '@/components/UiTable/index.vue'; // @ is an alias to /src
import Button from '@/components/UiButton/index.vue';
import { onMounted, reactive, ref } from 'vue';

export default {
  name: 'TableView',
  components: {
    UiTable,
    Button,
  },
  setup(){
    let isTableCheckAll = ref(false)
    let tableHead = reactive([])

    let tableHeadData = reactive([])
       

      
      // Object.assign(tableHead, tableHeadData);
      let tableData = ref([]);
    

    let checkAllControl = () => {
      console.log('all')
      isTableCheckAll.value = !isTableCheckAll.value;

    }//end: checkAllControl

    let changeData = () => {
      tableData.value = [];
      console.log('changeData', tableData)
      
    }

    let inputNewData = () => {
      let _data = {
        id: Math.random().toString(),
        isCheck: true,
        isDisable: false,
        isHighLight: true,
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
      tableData.value.push(_data);

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

    let onChangeCheck = (data) => {
      console.log('onChangeCheck', data);
    }

    let isEditTable = ref(false);

    let onClickEditOrNot = () => {
      isEditTable.value = !isEditTable.value;
    } //end: onClickEditOrNot

    let onSelectItem = (val) => {
      console.log('onSelectItem',val);
    }

    let onEditFinish = (val) => {
      console.log('onEditFinish',val)
    }

    let handleData = () => {
      let head = [{
          id: 'th0',
          txt: 'Equipment Name / Model'
      },
      {
          id: 'th444',
          txt: 'hint demo'
      },
      // filter : 類型
      {
          id: 'th1',
          txt: 'Equipment Name / Model',
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
            { "id": "op2-4", "name": "AAA 204", "disabled": false },
          ],
          val: [
            "op2-4"
          ]
      },
      {
          id: 'th3',
          txt: '標題3標題3標題3標題3',
          options: [
            { "id": "op2-1", "name": "Option 1", "disabled": false },
            { "id": "op2-2", "name": "Option 2", "disabled": false },
          ],
          val: [
            "op2-2"
          ]
      },]

      tableHead = [...head]


      tableData.value = [{
    id: 'AAA',
    isCheck: false,
    isDisable: false,
    isHighLight: true,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      {
        txt: 'HintDemo',
        type: 'default', // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        hint: 'test test'
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        sub: '小資料小資料',
        type: 'default',
      },
      { 
        txt: ['AAA DDD JEE HPJEPRWPRJPEJRPW EJOPEWPRJ EP EJ ','BBB','CCC'],
        sub: ['aaa ddd JEE HPJEPRWPRJPEJRPW EJOPEWPRJ EP EJ ','gg','hh'],
        type: 'default'
      },
      { 
        txt: ['資料3資料3資料3資料3資料3','AAA', 'CCC'],
        type: 'status:1:0:1'
      }
  ]},
  {
    id: '002',
    isCheck: false,
    isDisable: false,
    isHighLight: false,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      {
        txt: 'HintDemo2',
        type: 'default', // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        hint: 'test22 test'
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default',
        edit: 'select', // none, input, select
        selectId : { 
          id: 'id-3',
          name: 'ID3 ID3',
          disabled: false,
        }, // select 的選項
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
    isHighLight: false,
    // isHighLight: true,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'
      },
      {
        txt: 'HintDemo3',
        type: 'default', // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        hint: 'test test'
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
  ]},]//end: tableData
    }

    let editTableData = ref([])
    editTableData.value = [{
    id: '001',
    isCheck: true,
    isDisable: true,
    detail: [
      {
        txt: 'BBB',
        type: 'default',  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        edit: 'input', // none, input, select
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        sub: '小資料2小資料2',
        type: 'default',
        // edit: 'none', // none, input, select
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default',
        edit: 'select', // none, input, select
        selectId : { 
          id: 'id-3',
          name: 'ID3 ID3',
          disabled: false,
        }, // select 的選項
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1',
        // edit: 'none', // none, input, select
      }
  ]},
  {
    id: '002',
    isCheck: false,
    isDisable: false,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default',  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        edit: 'input', // none, input, select
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        sub: '小資料2小資料2',
        type: 'default',
        // edit: 'none', // none, input, select
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default',
        edit: 'select', // none, input, select
        selectId : { 
          id: 'id-3',
          name: 'ID3 ID3',
          disabled: false,
        }, // select 的選項
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1',
        // edit: 'none', // none, input, select
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
  ]},
] //end: tableData

    onMounted(()=> {
      setTimeout(()=>{
        handleData();
      },1200)
      
    })

    let refresh = () => {
     
      tableData.value = [{
    id: 'AAA',
    isCheck: false,
    isDisable: false,
    isHighLight: true,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      {
        txt: 'HintDemo',
        type: 'default', // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        hint: 'test test'
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        sub: '小資料小資料',
        type: 'default',
      },
      { 
        txt: ['AAA DDD JEE HPJEPRWPRJPEJRPW EJOPEWPRJ EP EJ ','BBB','CCC'],
        type: 'default'
      },
      { 
        txt: ['資料3資料3資料3資料3資料3','AAA', 'CCC'],
        type: 'status:1:0:1'
      }
  ]},
  {
    id: '002',
    isCheck: false,
    isDisable: false,
    isHighLight: false,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      {
        txt: 'HintDemo2',
        type: 'default', // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        hint: 'test22 test'
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default',
        edit: 'select', // none, input, select
        selectId : { 
          id: 'id-3',
          name: 'ID3 ID3',
          disabled: false,
        }, // select 的選項
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
    isHighLight: false,
    // isHighLight: true,
    detail: [
      {
        txt: (Math.random() * 100).toString(),
        type: 'default'
      },
      {
        txt: 'HintDemo3',
        type: 'default', // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        hint: 'test test'
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
  ]},]//end: tableData

  console.log('refresh', tableData.value)

    } //end: refresh

    

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
      onChangeCheck,
      onClickEditOrNot,
      isEditTable,
      onSelectItem,
      onEditFinish,
      changeData,
      editTableData,
      refresh,
    }

  },//end: setup

};
</script>
