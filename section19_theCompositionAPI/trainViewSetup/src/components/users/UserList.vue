<template>
    <base-container>
        <h2>Active Users</h2>
        <base-search
            @search="updateSearch"
            :search-term="enteredSearchTerm"
        ></base-search>
        <div>
            <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
                Sort Ascending
            </button>
            <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
                Sort Descending
            </button>
        </div>
        <ul>
            <user-item
                v-for="user in displayedUsers"
                :key="user.id"
                :user-name="user.fullName"
                :id="user.id"
                @list-projects="$emit('list-projects', $event)"
            ></user-item> 
        </ul>
    </base-container>
</template>

<script>
import UserItem from "./UserItem.vue";
import { computed, watch, ref } from "vue";

export default {
    components: {
        UserItem,
    },
    props: ["users"],
    setup(props) {
        const enteredSearchTerm = ref("");
        const activeSearchTerm = ref("");
        const sorting = ref(null);

        const availableUsers = computed( () => {
          let users = [];
          if (activeSearchTerm.value) {
            users = props.users.filter((usr) =>
            usr.fullName.includes(activeSearchTerm.value)
          );
        } else if (props.users) {
          users = props.users;
        }
        return users;
      });
      
      const displayedUsers = computed( ()=>{
        if (!sorting.value) return availableUsers.value;
        
        return [...availableUsers.value].sort((u1, u2) => {
        const order = sorting.value === 'asc' ? 1 : -1;
        return u1.fullName > u2.fullName ? order : -order;
        });
       })
        
        function updateSearch(val) {
          enteredSearchTerm.value = val;
        }
        
        function sort(mode) {
          sorting.value = mode;
        }
        
        watch( enteredSearchTerm, (newVal)=>{
          setTimeout(() => {
          if (newVal === enteredSearchTerm.value) {
            activeSearchTerm.value = newVal;
          }
        }, 300);
      });

        return {
            enteredSearchTerm,
            activeSearchTerm,
            sorting,
            updateSearch,
            displayedUsers,
            sort
        };
    }}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
