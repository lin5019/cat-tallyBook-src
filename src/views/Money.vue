<template>
  <Layout class-prefix="layout">
    {{record}}
    <Tags :data-source.sync="tags"
         :value.sync="record.tags"
    />
    <Notes :value.sync ="record.notes"/>
    <Types :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}


@Component({
  components: {NumberPad, Types, Notes, Tags},
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行'];
  //type = '-'; //'-' 表示支出,'+' 表示收入
  record: Record ={
    tags:[],
    notes:'',
    type: '-',
    amount: 0
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