<template>
  <div class="contentBox">
    <div class="imgLogo">
      <!-- <img src="../assets/logo.png" alt="mzl-ui" /> -->
    </div>
    <h3>一套適合開發者使用的輕量級UI組件庫，完美支持vue3</h3>
    <div class="tiBox">
      <p>
        完美支持vite+vue3版本，更小的體積，更快的響應，更強的拓展性，讓我們一起向未來，擁抱這精彩的vue世界！
      </p>
      <div class="buttonGroups">
        <atd-button
          type="success"
          round
          style="padding: 15px 50px; margin-right: 2vw; font-size: 17px"
          @click="toComponents"
          >立刻上手</atd-button
        >
        <atd-button
          round
          icon="m-icon-github"
          style="padding: 15px 50px; margin-left: 2vw; font-size: 17px"
          @click="goGuthub"
          >Github</atd-button
        >
      </div>
      <div class="cardBox">
        <li>
          <p>更小的體積</p>
          <div>組件體積更小，靈活使用，按需使用。</div>
        </li>
        <li>
          <p>更快的響應</p>
          <div>配合vue3的composition API，更快的相應。</div>
        </li>
        <li>
          <p>更強的拓展性</p>
          <div>給開發者幾乎所有的機會來自定義組件，滿足一切項目使用場景。</div>
        </li>
        <li>
          <p>更完美的支持</p>
          <div>專為vue3版本開發。</div>
        </li>
        <li>
          <p>更友好的渲染</p>
          <div>極少的代碼量，極簡配置項。</div>
        </li>
      </div>

      <!-- other -->
      <div class="links">
        <!-- <p class="titles">链接</p>
        <span @click="goGuthub">Github</span>
        <span @click="goToNpm">NPM</span>
        <span>关于ATD</span>
        <span @click="verSion">更新日志</span>
        <span>关于作者</span> -->
        <p class="titles">貢獻人員</p>
        <li
          v-for="(item, index) in devoteList"
          :key="index"
          title="點擊跳轉至Ta的Github"
          @click="toDevoteGithub(item)"
        >
          <div class="">
            <img :src="item.img" alt="" />
            <span
              :style="{ color: item.name == 'William_Chuang' ? '#09b63d' : '' }"
            >
              {{ item.name }}
            </span>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { reactive } from 'vue';
  const router = useRouter();
  const state = reactive({
    devoteList: [
      {
        name: 'William_Chuang',
        github: 'https://github.com/zhuang8026',
        img: 'https://avatars.githubusercontent.com/u/47071869?v=4',
      },
    ],
  });
  const toComponents = () => {
    router.push('/ais');
  };
  const goGuthub = () => {
    alert('盡情期待');
    // window.open('https://github.com/zhuang8026/ATD-UEUI');
  };
  const goToNpm = () => {
    alert('盡情期待');
    // window.open('https://www.npmjs.com/package/atd-ueui');
  };
  // const verSion = () => {
  //   router.push('/ais/updatelog');
  // };
  const toDevoteGithub = (item) => {
    window.open(item.github);
  };
  const { devoteList } = state;
  sessionStorage.setItem('mIndex', '0-0');
  sessionStorage.setItem('tabIndex', 0);

</script>

<style lang="scss" scoped>
  .contentBox {
    width: 100%;
    height: auto;
    overflow: hidden;
    min-height: calc(100vh - 64px);
    background: rgba(9, 195, 190, 0.02);
    .imgLogo {
      margin: 0 auto;
      display: block;
      width: 12vw;
      margin-top: 60px;
      position: relative;
      img {
        width: 100%;
        display: block;
      }
    }

    h3 {
      text-align: center;
      font-size: 2vw;
      color: #4a5264;
      margin: 16px 0 0 0;
    }
    .tiBox {
      width: 70%;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
      p {
        text-align: center;
        color: #636e86;
        font-size: 0.9vw;
      }
      .buttonGroups {
        width: 100%;
        text-align: center;
        height: auto;
        overflow: hidden;
        margin-top: 5vh;
      }
      .cardBox {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-top: 5vh;
        li {
          list-style: none;
          width: 19%;
          padding: 0 5px 25px 5px;
          box-sizing: border-box;
          float: left;
          list-style: none;
          background: #fff;
          // border: 1px solid #eaeefb;
          border-radius: 5px;
          box-sizing: border-box;
          transition: all 0.3s ease-in-out;
          margin-right: 1%;
          cursor: pointer;
          &:hover {
            background: $success_opacity;
          }
          p {
            font-size: 18px;
            color: #1f2f3d;
            font-weight: 400;
            padding: 0 14px;
          }
          div {
            font-size: 14px;
            color: #919cac;
            padding: 0 0px;
            line-height: 20px;
            text-align: center;
          }
        }
        li:last-child {
          margin-right: 0;
        }
      }
      .links {
        width: 100%;
        height: auto;
        overflow: hidden;
        text-align: center;
        margin-bottom: 30px;
        margin-top: 1vh;
        li {
          list-style: none;
          display: inline-block;
          font-size: 0.8vw;
          font-weight: 550;
          color: $success;
          cursor: pointer;
          margin: 0 0.5vw;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 4px;
            img {
              width: 2.5vw;
              border-radius: 50%;
              margin-right: 7px;
            }
            span {
              margin: 0;
            }
            &:hover {
              span {
                text-decoration: underline;
              }
            }
          }
        }
        p {
          font-size: 20px;
          font-weight: 600;
          color: #515a6e;
          margin: 0;
          line-height: 50px;
        }
        span {
          display: inline-block;
          line-height: 30px;
          color: $success;
          font-size: 16px;
          margin: 5px 10px 5px 10px;
          cursor: pointer;
        }
      }
    }
  }
</style>
