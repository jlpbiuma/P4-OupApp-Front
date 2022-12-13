<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-row justify="center pt-2">
            <div>
                <v-img :src="contact.url"></v-img>
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
    },
    async created () {

    }
}
</script>

<style>

</style>
