<template>
    <div>
        <h3>Counter Value (Other component): {{ counter }}</h3>
    </div>
</template>

<script>
export default {
    computed: {
        counter(){
            // return this.$store.state.counter;
            return this.$store.getters.getCounter;
        }
    }
}
</script>