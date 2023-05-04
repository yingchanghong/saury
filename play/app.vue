<template>
  <sy-button disabled>dssd</sy-button>
  <sy-button type="primary" disabled>dssd</sy-button>
  <sy-button type="error" disabled>dssd</sy-button>
  <sy-icon :icon="fileName" />
  <svg-icon :icon-class="fileName" />
  <sy-tab :list="tabs" v-model="tab">sdsd</sy-tab>
  <sy-input v-model="fileName" placeholder="请输入" disabled></sy-input>
  <sy-input v-model="fileName" placeholder="请输入" clearble></sy-input>
</template>
<script setup>
import { ref } from 'vue'
const fileName = ref('loading')
const tabs = [
  { label: '推荐', value: '1' },
  { label: '足球', value: '2' },
  { label: '篮球', value: '3' },
]
const tab = ref('1')
</script>
