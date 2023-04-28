import type { ExtractPropTypes } from 'vue'

type ListItem = {
    label: string;
    value: string;
}
export const tabProps = {
  modelValue: String,
  list: {
    type: Array as PropType<ListItem[]>,
    default: () => [],
  },
} as const

export type TabProps = ExtractPropTypes<typeof tabProps>
