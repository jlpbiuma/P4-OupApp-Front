<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
  <v-container>
    <v-row justify="center font-weight-bold">
      <p>Perfil</p>
    </v-row>
    <v-row>
      <v-card class="mx-auto" width="250" height="380">
        <v-card-text class="justify-center">
          <v-row justify="center mt-3">
            <v-avatar height="100" width="auto">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-row>
          <v-row class="justify-center">
            <div class="text-h4 mt-5">
              <div v-if="!edit">
                {{ member.name }}
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialMember.name"
                  label="Nombre"
                ></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="!edit">
                {{ member.apellidos }}
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialMember.apellidos"
                  label="Apellidos"
                ></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="!edit">
                {{ member.dni }}
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialMember.dni"
                  label="DNI"
                ></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="!edit">
                {{ member.email }}
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialMember.email"
                  label="Email"
                ></v-text-field>
              </div>
            </div>
          </v-row>
          <v-row class="justify-center">
            <div class="text--primary mt-3">
              <div v-if="!edit">
                {{ member.phone }}
              </div>
              <div v-else>
                <v-text-field
                  v-model="partialMember.phone"
                  label="Teléfono"
                ></v-text-field>
              </div>
            </div>
          </v-row>
          <v-card-actions class="mt-5" v-if="!edit">
            <v-btn text color="teal darken-4" @click="editFormMember">
              editar datos
            </v-btn>
          </v-card-actions>
          <v-card-actions class="mt-5" v-else>
            <v-btn text color="teal darken-4" @click="editFormMember">
              Salir
            </v-btn>
            <v-btn text color="teal darken-4" @click="editMember">
              Guardar
            </v-btn>
          </v-card-actions>
          <v-card-actions class="mt-5">
            <v-btn text color="teal darken-4" @click="deleteMember">
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      authStore: useAuthStore(),
      member: [],
      edit: false,
      deleted: false,
      partialMember: {}
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
      this.partialMember = this.member
      this.edit = !this.edit
    },
    async editMember () {
      await API.putFamilyMemberBySeniorID(
        this.authStore.token,
        this.partialMember,
        this.member._id
      )
      this.edit = !this.edit
    },
    async deleteMember () {
      this.deleted = true
      this.$router.push('/user/members/')
    }
  }
}
</script>

<style></style>
