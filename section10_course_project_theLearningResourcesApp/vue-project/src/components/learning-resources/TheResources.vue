<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
        <component  component :is="selectedTab" :resources="resources"></component>
    </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    inject: ['resources'],
    data(){
        return {
            selectedTab: 'stored-resources'
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
            console.log( this.storeResources)
        }
    }
}
</script>