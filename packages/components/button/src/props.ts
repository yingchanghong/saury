import type { ExtractPropTypes } from 'vue'

export const buttonProps = {
  disabled: {
    type: Boolean,
  },
  icon: {
    type: String,
  },
  onClick: {
    type: Function,
  },
  type: {
    type: String, // primary | ghost | link | dashed
    default: 'default',
  },
  loading: {
    type: Boolean,
  },
  color: {
    type: String,
  },
  size: {
    type: String, // 'laege'|'default'|'small'
    default: 'default',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
