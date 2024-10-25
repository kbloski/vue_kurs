<template>
    <div>
        <ul>
            <li><router-link to="/coaches">All Coaches</router-link> </li>
            <li><router-link to="/requests">Requests</router-link> </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    display:  flex;
    list-style: none;
    justify-content: end;
}

li {
    margin-left: 10px;
}

a {
    text-decoration: none;
    color:  #f391e3;
    padding: 0.75rem 0.5rem;
    /* border: 1px solid transparent */

}

a:active,
a:hover,
a.router-link-active {
    border: 1px solid #f391e3;
}

</style>