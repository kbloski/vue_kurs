<template>
  <div>
    <base-dialog v-if="isnputIsinvalid" title="Invalid Input" @close="confirmError">
      <template v-slot:default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>Check all inputs</p>
      </template>
      <template v-slot:actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form v-on:submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            ref="descriptionInput"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="url" ref="linkInput" />
        </div>
        <div>
          <base-button type="submit">Add resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ["addResource"],
  data(){
    return {
      isnputIsinvalid: false,
    };
  },  
  methods: {
    confirmError(){
      this.isnputIsinvalid = false;
    },
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if(enteredTitle.trim() === '' || enteredDescription.trim() === '', enteredLink.trim() === ''){
        this.isnputIsinvalid = true;
        return;
      };

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
