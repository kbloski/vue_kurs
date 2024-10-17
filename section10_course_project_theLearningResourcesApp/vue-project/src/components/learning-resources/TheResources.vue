<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <component component :is="selectedTab" :resources="resources"></component>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  inject: ["resources"],
  data() {
    return {
      selectedTab: "stored-resources",
    };
  },
  computed: {
    storedResButtonMode(){
        return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode(){
        return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
