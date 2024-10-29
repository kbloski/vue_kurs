<template>
    <div>
        <h1>Methods</h1>
        <div>
            <h2>Data</h2>
            <h3>
                <pre></pre>
                <pre>
counter = {{ counter }}
data = {{ JSON.stringify(data, null, 4)}} </pre></h3>
            <button @click="setCounter">Counter increment</button>
            <button @click="setAge">Age increment</button>
        </div>
    </div>
</template>

<script>
import { reactive, ref} from 'vue';

export default {
    setup(){
        const counter = ref(0)
        const data = reactive({
            name: 'Kamil',
            age: 20,
        })

        // Method
        function ageIncrement(){
            data.age++
        }

        function counterIncrement(){
            counter.value++
        }

        return { 
            data,
            counter,
            setCounter: counterIncrement,
            setAge: ageIncrement
        }
    }

}
</script>