<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
import ActivityList from './ActivityList.vue'
</script>

<template>
    <div>
        <div v-for="member in members" :key="member.id">
            <ActivityList :member="member"></ActivityList>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore(),
            members: []
        }
    },
    async created () {
        const token = this.authStore.token
        const clientID = this.authStore.id
        this.members = await API.getAllFamilyMembersByClientID(token, clientID)
    }
}
</script>

<style>

</style>
