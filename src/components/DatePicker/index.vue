<template >

  <section class="date-picker">
  <div>{{state.time }}222</div>
  <date-picker class="datePicker" :class="{'erroDate' : error}" ref="datePicker" v-model:value="state.time" :lang="state.langType"
  type="date"  :editable="false" :clearable="clearable"
  prefix-class="xmx"  format="YYYY/MM/DD" v-model:open="state.open" @confirm="datePickerConfirm"
  :disabled="isDisable" @close="closePicker" :disabled-date="notBeforeThisDay"
  :confirm="true" confirm-text="Apply" @pick="calendarChange">
    <template #footer="{ emit }">
      <div class="datePicker-footer">
        <div class="datePickerButtonBlock">
          <ui-button @onClick="applyDate(emit)" type="small" style="margin-right: 24px;" :disable="!state.temp"  class="buttonEach"> Apply</ui-button>
          <ui-button @onClick="closePicker" type="small" class="buttonEach ">Cancel</ui-button>
        </div>
      </div>
      <div class="text-red-500 hover:text-main">fsdsgshjkuy</div>
    </template>
  </date-picker>
  <!-- <div>time : {{state.time}}</div> -->
  <div :class="{'erroSpan' : error}" v-if="error"> {{error}}</div>
</section>
</template>



<script>
import UiButton from '@/components/UiButton/index.vue';
import { reactive, onMounted, ref, watch, computed,  } from 'vue';

import * as moment from 'moment';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';



export default {
  components: {
    UiButton,
    DatePicker
  },
  props: {
    value: {
      type: Object || null   ,
    },
    defaultValue: {
      type: Object || null   ,
    },
    error: {
      type: String,
      default: '',
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    minDay: {
      type: Object || null ,
    },
    clearable: {
      type: Boolean  ,
      default: false,
      required: false, 
    },

  },
  setup(props, { emit }) {
    const dateLang = {
      ch: 'zh-cn', //zh-CN
      tw: 'zh-tw', //zh-TW
      en: 'en', //en-US
      french: 'fr', //fr-FR
      german: 'de', //de-DE
      russian: 'ru', //ru-RU
      italian: 'it', //it-IT
      japanese: 'ja', //ja-JP
      dutch: 'nl', //nl-NL
      korean: 'ko', //ko-KR
      polish: 'pl', //pl-PL
      romanian: 'ro', //ro-RO
      spanish: 'es', //es-ES
      swedish: 'sv', //sv-SE
      turkish: 'tr', //tr-TR
      ukrainian: 'uk', //uk-UA
      indonesian: 'hi', //hi-IN
      thai: 'th', //th-TH
      vietnamese: 'vi', //vi-VN
      lang: 'lang',
  
  }
    const state = reactive({
      temp: {},
      open: false,
      time: null,
      func: () => { },
      localTime: null,
      langType: ''
    });

    


    onMounted(() => {
      // state.langType = dateLang[store.state.langIsSelected]
      if (props.value) {
        state.time = props.value;
        state.temp = props.value;
      }
    })


    const privateValue = computed({
      get: () => props.value,
      set: (val) => {
        let defaultStart = moment(val).toISOString()
        state.time = defaultStart;
        state.temp = defaultStart;
      }
    });



    //picker
    const applyDate = (localEmit) => {
      // console.log('e',localEmit)
      state.func = localEmit;
      console.log(JSON.stringify(state.time))
      if (JSON.stringify(state.time) === JSON.stringify(state.temp)) {
        state.open = false
      } else {
        localEmit(state.temp)
        state.localTime = state.temp
      }
      state.temp = {}
    };
    const datePickerConfirm = () => {
      // console.log('e',e)
    };


    const closePicker = () => {
      state.temp = {}
      state.open = false

    };


    const calendarChange = (e) => {
      state.temp = e
    };

    //picker


    const notBeforeThisDay = (date) => {
      if(props.minDay){
        return date < props.minDay;
      }

    };


    const datePicker = ref();



    // store.watch((state) => (state.langIsSelected ), (newType) => {
    //   state.langType = dateLang[newType]
    // })


    watch( //
      () => state.open,
      (val) => {
        if (val) {
          if (props.value) {
            let localTemp = moment(props.value).toISOString()
            state.temp = localTemp
          }
        }
      },
    )//end: watch 




    watch(
      () => state.time,
      (val, old) => {
        if (val != old) {
          let flag = false;
          if (val != null) {
            flag = true
          }
          if (flag) {
            emit('changeDatePicker', val);
          } else {
            emit('changeDatePicker', null);
          }
        }
      },
      { deep: true }
    )//end: watch 


    watch(
      () => props.value,
      (val) => {
        state.time = val;
        state.temp = val;
      },
      { deep: true }
    )//end: watch 






    return {
      state,
      datePicker,
      applyDate,
      datePickerConfirm,
      calendarChange,
      closePicker,
      privateValue,
      notBeforeThisDay

    }
  }
}


</script>


<style lang="scss">

$color-config:(
  default: $form-color-default,
  active: $form-color-active,
  hover:  $form-color-active,
  error: $form-color-error,
  text: $form-color-font,
  disable: $form-color-diable,
);

.date-picker{
  .erroSpan{
    color: map-get($color-config, 'error');
    margin-top: 10px;
  } 
}

.datePicker{
  // width: 254px;
  
  
}

.datePicker-footer{
  padding: 17px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .timeBlock{
      flex-shrink: 0;
      display: flex;
      div{
          display: flex;
          :not(last-child){
              margin-right: 12px;
          }
      }
  }
}

.datePickerButtonBlock{
  width: 100%;
  display: flex;
  justify-content: space-between;
  .buttonEach{
      display: inline-block;
      flex-shrink: 0;
  }
}

</style>
