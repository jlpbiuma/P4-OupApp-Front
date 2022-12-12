<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            </v-img>
            <v-col>
                <v-row class="align-end">
                    <v-row justify="start">
                        <div>
                            <RouterLink to="/senior/">
                                <v-btn x-large color="red darken-2" class="white--text"> <v-icon>
                                        mdi-arrow-left-bold-circle
                                    </v-icon>
                                </v-btn>
                            </RouterLink>
                        </div>
                    </v-row>
                    <v-row justify="end">
                        <div>
                            <v-btn x-large color="red darken-2" class="white--text" @click="takePhoto"> <v-icon>
                                    mdi-camera
                                </v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-row>
            </v-col>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'CameraView',
    data () {
        return {
            authStore: useAuthStore()
        }
    },
    methods: {
        async takePhoto () {
            const activityObject = {
                actividad: 'Foto sacada',
                date: new Date(),
                id_s: this.authStore.id
            }
            await API.postActivityBySeniorID(this.authStore.token, activityObject, this.authStore.id)
        }
    }
}
</script>
