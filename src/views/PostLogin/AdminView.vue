<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-main>
    <v-col align="center">
      <v-row justify="center">
        <RouterLink to="/user/profile" style="text-decoration: none"
          ><v-btn class="ma-8 mt-5 mb-1" color="teal darken-3" elevation="1" fab outlined tile x-large
            ><v-icon>mdi-account</v-icon></v-btn
          ><p justify="text-center" class="teal--text">Perfil</p></RouterLink
        >
        <RouterLink to="/user/tools" style="text-decoration: none"
          ><v-btn class="ma-8 mt-5 mb-1" color="teal darken-3" elevation="1" fab outlined tile x-large
            ><v-icon>mdi-cog-outline</v-icon></v-btn
          ><p justify="text-center" class="teal--text">Opciones</p></RouterLink
        >
      </v-row>
      <v-row justify="center">
        <RouterLink to="/user/members" style="text-decoration: none"
          ><v-btn class="ma-8 mt-5 mb-1" color="teal darken-3" elevation="1" fab outlined tile x-large
            ><v-icon>mdi-account-group</v-icon></v-btn
          ><p justify="text-center" class="teal--text">Miembros</p></RouterLink>
        <RouterLink to="/user/activity" style="text-decoration: none"
          ><v-btn class="ma-8 mt-5 mb-1" color="teal darken-3" elevation="1" fab outlined tile x-large
            ><v-icon>mdi-clipboard-text-clock</v-icon></v-btn
          ><p justify="text-center" class="teal--text">Actividad</p></RouterLink>
      </v-row>
      <v-row justify="center">
        <RouterLink to="/user/plan" style="text-decoration: none"
          ><v-btn class="ma-8 mt-5 mb-1" color="teal darken-3" elevation="1" fab outlined tile x-large
            ><v-icon>mdi-account-star</v-icon></v-btn
          ><p justify="text-center" class="teal--text">Mi Plan</p></RouterLink>
      </v-row>
      <v-row justify="center mt-5">
      <v-btn color="error" @click="Logout"> Logout </v-btn>
      </v-row>
    </v-col>
</v-main>
</template>

<script>
export default {
  data () {
    return {
      authStore: useAuthStore()
    }
  },
  methods: {
    Logout () {
      this.authStore.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.v-btn {
  border-radius: 10px !important;
}
</style>
