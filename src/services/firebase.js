import { initializeApp } from 'firebase/app'
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCEkNJNTl1XAZE8rVvXr-NxmxSKzPtSPsQ',
    authDomain: 'fir-images-ee495.firebaseapp.com',
    projectId: 'fir-images-ee495',
    storageBucket: 'fir-images-ee495.appspot.com',
    messagingSenderId: '662400053842',
    appId: '1:662400053842:web:923ba132895d84c5aba58b',
    databaseURL: 'https://fir-images-ee495-default-rtdb.europe-west1.firebasedatabase.app/'
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

async function downloadMultiplePhotos (objectPhoto) {
    const photos = []
    for (const photo of objectPhoto.data) {
        try {
            photo.url = await simpleDownload(photo.image)
        } catch {
            photo.url = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
        photos.push(photo)
    }
    return photos
}

async function uploadPhoto (seniorID, file) {
    return await simpleUpload(`photos/${seniorID}/${file.name}`, file)
}

async function uploadProfilePhoto (userEmail, file) {
    if (file === undefined) {
        return null
    }
    return await simpleUpload(`profile/${userEmail}`, file)
}

async function getProfilePhoto (imageRoute) {
    return await simpleDownload(imageRoute)
}

async function uploadContactPhoto (seniorID, file, apodo) {
    return await simpleUpload(`contact/${seniorID}/${apodo}`, file)
}

async function getContactPhoto (contact, apodo) {
    try {
        return await simpleDownload(`contact/${contact.id_s}/${apodo}`)
    } catch {
        return await simpleDownload(contact.image)
    }
}

async function getAllContactPhotos (contacts) {
    const array = []
    for (const contact of contacts) {
        contact.url = await getContactPhoto(contact, contact.apodo)
        array.push(contact)
    }
    return array
}

async function getMemberPhoto (seniorID) {
    return await simpleDownload(`profile/${seniorID}`)
}

async function getAllMemberPhotos (members) {
    const array = []
    for (const member of members) {
        try {
            if (member.image.slice(0, 5) === 'https') {
                member.url = member.image
            } else {
                member.url = await getMemberPhoto(member.email)
            }
            array.push(member)
        } catch {
            console.log('No se ha podido encontrar foto de :', member.name)
        }
    }
    return array
}

export default {
    uploadPhoto,
    downloadMultiplePhotos,
    uploadProfilePhoto,
    getProfilePhoto,
    uploadContactPhoto,
    getContactPhoto,
    getAllContactPhotos,
    getAllMemberPhotos
}
