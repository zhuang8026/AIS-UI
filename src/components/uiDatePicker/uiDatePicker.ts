
import { computed, onMounted, ref, watch } from 'vue';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
export default {
  name: 'ui-date-picker',
  components: {
    DatePicker
  },
  props: {
    value: {
      type: [Number, Array, null],
      default(){
        return null
      },
      require: true,
    },
    format: {
      type: String,
      default: 'MM-DD-YYYY',
    },
    range: {
      type: Boolean,
      default: false,
    },
    valueType: {
      type: String,
      default: 'timestamp'  //date, timestamp, format,
    },
  },
  setup(props, {emit}){
    let val: any = ref('');

    let _tranferTimestamp = () => {
      let _val = props.value;
      let isRange = props.range;
      if(isRange){
        // range
        let _startTime = Number(_val[0]) * 1000;
        let _endTime = Number(_val[1]) * 1000;
        return [_startTime, _endTime];
      }
      else{
        return Number(props.value) * 1000;
      }
      
    }

    onMounted(() => {
      val.value =_tranferTimestamp();
    })
    

    let onValueUpdate = (e) => {
      // console.log('onValueUpdate',e);
      if(e[0] && e[1]){
        let _time = Array.isArray(e) ?  e.map(item => item/1000) : e /1000 ;
        emit('update:value', _time);
        emit('onChange', e);
      }
      else{
        // when clear date
        emit('onEmpty', e);
      }
    }

    let defaultVal = computed(()=> {
      let _time  = props.value;
      let isRange = props.range;
      let _timestamp = _tranferTimestamp();
      if(Array.isArray(_timestamp)){
        return _time ? [new Date(_timestamp[0]), new Date(_timestamp[1])] : 0;
      }
      else{
        return _time ? new Date(_timestamp) : 0;
      }
    }) //end: defaultVal

    watch(
      () => props.value, 
      () => {
        val.value =_tranferTimestamp();
      },
      {deep: true}
    )



  

    return{
      val,
      onValueUpdate,
      defaultVal,
    }

  }
}


