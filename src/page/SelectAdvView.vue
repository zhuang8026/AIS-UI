<template>
  <div class="home">
    <h2 class="my-32px">Select</h2>
    <hr/>
    <h2 class="my-32px">Normal </h2>
    <div class="flex mb-24px justify-start">
      <div class="flex">
        <div class="mr-20px">value : </div>
        <div>{{state.selectedFruit}}</div>
      </div>
    </div>
    <div class="flex mb-24px">
      <ui-select
        class="w-296px mr-40px"
        v-model:defaultSelectedValue="state.selectedFruit"
        :optionArr="state.fruits" 
        :required="true"
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
      <ui-select
        class="w-296px mr-40px"
        v-model:defaultSelectedValue="state.selectedDisableList"
        :isDisable="true"
        :optionArr="state.disableList" 
        :required="true"
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
      <ui-select
        class="w-296px mr-40px"
        v-model:defaultSelectedValue="state.selectedErrorList"
        :optionArr="state.errorList" 
        :required="true"
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        :error="'this is error message'"
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
    </div>

    <hr/>

    <h2 class="my-32px">No select Check Icon </h2>
    <div class="flex mb-24px">
      <ui-select
        class="w-296px mr-40px"
        v-model:defaultSelectedValue="state.selectedFruit"
        :optionArr="state.fruits" 
        :required="true"
        :showCheckIcon="false"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
    </div>

    <hr/>

    <h2 class="my-32px">Multi Width</h2>
    <div class="flex mb-24px">
      <ui-select
        class="w-200px mr-40px"
        v-model:defaultSelectedValue="state.selectedFruit"
        :optionArr="state.fruits" 
        :required="true"
        :showCheckIcon="false"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
      <ui-select
        class="w-296px  mr-40px"
        v-model:defaultSelectedValue="state.selectedFruit"
        :optionArr="state.fruits" 
        :required="true"
        :showCheckIcon="false"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
      <ui-select
        class="w-600px mr-40px"
        v-model:defaultSelectedValue="state.selectedFruit"
        :optionArr="state.fruits" 
        :required="true"
        :showCheckIcon="false"
        @onChange="selectClick"
        @onblur="toblur" 
        name="demoSelect"
        :placeholder="'I am placeholder'"
      ></ui-select>
    </div>
        <h2 class="my-32px">Editable Select isEdit: {{isEdit}}</h2>
         <ui-select
        class="w-296px mr-40px"
        v-model:defaultSelectedValue="state.selectedFruit"
        :isDisable="false"
        :optionArr="state.fruits" 
        :showCheckIcon="true"
        @onChange="selectClick"
        @onblur="toblur" 
        name="editSelect"
        :isEdit="isEdit"
        :placeholder="'I am placeholder'"
      ></ui-select>

    <hr/>
  </div>
</template>

<script>
import UiSelect from '@/components/UiSelect/index.vue'; // @ is an alias to /src
import { reactive,  onMounted, ref } from 'vue';
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

    let isEdit = ref(true);




    return {
      state,
      // privateIsChecked,
      toblur,
      selectClick,
      isEdit,
    }
  }// end: setup
}


</script>

