<template>
  <div class="layout-wrapping">
    <div class="content" :class="classPrefix
      && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  @Prop(String) classPrefix!: string;

}
</script>

<style lang="scss" scoped>
.layout-wrapping {
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .content {
    //border: 1px solid blue;
    overflow: auto;
    //flex只有在父容器有高度的时候才可以分配剩余空间.
    flex: 1;
    position: relative;

  }
}

</style>