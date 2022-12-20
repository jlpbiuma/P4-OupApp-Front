<script setup>
import api from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <v-main>
    <v-container>
      <v-row class="justify-center font-weight-bold">
        <p>Herramientas</p>
      </v-row>
      <v-row class="mt-8 justify-center">
        <RouterLink to="/user/tools/billing" style="text-decoration: none">
          <v-btn class="ma-2" outlined color="teal darken-4" width="200">
            Facturación
          </v-btn>
        </RouterLink>
      </v-row>
      <v-row class="justify-center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red" dark v-bind="attrs" v-on="on" @click="dialog = true">
              Borrar Cuenta
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              ¿Seguro que quieres <br>borrar tu cuenta?
            </v-card-title>
            <v-card-text>Al borrar tu cuenta se eliminarán todos tus datos y no podrás recuperarlos.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="green darken-1" text @click="deleteAccount">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      authStore: useAuthStore(),
      dialog: false
    }
  },
  methods: {
    async deleteAccount () {
      const response = await api.deleteUserByID(
        this.authStore.token,
        this.authStore.id
      )
      if (response.error) {
        alert('Error deleting account')
      } else {
        alert('Cuenta eliminada')
        this.authStore.logout()
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>

</style>
