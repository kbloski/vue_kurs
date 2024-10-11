const appVue = Vue.createApp({
    data() {
        return {
            inputGoal: "",
            goals: [],
            user: {
                id: 3,
                name: "Kamil",
                surname: "Błoński",
                age: 20,
                role: "admin",
            },
        };
    },
    methods: {
        addGoal(event) {
            event.preventDefault();
            if (!this.inputGoal) return;
            this.goals.push(this.inputGoal);
            this.inputGoal = "";
        },
        deleteGoal(index) {
            this.goals.splice(index, 1);
        },
    },
});

appVue.mount("#appVue");
