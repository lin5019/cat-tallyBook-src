<template>
  <label class="notes">
    <span class="name">{{ fieldName }}</span>
    <input type="text"
           :placeholder="placeholder"
           :value="value"
            @input="OnInput"/>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class FormItem extends Vue {
  @Prop(String) readonly value!: string
  @Prop({required: true}) fieldName!: string;
  @Prop(String) placeholder!: string;

  OnInput(e: any){
    this.$emit('update:value',e.target.value)
    this.$emit('update:input')
  }

}
</script>

<style lang="scss" scoped>

.notes {
  //border: 1px solid red;
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: 14px;

  > .name {

  }

  > input {
    flex: 1;
    line-height: inherit;
    background: inherit;
    border: none;
    padding: 0 16px;
  }
}
</style>