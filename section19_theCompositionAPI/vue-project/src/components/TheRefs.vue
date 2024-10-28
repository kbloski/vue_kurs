<template>
    <div>
        <h1>The refs component</h1>
        <h2>{{ name }} {{  surname }}</h2>
        <h3> {{ age  }}</h3>
        <h4>{{ school }} {{ status }}</h4>
        <h4>{{ description.school }} {{ description.status }}</h4>
        <h5> {{ reactiveObject.item1 }} {{ reactiveObject.item2 }}</h5>
        <h5> {{ item1 }} {{ item2 }}</h5>
    </div>
</template>

<script>
import { 
    reactive, // for object
    ref,   // for all kind of values
    isReactive,
    isRef,
    toRefs
} from "vue";

export default {
    setup() {
        const uName = ref("Kamil"); // utworzenie wartości reaktywnej
        const uAge = ref(20);
        let uSurname = 'Błoński'; // this is not reactive
        const uDescription = ref({
            status: 'student',
            school: "unknown"
        });
        const reactiveObject = reactive({
            item1: 'item1',
            item2: 'item2'
        }); // reactive for object

        console.log( 'uAge', isRef(uAge), isRef(uAge.value));
        console.log( 'reactiveObjec', isReactive(reactiveObject), isReactive(reactiveObject.value))

        setTimeout( ()=>{
            uName.value = 'Milblo'
            uAge.value = 21
            uSurname = 'This not be working'

            // Use ref -
            uDescription.value.status = 'Older student' // work with ref
            uDescription.value.school = 'Unkn'  // work with ref
            // uDescription.status = 'Older student' //not working with ref
            // uDescription.school = 'Unkn' // Not working with ref

            // User reactive (reactive is for object)
            reactiveObject.item1 = 'IM1',
            reactiveObject.item2 = "IM2"
        }, 1000)

        // const objToRef = reactiveObject;
        const objToRef = toRefs( reactiveObject);
        return {
            name: uName,
            surname: uSurname,  // not reactive
            age: uAge,
            status: uDescription.value.status, // not reactive
            school: uDescription.value.school,  // not reactive
            description: uDescription,
            reactiveObject,
            item1: objToRef.item1,
            item2: objToRef.item2
        };
    },
    // data(){
    //     return {
    //         userName: 'Kamil'
    //     }
    // }
};
</script>
