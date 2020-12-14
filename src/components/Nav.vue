<template>
  <nav>
    <router-link class="item" to="/money" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link class="item" to="/labels"  active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link class="item" to="/statistics"  active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">


export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  //border: 2px solid red;
  display: flex;
  font-size: 16px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > .item {
    //border: 2px solid blue;
    padding: 2px 0;
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-heighlight;
  }
}


</style>