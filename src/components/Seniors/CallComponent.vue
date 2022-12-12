<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
        <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            </v-img>
            <v-card-title class="black--text pl-12 pt-12">
                <div class="text-h5 pl-12 pt-12">
                    Llamando a {{authStore.call}}
                </div>
            </v-card-title>
            <v-row justify="center pt-7 pb-7">
                <div>
                    <RouterLink to="/senior/">
                        <v-btn x-large color="red darken-2" class="white--text" width="150px"> <v-icon left size="25px">
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
