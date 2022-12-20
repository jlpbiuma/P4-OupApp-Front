<script setup>
import API from '../../services/api.js'
import ActivityCard from './ActivityCard.vue'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <div>
        <div>
            <div class="d-flex justify-center mt-8 teal--text">
            <v-card  class="pl-2 pr-2 teal white--text font-weight-bold" elevation="0">{{member.name}}</v-card>
            </div>
            <v-container class="d-flex justify-center">
            <v-card width="250" height="auto" outlined class="pa-5" v-if="activities.length > 0">
                <v-row  justify="center" v-for="(activity, index) in activities" :key="index">
                    <ActivityCard :activity="activity"></ActivityCard>
                </v-row>
            </v-card>
            </v-container>
        </div>
        <div class="d-flex justify-center">
            <div v-if="activities.length <= 0">
                <v-row class="mb-1">
                <v-card width="auto" height="auto" outlined class="pa-2"> <em class="teal--text">Sin actividad</em> </v-card>
                </v-row>
            </div>
        </div>
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

<style scoped>
.v-card{
    border-color: teal;
}

</style>
