<template>


  <div class="p-4">
    <project-form @add-project="handleAddProject" class="mb-5" />
    <h class="p-5">All Project Lists</h>
    <div class="horizontal-line mt-5" />
    <div class="flex flex-wrap gap-4 mb-5 mt-5">
      <project v-for="(project, index) in projects" :key="project.id || index" :title="project.title"
        :description="project.description" :index="index" @copy-project="handleCopyProject"
        @delete-project="handleDeleteProject" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Project from './Project.vue';
  import ProjectForm from './ProjectForm.vue';

  export default {
    components: {
      Project,
      ProjectForm,
    },
    data() {
      return {
        projects: [], // Array to hold projects
      };
    },
    created() {
      this.loadProjects();
    },
    methods: {
      async loadProjects() {
        try {
          const response = await axios.get('http://localhost:3000/projects');
          this.projects = response.data;
        } catch (error) {
          console.error('Error loading projects:', error);
        }
      },
      async saveProjects() {
        try {
          await axios.post('http://localhost:3000/projects', this.projects);
        } catch (error) {
          console.error('Error saving projects:', error);
        }
      },
      async handleAddProject(newProject) {
        this.projects.push(newProject);
        await this.saveProjects();
      },
      async handleCopyProject(index) {
        const project = this.projects[index];
        this.projects.push({
          title: project.title + ' (Copy)',
          description: project.description,
        });
        await this.saveProjects();
      },
      async handleDeleteProject(index) {
        if (index >= 0 && index < this.projects.length) {
          this.projects.splice(index, 1);
          await this.saveProjects();
        }
      }
    },
  };
</script>

<style>
  .horizontal-line {
    width: 90%;
    border: none;
    border-top: 2px solid black;
    margin: 0 auto;
    margin-top: 5px;
  }
</style>