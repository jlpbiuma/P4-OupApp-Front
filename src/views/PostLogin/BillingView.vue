<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>

    </v-container>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore()
        }
    }
}
</script>

<style>

</style>
