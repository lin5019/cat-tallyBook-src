<template>
  <Layout>
    <Tabs class-prefix="type" :array.sync="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :array.sync="intervalList" :value.sync="interval"/>
    <ul>
      <li v-for="(items,index) in result" :key="index" >
        {{items.title}}
        <ul>
          <li v-for="i in items.list" :key="i.createAt">{{i.amount}}</li>
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

  get recordList(){
    return (this.$store.state as RootState).recordList
  }

  get result(){
    const {recordList} = this;
    const hashTable: HashTable = {}
    for (let i = 0; i <recordList.length ; i++) {
      const [date,time]=recordList[i].createAt.split('T')
      //第一次是一个空数组,给一个初始值.
      hashTable[date] = hashTable[date] || {title: date,list: []}
      hashTable[date].list.push(recordList[i])
    }
    return hashTable
  }
}

</script>

<style lang="scss" scoped>
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