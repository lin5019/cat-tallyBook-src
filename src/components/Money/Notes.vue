<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里添加备注"
           @input="onInput"
           :value="value">
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
@Component
export default class Notes extends Vue {
  value = ''
  onInput(e: KeyboardEvent){
    const input = e.target as HTMLInputElement;
    this.value=input.value;
  }

}
</script>

<style lang="scss" scoped>

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
</style>