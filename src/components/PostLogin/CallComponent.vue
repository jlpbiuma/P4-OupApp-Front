<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
    <v-container>
        <v-card class="mx-auto" max-width="400">
            <v-row class="justify-center pt-7 pb-7">
                <video ref="camera" width="350" height="auto" autoplay></video>
            </v-row>
            <v-card-title class="black--text pl-12 pt-12">
                <div class="text-h5 pl-5 pt-12">
                Llamando a {{ name }}
                </div>
            </v-card-title>
            <v-row class="justify-center pt-7 pb-7">
                <div>
                    <RouterLink to="/user/members">
                        <v-btn x-large color="red darken-2" class="white--text" width="200px" height="70px" @click="hangDevice"> <v-icon left size="25px">
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
    data () {
        return {
            authStore: useAuthStore(),
            name: '',
            isCameraOpen: false,
            isPhotoTaken: false,
            localStream: null,
            audio: ''
        }
    },
    async created () {
        const response = await API.getUserByID(this.authStore.token, this.authStore.seniorID)
        this.name = response.name
        this.createCameraElement()
    },
    mounted () {
        this.audio = new Audio(require('../../../audio/comunicando.wav'))
        this.audio.loop = true
        this.audio.play()
        this.audio.volume = 0
    },
    methods: {
        async call () {
        },
        async createCameraElement () {
            const constraints = (window.constraints = {
                audio: true,
                video: true
            })
            await navigator.mediaDevices
                .getUserMedia(constraints)
                .then(stream => {
                    this.$refs.camera.srcObject = stream
                })
                .catch(error => {
                    alert('May the browser did not support or there is some errors.', error)
                })
            await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        },
        stopCameraStream () {
        const tracks = this.$refs.camera.srcObject.getTracks()
        tracks.forEach(track => {
            track.stop()
        })
        },
        hangDevice () {
            this.audio.pause()
        }
    }
}
</script>
