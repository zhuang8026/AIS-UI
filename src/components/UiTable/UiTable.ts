import UiCheckbox from '@/components/UiCheckbox/index.vue'; 
import {computed, ref, watch, reactive, getCurrentInstance} from 'vue';
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
    


  },//end: props
  setup(props, { emit }) {

    
    // check all
    let onCheckAll = () => {

    }//end: onCheckAll

    // 是否全選
    let privateIsCheckAll = ref(props.isCheckedAll);
    let privateDatas = reactive([...props.datas]); // 接table data

    watch(
      () => privateIsCheckAll.value,
      (val) => {
        console.log('watch privateIsCheckAll',privateIsCheckAll.value, val)
        emit('update:isCheckedAll', val);
      }//end: val
    )//end: watch

    //所有data 是否check的array
    let isCheckList = reactive([]);

    let setDataCheckList = (eve) => {
      let _eve = eve;
      console.log('_eve',_eve);
      isCheckList= [];
      isCheckList = _eve.map(item => item.isCheck);
      isCheckList = [...isCheckList];
      console.log('isCheckList', isCheckList);
    }//end: setDataCheckList

    setDataCheckList(props.datas);

    

    // watch(
    //   () => props.data,
    //   (val) => {
    //     setDataCheckList(val);
    //   } //end: val
    // )//end: watch

    watch(
      () => isCheckList,
      () => {
        console.log('isCheckList watch');
        //emit('update:')
      },
      { deep: true }
    )//end: watch

    let updateKey = ref(0);

    let updateDataCheck = (val, index) => {
      let _index = index;
      let _val = val;
      privateDatas[_index].isCheck = _val;
      emit('update:datas', privateDatas);
      console.log('updateDataCheck update', props.datas);
      updateKey.value +=1;

    }//end: updateDataCheck

    


    

    
    



    return{
      onCheckAll,
      isCheckList,
      // privateIsCheckedAll,
      // privateIsChecked,
      privateIsCheckAll,
      updateDataCheck,
      updateKey
      
    }//end: return
  }, //end: setup
}


