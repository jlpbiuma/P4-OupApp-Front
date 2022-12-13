<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
  <v-container>
    <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
    <v-text-field
      v-model="newContact.apodo"
      label="Apodo"
      required
    ></v-text-field>
    <v-text-field
      v-model="newContact.phone"
      label="Teléfono"
      required
    ></v-text-field>
    <v-btn outlined rounded text @click="addContact"> SUBMIT </v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      newContact: {
        apodo: '',
        phone: '',
        image: '',
        file: null
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async addContact () {
      const sendContact = this.newContact
      sendContact.id_c = this.authStore.id
      sendContact.id_s = this.authStore.seniorID
      const response = await API.addNewContact(this.authStore.token, this.file, sendContact, this.authStore.seniorID)
      this.$router.push('/user')
      console.log(response)
    }
  }
}
</script>

<style></style>
