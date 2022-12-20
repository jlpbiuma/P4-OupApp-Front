<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container id="container">
        <v-card outlined width="200" height="auto" class="rounded-xl">
            <v-row>
                <v-avatar color="indigo" class="ma-4 mr-0">
                    <v-img :src="contact.url"></v-img>
                </v-avatar>
                <v-list-item-content>
                    <div class="ma-4 ml-6">
                        <v-row> <b>{{ contact.apodo }}</b></v-row>
                        <v-row class="text-body-2">tlf: {{ contact.phone }}</v-row>
                    </div>
                </v-list-item-content>
            </v-row>
        </v-card>
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

<style scoped>
</style>
