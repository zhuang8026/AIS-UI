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
      <UiMultiSelect
        class="w-296 mr-40px"
        :defaultSelectedValue="state.selectedFruit"
        :optionArr="state.fruits" 
        :required="true"
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></UiMultiSelect>
      <UiMultiSelect
        class="w-296 mr-40px"
        :defaultSelectedValue="state.selectedDisableList"
        :isDisable="true"
        :optionArr="state.disableList" 
        :required="true"
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></UiMultiSelect>
      <UiMultiSelect
        class="w-296 mr-40px"
        :defaultSelectedValue="state.selectedErrorList"
        :optionArr="state.errorList" 
        :required="true"
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        :error="'this is error message'"
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></UiMultiSelect>
    </div>

    <hr/>





    <hr/>
  </div>
</template>

<script>
import UiMultiSelect from '@/components/UiMultiSelect/index.vue'; // @ is an alias to /src
import { reactive, computed, watch, onMounted } from 'vue';
export default {
  components: {
    UiMultiSelect
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
      disableList: [
        {id: 'op1',
          name: 'Option 1',
          disabled: false,
        },
      ],
      errorList : [
        {id: 'op1',
          name: 'Option 1',
          disabled: false,
        },
        {id: 'op2',
          name: 'Option 2',
          disabled: false,
        },
      ],
      selectedDisableList: null,
      selectedFruit: null,
      selectedErrorList : null,
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

