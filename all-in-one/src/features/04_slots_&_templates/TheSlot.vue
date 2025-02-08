<template>
    <div>
        <div>(Tytuł) 
            <slot name="title" emotka="">Domyślny tytuł</slot>
        </div>
        <div>(Default) <slot name="default" v-if="$slots.default" /></div>
        <div>(Footer) <slot name="footer" v-if="$slots.footer" /></div>
    </div>
</template>