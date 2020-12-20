<template>
  <Layout>
    <ul class="tags">
      <li>
        <span>衣</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="right"/>
      </li>
    </ul>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">

export default {
  name: 'Labels',
};
</script>

<style lang="scss" scoped>
.tags {
 // border: 1px solid red;
  background: #fff;
  padding-left: 16px;
  > li {
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    > .icon {
      font-size: 22px;
      margin-right: 16px;
      color: #888;
    }
  }
}
.createTag {
  padding: 8px 16px;
  background: #767676;
  color: #fff;
  border: none;
  border-radius: 4px;
  &-wrapper{
    //border: 1px solid red;
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>
