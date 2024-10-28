<template>
    <div>
        <h1>The refs component</h1>
        <h2>{{ name }} {{ surname }}</h2>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const uName = ref("Kamil"); // utworzenie wartości reaktywnej
        let uSurname = 'Błoński';

        setTimeout( ()=>{
            uName.value = 'Milblo'
            uSurname = 'This not be working'
        }, 1000)

        return {
            name: uName,
            surname: uSurname
        };
    },
    // data(){
    //     return {
    //         userName: 'Kamil'
    //     }
    // }
};
</script>
