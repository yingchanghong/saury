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
    const a = 12
    console.log(1)
  },
})
</script>

<style>
.a {
  width: 10px;
  color: red;
}
</style>
