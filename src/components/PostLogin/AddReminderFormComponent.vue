<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
    <v-container>
        <v-text-field v-model="newReminder.initialDate" label="Fecha inicial" required></v-text-field>
        <v-text-field v-model="newReminder.finalDate" label="Fecha final" required></v-text-field>
        <v-text-field v-model="newReminder.title" label="Título" required></v-text-field>
        <v-text-field v-model="newReminder.description" label="Descripción" required></v-text-field>
        <v-btn outlined rounded text @click="addReminder">
            SUBMIT
        </v-btn>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            newReminder: {
                initialDate: '',
                finalDate: '',
                title: '',
                description: ''
            },
            authStore: useAuthStore()
        }
    },
    methods: {
        async addReminder () {
            const sendReminder = this.newReminder
            sendReminder.id_c = this.authStore.id
            sendReminder.id_s = this.authStore.seniorID
            await API.addNewReminder(this.authStore.token, this.newReminder)
            this.$router.push('/user/members/reminders')
        }
    }
}
</script>

<style>

</style>
