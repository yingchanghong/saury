import type { ExtractPropTypes, PropType } from 'vue'

export const definePropType = <T>(val: any): PropType<T> => val
type InputType = 'textarea' | 'password' | 'default' | 'text'

export const inputProps = {
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  modelValue: {
    type: definePropType<string | number | null | undefined>([String, Number, Object]),
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearble: {
    type: Boolean,
    default: false,
  },
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
