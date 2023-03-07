<template>
  <div class="home">
    <h2 class="my-32px">進階下拉</h2>
    <hr/>
    <p v-if="false">options: {{opts}}</p>
    <p>selected {{selected}}</p>
    <UiSelectAdv @onClickItem="onClickItem" v-if="opts.length" @onClickCheck="onClickCheck" :key="count" v-model:optionArr="opts"  v-model:defaultSelectedValue="selected" v-model:isOpen="isOpen"></UiSelectAdv>







    <hr/>
  </div>
</template>

<script>
import UiSelectAdv from '@/components/UiSelectAdv/index.vue'; // @ is an alias to /src
import { reactive, ref, onMounted } from 'vue';
export default {
  components: {
    UiSelectAdv
  },
  props: {
  },
  setup(props, { emit }) {
    const state = reactive({
      op: [
        {
          text: '1111<a style="color:red">test</a>',
          val: '001',
        },
        {
          text: '22222',
          val: '002',
        },
        {
          text: '33333',
          val: '003'
        },
        {
          text: '4444',
          val: '004'
        },
        {
          text: '5555',
          val: '005'
        }
      ],
      op2:[
        {
          text: '1-001',
          val: '001',
        },
        {
          text: '1-002',
          val: '002',
          sub: [{
            text: '2-00001',
            val: '00201'
          },
          {
            text: '2-00001',
            val: '00202'
          }]
        },
      ],
      selectVal: {
        text: '請選擇',
        val: 'default',
      },
    })

    let advOptions = reactive[{
        label: '選項1選項1選項1選項1選項1選項1選項1選項1選項1選項1',
        value: 'aa1',
        readonly: true,
        psText: `<a href="#" class="ui-options ui-options-btn text--sm--detail"> 0 build / 0 content </a>`
      }, {
        label: '選項2選項2',
        value: 'aa2',
        readonly: true,
        psText: `<a href="#" class="ui-options ui-options-btn text--sm--detail"> 10 build / 2 content </a>`
      },
      {
        label: '選項3選項3',
        value: 'aa3',
        readonly: true,
        psText: `<a href="#" class="ui-options ui-options-btn text--sm--detail"> 0 build / 9 content </a>`
      }];//end:advOptions
     
     let isOpenSelect = ref(false);

     let selectedAdv =  reactive({
        label: '測試測試02',
        value: '02'
      });


    onMounted(() => {
      // init();
    })


    const selectClick = (val) => {
      console.log('333')
    }

    const toblur = () => {
    }

    let  count = ref(0);

    let opts = reactive([{
          id: 'op1',
          name: 'option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1',
        },
        {
          id: 'op2',
          name: 'option2',
        },
        {
          id: 'op4',
          name: 'option4',
        }])

    let isOpen = ref(false);

    let selected = reactive({
          id: 'op1',
          name: 'option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1 option1',
        })

    let onClickCheck = (val) => {
      console.log('onClickCheck',val)
      //這行重要，強制render 重新渲染
      count.value++;
      
    }

    let onClickItem = (val) => {
      console.log('onClickItem',val);
    }

    return {
      state,
      // privateIsChecked,
      toblur,
      selectClick,
      advOptions,
      isOpenSelect,
      selectedAdv,
      opts,
      isOpen,
      selected,
      onClickCheck,
      count,
      onClickItem,
    }
  }// end: setup
}


</script>

