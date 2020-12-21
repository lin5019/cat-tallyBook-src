<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags"
                   :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="create">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagsModel from '@/model/tagsListModel';
import Button from '@/components/Button.vue';
@Component({
  components: {Button}
})
export default class Labels extends Vue{
  tags =tagsModel.fetch()
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
  > .tag {
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
  &-wrapper{
    //border: 1px solid red;
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>
