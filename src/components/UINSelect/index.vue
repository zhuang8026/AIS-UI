<template>
<div class="ui-select" :class="[classStyle]" v-click-outside="handleFocusOut">
  <div class="select-block" @click.stop="onClick">
    <!-- <a href="javascript:;" class="selected-text" v-html="selected.isI18n ? t(selected.isI18n) : selected.text"></a> -->
    <a href="javascript:;" class="selected-text" v-html=" selected.text"></a>
    <div :class="{'erroSpan' : error}"  v-if="isShowErrorTxt"> {{error}}</div>
  </div>
  <ul class="select-list-block" v-if="state.isOpen" tabinde="1">
    <template v-for="item in options" :key="item.val">
      <li class="option" :value="item.val" >
        <a href="javascript:;"  
          @click="onChange(item)" >
          <span class="text" :class="{'style--title':item.hasOwnProperty('sub')}" 
          v-html="item.isI18n ?  t(item.isI18n):item.text"></span>
          <Icon class=" selectIcon" iconClass="Ico_Check" type="svg" v-if="selected.val == item.val"></Icon>
          </a>
        <ul class="options-list-sub" v-if="item.hasOwnProperty('sub')">
          <li v-for="subOption in item.sub" :value="subOption.val" :key="subOption.val">
            <a href="javascript:;" class="text" @click="onChange(subOption)">{{subOption.text}}</a>
          </li>
        </ul>
      </li>
    </template>
  </ul>

</div>
</template>

<script>

import { clickOutside } from '@/components/UINSelect/clickOutside.ts';
import { reactive, computed  } from 'vue';
import Icon from '@/components/Icon/index.vue';

export default {
  components: {
    Icon
  },
  directives: {
    clickOutside,
  },
  props: {
    placeholder: {  // placeholder
      type: Object,
      default() {
        return {
          text: 'Select Please',
          val: 'default',
        }
      }
    },
    options: {
      type: Array,
      default() {
        return [{
          text: '1-001',
          val: '001',
        },
        {
          text: '1-002',
          val: '002',
          sub: [{
            text: '2-00001',
            val: '00201'
          },
          {
            text: '2-00001',
            val: '00202'
          }]
        },
        ]
      }
    },
    selected: {   //被選擇的值
      type: Object,
      default() {
        return {
          text: 'Select Please',
          val: 'default',
        }
      }
    }, //end: selected
    isError: {
      type: Boolean,
      default: false,
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    h: {
      type: String,
      default: 'default', // xl -> 56px
    },
    error: {
      type: String,
      default: '',
      require: false,
    },
    isShowErrorTxt: {   //當有錯誤時是否顯示錯誤文字
      type: Boolean,
      default: true,
    }
  },
  setup(props, { emit }) {
    const { selected, isDisable } = props;
    //data
    let state = reactive({
      isOpen: false,
      errorStyle: '',
      disableStyle: isDisable ? 'style--disable' : '',
    })
    //computed
    const classStyle = computed(() => {
      return [
        { 'active': state.isOpen },
        { 'style--error': props.isError },
        { 'style--error': props.error },
        { 'style--disable': props.isDisable },
        'style--' + props.h,
      ]
    })
    let privateSelected = computed({
      get: () => selected,
      set: (val) => {
        // console.log(val)
        emit('update:selected', val);
      }
    })

    // watch(
    //   () => props.isError,
    //   (val) => {
    //     state.errorStyle = val ? 'style--error' : '';
    //   })

    // watch(
    //   () => props.isDisable,
    //   (val) => {
    //     state.disableStyle = val ? 'style--disable' : '';
    //   })


    //change selected option, methods
    const onChange = (item) => {
      state.isOpen = !state.isOpen;
      const selected = { ...item }
      privateSelected.value = selected;
      emit('onChange', selected);
    }
    // click the select box
    const onClick = () => {
      state.isOpen = !state.isOpen;
    }
    const handleFocusOut = () => {
      state.isOpen = false
    }

    return {
      state,
      onClick,
      onChange,
      handleFocusOut,
      classStyle,
      privateSelected,
    }
  }


}




</script>


<style lang="scss" scoped>

$config-select:(
    h: $form-h,
    h-xl: 56px,
    space: $form-space-start,
    radius: $form-radius,
    arrowW: 2px,
    arrowH: 5px,
    max-h-options: 200px, //選項的總長最大高
);
$color-config: (
    default: $form-color-default,
    active: $color-main-deep,
    text-active: $color-white,
    sub: $color-black,
    line: $color-grey-light3,
    hover: $color-main-dark, // bg hover color,
    select: $color-main-deep, //bg selected color
    optionsBg: $color-bg, // options default bg
    error: $form-color-error,
    disable:$form-color-diable
);
.ui-select {
    border: green solid 1px;
    text-align: left;
    position: relative;
    display: flex;
    ::-webkit-scrollbar {
        width: 5px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: $color-main;
        border-radius: 10px;
    }
    &:hover, &:active{
        .select-block{
            border-color: map-get($color-config, active);
        } 
    }
    //open the select 
    &.active{
        .select-block{
            &::after{
                
                @include arrowTop(map-get($config-select, arrowW), map-get($config-select, arrowH), map-get($color-config, default));
                margin-top:  1px +  map-get($config-select, arrowW);
            }

        }
    } //end: active

    &.style--error{
        .select-block{
            border-color: map-get($color-config, 'error');
            &::after{
                @include arrowDown(map-get($config-select, arrowW), map-get($config-select, arrowH), map-get($color-config, 'error'));
            }
        }
        &.active{
            .select-block{
                &::after{
                    @include arrowTop(map-get($config-select, arrowW), map-get($config-select, arrowH), map-get($color-config, 'error'));

                }
            }
        } //end: active
    }
    &.style--disable{
        pointer-events: none;
        .select-block{
            pointer-events: none;
            border-color: map-get($color-config, 'disable');
            &::after{
                @include arrowDown(map-get($config-select, arrowW), map-get($config-select, arrowH), map-get($color-config, 'disable'));
            }
            .selected-text{
                color: map-get($color-config, 'disable');
            }
        }
        &.active{
            .select-block{
                &::after{
                    @include arrowTop(map-get($config-select, arrowW), map-get($config-select, arrowH), map-get($color-config, 'disable'));
                
                }
                .selected-text{
                    color: map-get($color-config, 'disable');
                }
            }
        } //end: active
    }

    &.style--xl{
        .select-block{
            height: map-get($config-select, h-xl);
        }  
    }

    // select box
    .select-block{
        display: flex;
        width: 100%;
        align-items: center;
        height: map-get($config-select, h);
        border: 1px solid map-get($color-config, default);
        box-sizing: border-box;
        padding: 0 map-get($config-select, space);
        border-radius: map-get($config-select, radius);
        position: relative;
        cursor: pointer;
        transition: border-color .2s;
        
        
        &::after{
            transition: all .2s;
            content: ' ';
            display: inline-block;
            margin-top: -1 * map-get($config-select, arrowW);
            @include arrowDown(map-get($config-select, arrowW), map-get($config-select, arrowH), map-get($color-config, default));
        }

        .selected-text{
            display: block;
            width: 100%;
            text-decoration: none;
            color: map-get($color-config, text-sub);
            text-align: left;
        }//end: selected-text
        div{
            // border: solid 1px yellow;
            position: absolute;
            top : 40px;
            margin-top: 10px;
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            left: 0;
        &.erroSpan{
            color: map-get($color-config, 'error');
            
            }
        }
    } // end: select-block

    // options 
    .select-list-block{
        transition: border-color .2s;
        display: inline-block;
        width: 100%;
        border-radius: map-get($config-select, radius);
        border: 1px solid map-get($color-config, default);
        max-height: map-get($config-select, max-h-options);
        overflow-y: auto;
        scroll-padding: 50px 0 0 50px;
        position: absolute;
        top: map-get($config-select, h) + 22px;
        background-color: map-get($color-config, optionsBg);
        z-index:  map-get($zIndex, options);
        
        .option{
            padding: 0;
            + .option{
                // border-top: 1px solid map-get($color-config, line);
            }
            a{
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding: 10px map-get($config-select, space);
              text-decoration: none;
              color:  map-get($color-config, sub);
              transition: background-color .2s;
              .selectIcon{
                width: 40px;
                height: 40px;
                border: solid 1px;
                color: $color-main;
              }
              &.style--title{
                  opacity: 0.65;
                  color:  $color-disable;
                  pointer-events: none;
              }

              &:hover{
                  color: map-get($color-config, text-active);
                  background-color:  map-get($color-config, hover);
              }
              &:active{
                  color: map-get($color-config, text-active);
                  background-color:  map-get($color-config, select);
              }
            }
            .text{
                cursor: pointer;
                display: block;
            }  
        } //end: option
    } //end: select-list-block
    
} //end: ui-select
</style>
