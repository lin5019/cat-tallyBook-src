<template>
  <div class="numberPad">
    <div class="output">1100</div>
    <ul class="buttons">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>删除</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>清空</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li class="ok">ok</li>
      <li class="zero">0</li>
      <li>.</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "NumberPad"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  //border: 1px solid red;

  > .output {
    //border: 1px solid red;
    display: flex;
    line-height: 64px;
    height: 64px;
    justify-content: flex-end;
    align-items: center;
    padding: 0 16px;
    font-family: Consolas, monospace;
    @extend %innerShadow;
  }

  > .buttons {
    @extend %clearFix;

    > li {
      float: left;
      width: 25%;
      height: 64px;
      line-height: 64px;
      text-align: center;

      &.ok {
        height: 64*2px;
        line-height: 64*2px;
        float: right;
      }

      &.zero {
        width: 25%*2;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4%*2);
      }

      &:nth-child(4), &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4%*3);
      }

      &:nth-child(8), &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4%*4);
      }

      &:nth-child(14) {
        background: darken($bg, 4%*5);
      }

      &:nth-child(12) {
        background: darken($bg, 4%*6);
      }
    }
  }

}
</style>