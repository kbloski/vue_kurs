<template>
    <the-component name="Kamil" @emit-active="emitFunction"/>
    test
</template>

<script lang="ts" setup>
import { provide } from 'vue';
import TheComponent from './TheComponent.vue';

provide('provideVal', "This value is from provide function.")

function emitFunction( data : object){
    alert("Emit function: " + JSON.stringify( data))
}


</script>