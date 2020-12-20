<template>
  <Layout>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{ tag }}</span>
        <Icon name="right"/>
      </li>
    </ul>
    <div class="createTag-wrapper">
      <button class="createTag" @click="create">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagsModel from '@/model/tagsModel';

@Component
export default class Labels extends Vue{
  tags: string[] =tagsModel.fetch()
  create(){
    const prompt = window.prompt('请输入标签名');
    if(prompt){
      const message = tagsModel.create(prompt);
      if(message==='repetition'){
        window.alert('不可以添加重复标签')
      }
    }
  }
}
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
