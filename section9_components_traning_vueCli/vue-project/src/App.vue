<template>
  <div>
    <the-header></the-header>
    <nav>
      <button @click="setSelectedComponent('active-goals')">Active Goals</button>
      <button @click="setSelectedComponent('manage-goals')">Manage Goals Goals</button>
    </nav>

    <user-info></user-info>
    <course-goals>
      <template v-slot:default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </course-goals>

    <keep-alive> 
      <component :is="selectedComponent"></component>
    </keep-alive> 

    <div>
      <h2>Notatki</h2>
      <ul>
        <li v-for="n in notes" v-bind:key="n">{{ n }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { notes } from './utils/notes.js'
import TheHeader from './components/layout/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';

import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/layout/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: { 
    'the-header' : TheHeader,
    'user-info' : UserInfo,
    'course-goals': CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      notes
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp
    }
  }
};
</script>



<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>