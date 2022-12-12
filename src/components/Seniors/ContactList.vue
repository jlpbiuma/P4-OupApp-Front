<script setup>
import API from '../../services/api.js'
import ContactCard from './ContactCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
  <v-container width="400" height="844">
    <div v-for="contact in contacts" :key="contact.id">
      <ContactCard :contact="contact"></ContactCard>
    </div>
    <v-row justify="center pt-7">
      <RouterLink to="/senior/emergencies">
        <router-link to="/senior/emergencies/">
          <v-btn x-large color="red darken-2" class="white--text" width="100px" @click="emergencyCall">
            <v-icon left size="25px"> mdi-ambulance </v-icon>112</v-btn>
        </router-link>
      </RouterLink>
    </v-row>
    <v-row class="mx-auto pt-7" justify="start">
      <div>
        <RouterLink to="/senior/">
          <v-btn x-large color="red darken-2" class="white--text">
            <v-icon> mdi-arrow-left-bold-circle </v-icon>
          </v-btn>
        </RouterLink>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactList',
  components: {
    ContactCard
  },
  data () {
    return {
      contacts: [],
      authStore: useAuthStore(),
      API
    }
  },
  async created () {
    const token = this.authStore.token
    const seniorID = this.authStore.id
    this.contacts = await API.getAllContactsBySeniorID(token, seniorID)
  },
  methods: {
    async emergencyCall () {
      const activityObject = {
        actividad: 'Llamada de emergencia',
        date: new Date(),
        id_s: this.authStore.id
      }
      await API.postActivityBySeniorID(this.authStore.token, activityObject, this.authStore.id)
    }
  }
}
</script>

<style>

</style>
