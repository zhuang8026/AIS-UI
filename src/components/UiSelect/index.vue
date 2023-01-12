<template>
  <v-select
    label="label"
    :class="classes"
    :options="options"
    v-model="privateDefaultSelected"
    placeholder="Sorting Dropdown"
  ></v-select>

</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  props: {
    options: { type: Array, required: true },
    defaultSelected: { type: String, required: false },
    placeHolder: { type: String, required: false },
    isError: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  components: {
    vSelect,
  },
  watch: {},
  computed: {
    classes() {
      return [{ vSelect: true }];
    },
    privateDefaultSelected: {
      get() {
        return this.defaultSelected;
      },
      set(val) {
        this.$emit('update:defaultSelected', val.label);
      },
    },
  },
  methods: {
    onChange(value) {
      this.$emit('onChange', value);
    },
    searchSelect(val) {
      // console.log('searchSelect', val);
      this.$emit('onSearch', val);
    },
    cancelSearch(val) {
      console.log('cancel', val);
      this.privateDefaultSelected = '';
    },
  },
};
</script>

<style lang="scss">
.vSelect {
  .vs__clear {
    display: none;
  }
  .vs__dropdown-menu {
    top: 40px;
    border: 1px solid $input-main;
    border-radius: 4px;
  }
  .vs__dropdown-toggle {
    border: 1px solid $input-main;
    border-radius: 4px;
    &:hover {
      border: 1px solid $color-main-hover;
    }
    &:active {
      border: 1px solid $color-main-pressed;
    }
  }
}
</style>
