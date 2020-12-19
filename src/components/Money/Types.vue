<template>

  <ul class="types">
    <li
        :class="value===`-` && 'selected'"
        @click="selectType('-')"
    >支出
    </li>
    <li
        :class="value===`+` && 'selected'"
        @click="selectType('+')"
    >收入
    </li>
  </ul>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  // @Watch('type')
  // onChildChanged(value: string) {
  //   this.$emit('update:value',value)
  // }
  selectType(value: string) {
    if (value !== '+' && value !== '-') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',value)
  }
}

</script>

<style lang="scss" scoped>
.types {
  //border: 1px solid red;
  line-height: 64px;
  height: 64px;
  background: #C4C4C4;
  font-size: 24px;
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
</style>