<template>
  <button class="ais-button" :class="isClass" :style="styles">
    <div class="btn-icon" :class="icon" v-if="leftIcon" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    icon: String,
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: 'default', // default
    },
    customColor: {
      type: String,
      default: '',
    },
    leftIcon: Boolean,
    rightIcon: String,
    localing: Boolean,
  },
  computed: {
    isClass() {
      /**
       * basic-button
       * importance-button
       * small-button
       * small-important-button
       * text-icon-button
       * hyperLink-button
       * */
      return [
        this.type ? `ais-button-${this.type}` : '',
        // className 3: disabled
        this.disabled ? `ais-button-${this.type}-disabled` : '',
        this.disabled&&this.icon ? `btn-icon-disabled` : '',
        // className 4: border-radius
        {
          'ais-button-round': this.round,
        },
        {
          'width': this.size != '' ? this.size : ''
        }
      ];
    },
    styles() {
      const mBtnDeaultStyle = {
        // background: this.customColor,
        // border: this.customColor,
        width: `${this.size}px`,
        // color: '#fff',
      };
      return [
        this.size == '' ? {} : mBtnDeaultStyle
      ];
    },
  },
};
</script>

<script setup>
// import { computed, useSlots } from "vue";
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// phm use
.ais-button {
  padding: 8px auto;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    display: block;
  }
  span {
    display: inline-block;
  }
}

.ais-button-basic {
  width: 160px;
  height: 36px;
  font-size: 16px;
  border: solid 1px $color-main;
  color: $color-main;
  background: transparent;
  &:hover {
    border-color: $color-main-hover;
    background: $color-main-hover;
    color: $color-fff;
  }
  &:active {
    border-color: $color-main-pressed;
    background: $color-main-pressed;
    color: $color-fff;
  }
}
.ais-button-basic-disabled {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-main-disable-1;
  pointer-events: none;
}



.ais-button-importance {
  width: 160px;
  height: 36px;
  font-size: 16px;
  border: solid 1px $color-main;
  color: $color-fff;
  background: $color-main;
  &:hover {
    border-color: $color-main-hover;
    background: $color-main-hover;
    color: $color-fff;
  }
  &:active {
    border-color: $color-main-pressed;
    background: $color-main-pressed;
    color: $color-fff;
  }
}
.ais-button-importance-disabled {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-fff;
  background-color: $color-main-disable-1;
  pointer-events: none;
}

.ais-button-small {
  width: 96px;
  height: 32px;
  font-size: 12px;
  border: solid 1px $color-main;
  color: $color-main;
  background: transparent;
  &:hover {
    border-color: $color-main-hover;
    background: $color-main-hover;
    color: $color-fff;
  }
  &:active {
    border-color: $color-main-pressed;
    background: $color-main-pressed;
    color: $color-fff;
  }
}
.ais-button-small-disabled {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-main-disable-1;
  pointer-events: none;
}

.ais-button-small-important {
  width: 96px;
  height: 32px;
  font-size: 12px;
  border: solid 1px $color-main;
  color: $color-fff;
  background: $color-main;
  &:hover {
    border-color: $color-main-hover;
    background: $color-main-hover;
    color: $color-fff;
  }
  &:active {
    border-color: $color-main-pressed;
    background: $color-main-pressed;
    color: $color-fff;
  }
}
.ais-button-small-important-disabled {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-fff;
  background-color: $color-main-disable-1;
  pointer-events: none;
}

.btn-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  filter: invert(36%) sepia(68%) saturate(5463%) hue-rotate(200deg) brightness(91%) contrast(101%);
}
.ais-button-icon {
  // width: 96px;
  height: 32px;
  font-size: 12px;
  border: solid 1px transparent;
  color: $color-main;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: $color-main-hover;
  }
  &:active {
    color: $color-main-pressed;
  }
}
.btn-icon-disabled {
  filter: invert(86%) sepia(6%) saturate(13%) hue-rotate(320deg) brightness(86%) contrast(81%);
}
.ais-button-icon-disabled {
  cursor: no-drop;
  opacity: 0.5;
  color: $color-main-disable-1;
  background-color: transparent;
  pointer-events: none;
}

.ais-button-hyperLink {
  width: auto;
  height: 18px;
  font-size: 16px;
  // border: solid 1px $color-main;
  border: transparent;
  border-bottom: solid 1px $color-main;
  border-radius: 0px;
  color: $color-main;
  background: transparent;
  padding: 0;
  margin: 0 5px;

  &:hover {
    color: $color-main-hover;
    border-bottom: solid 1px $color-main-hover;
  }
  &:active {
    color: $color-main-pressed;
    border-bottom: solid 1px $color-main-pressed;
  }
}
.ais-button-hyperLink-disabled {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-main-disable-1;
  pointer-events: none;
}

/**
* ----------- button future ----------- 
*/
// .ais-button {
//   padding: 10px 20px;
//   outline: none;
//   cursor: pointer;
//   font-size: 14px;
//   border-radius: 2px;
//   background: #fff;
//   transition: all 0.15s ease;
//   user-select: none;
//   overflow: hidden;
//   line-height: 1;
//   white-space: nowrap;
//   i {
//     display: block;
//   }
//   span {
//     display: inline-block;
//   }
// }
// .ais-button-medium {
//   padding: 8px 18px;
//   outline: none;
//   cursor: pointer;
//   font-size: 14px;
//   border-radius: 2px;
//   background: #fff;
//   transition: all 0.15s ease;
//   user-select: none;
//   overflow: hidden;
//   line-height: 1;
//   white-space: nowrap;
//   i {
//     font-size: 14px;
//   }
// }
// .ais-button-small {
//   padding: 7px 13px;
//   outline: none;
//   cursor: pointer;
//   font-size: 13px;
//   border-radius: 2px;
//   background: #fff;
//   transition: all 0.15s ease;
//   user-select: none;
//   overflow: hidden;
//   line-height: 1;
//   white-space: nowrap;
//   i {
//     font-size: 13px;
//   }
// }
// .ais-button-mini {
//   padding: 7px 13px;
//   outline: none;
//   cursor: pointer;
//   font-size: 12px;
//   border-radius: 2px;
//   background: #fff;
//   transition: all 0.15s ease;
//   user-select: none;
//   overflow: hidden;
//   line-height: 1;
//   white-space: nowrap;
//   i {
//     font-size: 12px;
//   }
// }
.ais-button-round {
  border-radius: 22px;
}
// .ais-button-default {
//   border: 1px solid #d9d9d9;
//   background: #fff;
//   color: #333;
//   &:hover {
//     color: $success;
//     border-color: $success;
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-custom {
//   color: #333;
//   &:hover {
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-primary {
//   border: 1px solid $primary;
//   color: #fff;
//   background-color: $primary;
//   &:hover {
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-success {
//   border: 1px solid #09b63d;
//   color: #fff;
//   background-color: #09b63d;
//   &:hover {
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-danger {
//   border: 1px solid #ec3437;
//   background: #ec3437;
//   color: #fff;
//   &:hover {
//     color: #fff;
//     border-color: #ec3437;
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-warning {
//   border: 1px solid #f57b29;
//   background: #f57b29;
//   color: #fff;
//   &:hover {
//     color: #fff;
//     border-color: #f57b29;
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-text {
//   border: 1px solid #fff;
//   background: none;
//   color: #0e80eb;
//   &:hover {
//     color: #0e80eb;
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }
// .ais-button-dashed {
//   border: 1px dashed #d9d9d9;
//   background: #fff;
//   color: #333;
//   &:hover {
//     color: #0e80eb;
//     border-color: #0e80eb;
//     opacity: 0.8;
//   }
//   &:active {
//     opacity: 1;
//   }
// }

// .ais-button-default-disabled {
//   cursor: no-drop;
//   border: 1px solid #d9d9d9;
//   background: #fff;
//   opacity: 0.5;
//   color: #333;
// }
// .ais-button-primary-disabled {
//   cursor: no-drop;
//   border: 1px solid #0e80eb;
//   background: #0e80eb;
//   opacity: 0.5;
//   color: #fff;
// }
// .ais-button-success-disabled {
//   cursor: no-drop;
//   border: 1px solid #09b63d;
//   background: #09b63d;
//   opacity: 0.5;
//   color: #fff;
// }
// .ais-button-danger-disabled {
//   cursor: no-drop;
//   border: 1px solid #ec3437;
//   background: #ec3437;
//   opacity: 0.5;
//   color: #fff;
// }
// .ais-button-warning-disabled {
//   cursor: no-drop;
//   border: 1px solid #f57b29;
//   background: #f57b29;
//   opacity: 0.5;
//   color: #fff;
// }
// .ais-button-dashed-disabled {
//   cursor: no-drop;
//   border: 1px solid #d9d9d9;
//   background: #fff;
//   opacity: 0.5;
//   color: #333;
// }
// .ais-button-text-disabled {
//   cursor: no-drop;
//   border: 1px solid #fff;
//   background: none;
//   opacity: 0.5;
//   color: #0e80eb;
// }
// .ais-button-custom-disabled {
//   cursor: no-drop;
//   opacity: 0.5;
// }

// .ais-icon-loading {
//   animation: icon-loading 1.5s linear infinite;
//   -webkit-animation: icon-loading 1.5s linear infinite;
// }
// @keyframes icon-loading {
//   0% {
//     transform: rotate(0deg);
//   }
//   25% {
//     transform: rotate(90deg);
//   }
//   50% {
//     transform: rotate(180deg);
//   }
//   75% {
//     transform: rotate(270deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
</style>
