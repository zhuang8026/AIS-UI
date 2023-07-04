import { onMounted, computed, ref, defineEmits } from 'vue';
// import { uuid } from 'vue-uuid';
import Icon from '@/components/Icon/index.vue';
export default {
  components: {
    Icon,
  },
  props: {
    width: {
      type: [String, Number],
    },
    placement: {
      //popover展示出的位置,可选值——top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
      type: [String],
      default: 'top',
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    content: {
      type: [String],
    },
    popperClass: {
      //自定义类，给弹出框添加自定义样式
      type: [String],
    },
    title: {
      type: [String],
    },
    transition: {
      //popover过渡动画设置
      type: String,
      default: 'slide-fade',
    },
    disabled: {
      type: [Boolean],
      default: false,
    },
    //trigger可选值——click,hover,manual,focus
    trigger: {
      type: [String],
      default: 'click',
    },
  },
  setup(props: {
    width?: any;
    placement?: any;
    modelValue?: any;
    content?: any;
    popperClass?: any;
    title?: any;
    transition?: any;
    disabled?: any;
    trigger?: any;
  }, {emit}) {
    const timer = ref(null);
    const visible = ref(false);
    //计算arrow的位置
    const reference = ref(null);
    const popoverArrow = ref(null);
    // const emit = defineEmits(['after-enter', 'after-leave']);

    const showPopover = computed(() => {
      if (props.trigger !== 'manual') {
        return visible.value;
      } else {
        // console.log(props.modelValue);
        //自定义触发
        return props.modelValue;
      }
    });

    //hover——鼠标移入触发
    const hoverTriggerEnterHandler = () => {
      // console.log('hoverTriggerEnterHandler');
      if (props.trigger.toLowerCase() == 'hover') {
        if (!props.disabled) {
          clearTimeout(timer.value);
          visible.value = true;
        }
      }
    };
    //hover——鼠标移出,关闭popover tips:当鼠标移出时，有个300ms的延时，如果在期间再次移入，则清空定时器，并当再次移出时，重新计时
    const hoverTriggerLeaveHandler = () => {
      // console.log('hoverTriggerLeaveHandler');
      if (props.trigger.toLowerCase() == 'hover') {
        if (!props.disabled) {
          timer.value = setTimeout(() => {
            visible.value = false;
          }, 300);
        }
      }
    };

    //弹窗显示时触发
    const handleAfterEnter = () => {
      emit('after-enter');
    };
    //弹窗消时时触发
    const handleAfterLeave = () => {
      emit('after-leave');
    };

    const clickTriggerHandler = () => {
      if (props.trigger.toLowerCase() == 'click') {
        if (!props.disabled) {
          visible.value = !visible.value;
        }
      }
    };

    onMounted(() => {
      // console.log(reference.value.clientWidth);
      if (
        props.placement.includes('top') ||
        props.placement.includes('bottom')
      ) {
        let clientWidth = reference.value.clientWidth;
        popoverArrow.value.style.setProperty(
          '--geticonsite',
          clientWidth / 2 + 'px'
        );
      } else if (
        props.placement.includes('left') ||
        props.placement.includes('right')
      ) {
        let clientHeight = reference.value.clientHeight;
        popoverArrow.value.style.setProperty(
          '--geticonsite',
          clientHeight / 2.5 + 'px'
        );
      }
    });

    return {
      popoverArrow,
      reference,
      showPopover,
      hoverTriggerEnterHandler,
      hoverTriggerLeaveHandler,
      handleAfterEnter,
      handleAfterLeave,
      clickTriggerHandler,
    };
  },
};
