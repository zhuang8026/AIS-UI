<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/input">Input</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
@import "./styles/style.scss";
@import "./styles/icon.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
