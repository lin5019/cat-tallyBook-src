<template>
  <button  @click="$emit('click',$event)">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
@Component
export default class Button extends Vue{

}
</script>

<style lang="scss" scoped>
button {
  padding: 8px 16px;
  background: #767676;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>