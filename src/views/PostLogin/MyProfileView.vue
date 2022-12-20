<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-main>
    <v-container>
      <v-row class="justify-center font-weight-bold">
        <p>Perfil</p>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="250" height="auto">
          <v-card-text class="justify-center">
            <v-row class="justify-center mt-3">
              <div v-if="showError">
                <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
                  <div v-for="(error, index) in errorMessages" :key="index">
                    <p>{{ error }}</p>
                  </div>
                </v-alert>
              </div>
            </v-row>
            <v-row class="justify-center mt-3">
              <div v-if="!edit">
                <v-avatar height="100" width="100">
                  <img :src=user.image alt="User" />
                </v-avatar>
              </div>
              <div v-else>
                <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*" width="auto"></v-file-input>
              </div>
            </v-row>
            <v-row class="justify-center">
              <div v-if="!edit">
                <p class="text-h4 mt-5">{{ user.name }}</p>
              </div>
              <div v-else>
                <v-text-field v-model="user.name" label="Nombre" class="mt-5" outlined dense
                  hide-details></v-text-field>
              </div>
            </v-row>
            <v-row v-if="!edit" class="justify-center">
              <p>Info</p>
            </v-row>
            <v-row class="justify-center">
              <div v-if="!edit">
                <div class="text--primary">
                  <v-icon size="15" class="mr-1" color="teal">mdi-email</v-icon>
                  {{ user.email }}
                </div>
              </div>
              <div v-else>
                <v-text-field v-model="user.email" label="Correo Electronico" class="mt-3" outlined dense
                  hide-details></v-text-field>
              </div>
            </v-row>
            <v-row class="justify-center">
              <div v-if="!edit">
                <div class="text--primary mt-3">
                  tlf: {{ user.phone }}
                </div>
              </div>
              <div v-else>
                <v-text-field v-model="user.phone" label="Numero Telefono" class="mt-3" outlined dense
                  hide-details></v-text-field>
              </div>
              <v-card-actions class="mt-5">
                <div v-if="!edit">
                  <v-row>
                    <v-btn text color="teal darken-4" class="mt-2" @click="editProfileForm">
                      Editar datos
                    </v-btn>
                    <v-card-actions>
                      <v-btn text color="red" @click="Logout">Salir</v-btn>
                    </v-card-actions>
                  </v-row>
                </div>
                <div v-else>
                  <v-btn text color="teal darken-4" @click="editProfileForm">
                    Salir
                  </v-btn>
                  <v-btn text color="teal darken-4" @click="validate">
                    Guardar
                  </v-btn>
                </div>
              </v-card-actions>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'MyProfileView',
  data () {
    return {
      edit: false,
      deleted: false,
      file: null,
      user: {
        name: '',
        email: '',
        phone: ''
      },
      errorMessages: [],
      showError: false,
      authStore: useAuthStore()
    }
  },
  async created () {
    this.user = await API.getUserByID(this.authStore.token, this.authStore.id)
  },
  methods: {
    async editProfileForm () {
      this.edit = !this.edit
    },
    validate () {
      const array = []
      if (!this.file) {
        array.push('Introduzca una foto')
      }
      if (!this.user.name) {
        array.push('Introduzca una nombre')
      }
      if (!this.user.email) {
        array.push('Introduzca una email')
      }
      if (!this.user.phone) {
        array.push('Introduzca una telefono')
      }
      if (array.length > 0) {
        this.errorMessages = array
        this.showError = true
      } else {
        this.editProfile()
      }
    },
    async editProfile () {
      const response = await API.putUserByID(
        this.authStore.token,
        this.file,
        this.user,
        this.user._id
      )
      this.user = response
      this.edit = !this.edit
    },
    async deleteProfile () {
      await API.deleteuser(this.authStore.token, this.user._id)
      this.deleted = true
    },
    Logout () {
      this.authStore.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
