<template>
  <!-- 外部图标 -->
  <div v-if="isExternal" class="icon svg-icon svg-external-icon" :style="styleExternalIcon"></div>
  <!-- 内部图标 -->
  <svg v-else class="svg-icon icon" aria-hidden="true">
    <use :xlink-href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { isExternal as external } from '@saury/utils/validate'
import '@saury/icon'
import { iconProps } from './props'

const props = defineProps(iconProps)
const isExternal = computed(() => external(props.icon))
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
}))
const iconName = computed(() => `#icon-${props.icon}`)
</script>
<script lang="ts">
export default {
  name: 'SyIcon',
}
</script>
<style lang="less" scoped>
.svg-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentcolor;
}

.svg-external-icon {
  display: inline-block;
  background: currentcolor;
  mask-size: cover !important;
}
</style>
