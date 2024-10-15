<template>
    <div>
        <p>Provide and inject Component</p>
        <p>
            Provide Data: {{ provideTest }}

        </p>
        <p>
            W Vue 3 funkcje provide i inject służą do przekazywania danych lub funkcji z komponentu nadrzędnego (rodzica) do jego komponentów potomnych bez potrzeby ręcznego przekazywania ich przez propsy na każdym poziomie hierarchii. Jest to przydatne w bardziej złożonych strukturach aplikacji, gdzie chcemy przekazać dane do komponentów potomnych na dowolnym poziomie drzewa komponentów, bez przepychania ich przez kolejne komponenty pośrednie.
<br>
Jak działa provide?
provide pozwala komponentowi nadrzędnemu udostępnić dane do wszystkich komponentów potomnych (na dowolnym poziomie zagnieżdżenia).
W komponencie potomnym możemy te dane odebrać za pomocą funkcji inject.
Jak działa inject?
inject pozwala komponentom potomnym uzyskać dostęp do danych udostępnionych przez provide w komponentach nadrzędnych.
        </p>
    </div>
</template>

<script>
export default {
    inject: ['provideTest']
    
}
</script>

<style scoped>
    pre {
        width: 100vw;
        word-wrap: wrap;
    }
</style>