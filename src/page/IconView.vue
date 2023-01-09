<template>
  <p class="titlep">所有圖標</p>
  <div class="iconListBox">
    <ul>
      <li
        v-for="(item, index) in IconListData"
        :key="index"
        @click="copyIconNane(item.className)"
      >
        <i class="iconfont" :class="item.className"></i>
        <span>{{ item.className }}</span>
      </li>
    </ul>
  </div>
  <input type="text" id="inputCopy" style="opacity: 0" />
</template>

<script>
import { ref, reactive } from 'vue';

import iconList from '@/components/Icon/iconList.js';

export default {
  name: 'Icon',
  components: {},
  data() {
    return {
      IconListData: iconList,
    };
  },
  created() {
    console.log(this.IconListData);
  },
  methods: {
    copyIconNane(name) {
      const input = document.getElementById('inputCopy');
      input.value = name;
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy') 
        alert('copy success');
      } else {
        alert('copy fail');
      }
    },
  },
};
</script>

<style lang="scss" scope>
.iconListBox {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 2vh;
  background: gainsboro;
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    li {
      list-style: none;
      width: 10.5vw;
      height: 140px;
      float: left;
      padding: 1vw;
      box-sizing: border-box;
      text-align: center;
      transition: all 0.15s ease;
      cursor: pointer;
      border-radius: 4px;
      i {
        font-size: 40px;
        color: #555;
        display: block;
        margin: 0 auto;
        margin-top: 1vh;
        background-repeat: no-repeat;
        background-size: cover;
        width: 50px;
        height: 50px;
      }
      span {
        margin-top: 1vh;
        display: inline-block;
        font-size: 0.9vw;
        color: #555;
        margin-bottom: 1vh;
      }
      &:hover {
        background-color: $success;
        i {
          color: #fff;
        }
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
