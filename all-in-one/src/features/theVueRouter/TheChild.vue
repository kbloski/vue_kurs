<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { childId } = route.params


// USE OPTION API
// export default {
//     data(){
//         return {
//             childId: this.$route.params.childId
//         }
//     },
//  methods: {
//      changeUrl(){
//          this.$router.push('/url')
//      }
//  }
// }
</script>


<template>
    Router Child {{ childId }}
</template>