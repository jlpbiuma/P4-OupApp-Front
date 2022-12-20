<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container class="mt-10">
        <v-card class="mx-auto" width="300" height="430">
            <v-row>
                <v-col align="center">
                    <br>
                    <v-img :src="member.url" width="80" height="80" contain id="image"></v-img>
                </v-col>
            </v-row>
            <v-col align="middle" class="font-weight-regular teal--text">
                <v-card  class="mt-1 mb-1 teal lighten-2 white--text font-weight-bold" elevation="0"
                     width="110">{{member.name}}</v-card>
            </v-col>
            <v-row class="justify-center">
                <RouterLink class="text-decoration-none" to="/user/members/info">
                    <v-btn class="ma-2"
                color="white"
                width="200"
                elevation="1" @click="getSeniorID">Información</v-btn>
                </RouterLink>
            </v-row>
            <v-row class="justify-center font-weight-bold">
                <RouterLink class="text-decoration-none" to="/user/members/contacts">
                    <v-btn class="ma-2"
                color="white"
                width="200"
                elevation="1" @click="getSeniorID">Ver contactos</v-btn>
                </RouterLink>
            </v-row>
            <v-row class="justify-center font-weight-bold">
                <RouterLink class="text-decoration-none" to="/user/members/newcontact">
                    <v-btn class="ma-2"
                color="white"
                width="200"
                elevation="1" @click="getSeniorID">Añadir contactos</v-btn>
                </RouterLink>
            </v-row>
            <v-row class="justify-center font-weight-bold">
                <RouterLink class="text-decoration-none" to="/user/members/addphoto">
                    <v-btn class="ma-2"
                color="white"
                width="200"
                elevation="1" @click="getSeniorID">Añadir foto</v-btn>
                </RouterLink>
            </v-row>
            <v-row class="justify-center font-weight-bold">
                <RouterLink class="text-decoration-none" to="/user/members/reminders">
                    <v-btn class="ma-2"
                color="white"
                width="200"
                elevation="1" @click="getSeniorID">Recordatorios</v-btn>
                </RouterLink>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore()
        }
    },
    name: 'MemberCardComponent',
    props: ['member'],
    methods: {
        getSeniorID () {
            this.authStore.seniorID = this.member._id
        }
    }
}
</script>

<style scoped>
.mx-auto {
    background-color:#E0F2F1

}

.ma-2 {
    color: #00695C
}

#image {
    border-radius: 50%;
}
</style>
