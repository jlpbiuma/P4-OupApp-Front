<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-app>
        <v-main style="height:100vw" display="flex">
            <v-toolbar color="teal darken-2" dark>
                <v-toolbar-title style="font-size: x-large; font-weight: bold">FOTOS</v-toolbar-title>
            </v-toolbar>
            <v-carousel> <v-carousel-item v-for="(photo, index) in photos" :key="index" :src="photo.url"><v-card elevation="2"
                        shaped tile>
                        <b>
                            <p>{{ photo.comment }}</p>
                        </b>
                    </v-card> </v-carousel-item>
            </v-carousel>
        </v-main>

        <v-footer class= "footer">
            <div class="mb-2 justify-start" style="align-self:end">
                    <RouterLink to="/senior/" style="text-decoration: none">
                        <v-btn rounded x-large color="red darken-2" class="white--text" width="100px" height="70px"> <v-icon size="35px">
                                mdi-arrow-left-bold-circle
                            </v-icon>
                        </v-btn>
                    </RouterLink>
                </div>
        </v-footer>
    </v-app>
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
        this.photos = await API.getPhotosBySeniorID(this.authStore.token, this.authStore.id)
    }
}
</script>

<style scoped>
.footer{
  background-color:  rgb(255, 252, 244);
}
.v-main{
    background-color:  rgb(255, 252, 244)
}
</style>
