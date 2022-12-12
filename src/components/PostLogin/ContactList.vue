<script setup>
import API from '../../services/api.js'
import ContactCard from './ContactCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
  <div>
    <div v-for="(contact, index) in contacts" :key="index">
      <ContactCard :contact="contact"></ContactCard>
    </div>
  </div>
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
      authStore: useAuthStore()
    }
  },
  async created () {
    const token = this.authStore.token
    const seniorID = this.authStore.seniorID
    this.contacts = await API.getAllContactsBySeniorID(token, seniorID)
  }
}
</script>

<style></style>
