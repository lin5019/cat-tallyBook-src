<template>
  <Layout>
    <Tabs class-prefix="type" :array.sync="typeList" :value.sync="type"/>
    <ul  v-if="groupedList.length!==0">
      <li v-for="group in groupedList" :key="group.title">
        <h3 class="title"><span>{{ dateFormat(group.title) }}</span><span>¥ {{ group.total }}</span></h3>
        <ul>
          <li class="record" v-for="i in group.record" :key="i.createAt">
            <span class="tags">{{ tagsName(i.tags) || '无' }}</span>
            <span class="notes">{{
                i.notes
              }}你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</span>
            <span class="amount">¥ {{ i.amount }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div v-else class="noData">
      <span>目前没有数据</span>
    </div>
  </Layout>
</template>

<script lang="ts">

import {Component, Mixins} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import { Loader} from '@/mixins/TagHelper';


@Component({
  components: {Tabs},
})
export default class Statistics extends Mixins(Loader){
  typeList = typeList;
  type = typeList[0].value;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  /**数据在使用之前需要clone,deepCopy**/
  /**分别显示支出与收入类型的统计数据**/
  get groupedList() {
    const {recordList} = this;
    const list = clone(recordList).filter(i => i.type === this.type).sort((a, b) => {
      return dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf();
    });
    const itemList: ItemList = [];
    for (let i = 0; i < list.length; i++) {
      const date = dayjs(list[i].createAt).format('YYYY-MM-DD');
      if (itemList.length === 0) {
        itemList.push({title: date, total: 0, record: [list[i]]});
      } else {
        const item = itemList.filter(i => i.title === date)[0];
        if (item) {
          item.record.push(list[i]);
        } else {
          itemList.push({title: date, total: 0, record: [list[i]]});
        }
      }
    }
    itemList.map(item => {
      item.total = item.record.reduce((pre, item) => {
        //console.log(pre,item.amount);
        return pre + item.amount;
      }, 0);
      //console.log(item.total);
    });
    return itemList;
  }

  get tagList() {
    return (this.$store.state as RootState).tagList;
  }


  tagsName(tags: Tag[]) {
    return tags.map(i => i.name).join('-');
  }

  /*当年只显示日期,非当年显示年份 */
  dateFormat(date: string) {
    const day = dayjs(date);
    const today = dayjs();
    if (day.isSame(today, 'day')) {
      return '今天';
    } else if (day.isSame(today.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(today.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(today, 'year')) {
      return day.format('M月D日');
    }
    return day.format('YYYY年M月D日');
  }


}

</script>

<style lang="scss" scoped>
.noData {
  //border: 1px solid red;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
.content {
  //margin-top: 64px;
}
%item {
  line-height: 24px;
  padding: 8px 10px;
}

.title {
  @extend %item;
  background: #e5e5e5;
  display: flex;
  justify-content: space-between;
}

.record {
  @extend %item;

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
  .type-tabs {
    //border: 1px solid red;
    //position: fixed;
    //top: 0;
    //left: 0;
    //width: 100vw;
 
  }
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