<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>
<template>
  <v-main>
    <v-row class="justify-center font-weight-bold">
      <p>Crear nuevo familiar</p>
    </v-row>
    <div v-if="showError">
        <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
          <div v-for="(error, index) in errorMessages" :key="index">
            <p>{{ error }}</p>
          </div>
        </v-alert>
      </div>
    <v-row class="justify-center">
      <v-form ref="form" v-model="valid" lazy-validation class="justify-center">
        <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
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
    <v-row class="justify-center">
      <v-btn color="teal lighten-3 white--text" class="ma-5" @click="validate">Añadir nuevo
        familiar</v-btn>
    </v-row>
  </v-main>
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
      errorMessages: [],
      showError: false,
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
        this.postFamilyMemberByClientID()
      }
    },
    async postFamilyMemberByClientID () {
      const signupObject = {
        rol: 'senior',
        name: this.name,
        apellidos: this.apellidos,
        dni: this.dni,
        email: this.email,
        password: this.password,
        phone: this.phone,
        file: null
      }
      this.newUser = signupObject
      this.newUser.id_c = this.authStore.id
      const response = await API.postFamilyMemberByClientID(this.authStore.token, this.file, this.newUser)
      if (response.error) {
        alert('Error creating account')
      } else {
        const clientObject = await API.getUserByIDNoPhoto(this.authStore.token, this.authStore.id)
        const contactObject = this.fromClientToContact(clientObject, response.id)
        await API.addClientContactForSenior(this.authStore.token, contactObject, response.id)
        this.$router.push('/user/members')
      }
    },
    fromClientToContact (client, seniorID) {
      const contact = {
        id_c: client._id,
        id_s: seniorID,
        apodo: client.name,
        phone: client.phone,
        image: client.image,
        email: client.email
      }
      return contact
    }
  }
}
</script>

<style scoped>

</style>
