<template>
    <dialog open="true">
        <slot></slot>
    </dialog>
</template>

<style scoped>
    dialog {
        display: block;
        position: fixed;
        top: 20vh;
        left: 30%;
        width: 40%;
        background-color: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        padding: 1rem;
    }
</style>