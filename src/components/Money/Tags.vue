<template>
  <div class="tags">
    <ul class="tags-content">
      <li v-for="tag in tags"
          :key="tag.id"
          @click="toggle(tag.id)"
          :class="{selected: toggleArray.indexOf(tag.id)>-1}">
        {{ tag.name }}
      </li>
    </ul>
    <div class="tags-new" @click="createTag">
      <button>新建标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import TagHelper from '@/mixins/TagHelper';



@Component({
  computed: {
    tags(){
      return this.$store.state.tagList
    }
  }
})
export default class Tags extends Mixins(TagHelper) {

  toggleArray: string[] = [];

  // @Watch('toggleArray')
  // onToggleArrayChanged(value: string) {
  //   this.$emit('update:value',value)
  // }

  toggle(tagId: string) {
    const index = this.toggleArray.indexOf(tagId);
    if (index > -1) {
      this.toggleArray.splice(index, 1);
    } else {
      this.toggleArray.push(tagId);
    }
    this.$emit('update:value',this.toggleArray)
  }



}
</script>

<style lang="scss" scoped>
.tags {
  //border: 1px solid red;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 14px;
  padding: 16px;
  background: #fff;

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