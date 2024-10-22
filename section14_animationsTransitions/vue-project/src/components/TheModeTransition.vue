<template>
    <div class="container">
        <p>
            W Vue, parametr mode w komponencie transition kontroluje kolejność animacji przy zmianach elementów:
            <br>
            <br>
            in-out: najpierw animuje się nowy element, potem stary.
            <br>
            out-in: najpierw animuje się stary element, potem nowy. 
        </p>
        <div>
            Change mode <button @click="toggleMode">{{ transitionMode }}</button>
        </div>
        <transition :mode="transitionMode">
            <button @click="hideUsers" v-if="userAreVisible">Hide users</button>
            <button @click="showUsers" v-else-if="!userAreVisible">Show users</button>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userAreVisible: true,
            transitionMode: 'out-in'
        }
    },
    methods: {
        showUsers(){
            this.userAreVisible = true
        },
        hideUsers(){
            this.userAreVisible = false
        },
        toggleMode(){
            if (this.transitionMode === 'out-in') {
                this.transitionMode = 'in-out'
            } else {
                this.transitionMode = 'out-in'
            }
        }
    }
}
</script>

<style scoped>

.v-enter-active {
    animation: slide-fade 2s ease;
}

.v-leave-active {
    animation: slide-fade 2s ease reverse;
}


@keyframes slide-fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>