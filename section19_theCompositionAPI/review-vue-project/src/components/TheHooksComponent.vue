<template>
    <div>
        <h2>TheHooksComponent</h2>
        <slot></slot>
    </div>
</template>

<script>
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
} from "vue";

export default {
    setup(props) {

        onBeforeMount( ()=>{
            console.log('onBeforeMount')
        })
        onMounted( ()=>{
            console.log('onMounted')
        })
        onBeforeUpdate( ()=>{
            console.log('onBeforeUpdate')
        })
        onUpdated( ()=>{
            console.log('onUpdated')
        })
        onBeforeUnmount( ()=>{
            console.log('onBeforeUnmount')
        })
        onUnmounted( ()=>{
            console.log('onUnmounted')
        })
    },
};
</script>
