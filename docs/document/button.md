---
title: Button
lang: en-US
---

# Button <update-badge/>

Buttons allow the user to take actions or make choices.

## Basic usage

Use `type` and `round` to define Button's style.
:::demo
```vue
<template>
    <div fscw gap-2>
      <sy-button>Default</sy-button>
      <sy-button type="primary">Primary</sy-button>
      <sy-button type="success">Success</sy-button>
      <sy-button type="warning">Warning</sy-button>
      <sy-button type="info">Info</sy-button>
    </div>
    <div fscw gap-2 class="mt-10">
      <sy-button round>Default</sy-button>
      <sy-button type="primary" round>Primary</sy-button>
      <sy-button type="success" round>Success</sy-button>
      <sy-button type="warning" round>Warning</sy-button>
      <sy-button type="info" round>Info</sy-button>
    </div>
</template>
```
:::

## text button

Use `text` to `type` or `text` attributes as boolean
:::demo
```vue
<template>
    <div fscw gap-2 >
      <sy-button text>Default</sy-button>
      <sy-button type="primary" text>Primary</sy-button>
      <sy-button type="success" text>Success</sy-button>
      <sy-button type="warning" text>Warning</sy-button>
      <sy-button type="info" text>Info</sy-button>
    </div>
</template>
```
:::