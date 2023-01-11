<template>
  <div class="ui-checkbox">
    <input
      type="checkbox"
      :id="id"
      :value="value"
      v-model="privateIsCheck"
      @change="checkChange(value)"
    />
    <label :for="id" class="checkbox-style-block">{{ text }}</label>
    <slot></slot>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid';
export default {
  name: 'UiCheckbox',
  props: {
    text: {
      type: String,
      default: '',
    },
    isCheck: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: uuid.v4(),
    };
  },
  computed: {
    privateIsCheck: {
      get() {
        return this.isCheck;
      },
      set(val) {
        this.$emit('update:isCheck', val);
      },
    },
  },
  methods: {
    checkChange(val) {
      console.log('checkbox ui status ->', val);
      this.$emit('checkChange', val);
    },
  },
};
</script>

<style lang="scss" scoped>
$size-checkbox: 40px;
.ui-checkbox {
  display: inline-block;
  .checkbox-style-block {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid $checkbox-main;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    // &::before {
    //   content: '';
    //   height: 100%;
    //   vertical-align: middle;
    //   display: inline-block;
    // }

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
  }
  input {
    display: none;
    &:checked {
      + .checkbox-style-block {
        border: 1px solid $color-main-pressed;
        background-color: $color-main-pressed;
      }
    }
    &:hover {
      + .checkbox-style-block {
        border: 1px solid $color-main-hover;
        background-color: $color-main-hover;
      }
    }
  }
}
</style>
