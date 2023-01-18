<template >

    <svg class="svg-icon fill-current overflow-hidden" v-if="type === 'svg'">
      <use :xlink:href="`#${iconClass}`">
        <animateTransform v-if="animate" attributeType="xml" attributeName="transform" type="rotate" 
        :from="animateRangeFrom" :to="animateRangeEnd" dur="0.8s" repeatCount="indefinite">
        </animateTransform>
      </use>
    </svg>
</template>
<script>

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('@/components/assets/icon', false, /.svg$/);
requireAll(req);

import {  computed} from 'vue';
export default {
    name: 'Icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'svg'
    },
    className: {
      type: String,
      default: ''
    },
    animate:{
      type:Boolean,
      default:false,
    },
    animateHeightCircle:{ //要原地旋轉的話要給圖片高度一半
      type: Number,
      default: 20,
      required: false
    }
  },
  setup(props) {


    const animateRangeEnd = computed(() => {
      return `0 ${props.animateHeightCircle} ${props.animateHeightCircle}`
    })

    const animateRangeFrom = computed(() => {
      return `360 ${props.animateHeightCircle} ${props.animateHeightCircle}`
    })



    return {
      animateRangeEnd,
      animateRangeFrom

    }
  }// end: setup

}
</script>
