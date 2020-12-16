<template>
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
</template>

<script lang="ts">
export default {
name: "Tags"
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
</style>