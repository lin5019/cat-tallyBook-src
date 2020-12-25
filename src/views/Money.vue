<template>
  <Layout class-prefix="layout">
    <Tags :dataSource.sync="tags"
         :value.sync="record.tags"
    />
    <FormItem
          class="form"
            field-name="备注"
           placeholder="请填写备注..."
           :value.sync ="record.notes"/>
    <Types :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount"  @update:submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/model/recordListModel';
// import tagsListModel from '@/model/tagsListModel';



@Component({
  components: {NumberPad, Types, FormItem, Tags},
})
export default class Money extends Vue {
  tags = window.tagList
  //type = '-'; //'-' 表示支出,'+' 表示收入
  record: RecordItem ={
    tags:[],
    notes:'',
    type: '-',
    amount: 0
  }
  recordList = recordListModel.fetch()
  saveRecord(){
    recordListModel.create(this.record)
  }
  @Watch('recordList')
  onRecordListChanged(){
    recordListModel.save()
  }
}
</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
.form {
  line-height: 64px;
  background: #f5f5f5;
}
</style>