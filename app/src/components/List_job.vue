<template>
  <div>
    <!-- Form -->
    <div class="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit" class="ml-4 flex items-center space-x-4 justify-center">
        <div class="flex-4 w-60">
          <label for="count" class="block text-gray-700 text-sm font-bold mb-1">Count:</label>
          <input v-model.number="form.count" type="number" id="count" min="1" class="border rounded-lg p-2 w-full" />
        </div>
        <div class="flex-4 w-60">
          <label for="offset" class="block text-gray-700 text-sm font-bold mb-1">Offset:</label>
          <input v-model.number="form.offset" type="number" id="offset" min="0" class="border rounded-lg p-2 w-full" />
        </div>
        <div class="flex-4 w-60">
          <label for="shouldError" class="block text-gray-700 text-sm font-bold mb-1">Should Error:</label>
          <select v-model="form.shouldError" id="shouldError" class="border rounded-lg p-2 w-full">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <button type="submit"
          class="mt-5 flex-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Fetch
          Data</button>
      </form>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="text-red-500">{{ errorMessage }}</div>

    <!-- Table -->
    <div v-else class="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <table v-if="items.length" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <!-- Conditionally render table headers -->
            <th class="px-6 py-3 fixed-width">ID</th>
            <th class="px-6 py-3 fixed-width">Full Name</th>
            <th v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width">User Name</th>
            <th v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width">Email</th>
            <th v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width">Job</th>
            <th v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width">Joined Date</th>
            <th class="px-6 py-3 fixed-width">Action</th>
          </tr>
        </thead>
        <tbody class="overflow-y-auto">

          <tr v-for="(item, index) in items" :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              {{ item.id }}</td>
            <td v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              <div class="flex items-center">
                <img :src="item.iconUrl" alt="User Icon" width="50" class="rounded-full mr-4">
                <span>{{ item.firstName }} {{ item.lastName }}</span>
              </div>
            </td>
            <td v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              {{ item.username }}</td>
            <td v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              {{ item.email }}</td>
            <td v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              {{ item.job }}</td>
            <td v-if="form.shouldError === 'false'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              {{ item.joinedDate }}</td>

            <td v-if="form.shouldError === 'true'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              {{ item.id }}</td>
            <td v-if="form.shouldError === 'true'" class="px-6 py-3 fixed-width text-gray-900 dark:text-white">
              <div class="flex items-center">
                <img :src="item.iconUrl" alt="User Icon" width="50" class="rounded-full mr-4">
                <span>{{ item.firstName }} {{ item.lastName }}</span>
              </div>
            </td>
            <td class="px-6 py-3 fixed-width text-right">
              <button @click="openModal(item)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Show Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="!items.length" class="text-gray-500">No items to display</p>
    </div>

    <!-- Modal -->
    <div v-if="modalVisible" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg w-[600px] relative mx-4 md:mx-0">
        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Modal Content -->
        <div class="flex flex-col md:flex-row">
          <div class="flex items-center p-4">
            <img class="object-cover w-16 h-18 rounded-full mr-4 justify-center min-w-max" :src="currentItem.iconUrl"
              alt="User Icon">
            <div class="flex flex-col">
              <p class="text-gray-700 dark:text-gray-400">
                <strong>Full name:</strong> {{ currentItem.firstName }} {{ currentItem.lastName }}<br>
                <strong>ID:</strong> {{ currentItem.id }}<br>
                <strong>Username:</strong> {{ currentItem.username }}<br>
                <strong>Job:</strong> {{ currentItem.job }}<br>
                <strong>Email:</strong> {{ currentItem.email }}<br>
                <strong>Joined Date:</strong> {{ currentItem.joinedDate }}<br>
                <strong>Slogan:</strong> {{ currentItem.slogan }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        items: [],
        error: false,
        errorMessage: '',
        modalVisible: false,
        currentItem: null,
        form: {
          count: 100,
          offset: 1,
          shouldError: 'false'
        }
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const {
          count,
          offset,
          shouldError
        } = this.form;

        const apiUrl = `/fetch?count=${count}&offset=${offset}&error=${shouldError}`;

        try {
          const response = await axios.get(apiUrl);
          if (response.data.code === 0) {
            // Add 'showDetails' property to each item
            this.items = response.data.data.map(item => ({
              ...item,
              showDetails: false
            }));
          } else {
            this.error = true;
            this.errorMessage = 'Failed to fetch data';
          }
        } catch (err) {
          this.error = true;
          this.errorMessage = err.message;
        }
      },
      handleSubmit() {
        this.error = false;
        this.fetchData();
      },
      openModal(item) {
        this.currentItem = item;
        this.modalVisible = true;
      },
      closeModal() {
        this.modalVisible = false;
        this.currentItem = null;
      },
    },
  };
</script>