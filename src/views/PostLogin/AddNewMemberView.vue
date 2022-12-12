<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>
<template>
  <v-container>
    <v-row justify="center font-weight-bold mt-5">
      <p>Crear nuevo familiar</p>
    </v-row>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" lazy-validation class="justify:center">
        <v-text-field v-model="name" label="Nombre" required></v-text-field>
        <v-text-field v-model="apellidos" label="Apellidos" required></v-text-field>
        <v-text-field v-model="dni" :rules="dniRules" label="DNI" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label='E-mail' required></v-text-field>
        <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'" name="password" v-model="password" label='Contraseña'
          hint='Al menos 7 carácteres' class='input-group--focused' @click:append="show2 = !show2"></v-text-field>
        <v-text-field v-model="phone" :rules="telephoneRules" label="Teléfono" required></v-text-field>
      </v-form>
    </v-row>
    <v-row justify="center">
      <v-btn color="teal lighten-3 white--text" class="mr-4" @click="postFamilyMemberByClientID">Añadir nuevo familiar</v-btn>
    </v-row>
  </v-container>
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
      show2: true,
      show3: false,
      show4: false,
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
  methods: {
    async postFamilyMemberByClientID () {
      const signupObject = {
        rol: 'senior',
        name: this.name,
        apellidos: this.apellidos,
        dni: this.dni,
        email: this.email,
        password: this.password,
        phone: this.phone
      }
      this.newUser = signupObject
      this.newUser.id_c = this.authStore.id
      console.log(this.newUser)
      const response = await API.postFamilyMemberByClientID(this.authStore.token, this.newUser)
      console.log(response)
      if (response.error) {
        alert('Error creating account')
      } else {
        this.$router.push('/user/members')
      }
    }
  }
}
</script>

<style scoped>

</style>
