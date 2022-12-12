<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-main>
    <v-container>
      <v-row justify="center font-weight-bold">
        <p>Perfil</p>
      </v-row>
      <v-row>
        <v-card class="mx-auto" width="250" height="auto">
          <v-card-text class="justify-center">
            <v-row justify="center mt-3">
              <v-avatar height="100" width="auto">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-row>
            <v-row class="justify-center">
              <div v-if="!edit">
                <p class="text-h4 mt-5">{{ user.name }}</p>
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialUser.name"
                  label="Nombre"
                  class="mt-5"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </div>
            </v-row>
            <v-row class="justify-center">
              <p>Info</p>
            </v-row>
            <v-row class="justify-center">
              <div v-if="!edit">
                <div class="text--primary mt-3">{{ user.email }}</div>
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialUser.email"
                  label="Correo Electronico"
                  class="mt-3"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </div>
            </v-row>
            <v-row class="justify-center">
              <div v-if="!edit">
                <div class="text--primary mt-3">{{ user.phone }}</div>
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialUser.phone"
                  label="Numero Telefono"
                  class="mt-3"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
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
                  <v-btn text color="teal darken-4" @click="editProfile">
                    Guardar cambios
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
      partialUser: {
        name: '',
        email: '',
        phone: ''
      },
      user: {
        name: '',
        email: '',
        phone: ''
      },
      authStore: useAuthStore()
    }
  },
  async created () {
    this.user = await API.getUserByID(this.authStore.token, this.authStore.id)
    this.user = this.user[0]
  },
  methods: {
    async editProfileForm () {
      this.partialUser = this.user
      this.edit = !this.edit
    },
    async editProfile () {
      await API.putUserByID(
        this.authStore.token,
        this.partialUser,
        this.user._id
      )
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

<style scoped></style>
