<script setup>
import NavBar from './components/PreLogin/NavBar.vue'
import FooterBar from './components/PreLogin/FooterBar.vue'
import { useAuthStore } from './stores/authStore'
</script>
<template>
  <v-app class="app">
    <NavBar></NavBar>
    <v-main class="mainview">
      <router-view/>
    </v-main>
    <FooterBar></FooterBar>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    authStore: useAuthStore()
  })
}
</script>
<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);
.app{
  font-family:'Open Sans', sans-serif;
  font-style: normal;
  color:rgb(34, 34, 34);
  width:100vw;
}
.mainview{
   background-color: rgb(255, 254, 251);
}
</style>
