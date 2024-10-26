<template>
    <base-card>
        <h2>Navigation</h2>
        <ul>
            <li><base-button link to="/login">Login Page</base-button></li>
        </ul>
    </base-card>
</template>

<style scoped>

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.router-link-active {
    border: 0px;
    background: rgb(180, 0, 171);
}
</style>