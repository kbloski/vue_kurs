<template>
  <div>
    <the-navigation></the-navigation>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
  </div>
</template>

<script>
import TheNavigation from './components/layout/TheNavigation.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TheNavigation
  } ,
  created(){
    this.$store.dispatch('auth/autoLogin')
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  watch: {
    isLoggedIn(value){
      // console.log('isLoggedIn')
      if (this.$route.path === '/login' && value) this.$router.push('/dashboard')

      if (this.$route.path === '/login' && !value) this.$router.push('/login')
    }
  }
}
</script>

<style>


* {
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-50px)
}
.route-enter-active {
  transition: all 0.3s ease;
}
.route-enter-to {
  opacity: 1;
  transform: translateX(0)
}

.route-leave-from {
  opacity: 1;
  transform: translateX(0)
}
.route-leave-active {
  transition: all 0.3s ease;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(50px)
}

</style>