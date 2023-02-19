<template>
  <button>按钮sss</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps } from './props'
export default defineComponent({
  name: 'SyButton',
  props: buttonProps,
  setup(props) {
    const a = 1
    console.log(a)
  },
})
</script>

<style lang="less">
.a {
  width: 10px;
  color: red;
}
</style>
