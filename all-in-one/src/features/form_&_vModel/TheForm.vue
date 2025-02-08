<script setup lang="ts">
import { ref } from "vue";
import CustomInputUppercase from "./CustomInputUppercase.vue";

const name = ref("Kamil");
const age = ref(3);
const language = ref("");
const emoticons = ref([]);
const topSpeed = ref(100);
const uppercase = ref('')

function onSubmit(event: Event) {}

function onBlur() {
    console.log("Pole utracilo fokus");
}

function onChange(e: Event) {
    console.log("Zmieniono wartość");
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <pre>
      InputValues:
      name - {{ name }}
      age - {{ age }}
      language - {{ language }}
      emoticons - {{ emoticons }}
      topSpeed - {{ topSpeed }}
      uppercase - {{ uppercase }}
    </pre
        >
        <div>
            <div>Name <input type="text" v-model.trim="name" @blur="onBlur" /></div>
            <div>Age <input type="number" v-model.number="age" /></div>
            <div>
                Język
                <select v-model="language" v-on:change="onChange">
                    <option value="pl">Polski</option>
                    <option value="en">Angielski</option>
                </select>
            </div>
            <div>
                Emoticons 👍<input type="checkbox" value="👍" v-model="emoticons" />
                😉<input type="checkbox" value="😉" v-model="emoticons" /> 🏍️<input
                    type="checkbox"
                    value="🏍️"
                    v-model="emoticons"
                />
            </div>
            <div>
                MaxSpeed 100
                <input type="radio" value="100" name="topSpeed" v-model="topSpeed" /> 150
                <input type="radio" value="150" name="topSpeed" v-model="topSpeed" /> 200
                <input type="radio" value="200" name="topSpeed" v-model="topSpeed" />
            </div>
            <CustomInputUppercase v-model="uppercase" />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<style lang="css">
form {
    border: 2px solid gray;
    padding: 1rem;
}
</style>
