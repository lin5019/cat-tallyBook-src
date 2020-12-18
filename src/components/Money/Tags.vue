<template>
  <div class="tags">
    <ul class="tags-content">
      <li v-for="tag in dataSource"
          :key="tag"
          @click="toggle(tag)"
          :class="toggleArray.indexOf(tag)>-1 && 'selected' ">
        {{ tag }}
      </li>
    </ul>
    <div class="tags-new">
      <button>新建标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) dataSource: string[] | undefined;
  toggleArray: string[] = [];

  toggle(tag: string) {
    const index = this.toggleArray.indexOf(tag);
    if (index > -1) {
      this.toggleArray.splice(index, 1);
      return
    }
    this.toggleArray.push(tag);
  }

}
</script>

<style lang="scss" scoped>
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

    > li {
      $bg: #D9D9D9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 14px;
      margin-top: 2px;

      &.selected {
        background: darken($bg, 20%);
      }
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
</style>