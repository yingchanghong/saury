<template>
  <button :class="[ns.b(''), ns.m(type)]">
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
    const { type } = props
    const ns = useNameSpace('btn')
    const a = 1
    console.log(props.type)
    return { type, ns }
  },
})
</script>

<style lang="less">
@import './index.less';
</style>
