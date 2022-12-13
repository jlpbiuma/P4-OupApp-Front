<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container id="form">
        <v-text-field v-model="comment" :rules="rules" counter="25" label="Comentario"></v-text-field>
        <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"
            v-on:change="handleFileUpload"></v-file-input>
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
            data: null
        }
    },
    methods: {
        async addPhoto () {
            const reader = new FileReader()
            reader.readAsText(this.file)
            reader.onload = e => {
                this.imageUrl = e.target.result
                reader.readAsDataURL(this.file)
                console.log('1')
            }
            console.log('2')
            const photoObject = {
                comment: this.comment,
                file: this.file,
                id_s: this.authStore.seniorID
            }
            await API.postNewPhoto(this.authStore.token, photoObject)
        },
        handleFileUpload () {
            /*
            const reader = new FileReader()
            reader.readAsText(this.file)
            reader.onload = e => {
                this.imageUrl = e.target.result
                reader.readAsDataURL(this.file)
                console.log(this.imageUrl)
            }
            */
        }
    }
}
</script>

<style>

</style>
