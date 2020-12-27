<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body {
  //background: #f5f5f5;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
  background: #f5f5f5;
  //border: 1px solid red;
}

</style>
