<template>
    <div>
        <h1>Computed and Watchers and Template</h1>
        <h2>Review with conosle.log()</h2>
        <h3>FullName (computed): {{ fullName }}</h3>
        <div>
            <label>First Name</label>
            <input type="text" id="firstname" v-model="firstName"/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" id="secondname" ref="lastNameInput"/>
        </div>
        <button @click="setLastName">Set Last Name</button>
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
        
        // WATCH
        watch( fullName, (newVal, oldVal)=>{
            console.log("Fullname watch:  from " + oldVal + ' to ' + newVal)
        })
        watch( [firstName, lastName] , (newVal, oldVal) => {
            console.log(' watch([firstName, lastName], () => {} )', newVal, oldVal)
        })
        
        // Refs
        const lastNameInput = ref(null)
        
        function setLastName(){
            const value = lastNameInput.value.value
            console.log('setLastName', value)
            lastName.value = value;
        }
        
        return {
            firstName,
            lastName,
            fullName,

            // Refs
            setLastName,
            lastNameInput
        }
    }
}
</script>