<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" :src=authStore.callImage>
            </v-img>
            <v-card-title class="black--text pl-12 pt-12">
                <div class="text-h5 pl-5 pt-12">
                Llamando a {{authStore.call}}
                </div>
            </v-card-title>
            <v-row class="justify-center pt-7 pb-7">
                <div>
                    <RouterLink to="/senior/" style="text-decoration: none">
                        <v-btn rounded x-large color="red darken-2" class="white--text" width="200px" height="70px"> <v-icon left size="25px">
                                mdi-phone-hangup
                            </v-icon>COLGAR
                        </v-btn>
                    </RouterLink>
                </div>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'CallComponent',
    props: ['name'],
    data () {
        return {
            authStore: useAuthStore()
        }
    }
}
</script>
