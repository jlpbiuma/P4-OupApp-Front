import axios from 'axios'
import firebase from './firebase'

const API = axios.create({
  baseURL: 'https://p4-oupapp-back-production.up.railway.app/api'
})

async function signup (newUser, file) {
  const url = await firebase.uploadProfilePhoto(newUser.email, file)
  newUser.image = url
  const response = await API.post('/auth/signup', newUser)
  return response.data
}

async function login (User) {
  const response = await API.post('/auth/login', User)
  return response.data
}

async function getAllContactsBySeniorID (token, seniorID) {
  const response = await API.get(`/contact/${seniorID}`, { headers: { token } })
  const contacts = firebase.getAllContactPhotos(response.data)
  return contacts
}

async function getAllFamilyMembersByClientID (token, clientID) {
  const objectMembers = await API.get(`/user/senior/family/${clientID}`, {
    headers: { token }
  })
  const response = await firebase.getAllMemberPhotos(objectMembers.data)
  return response
}

async function postFamilyMemberByClientID (token, file, newMember) {
  const url = await firebase.uploadProfilePhoto(newMember.email, file)
  if (url != null) {
    newMember.image = url
  }
  const response = await API.post('/user/senior', newMember, {
    headers: { token }
  })
  return response.data
}

async function getFamilyMemberByID (token, seniorID) {
  const response = await API.get(`/user/senior/${seniorID}`, {
    headers: { token }
  })

  const image = await firebase.getProfilePhoto(response.data[0].image)
  response.data[0].url = image
  return response.data
}

async function getAllRemindersBySeniorID (token, seniorID) {
  const response = await API.get(`/reminder/${seniorID}`, {
    headers: { token }
  })
  return response.data
}

async function addNewReminder (token, newReminder) {
  const response = await API.post('/reminder/', newReminder, {
    headers: { token }
  })
  return response.data
}

async function putReminder (token, editReminder, reminderID) {
  const response = await API.put(`/reminder/${reminderID}`, editReminder, {
    headers: { token }
  })
  return response.data
}

async function deleteReminder (token, reminderID) {
  const response = await API.delete(`/reminder/${reminderID}`, {
    headers: { token }
  })
  return response.data
}

async function putFamilyMemberBySeniorID (token, file, editSenior, seniorID) {
  const url = await firebase.uploadProfilePhoto(editSenior.email, file)
  editSenior.image = url
  const response = await API.put(`/user/senior/${seniorID}`, editSenior, { headers: { token } })
  const image = await firebase.getProfilePhoto(response.data.image)
  response.data.url = image
  return response.data
}

async function addClientContactForSenior (token, clientObject, seniorID) {
  console.log(token, clientObject, seniorID)
  const response = await API.post('/contact/', clientObject, { headers: { token } })
  return response.data
}

async function addNewContact (token, file, newContact, seniorID) {
  const url = await firebase.uploadContactPhoto(seniorID, file, newContact.apodo)
  newContact.image = url
  const response = await API.post('/contact/', newContact, { headers: { token } })
  return response.data
}

async function getUserByID (token, clientID) {
  const response = await API.get(`/user/${clientID}`, { headers: { token } })
  const image = await firebase.getProfilePhoto(response.data[0].image)
  response.data[0].image = image
  return response.data[0]
}

async function getUserByIDNoPhoto (token, clientID) {
  const response = await API.get(`/user/${clientID}`, { headers: { token } })
  return response.data[0]
}

async function putUserByID (token, file, editUser, clientID) {
  const url = await firebase.uploadProfilePhoto(editUser.email, file)
  editUser.image = url
  const response = await API.put(`/user/${clientID}`, editUser, {
    headers: { token }
  })
  const image = await firebase.getProfilePhoto(response.data.image)
  response.data.image = image
  return response.data
}
async function deleteUserByID (token, clientID) {
  const response = await API.delete(`/user/${clientID}`, { headers: { token } })
  return response.data
}

async function getAllActivitiesBySeniorID (token, seniorID) {
  const response = await API.get(`/activity/${seniorID}`, { headers: { token } })
  return response.data
}

async function postActivityBySeniorID (token, newActivity, seniorID) {
  const response = await API.post(`/activity/${seniorID}`, newActivity, { headers: { token } })
  return response.data
}

async function postNewPhoto (token, file, objectPhoto, seniorID) {
  const url = await firebase.uploadPhoto(seniorID, file)
  objectPhoto.image = url
  objectPhoto.id_s = seniorID
  const response = await API.post('/photo/', objectPhoto, { headers: { token } })
  return response.data
}

async function getPhotosBySeniorID (token, seniorID) {
  const objectPhoto = await API.get(`/photo/${seniorID}`, { headers: { token } })
  const photos = firebase.downloadMultiplePhotos(objectPhoto)
  return photos
}

export default {
  login,
  signup,
  getAllContactsBySeniorID,
  getAllFamilyMembersByClientID,
  getFamilyMemberByID,
  getAllRemindersBySeniorID,
  addNewReminder,
  putReminder,
  deleteReminder,
  putFamilyMemberBySeniorID,
  addClientContactForSenior,
  addNewContact,
  postFamilyMemberByClientID,
  getUserByID,
  getUserByIDNoPhoto,
  putUserByID,
  getAllActivitiesBySeniorID,
  postActivityBySeniorID,
  postNewPhoto,
  getPhotosBySeniorID,
  deleteUserByID
}
