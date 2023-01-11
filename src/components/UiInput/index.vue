<template>
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
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    type: String,
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: String,
    autofocus: Boolean,
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
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input {
  width: 296px;
  height: 20px;
  border-radius: 4px;
  border: solid 1px $input-main;
  padding: 6px 12px;
  &:hover {
    border: 1px solid $color-main-hover;
  }
  &:active {
    border: 1px solid $color-main-pressed;
  }
}
input::placeholder {
  /* 大部分现代浏览器 */
  color: $input-main;
  font-size: 14px;
}
input:focus {
  outline: none;
}
</style>
