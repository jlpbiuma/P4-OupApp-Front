<script setup>
import API from '../../services/api.js'
import ReminderCardComponent from './ReminderCardComponent.vue'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container width="400" height="844">
        <v-card class="mx-auto" max-width="400" max-height="844">
            <v-toolbar color="teal darken-2" dark>
                <v-toolbar-title>RECORDATORIOS</v-toolbar-title>
            </v-toolbar>
        </v-card>
        <v-card class="mx-auto pt-7" max-width="380">
            <v-row justify="center">
                <div v-for="(reminder, index) in reminders" :key="index">
                    <ReminderCardComponent :reminder="reminder"></ReminderCardComponent>
                </div>
            </v-row>
            <v-row class="mx-auto pt-7" justify="start">
                <div>
                    <RouterLink to="/senior/">
                        <v-btn x-large color="red darken-2" class="white--text"> <v-icon>
                                mdi-arrow-left-bold-circle
                            </v-icon>
                        </v-btn>
                    </RouterLink>
                </div>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'ReminderListComponent',
    data () {
        return {
            reminders: [],
            authStore: useAuthStore()
        }
    },
    async created () {
        const token = this.authStore.token
        const seniorID = this.authStore.id
        this.reminders = await API.getAllRemindersBySeniorID(token, seniorID)
        console.log(this.reminders)
    }
}
</script>
