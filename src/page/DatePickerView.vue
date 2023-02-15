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
    <div class="flex mb-24px">
      <ui-date-picker v-model:value="time" class="w-full" ></ui-date-picker>
    </div>
    <div class="flex mb-24px justify-start">
      <h5>range: true / timeRange: {{timeRange}} </h5>
    </div>
    <div class="flex mb-24px">
      <ui-date-picker v-model:value="timeRange" :range="true" class="w-[300px]" ></ui-date-picker>
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

    let timeRange = ref([1676453263,1676453263]);

    const changeDatePicker = () =>{

    }



    return {
      state,
      changeDatePicker,
      time,
      timeRange
    }
  }// end: setup
}


</script>

