const app = Vue.createApp({
    data() {
        return {
            name: "Components",
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "123 123 132",
                },
                {
                    id: "julie",
                    name: "Julie Julie",
                    phone: "123 123 132",
                },
            ],
        };
    },
    methods: {
        setText() {
            this.message = this.$refs.userText.value;
        },
    },
});

app.component("user-contact", {
    template: `
        <li v-bind:key='friend.id'>
            <button v-on:click='toggleShowDetails'>Show</button>
            <div v-if='detailsAreVisible'>
                <h2> {{friend.id}}</h2>
                <h3> {{friend.name}}</h3>
                <p> {{ friend.phone}}</p>
            </div>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "julie",
                name: "Julie Julie",
                phone: "123 123 132",
            },
        };
    },
    methods: {
        toggleShowDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
