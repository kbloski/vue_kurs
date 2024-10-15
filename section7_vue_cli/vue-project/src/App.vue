<template>
  <section>
    <header>My Friends</header>
    <friend-add-form v-on:new-friend="addFriend"></friend-add-form>
    <ul>
      <friend-contact
        v-for="friend in friends"
        v-bind:key="friend.id"
        v-bind:id="friend.id"
        v-bind:name="friend.name"
        v-bind:phone-number="friend.phone"
        v-bind:email-address="friend.email"
        v-bind:isFavorite="friend.isFavorite"
        v-on:toggle-favorite="toggleFavoriteStatus"
        v-on:delete-contact="deleteFriend"
      ></friend-contact>
    </ul>
    <div>
      <provide-test></provide-test>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  // provide: {
  //   provideTest: 'Varriable ProvideTest from App'
  // },
  provide(){
    return {
      provideTest: 'Variable Provide Test from APp'
    }
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz ",
          phone: "01231232131",
          email: "manuel@local.host",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Julie ",
          phone: "01231232131",
          email: "Julie@local.host",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId: string) {
      this.friends.map((value) => {
        if (value.id === friendId) value.isFavorite = !value.isFavorite;
        return value;
      });
    },
    addFriend( newFriend : any ){
      const randomId = `newFriend.name${Math.round(Math.random()*100)}`;
      this.friends.push({...newFriend, id: randomId})
    },
    deleteFriend( id : string){
      this.friends = this.friends.filter( f => f.id !== id);
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app section li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app section h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app section button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
