<template>
  <div class="container">
    <h2>Transition group</h2>
    <ul>
      <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
      </transition-group>
    </ul>
    <div>
      <input type="text" ref="userNameInput" />
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "Manu", "Julie", "Angela", "Michael"],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px)
}
.user-list-enter-active {
    transition: all 0.3s ease-in;
}
.user-list-enter-to {
    opacity: 1;
    transform: translateX(0px);
}
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0)
}
.user-list-leave-active {
    transition: all 0.3s ease-out;
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

/* Dodanie łagodnego przejącia dla elementów listy */
.user-list-move {
    transition: transform 2s ease;
}
</style>
