<template>
<div>
  <h1>修改标签</h1>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import tagsModel from '@/model/tagsListModel';
@Component
export default class EditLabel extends Vue{
  //currentTag: Tag
  created(){
    const id = this.$route.params.id;
    console.log(id);
    if(id){
      tagsModel.fetch();
      console.log(tagsModel.data);
      const item = tagsModel.data.filter(i=> i.id===id)[0];
      if(item){
       // this.currentTag=item
      }else {
        this.$router.push('/404')
      }

    }


  }
}
</script>

<style lang="scss" scoped>

</style>