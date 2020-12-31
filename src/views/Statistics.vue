<template>
  <Layout>
    <Tabs class-prefix="type" :array.sync="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :array.sync="intervalList" :value.sync="interval"/>
    <ul>
      <li v-for="(items,index) in result" :key="index">
        <h3 class="title">{{ index }}</h3>
        <ul>
          <li class="record" v-for="i in items" :key="i.createAt">
            <span>{{ TagsName(i.tags) || '无' }}</span>
            <span class="notes">{{ i.notes }}你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</span>
            <span>¥{{i.amount }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  intervalList = intervalList;
  interval = intervalList[0].value;
  typeList = typeList;
  type = typeList[0].value;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    const hashTable: HashTable = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date] = recordList[i] .createAt.split('T');
      //第一次是一个空数组,给一个初始值.
      hashTable[date] = hashTable[date] || [];
      hashTable[date].push(recordList[i]);
    }
    return hashTable;
  }

  get tagList(){
    return (this.$store.state as RootState).tagList;
  }


 TagsName(ids: []){
    const tagsName=[]
    for (let i = 0; i <ids.length ; i++) {
      const id=ids[i]
      tagsName.push(this.tagList.filter(i=>i.id===id)[0].name)
    }
   return  tagsName.join('-')
  }
}

</script>

<style lang="scss" scoped>
%item {
  line-height: 24px;
  padding: 8px 16px;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: #e5e5e5;
  //border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-content: center;
  & .notes {
  margin: 0 16px;
  }
}

::v-deep {
  .type-tabs-item {
    background: #fff;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }

}


</style>