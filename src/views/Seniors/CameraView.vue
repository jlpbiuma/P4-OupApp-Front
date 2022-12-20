<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import API from '../../services/api.js'
</script>

<template>
    <v-app>
        <v-main>
            <v-toolbar color="teal darken-2" dark>
                <v-toolbar-title style="font-size: x-large; font-weight: bold;">CÁMARA</v-toolbar-title>
            </v-toolbar>
            <v-row class="justify-center pt-2">
            <div v-if="isCameraOpen" class="camera-box">
                <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>
                <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
            </div>
        </v-row>
        <v-row class="justify-center pt-2">
            <div>
                <v-row class= "pt-3 px-3 justify-end">
                    <v-btn elevation="1" id="downloadPhoto" download="my-photo.jpg" rounded x-large color="red darken-2" class="white--text" width="90px" height="75px" role="button"
                        @click="takePhoto">
                        <v-icon size="35px">
                            mdi-camera
                        </v-icon>
                    </v-btn>
                </v-row>
            </div>
        </v-row>
        </v-main>
        <v-footer class="footer">
            <div class="mb-2 justify-start" style="align-self:end">
                    <RouterLink to="/senior/" style="text-decoration: none">
                        <v-btn rounded x-large color="red darken-2" class="white--text" width="100px" height="70px"> <v-icon size="30px">
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
    data () {
        return {
            isCameraOpen: false,
            isPhotoTaken: false,
            isShotPhoto: false,
            authStore: useAuthStore()
        }
    },
    created () {
        this.isCameraOpen = true
        this.createCameraElement()
    },
    methods: {
        createCameraElement () {
            const constraints = (window.constraints = {
                audio: false,
                video: true
            })
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(stream => {
                    this.$refs.camera.srcObject = stream
                })
                .catch(error => {
                    alert('May the browser did not support or there is some errors.', error)
                })
        },
        async takePhoto () {
            if (!this.isPhotoTaken) {
                this.isShotPhoto = true
                const FLASH_TIMEOUT = 50
                setTimeout(() => {
                    this.isShotPhoto = false
                }, FLASH_TIMEOUT)
            }
            this.isPhotoTaken = !this.isPhotoTaken
            const context = this.$refs.canvas.getContext('2d')
            context.drawImage(this.$refs.camera, 0, 0, 450, 337.5)
            const image64 = this.$refs.canvas.toDataURL('image/jpeg', 1.0)
            const fileName = 'Img_' + new Date().getTime() + '.jpg'
            const file = this.dataURLtoFile(image64, fileName)
            const objectPhoto = {
                comment: 'Sacada a las ' + new Date().getHours() + ':' + new Date().getMinutes(),
                date: new Date(),
                id_s: this.authStore.seniorID,
                id_c: this.authStore.id
            }
            await API.postNewPhoto(this.authStore.token, file, objectPhoto, this.authStore.id)
            setTimeout(() => {
                this.isPhotoTaken = false
            }, 1000)
        },
        dataURLtoFile (dataurl, filename) {
            const arr = dataurl.split(',')
            const mime = arr[0].match(/:(.*?);/)[1]
            const bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], filename, { type: mime })
        }
    }
}
</script>

<style scoped>
  .v-main{
      background-color:  rgb(255, 252, 244)
  }
  .footer{
    background-color:  rgb(255, 252, 244);
  }
</style>
