<template>
  <sy-button disabled>dssd</sy-button>
  <sy-button type="primary" disabled>dssd</sy-button>
  <sy-button type="error" disabled>dssd</sy-button>
  <sy-icon :icon="fileName" />
  <svg-icon :icon-class="fileName" />
</template>
<script setup>
import { ref } from 'vue'
const fileName = ref('loading')
</script>
