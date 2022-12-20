<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
    <v-container>
        <v-row class="justify-center pt-2">
                        <div>
                            <RouterLink to="/senior/calllist/call" style="text-decoration: none">
                                <v-btn rounded x-large color="teal darken-2" class="rowcol justify-center white--text" width="300px" height="100px" @click="call">
                                    <v-avatar width="50px" heigth="50px" class="mr-5">
                                        <img :src=contact.url>
                                    </v-avatar>
                                    {{contact.apodo}}
                                    <v-icon right size="30px"> mdi-phone </v-icon>
                                </v-btn>
                            </RouterLink>
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
    methods: {
        async call () {
            const activityObject = {
                actividad: 'Llamada a ' + this.contact.apodo,
                date: new Date(),
                id_s: this.authStore.id
            }
            await API.postActivityBySeniorID(this.authStore.token, activityObject, this.authStore.id)
            this.authStore.callName(this.contact.apodo, this.contact.url)
        }
    }
}
</script>

<style>
</style>
