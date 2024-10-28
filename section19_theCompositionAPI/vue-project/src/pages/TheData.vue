<template>
    <div>
        <h1>The refs component</h1>
        <h2>{{ name }} {{ surname }}</h2>
        <div>
            <h4>REFS</h4>
            <h4>{{ age }}</h4>
            <h4>{{ school }} {{ status }}</h4>
        </div>
        <div>
            <h4>REF OBJECT</h4>
            <h4>{{ description.school }}</h4>
            <h4>{{ description.status }}</h4>
        </div>
        <div>
            <h4>REACTIVE OBJECT</h4>
            <h4>{{ reactiveObject.item1 }}</h4>
            <h4>{{ reactiveObject.item2 }}</h4>
        </div>
        <div>
            <h5>OBJECT VALUES TO REF (toRefs)</h5>
            <h5>{{ item1 }}</h5>
            <h5>{{ item2 }}</h5>
        </div>
    </div>
</template>

<script>
import {
    reactive, // Tworzy reaktywny obiekt, np. dla złożonych struktur jak obiekty lub tablice.
    ref, // Tworzy reaktywną wartość, idealną dla prostych danych (np. liczby, stringi).
    isReactive, // Sprawdza, czy obiekt jest reaktywny.
    isRef, //  Sprawdza, czy wartość jest ref.
    toRefs, // Konwertuje pola obiektu reaktywnego na ref, umożliwiając destrukturyzację z zachowaniem reaktywności.
} from "vue";

export default {
    setup() {
        let uSurname = "Błoński"; // No reactive value
        const uName = ref("Kamil");
        const uAge = ref(20);
        const uDescription = ref({
            status: "student",
            school: "unknown",
        });
        // REACTIVE - beter ref for object
        const reactiveObject = reactive({
            item1: "item1",
            item2: "item2",
        });
        console.log("uAge", isRef(uAge), isRef(uAge.value));
        console.log(
            "reactiveObjec",
            isReactive(reactiveObject),
            isReactive(reactiveObject.value)
        );

        setTimeout(() => {
            uSurname = "This not be working because variable is not ref";

            // CHANGE WITH REF
            uName.value = "Milblo";
            uAge.value = 21;

            // CHANGE VALUES OBJECT IN REF
            uDescription.value.school = "uDescription.value.school = ... - school variable change with ref";
            uDescription.value.status = "uDescription.value.status = ... - status varialbe change with ref";
            uDescription.school = "Not work with ref"; 
            uDescription.status = "Not work with ref";

            // CHANBE VALUES OBJECT IN REACTIVE (reactive is for object)
            reactiveObject.item1 = "reactiveObject.item1 = ... - variable chenge with reactive";
            reactiveObject.item2 = "reactiveObject.item2 = ... - variable change with reactive";
        }, 1000);


        // const objToRef = reactiveObject; //not to ref
        const objToRef = toRefs(reactiveObject); // to ref
        return {
            name: uName,
            surname: uSurname, // not reactive
            age: uAge,
            status: uDescription.value.status, // not reactive
            school: uDescription.value.school, // not reactive
            description: uDescription,
            reactiveObject,
            item1: objToRef.item1,
            item2: objToRef.item2,
        };
    },
};
</script>

<style scoped>
div {
    border-top: 2px solid black;
}
</style>
