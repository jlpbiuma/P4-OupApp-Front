<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
  <v-container>
    <v-row class="justify-center mt-3">
      <div v-if="showError">
        <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
          <div v-for="(error, index) in errorMessages" :key="index">
            <p>{{ error }}</p>
          </div>
        </v-alert>
      </div>
    </v-row>
    <v-row>
      <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
    </v-row>
    <v-row>
      <v-text-field v-model="newContact.apodo" label="Apodo" required></v-text-field>
    </v-row>
    <v-row>
      <v-text-field v-model="newContact.phone" label="Teléfono" required></v-text-field>
    </v-row>
    <v-row class="justify-center">
      <v-btn  medium color="teal lighten-3" class="white--text font-weight-bold mt-3"
                width="auto"
                elevation="1" @click="addContact"> SUBMIT </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      newContact: {
        apodo: '',
        phone: '',
        image: ''
      },
      file: null,
      errorMessages: [],
      showError: false,
      authStore: useAuthStore()
    }
  },
  methods: {
    validate () {
      const array = []
      this.newContact.password = this.password
      if (!this.file) {
        array.push('Introduzca una foto')
      }
      if (!this.newContact.apodo) {
        array.push('Introduzca un apodo')
      }
      if (!this.newContact.phone) {
        array.push('Introduzca un teléfono')
      }
      if (array.length > 0) {
        this.errorMessages = array
        this.showError = true
      } else {
        this.addContact()
      }
    },
    async addContact () {
      const sendContact = this.newContact
      sendContact.id_c = this.authStore.id
      sendContact.id_s = this.authStore.seniorID
      await API.addNewContact(this.authStore.token, this.file, sendContact, this.authStore.seniorID)
      this.$router.push('/user/members')
    }
  }
}
</script>

<style>

</style>
