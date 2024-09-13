<template>
  <a href="#"
    class=" w-60 h-30  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col"
    @click.stop.prevent="handleCardClick">
    <div class="p-4 flex items-start bg-gray-100 w-full">
      <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white flex-grow h-full">
        {{ title }}
      </h5>
      <button @click.stop.prevent="confirmCopy" class="text-blue-500 hover:text-blue-700 ml-2">
        <!-- Copy Icon SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="blue">
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" />
          </g>
        </svg>
      </button>
    </div>



    <!-- Description Section (4 parts) -->
    <p class="p-3 font-normal text-gray-700 dark:text-gray-400 flex-grow mt-2">
      {{ description }}
    </p>


    <!-- Delete Button at the Bottom -->
    <div class="flex justify-end mt-2 p-3">
      <button @click.stop.prevent="confirmDelete" class="text-red-500 hover:text-red-700">
        <!-- Delete Icon SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64" fill="red">
          <path
            d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z">
          </path>
        </svg>
      </button>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 class="text-lg font-semibold mb-4">
          {{ actionType === 'delete' ? 'Confirm Deletion' : 'Confirm Copy' }}
        </h3>
        <p class="mb-4">
          Project "{{ title }}" is going to be {{ actionType }}. Are you sure?
        </p>
        <div class="flex justify-end space-x-4">
          <button @click="handleCancelAction"
            class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">No</button>
          <button @click="handleConfirmAction"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Yes</button>
        </div>
      </div>
    </div>
  </a>
</template>


<script>
  export default {
    props: {
      title: String,
      description: String,
      index: Number
    },
    data() {
      return {
        showConfirmModal: false,
        actionType: null
      };
    },
    methods: {
      handleCardClick() {
        // Handle card click event if needed
      },
      confirmCopy() {
        this.actionType = 'copy';
        this.showConfirmModal = true;
      },
      confirmDelete() {
        this.actionType = 'delete';
        this.showConfirmModal = true;
      },
      handleConfirmAction() {
        if (this.actionType === 'copy') {
          this.copyProject();
        } else if (this.actionType === 'delete') {
          this.deleteProject();
        }
        this.showConfirmModal = false;
      },
      handleCancelAction() {
        this.showConfirmModal = false;
      },
      copyProject() {
        this.$emit('copy-project', this.index);
      },
      deleteProject() {
        this.$emit('delete-project', this.index);
      }
    }
  }
</script>

<style scoped>
  /* Add any additional styling if necessary */
</style>