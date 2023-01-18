<template>
  <div class="home">
    <h2>Table </h2>
    <br>
    <!-- <p class="text-color-main">isTableCheckAll: {{isTableCheckAll}}</p> -->
    <br>
    <UiTable v-model:isCheckedAll="isTableCheckAll"></UiTable>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiTable from '@/components/UiTable/index.vue'; // @ is an alias to /src
import { ref } from 'vue';

export default {
  name: 'TableView',
  components: {
    UiTable
  },
  setup(){
    let isTableCheckAll = ref(true);

    return{
      isTableCheckAll,
    }

  },//end: setup

};
</script>
