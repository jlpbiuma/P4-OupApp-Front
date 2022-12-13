import axios from 'axios'
import firebase from './firebase'

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
})

async function signup (newUser) {
  const response = await API.post('/auth/signup', newUser)
  return response.data
}
async function login (User) {
  const response = await API.post('/auth/login', User)
  return response.data
}

async function getAllContactsBySeniorID (token, seniorID) {
  const response = await API.get(`/contact/${seniorID}`, { headers: { token } })
  return response.data
}

async function getAllFamilyMembersByClientID (token, clientID) {
  const response = await API.get(`/user/senior/family/${clientID}`, { headers: { token } })
  return response.data
}

async function getFamilyMemberByID (token, seniorID) {
  const response = await API.get(`/user/senior/${seniorID}`, { headers: { token } })
  return response.data
}

async function getAllRemindersBySeniorID (token, seniorID) {
  const response = await API.get(`/reminder/${seniorID}`, { headers: { token } })
  return response.data
}

async function addNewReminder (token, newReminder) {
  const response = await API.post('/reminder/', newReminder, { headers: { token } })
  return response.data
}

async function putReminder (token, editReminder, reminderID) {
  const response = await API.put(`/reminder/${reminderID}`, editReminder, { headers: { token } })
  return response.data
}

async function deleteReminder (token, reminderID) {
  const response = await API.delete(`/reminder/${reminderID}`, { headers: { token } })
  return response.data
}

async function putFamilyMemberBySeniorID (token, editSenior, seniorID) {
  const response = await API.put(`/user/senior/${seniorID}`, editSenior, { headers: { token } })
  return response.data
}

async function addNewContact (token, file, newContact, seniorID) {
  const url = await firebase.uploadContactPhoto(seniorID, file, newContact.apodo)
  newContact.image = url
  console.log(newContact)
  const response = await API.post('/contact/', newContact, { headers: { token } })
  return response.data
}

async function postFamilyMemberByClientID (token, newMember) {
  const response = await API.post('/user/senior', newMember, { headers: { token } })
  return response.data
}

async function getUserByID (token, clientID) {
  const response = await API.get(`/user/${clientID}`, { headers: { token } })
  return response.data
}

async function putUserByID (token, editUser, clientID) {
  const response = await API.put(`/user/${clientID}`, editUser, { headers: { token } })
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
  const response = await API.post('/photo/', objectPhoto, { headers: { token } })
  return response.data
}

async function getPhotosBySeniorID (token, seniorID) {
  const objectPhoto = await API.get(`/photo/${seniorID}`, { headers: { token } })
  const photos = firebase.downloadMutiplePhotos(objectPhoto)
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
  addNewContact,
  postFamilyMemberByClientID,
  getUserByID,
  putUserByID,
  getAllActivitiesBySeniorID,
  postActivityBySeniorID,
  postNewPhoto,
  getPhotosBySeniorID
}
