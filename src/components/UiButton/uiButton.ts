
import { reactive, computed, watch } from 'vue'
import Icon from '@/components/Icon/index.vue';
export default {
  components: {
    Icon
  },
  props: {
    
    disable: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: ''
    },

    type: { //下列css的name ， 沒寫 為 default, full 為背景滿版, empty 為空, link 為有底線
      type: String,
      default: 'normal',
    },
    borderRadius:{ // default : ehs 圓角5px，設定為空值時 圓角 20px
      type:String, 
      required: false,
      default: 'ehs',
    },
    icon: {
      type: String,
      default: '',
    },
    custom: {
      type: String,
      default: '',
    },
    forVal: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    height:{
      type: [String, Number],
      required: false,
      default: '',
    },
    textSize: {
      type: String,
      required: false,
      default: '14',
    },
    customizeH: {
      type: String,
      required: false,
      default: '',
    }
  },
  setup(props: { disable?: any;  type?: any; icon: any;  }, { emit }: any) {
    // const {  type, disable, wd, icon, h } = props;
    const {  icon } = props;

    const state = reactive({
      disable: props.disable,

    })
    // methods
    const onClick = () => {
      if (!state.disable) {
        emit('onClick');
      }

    }

    // computed
    let buttonStatus = computed(() => [
      props.disable ? props.type +' '+ 'disable' : props.type,

    ])


    watch(
      () => (props),
      (val) => {
        state.disable = val.disable;
      },
      { deep: true },
    )

    return {
      state,
      buttonStatus,
      onClick
    }

  }// end: setup
}


