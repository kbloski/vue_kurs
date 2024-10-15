<template>
  <form v-on:submit="onSubmit">
    <div>
      <label>Name <input type="text" v-model="enteredName"/> </label>
    </div>
    <div>
      <label>Phone <input type="text" v-model="enteredPhone" /> </label>
    </div>
    <div>
      <label>Email <input type="email" v-model="enteredEmail"/> </label>
    </div>
    <div>
        <button type="submit">Wyślij</button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
        enteredName: '',
        enteredPhone: '',
        enteredEmail: '',
    };
  },
  emits: [ 'new-friend'],
  methods: {
    onSubmit(event : Event){
        event.preventDefault();

        this.$emit('new-friend', {
            name: this.enteredName,
            phone: this.enteredPhone,
            email: this.enteredEmail
        })
    }
  }
};
</script>

<style scoped>
    form {
        margin: 0 auto;
        padding: 20px;
    }
</style>