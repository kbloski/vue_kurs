<template>
    <main>
        <div>
            <slot name:default />
        </div>
    </main>
</template>

<style lang="css">
main {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>