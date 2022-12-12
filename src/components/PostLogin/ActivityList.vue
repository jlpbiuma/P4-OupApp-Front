<script setup>
import API from '../../services/api.js'
import ActivityCard from './ActivityCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <div>
        <v-row justify="center pt-2">
            {{member.name}}
            <div v-if="activities.length > 0">
                <div v-for="(activity, index) in activities" :key="index">
                    <ActivityCard :activity="activity"></ActivityCard>
                </div>
            </div>
        </v-row>
        <v-row justify="center pt-2">
            <div v-if="activities.length <= 0">
                <p>No activities found</p>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ActivityCard',
    components: {
        ActivityCard
    },
    data () {
        return {
            activities: [],
            authStore: useAuthStore()
        }
    },
    props: ['member'],
    async created () {
        const token = this.authStore.token
        const seniorID = this.member._id
        this.activities = await API.getAllActivitiesBySeniorID(token, seniorID)
    }
}
</script>

<style>

</style>
