<template>
  <div :class="[`ais-checkbox-${type}`, customClass]">
    <label
      class="ais-checkbox-label"
      :class="[{
        'ais-checkbox-label-active': privateIsCheck,
        'ais-checkbox-active-disable': privateIsCheck && disabled,
        'ais-checkbox-disable': disabled,
      }]"
      @click="checkChange"
    >
      <input type="checkbox" v-model="privateIsCheck" />
      <span class="ais-checkbox-selectbox"></span>
      <span class="ais-checkbox-test">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiCheckbox',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    checked: {
      type: Boolean,
      default: false,
    }, 
    disabled: {
      type: Boolean,
      default: false,
    },
    customClass: String,
  },
  computed: {
    privateIsCheck: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('update:checked', val);
      },
    },
  },
  methods: {
    checkChange() {
      this.$emit('change', this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.ais-checkbox-default {
  width: auto;
  height: auto;
  overflow: hidden;
  .ais-checkbox-label {
    position: relative;
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 20px;
    user-select: none;
    span {
      float: left;
      color: #505050;
      font-size: 14px;
    }
    input {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 0;
      opacity: 0;
    }
    .ais-checkbox-selectbox {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid $checkbox-main;
      background-color: $color-fff;
      display: inline-block;
      position: relative;
      // float: left;
      font-size: 14px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;

      &::after {
        box-sizing: content-box;
        content: '';
        display: inline-block;
        width: 6px;
        height: 11px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width: 0 1.5px 1.5px 0;
        position: absolute;
        left: 5.5px;
        transition: transform 0.15s ease-in;
      }
      &:hover {
        border: 1px solid $color-main-hover;
      }
      &:active {
        border: 1px solid $color-main-pressed;
      }
    }
    .ais-checkbox-test {
      color: #000;
      font-size: 16px;
      margin-left: 12px;
    }
  }
  .ais-checkbox-label-active {
    .ais-checkbox-selectbox {
      border: 1px solid $color-main;
      background-color: $color-main;
      &::after {
        border-color: #fff;
      }
      &:hover {
        border: 1px solid $color-main-hover;
        background-color: $color-main-hover;
      }
      &:active {
        border: 1px solid $color-main-pressed;
        background-color: $color-main-pressed;
      }
    }
  }
}

.ais-checkbox-selectbox {
  width: auto;
  height: auto;
  overflow: hidden;
  .ais-checkbox-label {
    position: relative;
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 20px;
    user-select: none;
    span {
      float: left;
      color: #505050;
      font-size: 14px;
    }
    input {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 0;
      opacity: 0;
    }
    .ais-checkbox-selectbox {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid $checkbox-main;
      background-color: $color-fff;
      display: inline-block;
      position: relative;
      // float: left;
      font-size: 14px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;

      &::after {
        box-sizing: content-box;
        content: '';
        display: inline-block;
        width: 8px;
        height: 1px;
        // transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width: 0 0 1.5px 0;
        position: absolute;
        left: 5.5px;
        top: 7px;
        transition: transform 0.15s ease-in;
      }
      &:hover {
        border: 1px solid $color-main-hover;
      }
      &:active {
        border: 1px solid $color-main-pressed;
      }
    }
    .ais-checkbox-test {
      color: #000;
      font-size: 16px;
      margin-left: 12px;
    }
  }
  .ais-checkbox-label-active {
    .ais-checkbox-selectbox {
      border: 1px solid $color-main;
      background-color: $color-main;
      &::after {
        border-color: #fff;
      }
      &:hover {
        border: 1px solid $color-main-hover;
        background-color: $color-main-hover;
      }
      &:active {
        border: 1px solid $color-main-pressed;
        background-color: $color-main-pressed;
      }
    }
  }
}

.ais-checkbox-disable {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-main-disable-1;
  pointer-events: none;
  .ais-checkbox-selectbox {
    border: 1px solid $color-main-disable-1 !important;
    // background-color: $color-main-disable-1 !important;
  }
}

.ais-checkbox-active-disable {
  cursor: no-drop;
  opacity: 0.5;
  border-color: $color-main-disable-1;
  color: $color-main-disable-1;
  pointer-events: none;
.ais-checkbox-selectbox {
    border: 1px solid $color-main-disable-1 !important;
    background-color: $color-main-disable-1 !important;
  }
}

</style>
