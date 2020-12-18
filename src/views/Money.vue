<template>
  <Layout class-prefix="layout">
    {{record}}
    <Tags :data-source.sync="tags"
          @update:value="OnUpdateTags"
    />
    <Notes @update:value="OnUpdateNotes"/>
    <Types @update:value="OnUpdateType"/>
    <NumberPad @update:value="OnUpdateOutput"/>
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
  record: Record ={
    tags:[],
    notes:'',
    type: '',
    amount: 0
  }
  OnUpdateTags(e: string[]) {
    this.record.tags=e
  }

  OnUpdateNotes(e: string) {
    this.record.notes=e
  }

  OnUpdateType(e: string) {
    this.record.type=e
  }

  OnUpdateOutput(e: string) {
    this.record.amount=parseFloat(e)
  }
}
</script>
<!--<style>-->
<!--.layout-content {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->
<!--</style>-->
<style lang="scss" scoped>

</style>