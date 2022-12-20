<script setup>
import API from '../../services/api.js'
import ReminderCard from './ReminderCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-row class="justify-center font-weight-bold">
            <RouterLink class="text-decoration-none" to="/user/members/reminders/add">
                <v-btn medium color="teal lighten-3" class="white--text font-weight-bold mt-5"
                width="auto"
                elevation="1">Add new reminder</v-btn>
            </RouterLink>
        </v-row>
        <v-row class="justify-center font-weight-bold" v-for="reminder in reminders" :key="reminder.id">
            <ReminderCard :reminder="reminder"></ReminderCard>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ReminderList',
    components: {
        ReminderCard
    },
    data () {
        return {
            reminders: [],
            authStore: useAuthStore()
        }
    },
    async created () {
        const token = this.authStore.token
        const seniorID = this.authStore.seniorID
        this.reminders = await API.getAllRemindersBySeniorID(token, seniorID)
    }
}
</script>

<style>

</style>
