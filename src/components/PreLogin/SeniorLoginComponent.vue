<script setup>
import api from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-main>
    <v-container>
      <v-row class="justify-center font-weight-bold">
        <p>Log SENIOR</p>
      </v-row>
      <v-row class="justify-center">
              <div v-if="showError">
                <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
                  <div v-for="(error, index) in errorMessages" :key="index">
                    <p>{{ error }}</p>
                  </div>
                </v-alert>
              </div>
            </v-row>
      <v-row class="justify-center">
        <v-form ref="form" lazy-validation class="justify:center">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="Password"
            hint="At least 8 characters"
            counter
            required
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-form>
      </v-row>
      <v-row class="justify-center">
        <v-btn color="teal lighten-3 white--text" class="mr-4" @click="validate"
          >Iniciar sesión</v-btn
        >
      </v-row>
      <v-row class="justify-center mt-16 ml-1">
        <RouterLink
          to="/signup"
          class="white--text"
          style="text-decoration: none"
          ><v-btn color="indigo darken-4 white--text" class="mr-4"
            >¿No tienes cuenta?</v-btn
          ></RouterLink
        >
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
      authStore: useAuthStore(),
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      errorMessages: [],
      showError: false,
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 7 || 'Min 7 carácteres',
        emailMatch: () => "The email and password you entered don't match"
      }
    }
  },
  name: 'SeniorLoginComponent',
  methods: {
    validate () {
      const array = []
      if (!this.email) {
        array.push('Introduzca un email')
      }
      if (!this.password) {
        array.push('Introduzca una contraseña')
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
      if (this.authStore.rol === 'client') {
        this.$router.push('/user')
      } else {
        this.$router.push('/senior/')
      }
    }
  }
}
</script>
