<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- Link with userRoutes -->
          <router-link to="/teams">  
            <button>Teams</button>
          </router-link>
        </li>
        <li>
          <router-link to="/users">
            <button>Users</button>
          </router-link>
        </li>
        <li><button @click="redirectTeam">this.$router.push('./teams')</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
    redirectTeam(){
      // this.$router.replace('/teams') // podmienia adres dzięki czemu nie jest on dostępny w historii przeglądarki
      this.$router.push('/teams') // redirect
    }
  },
};
</script>

<style scoped>
a.router-link-active {
  color: black;
  background: red;
}


header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>