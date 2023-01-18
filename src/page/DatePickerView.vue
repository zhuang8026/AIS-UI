<template>
  <div class="home">
    <h2 class="my-32px">Combo box</h2>
    <hr/>
    <h2 class="my-32px">Normal </h2>
    <div class="flex mb-24px justify-start">
      <div class="flex">
        <div class="mr-20px">value : </div>
        <div>{{state.selectedFruit}}</div>
      </div>
    </div>
    <div class="flex mb-24px">
      <DatePicker class="select_ui"
      @changeDatePicker="changeDatePicker" 
      :value="state.date2" ></DatePicker>
    </div>

    <hr/>
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker/index.vue'; // @ is an alias to /src
import { reactive, computed, watch, onMounted } from 'vue';
export default {
  components: {
    DatePicker
  },
  props: {
  },
  setup(props, { emit }) {
    const state = reactive({
      date2: null,
    })

    const changeDatePicker = () =>{

    }



    return {
      state,
      changeDatePicker
    }
  }// end: setup
}


</script>

