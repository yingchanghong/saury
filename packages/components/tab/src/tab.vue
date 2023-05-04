<template>
  <div class="sy-tab-bar">
    <div :class="[ns.b()]">
      <div
        v-for="(item, index) in list"
        :class="[ns.b('item'), item.value === modelValue ? 'active' : '']"
        :key="index"
        @click="onTabChange(item.value)"
      >
        <span>{{ item.label }}</span>
      </div>
      <div class="sy-tab--line" :style="lineStyle"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue'
import { useNameSpace } from '@saury/utils'
import { tabProps } from './props'

const ns = useNameSpace('tab')
const emits = defineEmits(['update:modelValue', 'change'])
const onTabChange = (val: string) => {
  emits('update:modelValue', val)
}
const props = defineProps(tabProps)
const lineStyle = ref({})
watch(
  () => props.modelValue,
  () => {
    nextTick(() => {
      const element = document.querySelector('.active') as HTMLElement
      const styleInfo = window.getComputedStyle(element)
      const width = styleInfo.getPropertyValue('width')
      const padleft = styleInfo.getPropertyValue('padding-left')
      lineStyle.value = {
        transform: `translateX(${element.offsetLeft + Number(padleft.replace('px', ''))}px)`,
        width,
      }
    })
  }
)
</script>

<script lang="ts">
export default {
  name: 'SyTab',
}
</script>
