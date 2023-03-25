<template>
  <button
    @click="handleClick"
    :class="[
      ns.b(),
      ns.m(type),
      round ? is.is('round') : '',
      isText ? is.is('text') : '',
      disabled ? is.is('disabled') : '',
    ]"
    :disabled="disabled"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buttonProps } from './props'
import { useNameSpace } from '@saury/utils'

export default defineComponent({
  name: 'SyButton',
  props: buttonProps,
  setup(props) {
    const { type, onClick, round, disabled, text } = props
    const ns = useNameSpace('btn')
    const is = useNameSpace('round')
    const emitEvent = (fn, e) => {
      fn(e)
    }
    const isText = computed(() => type === 'text' || text)
    const handleClick = (event: MouseEvent) => {
      if (!onClick) return
      emitEvent(onClick, event)
    }
    return { type, ns, handleClick, is, round, disabled, isText }
  },
})
</script>
