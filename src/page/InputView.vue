<template>
  <div class="home">
    <h2>TextBox</h2>
    <hr/>
    <h3>type="text" + round</h3>
    <div class="flex-center">
      <div class="input-md">
        <ui-input type="text" placeholder="基本使用" v-model:defaultValue="text1"/>
      </div>
      <div class="input-md">
        <ui-input type="text" round placeholder="基本使用" v-model:defaultValue="text1"/>
      </div>
      
    </div>
    output -> {{ text1 }}
    <hr/>
    <h3>type="text" + icon</h3>
    <div class="flex-center">
      <div class="input-md">
        <ui-input 
          type="text" 
          placeholder="基本使用" 
          v-model:defaultValue="text2"
          rightIcon="asus-iot-phm-icon-search"
        />
      </div>
      <div class="input-md">
        <ui-input 
          type="text" 
          round
          placeholder="基本使用" 
          v-model:defaultValue="text2"
          rightIcon="asus-iot-phm-icon-search"
        />
      </div>
    </div>
    output -> {{ text2 }}
    <hr/>
    <h3>type="text" + event(keypress)</h3>
    <div class="flex-center">
      <div class="input-md">
        <ui-input 
          type="text" 
          placeholder="基本使用" 
          v-model:defaultValue="text3"
          rightIcon="asus-iot-phm-icon-search"
          @onKeypress="onKeypress($event)"
          @onChange="onChange($event)"
        />
      </div>
      <div class="input-md">
        <ui-input 
          type="text" 
          round
          placeholder="基本使用" 
          v-model:defaultValue="text3"
          rightIcon="asus-iot-phm-icon-search"
        />
      </div>
    </div>
    output -> {{ text3 }}
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput/index.vue'; // @ is an alias to /src

export default {
  name: 'ButtonView',
  components: {
    UiInput,
  },
  data() {
    return {
      text1: 'ASUS is incomparable company',
      text2: 'ASUS is incomparable company',
      text3: 'ASUS is incomparable company',
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange->:', val);
    },
    onKeypress(val) {
      console.log('onkeypress->:', val);
    },
  },
};
</script>
<style lang="scss" scope>
  input {
    margin: 0 5px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-md {
    width: 300px;
    margin: 0 5px;
  }
</style>