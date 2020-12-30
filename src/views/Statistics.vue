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