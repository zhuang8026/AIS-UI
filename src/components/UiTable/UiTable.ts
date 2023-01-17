import UiCheckbox from '@/components/UiCheckbox/index.vue'; 
import {computed, ref} from 'vue';
import { tableData, tableHeader } from './datas';
export default {
  name: 'ui-table',
  components:{
    UiCheckbox
  },
  props: {
    isHasCheck:{
      type: Boolean, //是否要有checkbox
      default: true,
    },
    dataHead: {
      type: Array,
      default(){
        return [{
          txt : '標題1',
          type: 'default' , // type: 'default', 'filter'
        }]
      }, //end: default
    },
    isCheckedAll: {
      type: Boolean,
      default: false,
    },
    isDisableAll: {
      type: Boolean,
      default: false,
    },
    datas: {
      type: Array,
      default(){
        return tableData
      }//end: default
    }, // end: datas
    head: {
      type: Array,
      default(){
        return tableHeader
      }//end: default
    },
    test: {
      type: Boolean,
      default: 'ddd',
    }


  },//end: props
  setup(props, { emit }) {

    let {isCheckedAll} = props;
    
    // check all
    let onCheckAll = () => {

    }//end: onCheckAll
    const privateIsChecked = computed({
      get: () => { return isCheckedAll },
      set: (val) => {
        // state.myVal = val
        console.log('go privateIsChecked',val)
        emit('update:isCheckedAll', val);
      }
    })

    // const privateIsCheckedAll = computed({
    //   get: () => props.isCheckedAll,
    //   set: (val) => {
    //     console.log('privateIsCheckedAll', val);
    //     emit('update:isCheckedAll', val);
    //     console.log('isCheckedAll', props.isCheckedAll);
    //   }
    // })

    let isCheckList = ref(false);

    let onClick = () => {
      // isCheckList.value = !isCheckList.value
      // console.log('onClick',isCheckList.value)
      // emit('update:isCheckedAll', isCheckList.value);
      console.log('onClick' + 'goo');
      // emit('update:test', 'ccc');
      emit('update:test', 'ssss');
    }

    



    return{
      onCheckAll,
      isCheckList,
      // privateIsCheckedAll,
      privateIsChecked,
      onClick
      
    }//end: return
  }, //end: setup
}


