<template>
  <div class="home">
    <h2 class="my-32px">DatePicker</h2>
    <hr/>
    <h2 class="my-32px">Normal </h2>
    <div class="flex mb-24px justify-start">
      <div class="flex">
        <div class="mr-20px">value : {{time}}</div>
      </div>
    </div>
    <button @click="defualtTime()">Click Set Default Time</button>
    <div class="flex mb-24px">
      <ui-date-picker v-model:value="time" class="w-full" ></ui-date-picker>
    </div>
    <div class="flex mb-24px justify-start">
      <h5>range: true / timeRange: {{timeRange}} </h5>
    </div>
    <div class="flex mb-24px">
      <ui-date-picker v-model:value="timeRange" :range="true"  @onEmpty="chageTime" class="w-[300px]" ></ui-date-picker>
    </div>

    <hr/>
  </div>
</template>

<script>
import uiDatePicker from '@/components/uiDatePicker/index.vue';
import { reactive, computed, ref, onMounted } from 'vue';
export default {
  components: {
    uiDatePicker
  },
  props: {
  },
  setup(props, { emit }) {
    const state = reactive({
      date2: null,
    })

    let time = ref(1676453263);
    let timeRange = ref([1684140891,1684745691]);

    let defualtTime = () => {
      console.log('defualtTime')
      // timeRange.value = [1684140891,1684745691];
    }


    const changeDatePicker = () =>{

    }

    let chageTime = () => {
      // console.log('chageTime')
    }



    return {
      state,
      changeDatePicker,
      time,
      timeRange,
      chageTime,
      defualtTime,
    }
  }// end: setup
}


</script>

