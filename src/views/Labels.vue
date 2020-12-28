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
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import TagHelper from '@/mixins/TagHelper';

@Component({
  components: {Button},
  computed: {
    tags(){
      return this.$store.state.tagList
    }
  }
})
export default class Labels extends Mixins(TagHelper){

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
      width: 24px;
      height: 24px;
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
