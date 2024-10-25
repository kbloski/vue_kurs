<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !firstName.isValid }">
        <label id="firstname">FirstName</label>
        <input type="text" id="firstname" v-model.trim="firstName.val" />
        <p v-if="!firstName.isValid">Firstname must be not empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !lastName.isValid }">
        <label id="lastname">Lastname</label>
        <input type="text" id="lastname" v-model.trim="lastName.val" />
        <p v-if="!lastName.isValid">Lastname must be not empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !description.isValid }">
        <label id="descriprion">Descriprion</label>
        <textarea id="descriprion" rows="5" v-model.trim="description.val" />
        <p v-if="!description.isValid">Lastname must be not empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !rate.isValid }">
        <label id="rate">hourlyRate</label>
        <input type="number" min="0" id="rate" v-model.number="rate.val" />
        <p v-if="!rate.isValid">Rate must be greater than 0.</p>
      </div>
      <div class="form-control" :class="{ invalid: !areas.isValid }">
        <h3>Areas of Expertise</h3>
        <div>
          <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input type="checkbox" id="backend" value="backend" v-model="areas.val" />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input type="checkbox" id="career" value="career" v-model="areas.val" />
          <label for="career">Career Advisory</label>
        </div>
        <p v-if="!areas.isValid">At least one expertise must be selected.</p>
      </div>
      <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
      <base-button>Register</base-button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidate(){
      this.formIsValid = true;
      this.firstName.isValid = true;
      this.lastName.isValid = true;
      this.description.isValid = true;
      this.rate.isValid = true;
      this.areas.isValid = true;
    },
    validateForm() {
      this.clearValidate();

      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.areas.val.length) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scope>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline-block;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
