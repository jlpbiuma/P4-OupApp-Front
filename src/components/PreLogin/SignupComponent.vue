<script setup>
import api from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <div>

    <v-row class="justify-center font-weight-bold mt-5">
      <p>Sign Up</p>
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
            <v-form ref="form" lazy-validation class="justify-center">
        <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
        <v-text-field v-model="name" label="Nombre" required></v-text-field>
        <v-text-field
          v-model="apellidos"
          label="Apellidos"
          required
        ></v-text-field>
        <v-text-field
          v-model="dni"
          :rule="dniRules"
          label="DNI"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rule="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rule="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="password"
          v-model="password"
          label="Contraseña"
          hint="Al menos 7 carácteres"
          class="input-group--focused"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rule="telephoneRules"
          label="Teléfono"
          required
        ></v-text-field>
      </v-form>
    </v-row>
    <v-row class="justify-center">
      <v-btn
        color="teal lighten-3 white--text mb-10"
        class="mr-4"
        @click="signup"
        >Crear Cuenta</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'El E-mail debe ser válido'
      ],
      show1: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => "The email and password you entered don't match"
      },
      telephoneRules: {
        min: (v) => v.length >= 9 || 'Introduce un número válido'
      },
      dniRules: {
        min: (v) => v.length >= 9 || 'Introduce un dni válido'
      },
      email: '',
      password: '',
      phone: '',
      name: '',
      dni: '',
      file: null,
      apellidos: '',
      errorMessages: [],
      showError: false,
      newUser: {
        name: '',
        apellidos: '',
        dni: '',
        email: '',
        password: '',
        phone: ''
      },
      authStore: useAuthStore()
    }
  },
  name: 'SignupComponent',
  methods: {
    validate () {
      const array = []
      if (!this.file) {
        array.push('Introduzca una foto')
      }
      if (!this.name) {
        array.push('Introduzca una nombre')
      }
      if (!this.apellidos) {
        array.push('Introduzca un apellidos')
      }
      if (!this.dni) {
        array.push('Introduzca un dni')
      }
      if (!this.email) {
        array.push('Introduzca un email')
      }
      if (!this.password) {
        array.push('Introduzca una contraseña')
      }
      if (!this.phone) {
        array.push('Introduzca un telefono')
      }
      if (array.length > 0) {
        this.errorMessages = array
        this.showError = true
      } else {
        this.signup()
      }
    },
    async signup () {
      const signupObject = {
        rol: 'client',
        name: this.name,
        apellidos: this.apellidos,
        dni: this.dni,
        email: this.email,
        password: this.password,
        phone: this.phone
      }
      this.newUser = signupObject
      let response
      try {
        response = await api.signup(this.newUser, this.file)
      } catch {
        this.errorMessages[0] = 'El email ya existe'
      }
      if (response.error) {
        alert('Error creating account')
      } else {
        this.authStore.login(response)
        this.$router.push('/user')
      }
    }
  }
}
</script>
