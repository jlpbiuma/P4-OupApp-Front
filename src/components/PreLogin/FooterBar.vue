<script setup>
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-footer v-if="!authStore.actualPage.includes('/senior/')" app bottom color="teal darken-4" padless >
    <v-row justify="center" no-gutters>
      <RouterLink to="/" style="text-decoration: none" class="black--text">
        <v-btn color="white"  text class="mt-0">HOME</v-btn></RouterLink>
        <RouterLink to="/blog" style="text-decoration: none" class="black--text">
        <v-btn color="white"  text class="mt-0">BLOG</v-btn></RouterLink>
        <RouterLink to="/contact" style="text-decoration: none" class="black--text">
        <v-btn color="white"  text  class="mt-0">CONTACT</v-btn></RouterLink>
        <RouterLink to="/about" style="text-decoration: none" class="black--text">
        <v-btn color="white"  text  class="mt-0">ABOUT US</v-btn></RouterLink>
      <v-col class="app bottom teal darken-4 mb-3 mt-1 text-center white--text text-caption" cols="12">
        {{ new Date().getFullYear() }} — <strong><b>Oup</b>App</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      authStore: useAuthStore(),
      links: ['Home', 'About Us', 'Contact Us', 'Blog']
    }
  }
}
</script>

<style scoped></style>
