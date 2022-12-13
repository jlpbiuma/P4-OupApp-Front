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

async function simpleDownload (path) {
    return await getDownloadURL(ref(storage, path))
}

async function simpleUpload (path, file) {
    const imageRef = ref(storage, path)
    const response = await uploadBytes(imageRef, file)
    return response.metadata.fullPath
}

async function downloadMutiplePhotos (objectPhoto) {
    const photos = []
    for (const photo of objectPhoto.data) {
        photo.url = await simpleDownload(photo.image)
        photos.push(photo)
    }
    return photos
}

async function uploadPhoto (seniorID, file) {
    return await simpleUpload(`photos/${seniorID}/${file.name}`, file)
}

async function uploadProfilePhoto (clientID, file) {
    return await simpleUpload(`profile/${clientID}`, file)
}

async function getProfilePhoto (clientID) {
    return await simpleDownload(`profile/${clientID}`)
}

async function uploadContactPhoto (seniorID, file, apodo) {
    return await simpleUpload(`contact/${seniorID}/${apodo}`, file)
}

async function getContactPhoto (seniorID, apodo) {
    return await simpleDownload(`contact/${seniorID}/${apodo}`)
}

export default {
    uploadPhoto,
    downloadMutiplePhotos,
    uploadProfilePhoto,
    getProfilePhoto,
    uploadContactPhoto
}
