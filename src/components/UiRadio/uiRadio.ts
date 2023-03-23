
import { reactive, computed, watch, onMounted } from 'vue'
import { uuid } from 'vue-uuid';

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
      type: [String, Boolean, Number],
      required: true,
    },
    // theme:{ //目前沒有其他樣式
    //   type: String,
    //   required: false,
    //   default : ''
    // },
    size:{ //default '' 20px, small 10px
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
    margin:{ //控制 每個 checkbox 間隔 例如 : '0 0 20px 0'
      type: String,
      required: false,
      default : ''
    },
    custom:{ //客製化選項
      type: String,
      required: false,
      default : ''
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    theme: {
      type: String,
      required: false,
      default: 'default', // default, 1-> for border
    }
  },
  setup(props: { value?: any; text?: any; layout?: any; size?: any; isError?: any; isDisable?: any; isSlot?: any; name?:String },  { emit }: any) {
    // const {  text, layout, size, isError, isDisable, isSlot } = props;
    
    const state = reactive({
      

    })

    
    
    
    const radioValue = computed({
      get: () => props.value,
      set: (val) => {
        
        emit('update:value', val);

        emit('changeValue', val);

      }
    });

    let privateName = computed(()=> {
      return props.name === '' ? uuid.v4() : props.name;
    })

    

    return {
      state,
      radioValue,
      privateName,
    }

  }// end: setup
}


