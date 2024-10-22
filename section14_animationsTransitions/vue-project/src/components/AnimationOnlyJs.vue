<template>
    <div>
        <button v-on:click="toggleVisible">Toggle</button>
        <transition 
            v-on:before-enter="beforeEnter"
            :css="false"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @enter-cancelled="enterCancelled"
            @leave-cancelled="leaveCancelled"
        >
            <p v-if="isVisible">
                Animated paragraph only in JavaScript
            </p>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isVisible: true,
            enterInterval: null,
            leaveInterval: null
        }
    },
    methods: {
        toggleVisible(){
            this.isVisible = !this.isVisible
        },
        beforeEnter(el){
            console.log(el)
            el.style.opacity = 0;
        },
        enter(el, done){
            let round = 1;
            this.enterInterval =  setInterval(()=>{
                el.style.opacity = round*0.01;
                round++;
                if (round > 100) {
                    clearInterval(this.enterInterval);
                    console.log('enter')
                    done()
                }
            }, 20)
        },
        afterEnter(el){
            console.log('After enter')
        },
        beforeLeave(el){
            el.style.opacity = 1
        }, 
        leave(el, done){
            let round = 1;
            this.leaveInterval =  setInterval(()=>{
                el.style.opacity = 1-round*0.01;
                round++;
                if (round > 100) {
                    clearInterval(this.leaveInterval);
                    console.log('leave')
                    done()
                }
            }, 20)
        },
        afterLeave(el){
            console.log('after leave')
        },
        enterCancelled(el){
            clearInterval(this.enterInterval)
        },
        leaveCancelled(el){
            clearInterval(this.leaveInterval)
        },
    }
}
</script>