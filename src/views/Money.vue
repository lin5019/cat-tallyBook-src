<template>
  <Layout class-prefix="layout">
    <Tags :value.sync="record.tags"/>
    <FormItem
        class="form"
        field-name="备注"
        placeholder="请填写备注..."
        :value.sync="record.notes"
        />
    <Tabs class-prefix="type" :array.sync="typeList" :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @update:submit="createRecord"/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Mixins} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';
import { Loader} from '@/mixins/TagHelper';




@Component({
  components: {Tabs, NumberPad, FormItem, Tags},
  computed: {
    recordList(){
      return this.$store.state.recordList;
    },
  }
})
export default class Money extends Mixins(Loader){
  //type = '-'; //'-' 表示支出,'+' 表示收入
  typeList = typeList
  record: RecordItem = {
    tags: [],
    notes: '',
    type: typeList[0].value,
    amount: 0,
    createAt:'',
  };
  createRecord() {
    const map: {[key: string]: string}={
      'Select a label' :'请选择一个标签',
      'Input syntax error': '记账输入的数字不合法!',
    }
    this.$store.commit('createRecord',this.record)
    if(this.$store.state.createRecordError){
      window.alert(map[this.$store.state.createRecordError.message]);
    }else {
      window.alert('记账成功!')
      this.record.notes=''
    }
  }

}
</script>
<style lang="scss" scoped>

.form {
  line-height: 64px;
  background: #f5f5f5;
}
::v-deep {
  .layout-content {
    display: flex;
    flex-direction: column;
  }
}


</style>