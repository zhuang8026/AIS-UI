
import Icon from '@/components/Icon/index.vue';
import { computed, onMounted, reactive, ref, watch } from 'vue';

const clickOutside = {
  beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
          if (!(el == event.target || el.contains(event.target))) {
              binding.value();
          }
      };
      document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
  },
};

export default {
  name: 'ui-select-adv',
  components: {
    Icon
  },
  directives: {
    'click-outside': clickOutside
  },
  props: {
    optionArr:{
      type: Array,
      require: false,
      default(){
        return [{
          id: 'op1',
          name: 'option1',
        },
        {
          id: 'op2',
          name: 'option2',
        }]
      }
    },
    placeholder:{
      type: String,
      require: false,
      default: 'Title Placeholder',
    },
    defaultSelectedValue: {
      type: Object,
      required: false,
      default(){
        return {
          id: 'op1',
          name: 'option1',
        }
      }//end: default
    },
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
      
    }

  },
  setup(props, {emit}){

    let {optionArr} = props;

    const itemRefs = ref([]);

    let privateIsOpen = computed({
      get: () => props.isOpen,
      set: (val) => {
        emit('update:isOpen',val);
      }
    }) //privateIsOpen

    let opt = reactive([]);


    let updatePropsOption = () => {
      let _updateOptionArr = [...opt];
      delete _updateOptionArr['isEdit'];
      console.log('_updateOptionArr',_updateOptionArr);
      emit('update:optionArr', _updateOptionArr);

    }

    let onClickSelect = () => {
      privateIsOpen.value = !privateIsOpen.value;
    }//end: onClickSelect
    

    let onClickEdit = (index) => {
      let _index = index;
      opt.map((item, i) => item.isEdit = _index == i);
      // opt[_index].isEdit = true;
      // inputVal = opt[_index].name; 

    }//end: onClickEdit

    let onClickCheck = (index, id) => {
      // console.log('itemRefs',itemRefs.value);
      let _ref = itemRefs.value; 
      let _index = index;
      let _val = _ref[_index].querySelector('input').value;
      // console.log('input', _ref[_index].querySelector('input').value)
      opt[_index].name = _val;
      opt[_index].isEdit = false;
      
      // check if the update item is the selected item
      let isSelectedItemUpdate  = props.defaultSelectedValue['id'] === id;
      console.log('isSelectedItemUpdate',isSelectedItemUpdate)
      console.log('aa', props.defaultSelectedValue['id'] )
      console.log('id', id)
      if(isSelectedItemUpdate){
        emit('update:defaultSelectedValue', opt[_index]);
      }  
    } //end: onClickCheck

    
    let onClickItem = (item) => {
      emit('update:defaultSelectedValue', item);
      privateIsOpen.value = false;
    } //end: onClickItem

    //close dropdown list
    let closeListHandle = () => {
      opt.map(item => item.isEdit = false);
      updatePropsOption();
    } //end: closeListHandle

    watch(
      ()=> props.isOpen,
      (val) => {
        if(!val) {
          opt.map(item => item.isEdit = false);
          closeListHandle();
        }
      }) //end: watch

    onMounted(() => {
      Object.assign(opt, optionArr);
      // console.log('check',opt ===  props.optionArr)
      opt.map(item => item['isEdit'] = false);
      
    });

    let handleFocusOut = () => {
      closeListHandle();
      privateIsOpen.value = false;
    }// end: handleFocusOut


    return{
      onClickEdit,
      onClickCheck,
      opt,
      onClickSelect,
      privateIsOpen,
      onClickItem,
      itemRefs,
      handleFocusOut,

    }//end: return
  }//end: setup
} //end: export


