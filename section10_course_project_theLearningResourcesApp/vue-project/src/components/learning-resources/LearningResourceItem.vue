<template>
<li>
    <base-card>
        <template v-slot:default>
            <div>
                <header>
                    <h3>{{ title }}</h3>
                    <base-button mode="flat" @click="deleteResource(resId)">Delete</base-button>
                </header>
            </div>
            <p>{{ description }}</p>
            <nav>
                <a :href="link" target="_blank">View Resource</a>
            </nav>
        </template>
    </base-card>
</li>
</template>

<script>
export default {
    emits: {
      'delete-resource' : function(){return true}
    },
    props: {
        resId: {
          type: String
        },
        title : {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        link: {
            type: String
        }
    },
    components: {
    },
    methods: {
      deleteResource(id){
        this.$emit('delete-resource')
      }
    }

}
</script>



<style scoped>

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

</style>
