<template>
  <div :class="[ns.b(), disabled ? ns.is('disabled') : '']">
    <template v-if="type !== 'textarea'">
      <div :class="[ns.b('wrap'), focusVisible ? 'is-focus' : '']">
        <input
          :value="props.modelValue"
          :class="[ns.b('inner')]"
          v-bind="attrs"
          :disabled="disabled"
          :placeholder="placeholder"
          :type="type"
          @input="change"
          @blur="onBlur"
          @focus="onFuous"
        />
        <div v-if="clearble" :class="[ns.b('clear')]">x</div>
      </div>
    </template>
    <template v-else></template>
  </div>
</template>

<script lang="ts" setup name="SyInput">
import { useAttrs, ref } from 'vue'
import { useNameSpace } from '@saury/utils'
import { inputProps } from './props'

const emits = defineEmits(['update:modelValue', 'change'])
const attrs = useAttrs()
const ns = useNameSpace('input')
const props = defineProps(inputProps)
const change = (e: any) => {
  emits('update:modelValue', e.target.value)
}
const focusVisible = ref(false)
const onBlur = () => {
  focusVisible.value = false
}
const onFuous = () => {
  focusVisible.value = true
}
</script>
