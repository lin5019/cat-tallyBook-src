<template>
  <Layout class-prefix="layout">
    {{recordList}}
    <Tags :data-source.sync="tags"
         :value.sync="record.tags"
    />
    <Notes :value.sync ="record.notes"/>
    <Types :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount"  @update:submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';


@Component({
  components: {NumberPad, Types, Notes, Tags},
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行'];
  //type = '-'; //'-' 表示支出,'+' 表示收入
  record: RecordItem ={
    tags:[],
    notes:'',
    type: '-',
    amount: 0
  }
  recordList = model.fetch()
  saveRecord(){
    const record2: RecordItem = model.clone(this.record)
    record2.createAt= new Date()
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChanged(){
    model.save(this.recordList)
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

</style>