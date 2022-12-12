<script setup>
import NavBar from './components/PreLogin/NavBar.vue'
import FooterBar from './components/PreLogin/FooterBar.vue'
import { useAuthStore } from './stores/authStore'
</script>
<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
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
