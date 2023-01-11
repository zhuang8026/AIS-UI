<template>
  <div class="ais-radio">
    <label 
      @change="checkChange" 
      :class="[{'ais-radio-disable': disabled}]"
    >
      <input
        type="radio"
        :name="name"
        :value="value"
        v-model="privateIsCheck"
      />
      <span
        class="ais-radio-selectbox"
        :class="[{'ais-radio-active': privateIsCheck == value}]"
      ></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiRadio',
  props: {
    name: {
      type: String,
      default: '',
    },
    checked: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
      this.$emit('checkChange', this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.ais-radio {
  display: inline-block;
  position: relative;
  label {
    display: flex;
    justify-content: center;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .ais-radio-selectbox {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid $checkbox-main;
    background-color: transparent;
    display: inline-block;
    position: relative;
    // float: left;
    font-size: 14px;
    box-sizing: border-box;
    transition: transform 0.15s ease-in;
    margin: 0 5px;
    &::after {
      box-sizing: content-box;
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;

      position: absolute;
      left: 5px;
      top: 5px;

      border-style: solid;
      border-radius: 10px;
      border: 0px solid transparent;

      background-color: transparent;
      transition: transform 0.15s ease-in;
    }
    &:hover {
      border: 1px solid $color-main-hover;
      &::after {
        background-color: $color-main-hover;
      }
    }
    &:active {
      border: 1px solid $color-main-pressed;
      background-color: $color-main-pressed;
    }
  }
  .ais-radio-active {
    border: 1px solid $color-main;
    background-color: $color-fff;
    &::after {
      background-color: $color-main;
      border: 0px solid $color-main;
    }
    &:hover {
      border: 1px solid $color-main-hover;
    }
    &:active {
      border: 1px solid $color-main-pressed;
      background-color: $color-main-pressed;
      &::after {
        background-color: $color-fff;
      }
    }
  }

  .ais-radio-disable {
    cursor: no-drop;
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
