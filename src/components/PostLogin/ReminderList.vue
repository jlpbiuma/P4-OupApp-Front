<script setup>
import API from '../../services/api.js'
import ReminderCard from './ReminderCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-row justify="center font-weight-bold">
            <RouterLink to="/user/members/reminders/add">
                <v-button>Add new reminder</v-button>
            </RouterLink>
        </v-row>
        <div v-for="reminder in reminders" :key="reminder.id">
            <ReminderCard :reminder="reminder"></ReminderCard>
        </div>
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
