<template>
  <div :class="[`ais-input`, isClass]" :style="{ 'min-width': 'auto' }">
    <input
      :type="type"
      :value="defaultValue"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="privateDefaultValue"
      @focus="focus"
      @blur="blur"
      @change="change"
    />
    <div :class="['right-icon',  rightIcon, iconClass]" v-if="rightIcon != ''"></div>
  </div>
</template>

<script>
  export default {
    name: 'UiInput',
    props: {
      type: String,
      round: Boolean,
      defaultValue: {
        type: String,
        default: '',
      },
      rightIcon: {
      type: String,
      default: ''
    },
      placeholder: String,
    },
    computed: {
      privateDefaultValue: {
        get() {
          return this.defaultValue;
        },
        set(val) {
          this.$emit('update:defaultValue', val);
        },
      },
      isClass() {
        return [
          // this.icon? this.icon : '',
          // this.disabled && this.icon ? `btn-icon-disabled` : '',
          {
            'ais-input-round': this.round,
          },
        ];
      },

    },
    methods: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ais-input {
  width: auto;
  height: 18px;
  border-radius: 4px;
  border: solid 1px $checkbox-main-2;
  padding: 6px 9.5px 6px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    border: 1px solid $color-main-hover;
  }
  &:active {
    border: 1px solid $color-main-pressed;
  }
}
input {
  width: 100%;
  border: solid 1px transparent;
  margin: 0;
  padding: 0;
}
input::placeholder {
  /* 大部分现代浏览器 */
  color: $input-main;
  font-size: 14px;
}
input:focus {
  outline: none;
}

.ais-input-round {
  border-radius: 16px;
}

.right-icon {
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
}
</style>
