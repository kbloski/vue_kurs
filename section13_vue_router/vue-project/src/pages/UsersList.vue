<template>
  <div>
    <button @click="savedChanges">Save Changes</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return { changesSaved: false}
  },
  methods: {
    savedChanges(){
      this.changesSaved = true;
    },  
  },

  beforeRouteEnter( to, from , next){
    console.log('UserList component beforeRouteEnter local')
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList CMP befoureROuteLeave local')
    if (this.changesSaved) return next();

    const userWantsToLeave = confirm('Are yo sure? You got unsaved changes!')
    if (userWantsToLeave) return next(userWantsToLeave)
  },

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>