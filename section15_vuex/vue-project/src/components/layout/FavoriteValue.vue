<template>
    <div>
        <h3>Counter from namespace numbers: {{ finalCounter }}</h3>
        <p>We do more...</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// mapGetters pozwala na uproszczone mapowanie getterów Vuex do lokalnych właściwości komponentu, co ułatwia dostęp do danych zarządzanych przez Vuex bez konieczności pisania dodatkowego kodu.

export default {
    computed: {
        // ...mapGetters('namespace', ['getter']),
        ...mapGetters('numbers', ['finalCounter'])
    }
}
</script>