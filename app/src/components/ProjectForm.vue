<template>
  <div class="mt-10 w-full flex justify-center">
    <form :class="['bg-white shadow-md rounded px-8 pt-1 pb-8 mb-1 w-1/2 transition-all ease-in-out h-auto', maxHeight]"
      @submit.prevent="addProject">
      <div class="col-span-full">
        <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
        <div class="w-full mt-2">
          <div
            class="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input type="text" name="title"
              class="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              @input="updateTitleLength" @click="handleClick('true')" placeholder="Project's name" v-model="title"
              id="title" required>
          </div>
        </div>
        <p class="text-gray-500 text-xs  justify-end text-right"> {{ titleLength }} / 100</p>
        <p v-if="titleLength >= 100" class="text-red-500 text-xs mt-1">Title cannot exceed 100 characters.</p>
      </div>

      <div :class="['transition-all duration-700 mt-2 ease-in-out overflow-hidden', maxHeightDescription]">
        <div class='col-span-full'>
          <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div class="mt-2">
            <textarea v-model="description" id="description" required @input="updateDescriptionLength"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="text-gray-500 text-xs mt-1 text-right ">{{ descriptionLength }} / 500</p>
          <p v-if="descriptionLength >= 500" class="text-red-500 text-xs mt-1">Description cannot exceed 500 characters.
          </p>
        </div>

        <div class="w-full flex justify-end ">
          <a @click="handleClick('false')"
            class="py-2.5 px-5 mr-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Cancel</a>
          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        titleLength: 0,
        descriptionLength: 0,
        isDescription: 'hidden',
        maxHeight: 'max-h-64',
        maxHeightDescription: 'h-0'
      };
    },
    methods: {
      addProject() {
        if (this.titleLength > 100 || this.descriptionLength > 500) {
          return; // Prevent form submission if validation fails
        }
        this.$emit('add-project', {
          title: this.title,
          description: this.description,
        });
        this.title = '';
        this.description = '';
        this.titleLength = 0;
        this.descriptionLength = 0;
      },

      handleClick(flag) {
        if (flag === 'false') {
          this.isDescription = 'hidden';
          this.maxHeightDescription = 'h-0';
        } else {
          this.isDescription = '';
          this.maxHeight = 'max-h-64 h-64';
          this.maxHeightDescription = 'max-h-64 h-64';
        }
      },

      updateTitleLength(event) {
        this.title = event.target.value.slice(0, 100); // Limit input to 100 characters
        this.titleLength = this.title.length;
      },

      updateDescriptionLength(event) {
        this.description = event.target.value.slice(0, 500); // Limit input to 500 characters
        this.descriptionLength = this.description.length;
      },

      handleClickOutside(event) {
        const menuContainer = this.$refs.userMenuContainer;
        if (menuContainer && !menuContainer.contains(event.target)) {
          this.isUserMenuOpen = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }
</script>