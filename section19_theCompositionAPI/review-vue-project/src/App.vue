<template>
    <div>
        <div>
            Navigation
            <the-navigation></the-navigation>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
    components: {
        TheNavigation,
    },
};
</script>

<style>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}
</style>
