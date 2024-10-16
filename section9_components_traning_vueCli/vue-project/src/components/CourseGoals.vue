<template>
    <ul>
        <li v-for="goal in goals" v-bind:key="goal">
            <slot v-bind:item="goal">{{ goal }}</slot>
        </li>
    </ul>
</template>

<script lang="ts">
    export default {
        mounted(){
            console.log(this.$slots.default)
        },
        data(){
            return {
                goals: ['Finish the course', 'Learn Vue']
            }
        }
    }
</script>