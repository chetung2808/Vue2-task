<template>
  <div>
    <header-menu :isLoggedIn="isLoggedIn" :name="name" @logout="handleLogout" />
    <router-view @login-success="handleLoginSuccess" />

  </div>
</template>

<script>
import HeaderMenu from './components/Header.vue';

export default {
  components: {
    HeaderMenu,
   
  },
  data() {
    return {
      isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
      name: localStorage.getItem('name') || '',
    };
  },
  methods: {
    handleLoginSuccess(name) {
      this.isLoggedIn = true;
      this.name = name;
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('name', name);
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.name = '';
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('name');
      this.$router.push('/login');
    },
  },
};
</script>
