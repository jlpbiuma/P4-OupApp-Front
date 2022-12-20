<script setup>
import api from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-main>
    <v-container>
      <v-row class="justify-center font-weight-bold">
        <p>Log In</p>
      </v-row>
      <v-row class="justify-center mt-3">
            <div v-if="showError">
                <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
                    <div v-for="(error, index) in errorMessages" :key="index">
                        <p>{{ error }}</p>
                    </div>
                </v-alert>
            </div>
        </v-row>
      <v-row class="justify-center">
        <v-form ref="form"  lazy-validation class="justify-center">
          <v-text-field v-model="email" :rule="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" label="Password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'" :rule="passwordRules" name="Password" hint="At least 8 characters"
            counter required @click:append="show1 = !show1"></v-text-field>
        </v-form>
      </v-row>
      <v-row class="justify-center">
        <v-btn color="teal lighten-3 white--text" class="mr-1" @click="validate">Iniciar sesión</v-btn>
      </v-row>
      <v-row class="justify-center mt-16 ml-1 ">
        <RouterLink to="/signup" class="white--text" style="text-decoration: none"><v-btn
            color="indigo darken-4 white--text" class="mr-4">¿No tienes cuenta?</v-btn></RouterLink>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      show1: false,
      password: '',
      passwordRules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 7 || 'Min 7 characters',
        emailMatch: () => "The email and password you entered don't match"
      },
      authStore: useAuthStore(),
      name: 'LoginComponent',
      errorMessages: [],
      showError: false
    }
  },
  methods: {
    validate () {
            const array = []
            if (!this.email) {
                array.push('Introduzca el correo electrónico')
            }
            if (!this.password) {
                array.push('Introduzca la contraseña')
            }
            if (array.length > 0) {
                this.errorMessages = array
                this.showError = true
            } else {
                this.login()
            }
        },
    async login () {
      const loginObject = { email: this.email, password: this.password }
      let response
      try {
        response = await api.login(loginObject)
      } catch (error) {
        this.errorMessages[0] = 'El correo electrónico y la contraseña que ha introducido no coinciden'
        this.showError = true
        return
      }
      this.authStore.login(response)
      if (this.authStore.rol === 'senior') {
        this.$router.push('/senior/')
      }
      if (this.authStore.rol === 'client') {
        this.$router.push('/user')
      }
    }
  }
}
</script>
