<template>
  <Layout class-prefix="layout">
    <router-link class="navbar" to="/labels" >
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <div class="rightIcon"></div>
    </router-link>
    <FormItem class="form" field-name="标签名" placeholder="请输入标签名"/>
    <Button class="button">删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsModel from '@/model/tagsListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  //currentTag: Tag
  created() {
    const id = this.$route.params.id;
    console.log(id);
    if (id) {
      tagsModel.fetch();
      console.log(tagsModel.data);
      const item = tagsModel.data.filter(i => i.id === id)[0];
      if (item) {
        // this.currentTag=item
      } else {
        this.$router.push('/404');
      }
    }
  }
  backLabel(){
    this.$router.push('/404');
  }
}
</script>
<style>
.layout-content {
  //border: 1px solid blue;
  position: relative;
}

</style>
<style lang="scss" scoped>
.navbar {
  //border: 1px solid red;
  //line-height: 48px;
  font-size: 16px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon{
    width: 24px;
    height: 24px;
  }
  > .title {
  }

}

.form {
  margin-top: 8px;
  background: #fff;
  line-height: 44px;
}
.button {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
}
</style>