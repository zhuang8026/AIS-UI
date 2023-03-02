import UiCheckbox from '@/components/UiCheckbox/index.vue'; 
import UiMultiSelect from '@/components/UiMultiSelect/index.vue';
import Icon from '@/components/Icon/index.vue';
import {computed, ref, watch, reactive, getCurrentInstance, onMounted} from 'vue';
import { tableData, tableHeader } from './datas';
export default {
  name: 'ui-table',
  components:{
    UiCheckbox,
    UiMultiSelect,
    Icon,
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
    emptyText: {
      type: String,
      default : 'No Data'
    },
    isItemClick: {
      type: Boolean,
      default: false,
    },
    moreOption:{
      type: Array,
      default: []  
      /**
       * {
        id: 'del',
        text: 'Permanently Delete'
      },
      {
        id: 'restore',
        text: 'Restore'
      }
       */
    },
    theme: {
      type: String,
      default: '1', // 1 for noraml table : 2 for can click item and keep active style
    },
    selected:{     // select list for click and active item id 
      type: Array,  
      default(){
        return [];
      }
    },
    isSelectedOne:{   // selected 的項目，是不是只能一個  false: 多選 , true: 單選
      type: Boolean,
      default: false,
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

    let isMoreOpenArr = reactive([]);


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
      // console.log('handlData privateDatas',privateDatas);

      // 檢查是否有checkall
      let isAll = checkAllSetting.value.length > 0;
      // console.log('handlData isAll', isAll)

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
          // console.log('init', _checkVal, isAll)
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
        // 處理more
        isMoreOpenArr.push({
          id: item.id,
          isOpen: false
        }); // more
      }) //end: forEach
      updateKey.value +=1;
      // console.log('privateDatas',privateDatas);
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
        let _data =[...props.datas];
        let isAnyCheck = _data.some( item => item.isCheck);
        emit('update:isCheckedAll',isAll);
        emit('onChangeCheck', {
          data: _data,
          isAnyCheck: isAnyCheck
        });
        handlData(DATA_UPDATE_TYPE.CHECK_ALL);
    }
    

    // detail check 改變
    // --- detail check child改變
    let onChangeCheckDetail = (val, id) => {
      let _id = id;
      let _checkVal = val;
      let _data =[...props.datas];
      _data.filter(item => item.id === _id).map(target => target.isCheck = _checkVal.length > 0);
      //控制全選
      let isAll = _data.every( item => item.isCheck);
      let isAnyCheck = _data.some( item => item.isCheck);
      console.log('isAnyCheck',isAnyCheck);
      // console.log('onChangeCheckDetail isAll',isAll, val, id);
      checkAllSetting.value = isAll ? [ALL] : [];
      // console.log('_data',_data);
      emit('onChangeCheck', {
        data: _data,
        isAnyCheck: isAnyCheck
      });
      emit('update:datas', _data);
    } //end: onChangeCheckDetail


    // detail check parent 改變
    watch(
      () => props.datas,
      (val) => {
        // console.log('watch props data change',val);
        // todo: 優化 call很多次問題 - Lynn
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
      // console.log('onClickFilter', eve, id);
      let _id = id; // 第幾個title
      let _selectedArr = eve;
      // console.log('itemId',_id);
      let _selectedVal = _selectedArr.map(item => item.id);
      // console.log('_selectedVal',_selectedVal)
      let _tableHead = props.head;
      _tableHead.filter(item => item.id === _id).map(ele => ele.val = [..._selectedVal]);
      emit('update:head',_tableHead)
      emit('onClickFilter', {
        head: _tableHead,
        id: id
      });
      
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

    let onClickItem = (data) => {
      let _data = data;
      let _selected = [...props.selected];
      
      // handle click item theme
      console.log('isSelectedOne',props.isSelectedOne == true)
      if(props.isSelectedOne){
        //單選
        console.log('單選')
        emit('update:selected', [data.id]);
      }
      else{
        console.log('多選')
        // 多選
        // check selected 有選到要移除，沒選到要acitve
        
        let index =  _selected.indexOf(data.id);
        console.log('index',index);
        if(index != -1){
          _selected.splice(index,1);
        }
        else{
          _selected.push(data.id)
        }
        emit('update:selected', _selected);
      }
      
        
        console.log('props',props.selected);
      const instance = getCurrentInstance();
      instance?.proxy?.$forceUpdate();

      emit('onClickItem', _data);
    }

    

    let onClickMore = (rowId) => {
      // let val = {
      //   rowId: rowId,
      // }
      isMoreOpenArr.filter(item => item.id == rowId).map(ele => ele.isOpen = !ele.isOpen);
      // console.log('onClickMore',val);

    } // end: onClickMore

    let onClickMoreItem = (rowId, moreId) => {
      let val = {
        rowId: rowId,
        moreId: moreId
      }
      isMoreOpenArr.filter(item => item.id == rowId).map(ele => ele.isOpen = !ele.isOpen);
      // console.log('isMoreOpenArr',val);
      emit('onClickMoreItem', val);

    }//end: onClickMoreItem

    let activeStyle = (id)=> {
      let _id = id;
      let _selected = [...props.selected];
      // console.log('_id',_id,props.selected);
      if(_selected.length == 0) return '';
      return (_selected).indexOf(_id) != -1 ?  '[&>td]:bg-root-hoverBlue first:[&>td]:rounded-tl-[8px] first:[&>td]:rounded-bl-[8px] last:[&>td]:rounded-tr-[8px] last:[&>td]:rounded-br-[8px]': '';
    }
    




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
      onClickItem,
      onClickMore,
      onClickMoreItem,
      isMoreOpenArr,
      activeStyle,
      
    }//end: return
  }, //end: setup
}


