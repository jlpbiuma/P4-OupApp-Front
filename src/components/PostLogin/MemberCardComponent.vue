<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <div>
        {{ member.name }}
      </div>
    </v-row>
    <v-row justify="center">
      <RouterLink class="text-decoration-none" to="/user/members/info">
        <v-btn class="ma-2" outlined color="teal darken-4" width="200" @click="getSeniorID">Información</v-btn>
      </RouterLink>
    </v-row>
    <v-row justify="center font-weight-bold">
      <RouterLink class="text-decoration-none" to="/user/members/contacts">
        <v-btn class="ma-2" outlined color="teal darken-4" width="200" @click="getSeniorID">Ver contactos</v-btn>
      </RouterLink>
    </v-row>
    <v-row justify="center font-weight-bold">
      <RouterLink class="text-decoration-none" to="/user/members/newcontact">
        <v-btn class="ma-2" outlined color="teal darken-4" width="200" @click="getSeniorID">Añadir contactos</v-btn>
      </RouterLink>
    </v-row>
    <v-row justify="center font-weight-bold">
      <RouterLink class="text-decoration-none" to="/user/members/addphoto">
        <v-btn class="ma-2" outlined color="teal darken-4" width="200" @click="getSeniorID">Añadir foto</v-btn>
      </RouterLink>
    </v-row>
    <v-row justify="center font-weight-bold">
      <RouterLink class="text-decoration-none" to="/user/members/reminders">
        <v-btn class="ma-2" outlined color="teal darken-4" width="200" @click="getSeniorID">Recordatorios</v-btn>
      </RouterLink>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      authStore: useAuthStore()
    }
  },
  name: 'MemberCardComponent',
  props: ['member'],
  methods: {
    getSeniorID () {
      this.authStore.seniorID = this.member._id
    }
  }
}
</script>

<style scoped>

</style>
