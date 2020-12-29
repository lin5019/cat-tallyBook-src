<template>
  <Layout>
    <Tabs class-prefix="type" :array.sync="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :array.sync="intervalList" :value.sync="interval"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  intervalList = [{text: '天', value: 'day'}, {text: '周', value: 'week'}, {text: '月', value: 'month'}];
  interval = 'day';
  typeList = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
  type = '-';
}

</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: #fff;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }

}

::v-deep .interval-tabs-item {
    height: 48px;

}



</style>