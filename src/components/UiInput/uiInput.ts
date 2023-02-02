
import { computed, nextTick, } from 'vue';
// import { uuid } from 'vue-uuid';
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: 'text'
    },
    maxLength: {
      type: Number,
      default: 9999,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String || Number,
      default: '',
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '32',
    },
    id: {
      type: String,
      default: '',
    },
    min: { //當input為date時，可選的最小日期
      type: String,
      default: undefined
    },
    error: {
      type: [String, Boolean],
      default: '',
      require: false,
    },
    minInt: { 
      type:  String,
      default: undefined
    },
    maxInt: { 
      type:  String,
      default: undefined
    },
    prefix: String,
    suffix: String,


  },
  setup(props: { placeholder?: any; isError?: any; error?: any; isDisable?: any; type?: any; minInt?: any; maxInt?: any; bg?: any; value?: any; id?: any; }, { emit }: any) {
    const { value, id, } = props;
    let _posCursourStart =0;
    let target = null;


    const privateValue = computed({
      get: () => value,
      set: (val) => {
        
        emit('update:value', val.toString());

      }
    });

    const valueChange = () => {
      nextTick(()=>{
        
      })
    }
    const placeholderLocal = computed(() => {
      return props.placeholder
    })


    const privateId = computed(() => {
      // return id === '' ? uuid.v4() : id;
    })



    const onkeydown = (event) => {
      let e = event.target;
      target = e;
        if(event.keyCode === 8 ){
          // back or delete
          _posCursourStart = e.selectionStart - 1;
        
        }
        else if(event.keyCode === 46){
          _posCursourStart = e.selectionStart;
        }
        else{
          _posCursourStart = e.selectionStart + 1;
          
        }
      
      if (props.type == 'date') {
        return false
      }
      if (props.type == 'number') {
        console.log('input event', event)
        // event = (event) ? event : window.event;
        var charCode = (event.which) ? event.which : event.keyCode; // 
        

        if (charCode == 189 || charCode == 110 || charCode == 109 || charCode == 107 || charCode == 187) {
          event.preventDefault();
        }
      }
      
      
    }

    const onkeyup = (event: { target: { value: any; }; }) => {
      emit('onKeyUp', { val:event.target.value, key:privateId});
      target = event.target;
      if (props.type == 'number') {
        let val = Number(target.value)
        let min = Number(props.minInt)
        let max = Number(props.maxInt)
        
        // console.log('????',val, min,max)
        if (min) {
          if (val < min) {
            emit('update:value', min.toFixed(4));
          }
          else {
            if (val < max) {
              emit('update:value', val.toFixed(4));
            }
          }
        }
        if (max) {
          if (val > max) {
            emit('update:value', max.toFixed(4));
          }
          else {
            if (val > min) {
              emit('update:value', val.toFixed(4));
            }
          }
        }
      }
      emit('onChange', event.target.value);

    }


    const blur = (event: { target: { value: any; }; }) => {
      emit('onBlur', { val:event.target.value, key:privateId});

    }





    return {
      privateValue,
      privateId,
      onkeydown,
      placeholderLocal,
      onkeyup,
      valueChange,
      blur
    }

  },//end: setup
}


