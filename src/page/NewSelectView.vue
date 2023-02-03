<template>
  <div class="home">
    <h2 class="my-32px">不要用</h2>
    <hr/>
    <!-- <h2 class="my-32px">Normal </h2>
    <div class="flex mb-24px justify-start">
      <div class="flex">
        <div class="mr-20px">value : </div>
        <div>{{state.selectedFruit}}</div>
      </div>
    </div>
    <div class="flex mb-24px">
      <UINSelect :options="state.op2" v-model:selected="state.selectVal" 
      style="width:400px"></UINSelect>

    </div> -->

    <hr/>





    <hr/>
  </div>
</template>

<script>
import UINSelect from '@/components/UINSelect/index.vue'; // @ is an alias to /src
import { reactive, computed, watch, onMounted } from 'vue';
export default {
  components: {
    UINSelect
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


    onMounted(() => {
      // init();
    })


    const selectClick = (val) => {
      console.log('333')
    }

    const toblur = () => {
    }




    return {
      state,
      // privateIsChecked,
      toblur,
      selectClick,
    }
  }// end: setup
}


</script>

