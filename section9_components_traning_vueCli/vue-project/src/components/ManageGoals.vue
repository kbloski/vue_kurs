<template>
         <div>
            <h2>Manage Goals</h2>
            <input type="text" ref="goal"/>
            <button @click="setGoals">Set goal</button>
            <teleport to="body">
                <ErrorAlert v-if="inputIsInvalid">
                        <h2>Input is Invalid!</h2>
                        <p>Please enter at least a few character</p>
                        <button @click="confirmError">Ok</button>
                </ErrorAlert>
            </teleport>
         </div>
</template>

<script lang="ts">
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoals(){
            const enteredValue = this.$refs.goal as HTMLInputElement;
            if(enteredValue.value === ''){
                this.inputIsInvalid = true;
            } 
        },
        confirmError(){
            this.inputIsInvalid= false;
        }

    }
}
</script>