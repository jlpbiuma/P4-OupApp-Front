import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      name: useStorage('name', null),
      token: useStorage('token', null),
      email: useStorage('email', null),
      id: useStorage('id', null),
      rol: useStorage('rol', null),
      actualPage: useStorage('actualPage', null),
      call: useStorage('call', null),
      callImage: useStorage('callImage', null),
      seniorID: useStorage('seniorID', null)
    }
  },
  getters: {
    isLoggedIn () {
      return this.token != null
    }
  },
  actions: {
    logout () {
      this.token = null
      this.email = null
      this.id = null
      this.rol = null
    },
    login (response) {
      this.token = response.token
      this.email = response.email
      this.id = response.id
      this.rol = response.rol
      this.name = response.name
    },
    callName (name, image) {
      this.call = name
      this.callImage = image
    }
  }
})
