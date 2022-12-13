import { initializeApp } from 'firebase/app'
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCEkNJNTl1XAZE8rVvXr-NxmxSKzPtSPsQ',
    authDomain: 'fir-images-ee495.firebaseapp.com',
    projectId: 'fir-images-ee495',
    storageBucket: 'fir-images-ee495.appspot.com',
    messagingSenderId: '662400053842',
    appId: '1:662400053842:web:923ba132895d84c5aba58b'
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

async function downloadMutiplePhotos (objectPhoto) {
    const photos = []
    for (const photo of objectPhoto.data) {
        photo.url = await getDownloadURL(ref(storage, photo.image))
        photos.push(photo)
    }
    return photos
}

async function upload (seniorID, file) {
    const imageRef = ref(storage, `photos/${seniorID}/${file.name}`)
    const response = await uploadBytes(imageRef, file)
    return response.metadata.fullPath
}

export default {
    upload,
    downloadMutiplePhotos
}
