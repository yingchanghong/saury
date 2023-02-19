import type { ExtractPropTypes } from 'vue'

export const buttonProps = {
  text: {
    type: String,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
