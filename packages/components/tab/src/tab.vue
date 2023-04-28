<template>
    <div class="sy-tab-bar">
        <div :class="[ns.b()]">
            <div v-for="(item, index) in list" :class="[ns.b('item'), item.value === modelValue ? 'active' : '']"
                :key="index" @click="onTabChange(item.value)">
                <span>{{ item.label }}</span>
            </div>
            <div class="sy-tab--line" :style="lineStyle"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { watch, ref, watchEffect, nextTick } from 'vue'
import { useNameSpace } from '@saury/utils'
import { tabProps } from './props'

const ns = useNameSpace('tab')
const emits = defineEmits(['update:modelValue', 'change'])
const onTabChange = (val: string) => {
    emits('update:modelValue', val);
}
const props = defineProps(tabProps);
const lineStyle = ref({});
watch(() => props.modelValue, (news) => {
    nextTick(() => {
        const name = document.querySelector('.active') as HTMLElement;
        const b = window.getComputedStyle(name);
        const d = (b.getPropertyValue('width'));
        const pl = b.getPropertyValue('padding-left');
        lineStyle.value = {
            transform: `translateX(${name.offsetLeft + Number(pl.replace('px', ''))}px)`,
            width: `${d}`,
        }
    })
})
</script>

<script lang="ts">
export default {
    name: 'SyTab',
}
</script>