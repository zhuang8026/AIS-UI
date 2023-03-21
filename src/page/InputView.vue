<template>
  <div class="home">
    <div class="flex">
      <Input class="w-342px m-auto mt-40px mb-20px" 
        v-model:value="ttt"  placeholder="text" type="text"
        @onBlur="onblur" :error="false" ></Input>

      <Input class="w-342px m-auto mt-40px mb-20px" 
        v-model:value="aaa"  placeholder="text" type="text"
        @onBlur="onblur" :error="false" :isDisable="true"></Input>
    </div>
    <div class="flex">
      <Input class="w-342px m-auto mt-40px mb-20px" prefix="icon" 
      v-model:value="username"  placeholder="Email" type="email"
      @onBlur="onblur" :error="false">
        <template #icon="{onKey}">  
          <Icon class="h-20px w-20px mr-14px text-main transition duration-100 ease-in-out" iconClass="user" type="svg"
          :class="{'text-grey-ae' : !onKey}"></Icon>
        </template>
      </Input>
      <Input class="w-342px m-auto mt-40px mb-20px" suffix="icon" 
        v-model:value="yyy"  placeholder="tttttt" 
        @onBlur="onblur" :error="false">
          <template #icon>  
            <Icon class="h-20px w-20px mr-14px  text-main transition duration-100 ease-in-out" iconClass="user" type="svg"
            :class="{'text-grey-ae ' : !yyy}"></Icon>
          </template>
        </Input>

        
    </div>
    <div>
      <Input class="w-342px m-auto mt-40px mb-20px"
    v-model:value="yyy" type="password" placeholder="password" 
    @onBlur="onblur" :error="false">
    </Input>
  </div>
    
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import Input from '@/components/UiInput/index.vue'; // @ is an alias to /src
import Icon from '@/components/Icon/index.vue';
export default {
  name: 'ButtonView',
  components: {
    Input,
    Icon
  },
  data() {
    return {
      username: '',
      ttt: '',
      aaa: '',
      yyy: '',
    };
  },
  methods: {
    onblur(val) {
    },
    onKeypress(val) {
    },
  },
};
</script>
