<template>
  <Layout>
    <Tabs class-prefix="type" :array.sync="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :array.sync="intervalList" :value.sync="interval"/>
    <ul>
      <li v-for="item in result" :key="item.title">
        <h3 class="title">{{dateFormat(item.title) }}</h3>
        <ul>
          <li class="record" v-for="i in item.record" :key="i.createAt">
            <span class="tags">{{ TagsName(i.tags) || '无' }}</span>
            <span class="notes">{{ i.notes }}你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</span>
            <span class="amount">¥{{i.amount }}</span>
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
import dayjs from 'dayjs'
import clone from '@/lib/clone';


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
    const list= clone(recordList)
    list.sort((a,b)=>{
      return dayjs(b.createAt).valueOf()-dayjs(a.createAt).valueOf()
    })
    const itemList: ItemList = [];
    for (let i = 0; i < list.length; i++) {
      const [date] = list[i] .createAt.split('T');
      if (itemList.length === 0) {
        itemList.push({title: date, record: [list[i]]});
      } else {
        const item = itemList.filter(i => i.title === date)[0];
        if (item) {
          item.record.push(list[i]);
        } else {
          itemList.push({title: date, record: [list[i]]});
        }
      }
    }
    return itemList;
  }

  get tagList(){
    return (this.$store.state as RootState).tagList;
  }


 TagsName(ids: string[]){
    const tagsName=[]
    for (let i = 0; i <ids.length ; i++) {
      const id=ids[i]
      tagsName.push(this.tagList.filter(i=>i.id===id)[0].name)
    }
   return  tagsName.join('-')
  }
  /*当年只显示日期,非当年显示年份 */
  dateFormat(date: string){
    const day=dayjs(date)
    const today=dayjs()

    if(day.isSame(today, 'day')){
      return '今天'
    }else if(day.isSame(today.subtract(1,'day'),'day')){
      return '昨天'
    }else if(day.isSame(today.subtract(2,'day'),'day')){
      return '前天'
    }else if(day.isSame(today,'year')){
      return day.format('M月D日')
    }
    return day.format('YYYY年M月D日')
  }


}

</script>

<style lang="scss" scoped>
%item {
  line-height: 24px;
  padding: 8px 10px;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: #e5e5e5;
  //border: 1px solid red;
  display: flex;
  //justify-content: space-around;
  align-items: center;
  span {
    //border: 1px solid red;
    width: 70px;
  }
  .tags {
    padding-right: 15px;
  }
  .notes {
    //width: auto;
    flex: auto;
  }
  .amount {
    width: 70px;
    text-align: right;
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