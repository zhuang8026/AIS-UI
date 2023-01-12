<template>
  <div class="home">
    <h2>Combo box</h2>
    <hr/>
    <h2>Normal</h2>
    <div class="inner">
      <ui-select
        :options="fruits"
        v-model:defaultSelected="selectedFruit"
      ></ui-select>
    </div>
    <br/>
    <span>Your Choice is: {{ selectedFruit }}</span>
    <br/>
    <hr/>
  </div>
</template>

<script>
import UiSelect from '@/components/UiSelect/index.vue'; // @ is an alias to /src

export default {
  name: 'SelectView',
  components: {
    UiSelect,
  },
  data() {
    return {
      fruits: [
        { id: '0', label: 'Mangoo' },
        { id: '1', label: 'Apple' },
        { id: '2', label: 'Orange' },
        { id: '3', label: 'Melon' },
        { id: '4', label: 'Pineapple' },
        { id: '5', label: 'Lecy' },
      ],
      selectedFruit: 'Lecy',
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.inner {
  width: 296px;
  margin: 0 auto;
}
</style>
