<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
  <v-main>
    <v-row class="justify-center font-weight-bold">
      <p>Perfil</p>
    </v-row>
    <v-row>
      <v-card class="mx-auto" width="300" height="auto" elevation="1">
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
              <v-avatar height="100" width="100" >
                <v-img :src="member.url" alt="John" />
              </v-avatar>
            </div>
            <div v-else width="auto">
              <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text-h4 mt-5">
              <div v-if="!edit">
                {{ member.name }}
              </div>
              <div v-else>
                <v-text-field v-model="member.name" label="Nombre"></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary">
              <div v-if="!edit">
                {{ member.apellidos }}
              </div>
              <div v-else>
                <v-text-field v-model="member.apellidos" label="Apellidos"></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row v-if="!edit" class="justify-center mt-10">
              <p>Info</p>
            </v-row>
          <v-row class="justify-center">
            <div class="text--primary">
              <div v-if="!edit">
                DNI: {{ member.dni }}
              </div>
              <div v-else>
                <v-text-field v-model="member.dni" label="DNI"></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="!edit"><v-icon size="15" class="mr-1" color="teal">mdi-email</v-icon>
                {{ member.email }}
              </div>
              <div v-else>
                <v-text-field v-model="member.email" label="Email"></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="!edit">
                tlf: {{ member.phone }}
              </div>
              <div v-else>
                <v-text-field v-model="member.phone" label="Teléfono"></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="edit">
                <v-text-field v-model="password" label="Contraseña"></v-text-field>
              </div>
            </div>
          </v-row>
          <v-card-actions class="mt-7 justify-center" v-if="!edit">
            <v-btn text color="teal darken-4" class="mt-2" @click="editFormMember">
              editar datos
            </v-btn>
          </v-card-actions>
          <v-card-actions class="mt-5 justify-center" v-else><v-btn text color="teal darken-4" @click="validate">
              Guardar
            </v-btn>
            <v-btn text color="teal darken-4" @click="editFormMember">
              Salir
            </v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn text color="red darken-4" @click="deleteMember">
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      authStore: useAuthStore(),
      member: null,
      edit: false,
      errorMessages: [],
      showError: false,
      deleted: false,
      password: ''
    }
  },
  async created () {
    const token = this.authStore.token
    const seniorID = this.authStore.seniorID
    this.member = await API.getFamilyMemberByID(token, seniorID)
    this.member = this.member[0]
  },
  methods: {
    async editFormMember () {
      this.edit = !this.edit
    },
    validate () {
      const array = []
      this.member.password = this.password
      if (!this.file) {
        array.push('Introduzca una foto')
      }
      if (!this.member.name) {
        array.push('Introduzca una nombre')
      }
      if (!this.member.email) {
        array.push('Introduzca una email')
      }
      if (!this.member.phone) {
        array.push('Introduzca una telefono')
      }
      if (this.password === '') {
        array.push('Introduzca una password')
      }
      if (array.length > 0) {
        this.errorMessages = array
        this.showError = true
      } else {
        this.editMember()
      }
    },
    async editMember () {
      this.member._id = this.authStore.seniorID
      this.member = await API.putFamilyMemberBySeniorID(this.authStore.token, this.file, this.member, this.member._id)
      this.password = ''
      this.edit = !this.edit
      this.showError = false
    },
    async deleteMember () {
      this.deleted = true
      await API.deleteUserByID(this.authStore.token, this.member._id)
      this.$router.push('/user/members')
    }
  }
}
</script>

<style></style>
