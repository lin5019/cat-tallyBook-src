<template>
  <div class="wrapping-nav">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

export default {
  name: "Layout",
}
</script>


<style lang="scss" scoped>
.wrapping-nav{
  //border: 2px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  border: 2px solid blue;
  overflow: auto;
  //flex只有在父容器有高度的时候才可以分配剩余空间.
  flex: 1;
}
</style>