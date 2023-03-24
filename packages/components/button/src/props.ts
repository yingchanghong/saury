import type { ExtractPropTypes } from 'vue'

type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'text' | 'default'

type ButtonSize = 'large' | 'small ' | 'default'

const buttonType = ['primary', 'success', 'warning', 'error', 'info', 'text', 'default']
const buttonSize = ['large', 'small ', 'default']

export const buttonProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  onClick: {
    type: Function,
  },
  type: {
    type: String,
    default: 'default',
    validator: (value: ButtonType) => buttonType.includes(value),
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: ButtonSize) => buttonSize.includes(value),
  },
  text: {
    type: Boolean,
    default: false,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
