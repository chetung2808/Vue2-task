<template>
  
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-6 py-4 justify-between  flex items-center ">
      <div class="container mx-auto .. flex items-center ">
        <img class=" w-20 h-20" src="../assets/header/logo.png"/>
        <p class="mr-64 text-2xl font-bold text-gray-800 flex-shrink-0">
          INSIGHT DATA MASKING</p>
          </div>
        
          <template v-if="isLoggedIn" >
            <nav class="flex justify-center space-x-6 text-lg font-medium flex-shrink-0">
            <!-- Project Link -->
            <router-link
              to="/project"
              class="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Project
            </router-link>
  
            <!-- User Icon with Dropdown -->
            <div class="relative justify-between">
              <img
                :src="userIcon"
                alt="User Icon"
                @click="toggleUserMenu"
                class="w-8 h-8 cursor-pointer rounded-full transition-transform transform hover:scale-105"
              />
              <div v-if="isUserMenuOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <a
                  @click="editProfile"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Edit Profile
                </a>
                <a
                  @click="logout"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </a>
              </div>
            </div>
  
          </nav>
          </template>
  
          <!-- Links for Non-logged-in Users -->
          <template v-else>
            <nav class="flex items-center space-x-6 text-lg font-medium ">
            <router-link
              to="/register"
              class="text-blue-500 hover:text-blue-700 font-semibold border-b-2 border-transparent hover:border-blue-500"
            >
              Register
            </router-link>
            <router-link
              to="/login"
              class="text-blue-500 hover:text-blue-700 font-semibold border-b-2 border-transparent hover:border-blue-500"
            >
              Login
            </router-link>
          </nav>
          </template>
          <!-- Language Icon with Dropdown -->
          <div class="relative ">
              <img
                :src="currentLanguageLogo"
                alt="Language Icon"
                @click="toggleLanguageMenu"
                class="w-8 h-8 cursor-pointer rounded-full transition-transform transform hover:scale-105"
              />
              <div v-if="isLanguageMenuOpen" class="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
                <a
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {{ lang.name }}
                </a>
              </div>
            </div>
        
      </div>
    
    </header>
  </template>
  
  <script>
  import vn_flag from '..\assets\header\vietnamese_flag.png';
  import en_flag from '..\assets\header\english_flag.png'
  export default {
    props: {
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
        userIcon: '../assets/user-icon.png',
        languages: [
          { code: 'en', name: 'English', logo: en_flag },
          { code: 'vn', name: 'Vietnamese', logo: vn_flag }
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
      editProfile() {
       
      },
      logout() {
        this.$emit('logout');
      }
    }
  };
  </script>
  