<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-row justify="center pt-2">
            <div>
                {{ contact.apodo }}
            </div>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['contact'],
    name: 'ContactCard',
    data () {
        return {
            authStore: useAuthStore()
        }
    }
}
</script>

<style>

</style>
