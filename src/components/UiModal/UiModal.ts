import { computed, onMounted, ref, useSlots, watch } from 'vue';
import UiButton from '@/components/UiButton/index.vue';
export default {
  components: {
    UiButton,
  },
  props: {
    isVerify: {
      type: String,
    },
    isConfirmClose: {  //點了confirm之後要不要自動關閉 true:表示會自動關閉 false:不是自動關閉
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    wd: {
      type: String,
      default: 'default', // default: 498px, sm: 511px, lg: 960px
    },
    minH: {
      type: String,
      default: "default", // md: 400px
    },
    titleH: { //min-height
      type: String,
      default: 'default', // default: 48px,  md: 60px,
    },
    title: {
      type: String,
      default: 'Title Main Here',
    },
    subTitle: {
      type: String,
      default: '',  // Sub title Here , title text, empty no title
    },
    alignTitle: {    // left, center, right
      type: String,
      default: 'center'
    },
    alignBtn: {    // left, center, right
      type: String,
      default: 'center'
    },
    imgLink: {
      type: String,
      default: '' // 
    },
    content: {
      type: String,
      default: 'content here'
    },
    contentSpace: {   // content左右space
      type: String,
      default: 'none',  // wd: 36px,
    },
    contentTDSpace: {  // content上下space
      type: String,
      default: 'default',  // default: 24px  none: 0,
    },
    borderRadius : {  // content上下space
      type: String,
      default: 'ehs',  // default: 24px  none: 0,
    },
    // isHasCancel: {
    //   type: Boolean,
    //   default: true,
    // },
    // isHasConfirm: {     //是否需要關閉按鈕
    //   type: Boolean,
    //   default: false,
    // },
    btnCancel: {
      type: Object,
      default() {
        return {
          text: 'Cancel',
          disable: false,
          theme: '2',
          color: 'transprent',
          type: 'default',
          wd: 'auto'
        }
      }
    },
    btnConfirm: {
      type: Object,
      default() {
        return {
          text: 'Confirm',
          disable: false,
          theme: '2',
          color: 'transprent',
          type: 'full',
          wd: 'auto'
        }
      }
    },
    isHasClose: {
      type: Boolean,
      default: false,
    },
    btnArrange: {
      type: String,
      default: 'default', // default: left, right ; top-down: top and down, reverse: change left and right
    },


  },
  setup(props, { emit }) {
    const slot = useSlots()
    const { wd, title, subTitle, alignTitle, alignBtn, isOpen, isConfirmClose, contentSpace, btnArrange, contentTDSpace, titleH } = props;
    const styleClass = computed(() => [
      'wd--' + wd,
      { 'style--no-title': title === '' && subTitle == '' },
      'title--align-' + alignTitle,
      'btn--align-' + alignBtn,  //todo
      'space--content-' + contentSpace,
      'space--content-td-' + contentTDSpace,
      'h--title-' + titleH,
      'btn--arrange-' + btnArrange,
      'min-h--' + props.minH,
    {'style--has-slot-btn': slot.btn !== undefined},
    ], 
    ) //end: styleCalsee

    let btnNum = ref(0);
    



    const privateIsOpen = computed({
      get: () => isOpen,
      set: (val) => {
        emit('update:isOpen', val);
      }
    })
    const clickCancel = () => {
      privateIsOpen.value = false;
      emit('onClickCancel');
    }

    const clickConfirm = () => {
      if (isConfirmClose) privateIsOpen.value = false;
      emit('onClickConfirm');
    }

    watch(() => props.isOpen, (val) => {
      if (val) {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.classList.add(`style--fixed`);
        // document.getElementById("app-main-page").className = 'style--fixed';
      }
      else {
        const scrollY = document.body.style.top;
        document.body.style.top = '';
        document.body.classList.remove('style--fixed');
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

      }
    })

    onMounted(() => {
      let isHasBtnCancel = props.btnCancel.hasOwnProperty('text');
      let isHasBtnConfirm = props.btnConfirm.hasOwnProperty('text');

      if(!(isHasBtnCancel && isHasBtnConfirm)){
        btnNum.value = 1;
      }

      console.log('slot.btn',slot.btn, slot)
    });

    const onClickCancel = () => {
      privateIsOpen.value = false;
      // store.commit('setCloseModal');
      emit('onClickCancel');
    }

    return {
      styleClass,
      clickCancel,
      clickConfirm,
      privateIsOpen,
      onClickCancel,
      btnNum,
      slot,
    }

  }

}


