<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-container id="form">
        <v-row class="justify-center font-weight-bold">
            <p>Nueva foto</p>
        </v-row>
        <v-row class="justify-center mt-3">
            <div v-if="showError">
                <v-alert type="error" class="mt-5" elevation="2" border="left" colored-border>
                    <div v-for="(error, index) in errorMessages" :key="index">
                        <p>{{ error }}</p>
                    </div>
                </v-alert>
            </div>
        </v-row>
        <v-row class="mt-10 width">
            <v-textarea outlined name="input-7-4" label="Comentario" contain v-model="comment"></v-textarea>
        </v-row>
        <v-row class="justify-center">
            <v-file-input type="file" v-model="file" ref="file" label="Foto" accept="image/*"></v-file-input>
        </v-row>
        <v-row class="justify-center">
            <v-btn medium color="teal lighten-3" class="white--text font-weight-bold mt-3"
                width="auto"
                elevation="1" @click="validate">Añadir foto</v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            comment: '',
            file: null,
            errorMessages: [],
            showError: false,
            authStore: useAuthStore()
        }
    },
    methods: {
        validate () {
            const array = []
            if (!this.file) {
                array.push('Introduzca una foto')
            }
            if (!this.comment) {
                array.push('Introduzca un comentario')
            }
            if (array.length > 0) {
                this.errorMessages = array
                this.showError = true
            } else {
                this.addPhoto()
            }
        },
        async addPhoto () {
            const objectPhoto = {
                comment: this.comment,
                date: new Date(),
                id_s: this.authStore.seniorID,
                id_c: this.authStore.id
            }
            await API.postNewPhoto(this.authStore.token, this.file, objectPhoto, this.authStore.seniorID)
            this.$router.push('/user/members')
        }
    }
}
</script>

<style>

</style>
