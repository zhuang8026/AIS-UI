<template>
  <div class="home">
    <h2>Radio btn</h2>
    <hr/>
    <h3>Normal</h3>
    <ui-radio
      name="radio_1"
      value="1"
      v-model:checked="checked"
      @checkChange="onChangeRadio($event)"
    >Normal 1 -> {{ checked }}</ui-radio>
    <ui-radio
      name="radio_2"
      value="2"
      v-model:checked="checked"
      @checkChange="onChangeRadio($event)"
    >Normal 2 -> {{ checked }}</ui-radio>
    <hr/>
    <h3>Disable</h3>
    <ui-radio
      name="radio_3"
      value="3"
      :disabled="disabled"
      v-model:checked="checked_d"
      @checkChange="onChangeRadio($event)"
    >Normal 3 -> {{ checked_d }}</ui-radio>
    <ui-radio
      name="radio_4"
      value="4"
      :disabled="disabled"
      v-model:checked="checked_d"
      @checkChange="onChangeRadio($event)"
    >Normal 4 -> {{ checked_d }}</ui-radio>
  </div>
</template>

<script lang="ts">
  import UiRadio from '@/components/UiRadio/index.vue'; // @ is an alias to /src

  export default {
    name: 'RadioView',
    components: {
      UiRadio,
    },
    data() {
      return {
        checked: '1',
        checked_d: '4',
        disabled: true,
      };
    },
    methods: {
      onChangeRadio(val: any) {
        console.log('onChangeRadio:', val);
      },
    },
  };
</script>
