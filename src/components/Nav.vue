<template>
  <div class="nav">
    <router-link class="item" to="/money">记账</router-link>
    <router-link class="item" to="/labels">标签</router-link>
    <router-link class="item" to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav {
  border: 5px solid pink;
  display: flex;
  font-size: 32px;
}

.item {
  border: 2px solid red;
  flex: auto;
  text-align: center;
}
</style>