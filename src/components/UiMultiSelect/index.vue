<template>

  <div class="multiSelect" >
    <!-- <div class="w-600">{{state.mainSelect}}</div> flex justify-between w-full-->
    <v-select :disabled="isDisable"  :reduce=" localArr => localArr" 
    v-model="state.mainSelect" :options='localArr' :selectable="option => !option.disabled" 
    @option:selecting="beforeSelect()"  multiple  
    @close="close" @open="open" @search:blur="onBlur" ref="select" 
    :append-to-body="position" :label="localArr.id ? 'id': 'name'" :searchable="isSearch" 
    :close-on-select="false" :class="{'validError': state.validClass ,'border-root-light' : !state.validClass}"
    class=" relative multiSelect border-b border-error-0">
    <!-- :dropdownShouldOpen="() => true"  debug 用 
    @update:modelValue="onClickCheck" -->
      <template #search="{events, attributes}">
        <input class="vs__search" v-on="events" v-bind="attributes">
        <div class="absolute mt-6px text-14 ml-5px align-middle z-20 text-grey-4c" 
        :class="[{'text-grey-b3' : isDisable,}, customizePlaceholderClass]">
            {{placeholder}}
        </div>
      </template>
      <template #list-header>
        <div class="  px-12px flex justify-start items-center group py-8px cursor-pointer" 
        @mousedown="allCheck()" v-if="hasAllOption"> 
          <button class=" mr-8px w-24px h-24px rounded-5px border border-grey-4c hover:border-root-light"  :class="{'bg-main': state.allChecked ,'border-main': state.allChecked}">
            <span class="w-24px h-24px" :class="{'check': state.allChecked}"></span>
          </button>
          All
        </div>
      </template>
      <template v-slot:option="option" >
        <div class="  flex justify-start group" 
        @mousedown="onmousedown(option.id ? option.id: option.label)" > 
          <button class="shrink-0 mr-8px w-24px h-24px rounded-5px border border-grey-b3 relative" 
          :class="{'border-main': checkStyle(option) ,'bg-main': checkStyle(option) ,'border-grey-4c' : !option.disabled, 'cursor-default': option.disabled,  'group-hover:border-root-light' : !option.disabled}" >
            <span class="w-24px h-24px" :class="{'check': checkStyle(option)}"></span>
          </button>
          <span class="whitespace-normal break-words">{{option.name ? option.name : option.label}}{{option.label}}</span>
        </div>
      </template>

      <template #no-options="{ search, searching }" v-if="isSearch">
        <em v-if="searching "> Sorry, no {{search}}'s matching options.</em>
      </template>
    </v-select>
    <div class="error flex items-center justify-end" v-show="error">
      <small class="text-error-FF0000 pt-3px">{{error}}</small>
    </div>
  </div>

</template>

<script>
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import { reactive, computed, watch , onMounted } from 'vue';

import OpenIndicator from '@/components/Icon/OpenIndicator.vue' //原本的icon長相
import SelectIcon from '@/components/Icon/SelectIcon.vue' //新的icon長相
vSelect.props.components.default = () => ({ OpenIndicator, SelectIcon });

export default {
  name: 'Select',
  components: {
    vSelect,
    OpenIndicator,
    SelectIcon
  },
  props: {
    position:{
      type: Boolean,
      required: false,
      default: false,
    },
    groupType:{
      type:String,
      required:false,
    },
    horizontal:{
      type: Boolean,
      required: false,
      default: false,
    },
    isSearch:{
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false
    },
    optionArr:{
      type: Array,
      require: false,
    },
    defaultSelectedValue: {
      type: [String, Array],
      required: false,
      default: '',
    },
    placeholder:{
      type: String,
      required: false,
    },
    required:{ //blur時紅框
      type: Boolean,
      default: false,
    },
    error: String, //驗證文字
    name:String, //此欄位名稱
    isDisable: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasAllOption:{ //有All選項
      type: Boolean,
      default: false,
    },
    customizePlaceholderClass:{ //客製化的class
      type: String,
      default: '',
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      allChecked: false,
      localArr : [],
      mainSelect: [],
      validClass: false,
      obj:[
        {id: 'ax',
          name: 'aaaaa',
        },
        {id: 'bx',
          name: 'bbbbb',
        },
        {id: 'cx', 
          name: 'ccccc',
        },
        {id: 'dx', 
          name: 'ddddd',
        }
      ],
      temp:'',
    })

    onMounted(() => {
      state.validClass = props.error ? true : false;
      Object.assign(state.mainSelect, props.defaultSelectedValue);
    })

    const onmousedown = (id) => {
      // console.log('idid',id)
      state.temp = id;
    }

    const open = () => {
      emit("onOpen");
    }


    const onBlur = () => {
    if(!state.mainSelect.length  && state.required ){
        state.validClass = true
      }else{
        state.validClass = false
      }
      emit("onblur",{ val: !state.validClass, key: state.name});
    }

    const close = () => {
      emit("onClose");
    }



    const beforeSelect = () => { //反轉checkbox已選擇選項
    // console.log("三小",state.mainSelect)
      let tempLocal = JSON.parse(JSON.stringify(state.mainSelect));
      let empty = []
      for (let i = 0; i < tempLocal.length; i++) {
        if(tempLocal[i].id.indexOf(state.temp) < 0){
          empty.push(tempLocal[i])
        }
      }
      const set = new Set()
      const result = empty.filter(item=>!set.has(item.id)?set.add(item.id):false) 
      state.mainSelect = result
    }


    const checkStyle = (option) => {
      let flag  = false;
      if(state.mainSelect.length){
        state.mainSelect.forEach(e => {
          if(e.id == option.id){
            flag =  true
          }
        });
      }
      return flag
    }



    const allCheck = () => {
      state.allChecked = !state.allChecked;
      if(!state.allChecked){
        state.mainSelect = []
      }
    }



    

    // const validClass = computed(() => {
    //   return props.error ? true : false;
    // })
    

    let showIcon = (id) => {
      if(props.defaultSelectedValue){
        if(props.defaultSelectedValue['id']){
          if(props.defaultSelectedValue['id'] == id && props.showCheckIcon){
            return true
          }else{
            return false
          }
        }
      }else{
        return false
      }
    }

    const localArr = computed(() => {
      if(props.optionArr.length){
          if(state.hasAllOption){
            props.optionArr[0]['first'] = true
          }
        }
        return props.optionArr
    })



    watch(
      () => props.error,
      (n) => {
        return state.validClass = n ? true : false;
      },
      {deep: true},
      // {immediate : true}
    )


    watch(
      () => props.defaultSelectedValue,
      (val) => {
        state.mainSelect = val
      },
      {deep: true},
      // {immediate : true}
    )

    watch(
      () => state.mainSelect,
      (v) => {
        let enable  = localArr.value.filter(e => !e.disabled );
        let checkArr = state.mainSelect.filter(e => !e.disabled );
        state.allChecked = enable.length === checkArr.length ? true :false;
        emit("onClickCheck", state.mainSelect);
      },
      {deep: true},
    )

    watch(
      () => state.allChecked,
      (val) => {
        if(val){
          let temp = localArr.value
          state.mainSelect = temp.filter(e => !e.disabled );
        }
      },
      {deep: true},
    )

    return {
      state,
      open,
      onmousedown,
      onBlur,
      close,
      // validClass,
      showIcon,
      beforeSelect,
      checkStyle,
      allCheck,
      localArr

    }
  }
}
</script>


<style lang="scss" scoped>



.check {
  @apply left-6px top-6px w-6px h-12px inline-block border-white border-r-2px border-b-2px rotate-45;
}


</style>
