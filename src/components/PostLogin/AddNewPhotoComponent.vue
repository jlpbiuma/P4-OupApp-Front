<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container>
        <v-text-field v-model="comment" :rules="rules" counter="25" label="Comentario"></v-text-field>
        <v-file-input type="file" v-model="file" ref="file" truncate-length="15"></v-file-input>
        <v-button @click="addPhoto">Agregar</v-button>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            comment: '',
            file: null,
            authStore: useAuthStore()
        }
    },
    methods: {
        async addPhoto () {
            console.log(this.file)
            const photoObject = {
                comment: this.comment,
                file: this.file
            }
            await API.postNewPhoto(photoObject)
        }
    }
}
</script>

<style>

</style>
