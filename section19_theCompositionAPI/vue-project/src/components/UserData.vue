<template>
    <div>
        <h2>Component with props</h2>
        <h3>fullname: {{  fullname  }}</h3>
        <h4>firstname: {{ firstName}}</h4>
        <h4>lastname: {{ lastName}}</h4>
        <h4>age:{{  age }} </h4>
    </div>
</template>

<script>
import { computed, inject} from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props, context){
        const fullname = computed(()=>{
            return props.firstName + ' ' + props.lastName
        })

        // EMIT
        context.emit('save-data', 1);

        // INJECT
        const age = inject('userAge')

        return {
            fullname,
            age
        }
    }
}
</script>

<style scoped>
div {
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
}
</style>