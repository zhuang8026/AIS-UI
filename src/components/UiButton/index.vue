<template>
  <button class="ais-button" :class="isClass" :style="styles">
    <div class="btn-icon" :class="iconClass" v-if="leftIcon" />
    <span><slot></slot></span>
    <div class="btn-icon" :class="iconClass" v-if="rightIcon" />
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
      default: '', // px
    },
    width: {
      type: String,
      default: '', // ''
    },
    customColor: {
      type: String,
      default: '',
    },
    leftIcon: Boolean,
    rightIcon: Boolean,
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
    iconClass() {
      return [
        this.icon? this.icon : '',
        this.disabled && this.icon ? `btn-icon-disabled` : '',
      ];
    },
    styles() {
      const mBtnDeaultStyle = {
        // background: this.customColor,
        // border: this.customColor,
        // width: `${this.size}px`,
        width: this.width == 'md' ? '132px':''
      };
      return [
        // this.size == '' ? {} : mBtnDeaultStyle
        this.width != '' ? mBtnDeaultStyle : {}, 
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

span {
  margin: 0 5px;
}
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


.ais-button-add-icon {
  width: 160px;
  height: 36px;
  font-size: 16px;
  border: solid 1px $color-main;
  color: $color-fff;
  background: $color-main;
  display: flex;
  justify-content: center;
  align-items: center;

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

  .btn-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
}
.ais-button-add-icon-disabled {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  background-color: $color-main-disable-1;
  color: $color-fff;
  pointer-events: none;
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
  .btn-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    // margin-right: 12px;
    filter: invert(36%) sepia(68%) saturate(5463%) hue-rotate(200deg) brightness(91%) contrast(101%);
  }
  .btn-icon-disabled {
    filter: invert(86%) sepia(6%) saturate(13%) hue-rotate(320deg) brightness(86%) contrast(81%);
  }
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

.ais-button-round {
  border-radius: 22px;
}


</style>
