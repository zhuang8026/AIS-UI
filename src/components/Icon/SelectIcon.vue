<template>
    <div class=" overflow-hidden w-24px h-24px ">
      <Icon class="overflow-hidden cursor-pointer" iconClass="dropdown" type="svg" ></Icon>
    </div>
</template>
<script>
import Icon from '../../components/Icon/index.vue';
export default {
  name: 'SelectIcon',
  components: {
    Icon
  },
  props: {
  },
}
</script>