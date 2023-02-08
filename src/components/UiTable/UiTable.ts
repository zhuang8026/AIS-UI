import UiCheckbox from '@/components/UiCheckbox/index.vue'; 
import UiMultiSelect from '@/components/UiMultiSelect/index.vue';
import {computed, ref, watch, reactive, getCurrentInstance, onMounted} from 'vue';
import { tableData, tableHeader } from './datas';
export default {
  name: 'ui-table',
  components:{
    UiCheckbox,
    UiMultiSelect
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
    isCheckedAll: {    // 全選checkbox
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
    

    let updateKey = ref(0);
    
    // 是否全選
    let ALL = 'all';
    let checkAllSetting = reactive({
        options: [
          {
            name:  '',
            val: ALL,
            disabled: false,
          }],
        value: [],
    });

    let checkIsCheckAll = () => {
      checkAllSetting.value = props.isCheckedAll ? [ALL] : [];
    } //end: checkIsCheckAll

    
    
    
    let privateDatas = reactive([]); // 接table data


    //從哪邊改變資料
    let DATA_UPDATE_TYPE = {
      INIT: 'init',
      CHECK_ALL: 'all',
      CHECK_DETAIL: 'detail',
    }

    //處理資料
    let handlData = (status = DATA_UPDATE_TYPE.INIT) => {
      // privateDatas = props.datas.concat();
     // privateDatas = [...props.datas]
      Object.assign(privateDatas, props.datas);
      console.log('handlData privateDatas',privateDatas);

      // 檢查是否有checkall
      let isAll = checkAllSetting.value.length > 0;
      console.log('handlData isAll', isAll)

      // 處理每列的checkbox
      privateDatas.forEach(item => {
        let _option = [{
          name: '',
          val: item.id,
          disable: item.isDisable
        }]//end: item
        let _checkVal = [];
        let _isCheck = false;
        if (status === DATA_UPDATE_TYPE.INIT){
          _checkVal = isAll ? [item.id] : item.isCheck ? [item.id] : [];
          _isCheck = _checkVal.length > 0;
          console.log('init', _checkVal, isAll)
        } 
        else if (status === DATA_UPDATE_TYPE.CHECK_ALL){
          _checkVal = isAll ? [item.id] : [];
          _isCheck = _checkVal.length > 0;
        }
        // else if(status === DATA_UPDATE_TYPE.CHECK_DETAIL){

        // }//end: if
        item['options'] = _option.slice(0);
        item['checkVal'] = _checkVal.slice(0);
        item['isCheck'] =_isCheck;
      }) //end: forEach
      updateKey.value +=1;
      console.log('privateDatas',privateDatas);
      const instance = getCurrentInstance();
      instance?.proxy?.$forceUpdate();
      
    }//end: handlData

    // checkall改變
    // -- checkall parent改變
    watch(
      () => props.isCheckedAll,
      (val) => {
        let isAll = val;
        checkAllSetting.value = isAll ? [ALL] : [];
        handlData(DATA_UPDATE_TYPE.CHECK_ALL);
      }
    )
    // -- checkall child改變

    let onChangeCheckAll = (val) => {
        let isAll = val.length > 0;
        emit('update:isCheckedAll',isAll);
        handlData(DATA_UPDATE_TYPE.CHECK_ALL);
    }
    

    // detail check 改變
    // --- detail check child改變
    let onChangeCheckDetail = (val, id) => {
      console.log('onChangeCheckDetail', val,id);
      let _id = id;
      let _checkVal = val;
      let _data =[...props.datas];
      _data.filter(item => item.id === _id).map(target => target.isCheck = _checkVal.length > 0);
      //控制全選
      let isAll = _data.every( item => item.isCheck);
      console.log('onChangeCheckDetail isAll',isAll);
      checkAllSetting.value = isAll ? [ALL] : [];
      console.log('_data',_data);
      emit('update:datas', _data);
    } //end: onChangeCheckDetail


    // detail check parent 改變
    watch(
      () => props.datas,
      (val) => {
        console.log('watch props data change',val);
        handlData();
      },
      {
        deep: true
      }
    ) //end: watch

    onMounted(() => {
      checkIsCheckAll();
      handlData(DATA_UPDATE_TYPE.INIT);
    });


    // 處理header muti select
    
    // child component update head filter item update to parents
    let onClickFilter = (eve, id) => {
      let _id = id; // 第幾個title
      let _selectedArr = eve;
      // console.log('itemId',_id);
      let _selectedVal = _selectedArr.map(item => item.id);
      // console.log('_selectedVal',_selectedVal)
      let _tableHead = props.head;
      _tableHead.filter(item => item.id === _id).map(ele => ele.val = [..._selectedVal]);
      emit('update:head',_tableHead)
      
    } // end: selectAllList

    // head filter selected value
    let filterSelectedVal = computed(() => {
      let _filterVal = [];
      
      props.head.forEach(item => {
        let _hasFilterArr = [];
        if(item.hasOwnProperty('options')){
          let _valArr = item.val;
          _valArr.forEach((currentId) => {
              let _currentOption = item?.options.filter(target => target.id == currentId)[0];
              // console.log('item?.options.',item?.options);
              // console.log('_currentOption',_currentOption);
              _hasFilterArr.push({
                id: currentId,
                name: _currentOption.name,
                disabled: _currentOption.disabled
              })
          })//end: forEach
        }//end: if 
          _filterVal.push(_hasFilterArr);
      }) //end: forEach
      return _filterVal;
    })//end: computed

    // head style
    let headTheme = computed(() => {
      let isHasFilter = props.head.findIndex(item => item.hasOwnProperty('options')) > -1;
      console.log('isHasFilter', isHasFilter);
      return isHasFilter ?  ' text-font-2 ' : ' text-grey-90 '
    })

    




    return{
      privateDatas,
      updateKey,
      ALL,
      checkAllSetting,
      onChangeCheckDetail,
      onChangeCheckAll,
      onClickFilter,
      filterSelectedVal,
      headTheme,
      
    }//end: return
  }, //end: setup
}


