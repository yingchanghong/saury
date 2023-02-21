import type { ExtractPropTypes } from 'vue'

type ButtonType = 'primary' | 'success ' | 'warning ' | 'danger' | 'info' | 'text'

type ButtonSize = 'medium' | 'small ' | 'mini'

const buttonType = ['primary', 'success ', 'warning ', 'danger', 'info', 'text']
const buttonSize = ['medium', 'small ', 'mini']

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
    validator: (value) => buttonType.includes(value),
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
    default: 'medium',
    validator: (value) => buttonSize.includes(value),
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
