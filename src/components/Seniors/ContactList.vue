<script setup>
import API from '../../services/api.js'
import ContactCard from './ContactCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
  <v-app>
    <v-main>
      <v-toolbar color="teal darken-2" dark>
        <v-toolbar-title style="font-size: x-large; font-weight: bold">CONTACTOS</v-toolbar-title>
      </v-toolbar>
      <v-row class="scroller mt-3 pl-5 " style=" width:100vw">
        <v-row v-for="contact in contacts" :key="contact.id" class="justify-center mt-3">
          <ContactCard :contact="contact"></ContactCard>
        </v-row>
      </v-row>
      <div align="center">
        <RouterLink to="/senior/emergencies" style="text-decoration: none">
            <v-btn rounded x-large color="red darken-2" class="white--text mt-12" width="200px" height="100px"
              @click="emergencyCall"> <v-icon left size="25px"> mdi-ambulance
              </v-icon>112</v-btn>
          </RouterLink>
      </div>
    </v-main>
    <v-footer class="footer">
      <div class=" justify-start" style="align-self:end">
        <RouterLink to="/senior/" style="text-decoration: none">
          <v-btn rounded x-large color="red darken-2" class="white--text" width="100px" height="70px"> <v-icon size="35px">
              mdi-arrow-left-bold-circle
            </v-icon>
          </v-btn>
        </RouterLink>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'ContactList',
  components: {
    ContactCard
  },
  data () {
    return {
      contacts: [],
      authStore: useAuthStore()
    }
  },
  async created () {
    const token = this.authStore.token
    const seniorID = this.authStore.id
    this.contacts = await API.getAllContactsBySeniorID(token, seniorID)
  },
  methods: {
    async emergencyCall () {
      const activityObject = {
        actividad: 'Llamada de emergencia',
        date: new Date(),
        id_s: this.authStore.id
      }
      await API.postActivityBySeniorID(this.authStore.token, activityObject, this.authStore.id)
    }
  }
}
</script>

<style scoped>
.footer{
  background-color:  rgb(255, 252, 244)
}
.v-btn{
    font-size: x-large;
    font-weight: bold;
}
.v-main{
  background-color:  rgb(255, 252, 244)
}
.scroller{
    height:500px;
    overflow-y: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width:20px;
}
::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background: #00796B;
    border-radius: 10px;
}
</style>
