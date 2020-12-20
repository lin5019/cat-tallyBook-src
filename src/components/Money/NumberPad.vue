<template>
  <div class="numberPad">
    <div class="output">{{ outputValue }}</div>
    <ul @click="inputContent" class="buttons">
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
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) value!: number
  outputValue = this.value.toString()

  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const inputValue = button.textContent as string;
    if (this.outputValue === '0' && '0123456789'.indexOf(inputValue) > -1) {
      this.outputValue = inputValue;
      return;
    }
    if (this.outputValue.length === 16 || '0123456789'.indexOf(inputValue) === -1) {
      if (inputValue === '删除') {
        this.delete();
      } else if (inputValue === '清空') {
        this.clear();
      }else  if (this.outputValue.indexOf('.') === -1 && inputValue === '.') {
        this.outputValue += inputValue;
      }else if(inputValue === 'ok'){
        this.ok()
      }
      return;
    }

    this.outputValue += inputValue;
  }

  clear() {
    this.outputValue = '0';
  }

  delete() {
    if (this.outputValue.length === 1) {
      this.outputValue = '0';
    }else {
      this.outputValue = this.outputValue.slice(0, -1);
    }
  }
  ok(){
    this.$emit('update:value',parseFloat(this.outputValue))
    this.$emit('update:submit')
    this.outputValue='0'
  }

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