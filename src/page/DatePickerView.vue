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

    </div>

    <hr/>
  </div>
</template>

<script>
import UiSelect from '@/components/UiSelect/index.vue'; // @ is an alias to /src
import { reactive, computed, watch, onMounted } from 'vue';
export default {
  components: {
    UiSelect
  },
  props: {
  },
  setup(props, { emit }) {
    const state = reactive({
      fruits: [
        {id: 'op1',
          name: 'Option 1',
          disabled: false,
        },
        {id: 'op2',
          name: 'Option 2',
          disabled: false,
        },
        {id: 'op3', 
          name: 'Option 3',
          disabled: true,
        },
        {id: 'op4', 
          name: 'Option 4',
          disabled: false,
        },
        {id: 'op5', 
          name: 'Option 5',
          disabled: false,
        },
        {id: 'op6', 
          name: 'Option 6',
          disabled: false,
        },
      ],
      selectedFruit: null,
    })





    return {
      state,
    }
  }// end: setup
}


</script>

