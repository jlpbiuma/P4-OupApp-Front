<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
    <v-main>
    <v-container>
        <v-row class="justify-center font-weight-bold">
            <p>Nuevo recordatorio</p>
        </v-row>
        <v-row class="justify-center mt-3">
            <div v-if="showError">
                <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
                    <div v-for="(error, index) in errorMessages" :key="index">
                        <p>{{ error }}</p>
                    </div>
                </v-alert>
            </div>
        </v-row>
        <v-col class="mt-10">
            <v-row class="justify-center">
                <p class="mb-1">Seleccione una fecha de inicio</p>
                </v-row>
                <v-row class="justify-center">
                <v-date-picker color="teal" v-model="newReminder.initialDate"></v-date-picker>
            </v-row>
            <v-row class="justify-center">
                <p class="mb-1">Seleccione una fecha de final</p>
                </v-row>
                <v-row class="justify-center">
                <v-date-picker color="teal" v-model="newReminder.finalDate"></v-date-picker>
            </v-row>
            <v-row class="mt-5">
                <v-text-field v-model="newReminder.title" label="Título" required></v-text-field>
            </v-row>
            <v-row>
                <v-text-field v-model="newReminder.description" label="Descripción" required></v-text-field>
            </v-row>
            <v-row class="justify-center">
            <v-btn medium color="teal lighten-3" class="white--text font-weight-bold"
                width="auto"
                elevation="1" @click="validate">
                Agregar
            </v-btn>
        </v-row>
        </v-col>
    </v-container>
</v-main>
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
            errorMessages: [],
            showError: false,
            authStore: useAuthStore()
        }
    },
    methods: {
        validate () {
            const array = []
            if (!this.newReminder.initialDate) {
                array.push('Introduzca una fecha inicial')
            }
            if (!this.newReminder.finalDate) {
                array.push('Introduzca una fecha final')
            }
            if (!this.newReminder.title) {
                array.push('Introduzca un título')
            }
            if (!this.newReminder.description) {
                array.push('Introduzca una descripción')
            }
            if (array.length > 0) {
                this.errorMessages = array
                this.showError = true
            } else {
                this.addReminder()
            }
        },
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

<style scoped lang="scss">
.v-text-field{
      width: 300px;
}
</style>
