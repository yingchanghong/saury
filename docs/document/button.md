---
title: Button
lang: en-US
---

# Button <update-badge/>

Buttons allow the user to take actions or make choices.

## Basic usage

Use `type` and `light` to define Button's style.
:::demo
```vue
<template>
  <div class="ddd" space-y-2>
    <div fscw gap-2>
      <sy-button>
        Default
      </sy-button>
      <sy-button type="primary">
        Primary
      </sy-button>
      <sy-button type="secondary">
        Secondary
      </sy-button>
      <sy-button type="success">
        Success
      </sy-button>
      <sy-button type="warning">
        Warning
      </sy-button>
      <sy-button type="error">
        Error
      </sy-button>
      <sy-button type="info">
        Info
      </sy-button>
    </div>
  </div>
</template>
```
:::
<!-- <preview path="../example/button/basic.vue" title="基本使用"></preview> -->