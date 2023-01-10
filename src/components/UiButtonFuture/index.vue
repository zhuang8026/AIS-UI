<template>
  <button :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UiButtonFuture',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: 'default',
    },
    customColor: {
      type: String,
      default: '',
    },
    leftIcon: String,
    rightIcon: String,
    localing: Boolean,
  },
  computed: {
    isClass() {
      return [
        this.size == 'default'
          ? 'ais-button'
          : this.size == 'medium'
          ? 'ais-button-medium'
          : this.size == 'small'
          ? 'ais-button-small'
          : this.size == 'mini'
          ? 'ais-button-mini'
          : 'ais-button',
        this.type ? (this.disabled ? '' : `ais-button-${this.type}`) : '',
        // className 3: disabled
        this.disabled ? `ais-button-${this.type}-disabled` : '',
        // className 4: border-radius
        {
          'ais-button-round': this.round,
        },
      ];
    },
    styles() {
      const mBtnDeaultStyle = {
        background: this.customColor,
        border: this.customColor,
        color: '#fff',
      };
      return [
        this.customColor == ''
          ? {}
          : this.type == 'default'
          ? {}
          : mBtnDeaultStyle,
      ];
    },
    isIconClass() {
      return [this.leftIcon == 'leftIcon' ? 'icon-check-box-h' : ''];
    },
  },
};
</script>

<script setup>
// import { computed, useSlots } from "vue";
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ais-button {
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
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
.ais-button-medium {
  padding: 8px 18px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 14px;
  }
}
.ais-button-small {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 13px;
  }
}
.ais-button-mini {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 12px;
  }
}
.ais-button-round {
  border-radius: 22px;
}
.ais-button-default {
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #333;
  &:hover {
    color: $success;
    border-color: $success;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-custom {
  color: #333;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-primary {
  border: 1px solid $primary;
  color: #fff;
  background-color: $primary;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-success {
  border: 1px solid #09b63d;
  color: #fff;
  background-color: #09b63d;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-danger {
  border: 1px solid #ec3437;
  background: #ec3437;
  color: #fff;
  &:hover {
    color: #fff;
    border-color: #ec3437;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-warning {
  border: 1px solid #f57b29;
  background: #f57b29;
  color: #fff;
  &:hover {
    color: #fff;
    border-color: #f57b29;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-text {
  border: 1px solid #fff;
  background: none;
  color: #0e80eb;
  &:hover {
    color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ais-button-dashed {
  border: 1px dashed #d9d9d9;
  background: #fff;
  color: #333;
  &:hover {
    color: #0e80eb;
    border-color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}

.ais-button-default-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.ais-button-primary-disabled {
  cursor: no-drop;
  border: 1px solid #0e80eb;
  background: #0e80eb;
  opacity: 0.5;
  color: #fff;
}
.ais-button-success-disabled {
  cursor: no-drop;
  border: 1px solid #09b63d;
  background: #09b63d;
  opacity: 0.5;
  color: #fff;
}
.ais-button-danger-disabled {
  cursor: no-drop;
  border: 1px solid #ec3437;
  background: #ec3437;
  opacity: 0.5;
  color: #fff;
}
.ais-button-warning-disabled {
  cursor: no-drop;
  border: 1px solid #f57b29;
  background: #f57b29;
  opacity: 0.5;
  color: #fff;
}
.ais-button-dashed-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.ais-button-text-disabled {
  cursor: no-drop;
  border: 1px solid #fff;
  background: none;
  opacity: 0.5;
  color: #0e80eb;
}
.ais-button-custom-disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.ais-icon-loading {
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
