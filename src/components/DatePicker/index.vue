<template >

  <section class="date-picker">
    <date-picker class="datePicker" ref="datePicker" v-model:value="state.time" :lang="state.langType"
    type="date"  :editable="false"
    range prefix-class="xmx"  format="YYYY/MM/DD" v-model:open="state.open" @confirm="datePickerConfirm"
    :disabled="isDisable" @close="closePicker"
    :confirm="true" confirm-text="Apply" @pick="calendarChange">
      <template #footer="{ emit }">
        <div class="datePicker-footer">
          <div class="timeBlock">
            <!-- <div v-for="(e,i) in selectVal" >
              <div >{{timePick(e, emit)}}</div>
              <div v-if="i == 0">  ~  </div>
            </div> -->
          </div>
          <div class="datePickerButtonBlock">
            <Button @onClick="applyDate(emit)" type="full" style="margin-right: 24px;" wd="ssmd" h="smd" :disable="state.temp.length!=2" :text="t('__common.__apply')" class="buttonEach"></Button>
            <Button @onClick="closePicker" type="border"  wd="ssmd" h="smd" :text="t('__common.__cancel')" class="buttonEach aaa"></Button>
          </div>
        </div>
      </template>
    </date-picker>
    <!-- <div>time : {{state.time}}</div> -->
    <div :class="{'erroSpan' : error}" v-if="error"> {{error}}</div>
  </section>
</template>



<script>
import Button from '../button/index.vue';
import { reactive, onMounted, ref, watch, computed,  } from 'vue';
import 'vue-datepicker-next/locale/zh-cn';
import 'vue-datepicker-next/locale/zh-tw';
import 'vue-datepicker-next/locale/en';
import 'vue-datepicker-next/locale/fr';
import 'vue-datepicker-next/locale/de';
import 'vue-datepicker-next/locale/ru';
import 'vue-datepicker-next/locale/it';
import 'vue-datepicker-next/locale/ja';
import 'vue-datepicker-next/locale/nl';
import 'vue-datepicker-next/locale/ko';
import 'vue-datepicker-next/locale/pl';
import 'vue-datepicker-next/locale/ro';
import 'vue-datepicker-next/locale/es';
import 'vue-datepicker-next/locale/sv';
import 'vue-datepicker-next/locale/tr';
import 'vue-datepicker-next/locale/uk';
import 'vue-datepicker-next/locale/hi';
import 'vue-datepicker-next/locale/th';
import 'vue-datepicker-next/locale/vi';
import * as moment from 'moment';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';



export default {
  components: {
    Button,
    DatePicker
  },
  props: {
    value: {
      type: Array,
    },
    defaultValue: {
      type: Array,
      default() {
        return [
          '2022/08/15',
          '2022/09/15'
        ]
      }
    },
    error: {
      type: String,
      default: '',
    },
    isDisable: {
      type: Boolean,
      default: false,
    }

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
    const { t } = useI18n();
    const store = useStore()
    const state = reactive({
      temp: [],
      open: false,
      time: [null, null],
      defaultV: [],
      func: () => { },
      localTime: null,
      langType: ''
    });

    


    const privateValue = computed({
      get: () => props.value,
      set: (val) => {
        let defaultStart = moment(val[0]).toISOString()
        let defaultEnd = moment(val[1]).toISOString()
        console.log('inside', defaultStart, defaultEnd)
        let arr = []

        arr[0] = defaultStart
        arr[1] = defaultEnd
        state.time = arr;
        state.temp = arr;
        // emit('changeDatePicker', val);
      }
    });

    const selectVal = computed(() => {
      return state.temp.length ? state.temp : ['', '']
    });


    //picker
    const applyDate = (localEmit) => {
      // console.log('e',localEmit)
      state.func = localEmit;
      // console.log(state.time.length === state.temp.length && state.time.every(function(value, index) { return value === state.temp[index]}))
      if (JSON.stringify(state.time) === JSON.stringify(state.temp)) {
        state.open = false
      } else {
        localEmit(state.temp)
        state.localTime = state.temp
      }
      state.temp = []


    };
    const datePickerConfirm = () => {
      // console.log('e',e)
    };

    const closePicker = () => {
      state.temp = []
      state.open = false

    };

    const timePick = (e) => {
      if (e) {
        return moment(e).format('YYYY/MM/DD')
      } else {
        return 'YYYY/MM/DD'
      }
    }

    const calendarChange = (e) => {
      if (state.temp.length) {
        if (state.temp.length == 1) {
          if (e > state.temp[0]) {
            state.temp.splice(0 + 1, 0, e);
          } else {
            state.temp.splice(0 - 1, 0, e);
          }
        } else {
          state.temp = []
          state.temp.push(e)


        }
      } else {
        state.temp.push(e)
        for (let i = 0; i < state.temp.length; i++) {
          // console.log(state.temp[i].getUTCHours()); // Hours
          // console.log(state.temp[i].getUTCMinutes());
          // console.log(state.temp[i].getUTCSeconds());
          // console.log('SSS', moment(state.temp[i]).toISOString())
        }
      }
    };

    //picker


    const datePicker = ref();

    onMounted(() => {
      state.langType = dateLang[store.state.langIsSelected]
      if (props.value.length) {
        state.time = props.value;
        state.temp = props.value;
      }
    })

    // if不成立，先註解掉
    // watch(() => props.value,
    //   (val, old) => {
    //     console.log('val / old', val, old);
    //     // if (val == [] || old == [] || state.time[0] == null) {

    //     //   if (val.length == 2) {
    //     //     state.time = props.value;
    //     //     state.temp = props.value;
    //     //   }
    //     // }

    //   },
    //   { deep: true }
    // );

    store.watch((state) => (state.langIsSelected ), (newType) => {
      console.log(newType)
      state.langType = dateLang[newType]
    })


    watch( //
      () => state.open,
      (val) => {
        if (val) {
          if (props.value.length) {
            let localTemp = []
            for (let i = 0; i < props.value.length; i++) {
              // console.log('SSS', moment(props.value[i]).format('YYYY : MM :DD')) //.utcOffset()
              localTemp.push(moment(props.value[i]).toISOString())
            }
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
          let arr = []
          for (let i = 0; i < val.length; i++) {
            arr.push(val[i])
            if (val[i] != null) {
              flag = true
            }
          }

          // console.log('arr',state.time ,arr)
          if (flag) {
            emit('changeDatePicker', arr);
          } else {
            emit('changeDatePicker', []);
          }
        }
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
      timePick,
      selectVal,
      privateValue,
      t

    }
  }
}


</script>

<style lang="scss" scoped>


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
    margin-top: 4px;
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
  .buttonEach{
      display: inline-block;
      flex-shrink: 0;
  }
}


</style>
