<template>
  <div class="min-h-screen bg-gray-100">
  <div class="flex pt-20 pb-10 items-center justify-center   pt-[80%]">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md">
      <div class='bg-gray-200 rounded-t-lg z-10 p-0'>
        <h2 class="w-full mb-1 text-2xl font-bold text-start p-2">Register</h2>
      </div>
      <form class='p-6' @submit.prevent="handleRegister">

        <div class="flex my-2 ">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-white-200 border border-e-0  rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input type="text" id="name" v-model="name"
            class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Username" required>
        </div>


        <div class="flex">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-white-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </span>
          <input type="text" id="email" v-model="email"
            class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email" required>
        </div>

        <div class="flex my-2 ">
          <span
            class="inline-flex items-center px-2 text-sm text-gray-900 bg-white-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000"
              fill="none">
              <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path
                d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
                stroke="currentColor" stroke-width="1.5" />
              <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <div class="relative justify-end flex w-full ">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
              class=" rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter password" required>
            <button :src="showPassword ? view : view_off" @click="togglePasswordVisibility('password')" type="button"
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
              <img :src="showPassword ? view : view_off" alt="Toggle password visibility" />
            </button>
          </div>
        </div>


        <div class="flex my-2 ">
          <span
            class="inline-flex items-center px-2 text-sm text-gray-900 bg-white-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000"
              fill="none">
              <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path
                d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
                stroke="currentColor" stroke-width="1.5" />
              <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <div class="relative justify-end flex w-full ">
            <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword"
              class=" rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ConfirmPassword" required>
            <button :src="showConfirmPassword  ? view : view_off" @click="togglePasswordVisibility('confirm')"
              type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
              <svg class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path class="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path class="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>





        <div class='w-full flex justify-end mt-4'>
          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        </div>

        <p v-if="message">{{ message }}</p>
      </form>
    </div>
    
  </div>
  <div class=" bg-gray-100 flex flex-col items-center">
    <img class="w-30 h-20" :src="logo" alt="Footer Logo" />
    <p>&copy; Copyright @2020 Insight Technology Inc.</p>
    </div>
</div>

</template>

<script>
  import axios from 'axios';
  import mail_icon from '../assets/mail.svg';
  import view_off from '../assets/view_off.svg';
  import view from '../assets/view_open.svg';
  import logo from '../assets/footer_logo.png';

  export default {
    name: 'Register',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: '', // To show success or error message
        showPassword: false, // Toggle for password visibility
        showConfirmPassword: false, // Toggle for confirm password visibility
        mail_icon,
        view,
        view_off,
        logo
      };
    },
    methods: {
      togglePasswordVisibility(field) {
        if (field === 'password') {
          this.showPassword = !this.showPassword;
        } else if (field === 'confirm') {
          this.showConfirmPassword = !this.showConfirmPassword;
        }
      },
      async handleRegister() {
      
        if (!this.name || !this.email || !this.password || !this.confirmPassword) {
          this.message = 'All fields are required.';
          return;

        }

        if (this.password !== this.confirmPassword) {
          this.message = 'Passwords do not match.';
          return;
        }

        try {
          const response = await axios.post('http://localhost:3000/register', {
            name: this.name,
            email: this.email,
            password: this.password
          });




          // Check the status code or response message
          if (response.status === 201) {
            this.message = response.data;;
            setTimeout(() => {
              this.$emit('register-success');
              this.$router.push('/login');
            }, 2000);
            // Show success message
          } else {
            this.message = 'Failed to register. Please try again.';
          }

          // Clear the form fields
          this.name = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        } catch (error) {
          console.error('Error during registration:', error);
          this.message = 'Failed to register. Please try again.';
        }
      }
    }
  };
</script>



<style scoped>
</style>