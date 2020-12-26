<template>
  <Layout class-prefix="layout">
    <router-link class="navbar" to="/labels">
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <div class="rightIcon"></div>
    </router-link>
    <FormItem @update:value="updateTag" :value="tag.name" class="form" field-name="标签名" placeholder="请输入标签名"/>
    <Button class="button" @click="deleteTag">删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag: Tag = undefined

  created() {
    this.tag=window.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.push('/404');
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      console.log(window.update(this.tag.id, name));
    }
  }

  deleteTag() {
    if (this.tag) {
      if (window.remove(this.tag.id)) {
        this.$router.go(-1);
      }
    }
  }
}
</script>
<style>
.layout-content {
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
  color: #333;
  > .leftIcon {
    width: 24px;
    height: 24px;
    color: #888;
  }

  > .rightIcon {
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