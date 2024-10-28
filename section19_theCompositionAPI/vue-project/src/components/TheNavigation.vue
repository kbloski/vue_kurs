<template>
    <ul>
        <li><router-link to="/data">Data - Refs & Reactive</router-link></li>
        <li><router-link to="/methods">Methods</router-link></li>
        <li><router-link to="/computed">Computed & Watch & Template ( V-model & Refs )</router-link></li>
        <li><router-link to="/props">Props & Emit</router-link></li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: center;
    list-style: None;
    padding: 10px;
    margin: 0;
}

li {
    margin: 5px;
    padding: 5px;
    border: 2px solid rgb(85, 85, 85);
    border-radius: 5px;
}
</style>