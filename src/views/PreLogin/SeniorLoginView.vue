<script setup>
import api from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-main>
        <v-container>
            <v-row justify="center font-weight-bold">
                <p>Log SENIOR</p>
            </v-row>
            <v-row justify="center">
                <v-form ref="form" v-model="valid" lazy-validation class="justify:center">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field v-model="password" label="Password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'" :rules="passwordRules" name="Password"
                        hint="At least 8 characters" counter required @click:append="show2 = !show2"></v-text-field>
                </v-form>
            </v-row>
            <v-row justify="center">
                <v-btn :disabled="!valid" color="teal lighten-3 white--text" class="mr-4" @click="login">Iniciar
                    sesión</v-btn>
            </v-row>
            <v-row justify="center mt-16 ml-1 ">
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
      authStore: useAuthStore(),
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 7 || 'Min 7 carácteres',
        emailMatch: () => "The email and password you entered don't match"
      }
    }
  },
  methods: {
    async login () {
      const loginObject = { email: this.email, password: this.password }
      const response = await api.login(loginObject)
      this.authStore.login(response)
      this.$router.push('/senior/')
    }
  }
}

</script>

<style scoped>

</style>
