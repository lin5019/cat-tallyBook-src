<template>
  <div class="types">
    <ul>
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
.types {
  //border: 1px solid red;
  line-height: 64px;
  height: 64px;
  background: #C4C4C4;
  font-size: 24px;

  > ul {
    display: flex;

    > li {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: #333;
        }
      }
    }
  }

}
</style>