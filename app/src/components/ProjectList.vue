<template>

  <div class="project-list">
    <h>All Project Lists</h>
    <hr class="divider" />
    <project-form @add-project="handleAddProject" />
    <div>
      <project v-for="(project, index) in projects" :key="project.id || index" :title="project.title"
        :description="project.description" :index="index" @copy-project="handleCopyProject"
        @delete-project="handleDeleteProject" />
    </div>
  </div>
</template>

<script>
  import Project from './Project.vue';
  import ProjectForm from './ProjectForm.vue';

  export default {
    components: {
      name: 'ProjectList',
      Project,
      ProjectForm,
    },
    data() {
      return {
        projects: [], // Array to hold projects
      };
    },
    methods: {
      handleAddProject(newProject) {
        this.projects.push(newProject);
      },
      handleCopyProject(index) {
        const project = this.projects[index];
        this.projects.push({
          title: 'Copy of' + project.title,
          description: project.description,
        });
      },
      handleDeleteProject(index) {
        // Remove project from the array
        this.projects.splice(index, 1);
      }
    },
  };
</script>