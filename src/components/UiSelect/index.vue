<template>
  <!-- <i-con iconClass="dropdown"></i-con> -->
  <div class="items-center justify-start" :class="{'flex': horizontal}">
    <v-select :disabled="isDisable" :placeholder="placeholder" :clearable="false"
    v-model="privateSelected" :options='optionArr' :selectable="option => !option.disabled" 
    @close="close" @open="open" @search:blur="onBlur" @input="onChange()" ref="select" 
    :append-to-body="position" :label="optionArr.id ? 'id': 'name'" :searchable="isSearch" 
    :close-on-select="true" :class="{'validError': validClass}"
    class="vSelect">
      <template #option="{name ,first ,id  }">
        <div class="pt-0 groupType" v-if="first ">
          <span class="font-700" v-if="first && groupType"> {{groupType}} - 
          </span>
          <span class="font-700"></span>
        </div>
        <div class="h-32px flex justify-between items-center" @mousedown="onmousedown(name, id )" :disabled="true">
          <span > {{name}}
          </span>
          <Icon class=" text-main vSelectIcon" iconClass="Ico_Check" type="svg" v-if=" showIcon(id)"></Icon>
        </div>
      </template>

      <template #no-options="{ search, searching }" v-if="isSearch">
        <em v-if="searching "> Sorry, no {{search}}'s matching options.</em>
      </template>
    </v-select>
    <div class=" error flex items-center" v-show="error">
      <small class="text-error-FF0000 pt-3px">{{error}}</small>
    </div>
  </div>

</template>

<script>
// import Vue from "vue";
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';
import Icon from '@/components/Icon/index.vue';
import { reactive, computed, watch , onMounted } from 'vue';

import OpenIndicator from '@/components/Icon/OpenIndicator.vue' //原本的icon長相
import SelectIcon from '@/components/Icon/SelectIcon.vue' //新的icon長相
vSelect.props.components.default = () => ({ OpenIndicator, SelectIcon });

export default {
  name: 'Select',
  components: {
    vSelect,
    Icon,
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
      type: [String, Array,Number, Object],
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
    showCheckIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      placement: 'top' ,
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
        },
      ],
      temp:undefined,
    })

    onMounted(() => {
    })

    const onmousedown = (id) => {
      // state.temp = id;
      emit("onClickSingle");
    }

    const open = () => {
      emit("onOpen");
    }


    const onChange = () => {
    }

    const onBlur = () => {
      emit("onblur");
    }

    const close = () => {
      emit("onClose");
    }


    const validClass = computed(() => {
      return props.error ? true : false;
    })



    let privateSelected = computed({
      get: () => props.defaultSelectedValue,
      set: (val) => {
        state.temp = val
        emit('update:defaultSelectedValue', val);
      }
    })

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

    return {
      state,
      open,
      onmousedown,
      onChange,
      onBlur,
      close,
      privateSelected,
      validClass,
      showIcon

    }
  }
}
</script>


<style lang="scss">
.vSelectIcon{
  @apply h-24px w-24px;
}
</style>
