import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  icon: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
