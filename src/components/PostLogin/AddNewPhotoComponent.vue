<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container id="form">
        <v-text-field v-model="comment" :rules="rules" counter="25" label="Comentario"></v-text-field>
        <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
        <v-button @click="addPhoto">Agregar</v-button>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            comment: '',
            file: null,
            authStore: useAuthStore(),
            data: null,
            sourceImage: null
        }
    },
    methods: {
        async addPhoto () {
            const objectPhoto = {
                comment: this.comment,
                date: new Date(),
                id_s: this.authStore.seniorID,
                id_c: this.authStore.id
            }
            await API.postNewPhoto(this.authStore.token, this.file, objectPhoto, this.authStore.seniorID)
        }
    }
}
</script>

<style>

</style>
