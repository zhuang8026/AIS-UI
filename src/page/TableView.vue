<template>
  <div class="home">
    <h2>Table </h2>
    <br>
    <!-- <p class="text-color-main">isTableCheckAll: {{isTableCheckAll}}</p> -->
    <button @click="test()">test</button>
    <br>
    <UiTable v-model:isCheckedAll="isTableCheckAll" :datas="tableData" ></UiTable>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiTable from '@/components/UiTable/index.vue'; // @ is an alias to /src
import { reactive, ref } from 'vue';

export default {
  name: 'TableView',
  components: {
    UiTable
  },
  setup(){
    let isTableCheckAll = ref(true);

    let tableData = reactive([{
      isCheck: false,
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
      isCheck: true,
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
    ]},]) //end: tableData

    let test = () => {
      let _data = {
        isCheck: true,
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
      ]}

      tableData.push(_data)
      console.log('test tableData input',tableData);

    }//end: test

    return{
      isTableCheckAll,
      tableData,
      test,
    }

  },//end: setup

};
</script>
