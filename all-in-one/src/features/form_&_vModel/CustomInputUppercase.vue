<script lang="ts" setup>

const props = defineProps<{
    modelValue: string
}>()

const emits = defineEmits<{
    (event: 'update:modelValue', value: string) : void
}>()

function onInput( event : Event){
    if (event.target && event.target instanceof HTMLInputElement) {
        emits('update:modelValue', event.target.value.toUpperCase())
    }
}
</script>

<template>
    <input type="text" :value="props.modelValue" @input="onInput" />
</template>