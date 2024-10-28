<template>
    <ul>
        <li><router-link to="/refs">Refs & Reactive</router-link></li>
        <li><router-link to="/methods">Methods</router-link></li>
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