<template>
  <ul class="tabs" :class="[classPrefix]+'-tabs'">
    <li v-for="item in array" :key="item.value"
        :class="liClass(item)"
        @click="select(item)"
        class="tabs-item"
    >{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type dataItem = { text: string; value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) array!: dataItem[];
  @Prop({type: String}) classPrefix?: string;
  @Prop({type: String}) value?: string;
  //箭头函数会放在对象本身上.
  liClass =(item: dataItem )=> {
    return {[this.classPrefix+'-tabs-item']:this.classPrefix,selected: item.value===this.value}
  }
  //普通函数会放在原型上.
  select(item: dataItem ){
    this.$emit('update:value',item.value)
  }


}
</script>

<style lang="scss" scoped>
.tabs {
  //border: 1px solid red;
  font-size: 24px;
  display: flex;
  background: #c4c4c4;

  &-item {
    line-height: 64px;
    height: 64px;
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