<template>

  <div class="multiSelect" >
    <div class="check"></div>
    <v-select :disabled="isDisable"  :reduce="localArr =>  localArr" 
    v-model="state.mainSelect" :options='localArr' :selectable="option => !option.disabled" 
    @option:selecting="beforeSelect()"  multiple
    @close="close" @open="open" @search:blur="onBlur" @input="onChange()" ref="select" 
    :append-to-body="position" :label="localArr.id ? 'id': 'name'" :searchable="isSearch" 
    :close-on-select="true" :class="{'validError': validClass}"
    class="  noBG relative multiSelect">
      <template #search="{events, attributes}">
        <input class="vs__search" v-on="events" v-bind="attributes">
        <div class=" absolute mt-6px text-14 ml-5px align-middle z-20 text-grey-4c" 
        :class="{'text-grey-4c' : isDisable}">
            {{placeholder}}
        </div>
      </template>
      <template #list-header>
        <div class="  px-12px flex justify-between items-center group py-8px cursor-pointer" 
        @mousedown="allCheck()" v-if="hasAllOption"> 
          All
          <button class=" w-24px h-24px rounded-2 border border-grey-4c hover:border-main-0" :class="{'check': allChecked}" ></button>
        </div>
      </template>
      <template v-slot:option="option" >
        <div class="  flex justify-between group" 
        @mousedown="onmousedown(option.id ? option.id: option.label)" > 
          <span>{{option.name ? option.name : option.label}}{{option.label}}</span>
          <button class=" w-24px h-24px rounded-2 border border-grey-4c" 
          :class="{'check': checkStyle(option) , 'border-grey-9E' : !option.disabled, 'cursor-default': option.disabled,  'group-hover:border-main-0' : !option.disabled}" ></button>
        </div>
      </template>
      <!-- template( slot="option" slot-scope="option" )
        
        .flex.justify-between.group(@mousedown="onmousedown(option.id ? option.id: option.label)" )
          span {{option.name ? option.name : option.label}}{{option.label}}
          button.w-24.h-24.rounded-2.border.border-grey-d9(
            :class="{'check': checkStyle(option) , 'border-grey-9E' : !option.disabled, 'cursor-default': option.disabled,  'group-hover:border-main-0' : !option.disabled}" 
            ) -->

      <template #no-options="{ search, searching }" v-if="isSearch">
        <em v-if="searching "> Sorry, no {{search}}'s matching options.</em>
      </template>
    </v-select>
    <div class=" error flex items-center" v-show="error">
      <small class=" text-error-0 pt-3px">{{error}}</small>
    </div>
  </div>

</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import { reactive, computed, watch , onMounted } from 'vue';

export default {
  name: 'Select',
  components: {
    vSelect,
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
  },
  components:{
    vSelect,
  },
  setup(props, { emit }) {
    const state = reactive({
      allChecked: false,
      // localArr : [],
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
      state.mainSelect = props.defaultSelectedValue
    })

    const onmousedown = (id) => {
      state.temp = id;
    }

    const open = () => {
      emit("onOpen");
    }


    const onClick = () => {
      // console.log(state.mainSelect,'666')
      emit("onClick");
      
    }

    const onBlur = () => {
     if(!state.mainSelect.length  && state.required ){
        state.validClass = true
      }else{
        state.validClass = false
      }
      emit("onblur",{ val: !state.validClass, key: state.name});

      emit("emptyResult", state.noSearchResult);
    }

    const close = () => {
      emit("onClose");
    }


    const beforeSelect = () => { //反轉checkbox已選擇選項
      console.log('++', state.mainSelect)
      // for (let i = 0; i < state.mainSelect.length; i++) {
      //   if(state.mainSelect[i].id.indexOf(state.temp) > -1){
      //     state.mainSelect.splice(i,1)
      //   }
      // }
      onClick()
    }


    const checkStyle = (option) => {
      let flag  = false;
      // if(state.mainSelect.length){
      //   state.mainSelect.forEach(e => {
      //     if(e.id == option.id){
      //       flag =  true
      //     }
      //   });
      // }
      return flag
    }


    const allCheck = () => {
      state.allChecked = !state.allChecked;
      if(!state.allChecked){
        state.mainSelect = []
      }
    }



    const validClass = computed(() => {
      return props.error ? true : false;
    })



    // let privateSelected = computed({
    //   get: () => props.defaultSelectedValue,
    //   set: (val) => {
    //     state.temp = val
    //     emit('update:defaultSelectedValue', val);
    //   }
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



    // watch(
    //   () => props.optionArr,
    //   (val) => {
    //     console.log('??',state.localArr)
    //     if(val.length){
    //       if(state.hasAllOption){
    //         val[0]['first'] = true
    //       }
    //     }
    //     state.localArr = val;
    //   },
    //   {deep: true},
    //   {immediate : true}
    // )

    watch(
      () => props.defaultSelectedValue,
      (val) => {
        state.mainSelect = val
      },
      {deep: true},
    )

    watch(
      () => state.mainSelect,
      () => {
        // console.log('??',state.localArr)
        // let enable  = state.localArr.filter(e => !e.disabled );
        // let checkArr = state.mainSelect.filter(e => !e.disabled );
        // // console.log('enable : ',enable, 'checkArr : ',checkArr)
        // state.allChecked = enable.length === checkArr.length ? true :false;
      },
      {deep: true},
    )

    watch(
      () => props.allChecked,
      (val) => {
        if(val){
          let temp = localArr
          state.mainSelect = temp.filter(e => !e.disabled );
        }
        onClick()
      },
      {deep: true},
    )

    return {
      state,
      open,
      onmousedown,
      onClick,
      onBlur,
      close,
      // privateSelected,
      validClass,
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
  left: 6px;
  top: 1px;
  width: 6px;
  height: 12px;
  border : solid 1px red;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}


</style>
