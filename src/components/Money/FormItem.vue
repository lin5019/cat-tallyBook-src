<template>
  <label class="notes">
    <span class="name">{{ fieldName }}</span>
    <input type="text"
           :placeholder="placeholder"
           :value="value"
            @input="OnInput($event.target.value)"/>
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

  OnInput(value: string){
      this.$emit('update:value',value)
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