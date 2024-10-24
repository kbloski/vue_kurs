<template>
    <div>
        <h3>Favorite Value: {{ finalCounter }}</h3>
        <p>We do more...</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// mapGetters pozwala na uproszczone mapowanie getterów Vuex do lokalnych właściwości komponentu, co ułatwia dostęp do danych zarządzanych przez Vuex bez konieczności pisania dodatkowego kodu.

export default {
    computed: {
        // counter(){
        //     return this.$store.getters.finalCounter
        // }
        ...mapGetters('numbers', ['finalCounter'])
    }
}
</script>