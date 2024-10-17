<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <component component :is="selectedTab" :resources="storeResources"></component>
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

  provide() {
    return {
      resources: this.storeResources,
      addResource: this.addResoruce,
      deleteResource: this.deleteResource
    };
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storeResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The oficial Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResoruce(title, description, url) {
      const newResource = {
        id: `${new Date().toISOString()}${title}`,
        title: title,
        description: description,
        link: url,
      };
      this.storeResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(id){
      this.storeResources = this.storeResources.filter( res => res.id !== id);
    }
  },
};
</script>
