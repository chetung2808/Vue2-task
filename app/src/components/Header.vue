<template>
  <header class='flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center gap-4 w-full'>
      <a href="javascript:void(0)"><img src="../assets/header/logo.png" alt="logo" class='w-12' /></a>
      <P class="text-2xl font-bold text-gray-800">INSIGHT DATA MASKING</P>
      <div v-if="isLoggedIn" id="collapseMenu"
        class='lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>
        <div
          class="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
          <div class='lg:flex lg:gap-x-8 max-lg:space-y-2'>
            <router-link to="/Projects"
              class="text-gray-700 font-bold text-[15px] border-b-2 border-transparent hover:border-blue-500"
              active-class="text-blue-700 font-bold text-[15px] border-b-2 border-transparent border-blue-500">
              Projects
            </router-link>
            <router-link to="/Template"
              class="text-gray-700 font-bold text-[15px] border-b-2 border-transparent hover:border-blue-500"
              active-class="text-blue-700 font-bold text-[15px] border-b-2 border-transparent border-blue-500">
              Template
            </router-link>
            <router-link to="/Jobs"
              class="text-gray-700 font-bold text-[15px] border-b-2 border-transparent hover:border-blue-500"
              active-class="text-blue-700 font-bold text-[15px] border-b-2 border-transparent border-blue-500">
              Job
            </router-link>
          </div>
        </div>
      </div>
      <div class="border-l border-[#333] h-6 max-lg:hidden"></div>
      <div class='flex items-center ml-auto space-x-6'>
        <router-link v-if="!isLoggedIn" to="/login"
          class="text-gray-700 font-bold text-[15px] border-b-2 border-transparent hover:border-blue-500"
          active-class="text-blue-700 font-bold text-[15px] border-b-2 border-transparent border-blue-500">
          Login
        </router-link>
        <router-link v-if="!isLoggedIn" to="/register"
          class="text-gray-700 font-bold text-[15px] border-b-2 border-transparent hover:border-blue-500"
          active-class="text-blue-700 font-bold text-[15px] border-b-2 border-transparent border-blue-500">
          Register
        </router-link>
        <div v-if="isLoggedIn" class='flex items-center space-x-6 relative justify-between'>
          <div class="flex">
            <p @click="toggleUserMenu">{{ name }}</p>
            <div class="relative">

              <!-- Dropdown Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="ml-2 w-6 h-6 cursor-pointer"
                @click="toggleUserMenu" viewBox="0 0 512 512">
                <path d="M256 294.1L119.5 157.7 89.3 188l166.7 166.6 166.7-166.6-30.2-30.3z" />
              </svg>
              <div v-if="isUserMenuOpen"
                class="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
                <a @click="editProfile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Edit
                  Profile</a>
                <a @click="logout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</a>
              </div>
            </div>
          </div>
          <div class="relative">
            <img :src="currentLanguageLogo" alt="Language Icon" @click="toggleLanguageMenu"
              class="w-12 h-8 cursor-pointer transition-transform transform hover:scale-105" />
            <div v-if="isLanguageMenuOpen" class="absolute right-0 mt-2 w-32 bg-white border  rounded-md shadow-lg">
              <a v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">{{lang.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import vn_flag from '../assets/header/vietnamese_flag.png';
  import en_flag from '../assets/header/english_flag.png';
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      isLoggedIn: {
        type: Boolean,
        required: true
      }
    },
    data() {

      return {
        isUserMenuOpen: false,
        isLanguageMenuOpen: false,
        currentLanguage: 'en',
        languages: [{
            code: 'en',
            name: 'English',
            logo: en_flag,
          },
          {
            code: 'vn',
            name: 'Vietnamese',
            logo: vn_flag,
          }
        ]
      };
    },
    computed: {
      currentLanguageLogo() {
        const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
        return currentLang ? currentLang.logo : en_flag;
      }
    },
    methods: {
      toggleLanguageMenu() {
        this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
      },
      changeLanguage(code) {
        this.currentLanguage = code;
        this.isLanguageMenuOpen = false;
      },
      toggleUserMenu() {
        this.isUserMenuOpen = !this.isUserMenuOpen;
      },
      editProfile() {},
      logout() {
        this.$emit('logout');
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
  };
</script>