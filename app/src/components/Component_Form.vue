<template>
    <div>
      <form @submit.prevent="addProject">





        <div>
          <label for="title">Title:</label>
          <input v-model="title" id="title" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="description" id="description" required></textarea>
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
      };
    },
    methods: {
      addProject() {
        this.$emit('add-project', {
          title: this.title,
          description: this.description,
        });
        this.title = '';
        this.description = '';
      },
    },
  };
  </script>