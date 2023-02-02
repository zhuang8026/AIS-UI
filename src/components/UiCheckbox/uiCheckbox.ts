
import { reactive, computed, watch } from 'vue'

export default {
  components: {
  },
  props: {
    error: String,
    displayColumn: String,
    optionDisplayColumn: {
      type: Boolean,
      required: false,
      default:false,
    },
    options: {
      type: Array,
      required: true,
    },
    label:  {
      type: String,
      required: false,
    },
    value: {
      type: Array,
      required: true,
    },
    size:{ //default 20px, small 10px
      type: String,
      required: false,
      default : ''
    },
    required: Boolean,
    show: { //只用來展示，不能點擊，也沒有禁止的cursor
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props: { value?: any; isCheck?: any; text?: any; layout?: any; size?: any; isError?: any; isDisable?: any; isSlot?: any; },  { emit }: any) {
    // const { isCheck, text, layout, size, isError, isDisable, isSlot } = props;
    
    const state = reactive({
      

    })
    
    
    const checkedValue = computed({
      get: () => props.value,
      set: (val) => {
        
        emit('update:value', val);

      }
    });


    return {
      state,
      checkedValue,
    }

  }// end: setup
}


