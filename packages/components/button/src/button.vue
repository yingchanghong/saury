<template>
  <button onclick="handleClick" :class="[ns.b(), ns.m(type)]">
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps } from './props'
import { useNameSpace } from '@saury/utils'

export default defineComponent({
  name: 'SyButton',
  props: buttonProps,
  setup(props) {
    const { type, onClick } = props
    const ns = useNameSpace('btn')
    const emitEvent = (fn, e) => {
      fn(e)
    }
    const handleClick = (event: MouseEvent) => {
      emitEvent(onClick, event)
    }
    return { type, ns, handleClick }
  },
})
</script>

<style lang="less">
@import url('./index.less');
</style>
