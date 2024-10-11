function getRandomVlaue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const vueApp = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMassages: []
        };
    },
    computed: {
        monsterBarStyles(){ 
            if (this.monsterHealth < 0) return {width: '0%'}
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles(){
            if (this.playerHealth < 0) return {width: '0%'}
            return { width: this.playerHealth + "%" };
        },
        mayUseSpecialAtack(){ return this.currentRound % 3;}
    },
    watch: {
        playerHealth(newValue, oldValue){
            if(newValue <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            } else if (newValue <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(newValue, oldValue){
            if(newValue <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if (newValue <= 0){
                this.winner = 'player';
            }
            
        }
    },
    methods: {
        startGame(){
            this.playerHealth= 100
            this.monsterHealth= 100
            this.currentRound= 0
            this.winner= null
            this.logMassages = []
        },
        atackMonster() {
            console.log();
            this.currentRound++;
            const atackValue = getRandomVlaue(8, 12);
            this.monsterHealth -= atackValue;
            this.addLogMessage('player', 'attack', atackValue);
            this.atackPlayer();
        },
        atackPlayer() {
            const atackValue = getRandomVlaue(8, 15);
            this.playerHealth -= atackValue;
            this.addLogMessage('monster', 'attack', atackValue);
        },
        specialAtackMonster(){
            this.currentRound++;
            const atackValue = getRandomVlaue(10, 25);
            this.monsterHealth -= atackValue;
            this.addLogMessage('player', 'attack', atackValue);
            this.atackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomVlaue(8,20);
            this.playerHealth += healValue;
            if (this.playerHealth > 100) this.playerHealth = 100;
            this.addLogMessage('player', 'heal', healValue);
            this.atackPlayer();
        },
        surrender(){
            this.winner = 'monster'
        },
        addLogMessage(who, what, value){
            this.logMassages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    },
});

vueApp.mount("#game");
