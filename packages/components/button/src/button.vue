<template>
  <button :class="[n(), n(type)]">
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps } from './props'
export default defineComponent({
  name: 'SyButton',
  props: buttonProps,
  setup(props) {
    const { type } = props
    const nameSpace = (compent: string) => {
      let cmName = compent
      return (name?: string) => {
        let className = `sy-${cmName}`
        if (name) className += `-${name}`
        return className
      }
    }
    const n = nameSpace('btn')
    const a = 1
    console.log(props.type)
    return { type, n }
  },
})
</script>

<style lang="less">
@import './index.less';
</style>
