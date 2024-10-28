<template>
    <div>
        <h1>Computed and Watchers</h1>
        <h2>FullName (computed): {{ fullName }}</h2>
        <div>
            <label>First Name</label>
            <input type="text" id="firstname" v-model="firstName"/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" id="secondname" v-model="lastName"/>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch} from 'vue';

export default {
    setup(){
        const firstName = ref('Kamil');
        const lastName = ref('Błoński');

        // COMPUTED VALUES
        const fullName = computed( function(){
            return firstName.value + ' ' + lastName.value
        })

        watch( fullName, ()=>{
            console.log("Fullname is changed")
        })

        return {
            firstName,
            lastName,
            fullName
        }
    }
}
</script>