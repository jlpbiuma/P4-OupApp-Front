<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container width="400" height="844">
        <v-card class="mx-auto" max-width="400" max-height="844">
            <v-toolbar color="teal darken-2" dark>
                <v-toolbar-title>FOTOS</v-toolbar-title>
            </v-toolbar>
        </v-card>
        <v-card class="mx-auto pt-20" max-width="400">
            <v-carousel> <v-carousel-item v-for="(photo, index) in photos" :key="index" :src="photo.url"><v-card elevation="2"
                        shaped tile>
                        <b>
                            <p>{{ photo.comment }}</p>
                        </b>
                    </v-card> </v-carousel-item>
            </v-carousel>
            <v-row class="mx-auto pt-6" justify="start">
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
    name: 'PhotoComponent',
    data () {
        return {
            photos: null,
            authStore: useAuthStore()
        }
    },
    async created () {
        this.photos = await API.getPhotosBySeniorID(this.authStore.token, this.authStore.seniorID)
    }
}
</script>
