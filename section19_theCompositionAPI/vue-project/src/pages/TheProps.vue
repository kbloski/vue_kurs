<template>
    <div>
        <h1>Props & compositionAPI</h1>
        <user-data 
            :first-name="firstname" 
            :last-name="lastname" 
            :age="age"
            @save-data="showEmitData"
        ></user-data>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import UserData from "../components/UserData.vue";

export default {
    components: {
        UserData,
    },
    setup() {
        const userdata = reactive({
            name: "Kamil",
            surname: "Błoński",
        });
        const age = ref(20);


        function showEmitData( data ){
            console.log('emit save-data: ' + data)
        }

        const user = toRefs(userdata);
        return {
            firstname: user.name,
            lastname: user.surname,
            age,
            showEmitData
        };
    },
};
</script>
