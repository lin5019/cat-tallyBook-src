<template>
  <Layout class-prefix="layout">
    <div class="tags">
      <ul class="tags-content">
        <li class="tags-item">衣</li>
        <li class="tags-item">食</li>
        <li class="tags-item">住</li>
        <li class="tags-item">行</li>
        <li class="tags-item">衣</li>
        <li class="tags-item">食</li>
        <li class="tags-item">住</li>
        <li class="tags-item">行</li>
        <li class="tags-item">衣</li>
        <li class="tags-item">食</li>
        <li class="tags-item">住</li>
        <li class="tags-item">行</li>
        <li class="tags-item">衣</li>
        <li class="tags-item">食</li>
        <li class="tags-item">住</li>
        <li class="tags-item">行</li>
      </ul>
      <div class="tags-new">
        <button>新建标签</button>
      </div>
    </div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>
    <div class="types">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
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
  </Layout>
</template>

<script lang="ts">

export default {
  name: "Money",
}
</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
 // border: 1px solid red;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 14px;
  padding: 16px;


  > .tags-content {
    display: flex;
    flex-wrap: wrap;

    > .tags-item {
      background: #D9D9D9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 14px;
      margin-top: 2px;
    }
  }

  > .tags-new {
    padding-top: 16px;

    button {
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 3px;
      color: #999;
    }
  }

}

.notes {
  //border: 1px solid red;
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: 14px;
  background: #E5E5E5;
  height: 64px;

  > .name {

  }

  > input {
    flex: 1;
    line-height: 64px;
    background: #E5E5E5;
    border: none;
    padding: 0 16px;
  }
}

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