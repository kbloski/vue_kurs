<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { ref, computed, watch } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props){
    const enteredSearchTerm = ref( " ")
    const activeSearchTerm = ref( '' )

    const availableProjects = computed( ()=>{
      if (activeSearchTerm.value) return props.user.projects.filter( (prj) => prj.titlle.includes( activeSearchTerm.value ))
      return props.user.projects
    })

    const hasProjects = computed( ()=>{
      return props.user.projects && availableProjects.value.length > 0
    })

    function updateSearch( val ){
      enteredSearchTerm.value = val
    }

    watch( enteredSearchTerm, (newVal)=>{
      setTimeout( ()=>{
        if (newVal === enteredSearchTerm.value) activeSearchTerm.value = newVal

      }, 300)
    })

    watch( props.user , ()=>{
      enteredSearchTerm.value = ''
    })
    
    return {
      enteredSearchTerm,
      activeSearchTerm,
      hasProjects,
      updateSearch,

    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>