<script setup>
import GoBack from './BackButton.vue'
import { useAuthStore } from '../../stores/authStore'
</script>
<template>
  <v-card v-if="!authStore.actualPage.includes('/senior/')">
    <v-row class="mx-auto overflow-hidden">
      <v-app-bar
        color="teal darken-4"
        dark
        app
        clipped-left
        fixed
        tabs
        class="z-toolbar"
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <GoBack></GoBack>
        <v-row class="justify-center mr-12" no-gutters>
          <RouterLink to="/" class="white--text" style="text-decoration: none">
            <v-toolbar-title><b>Oup</b>App</v-toolbar-title>
          </RouterLink>
        </v-row>
        <v-btn icon v-if="authStore.isLoggedIn" @click="goToControlPage">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <RouterLink
          v-else
          to="/login"
          style="text-decoration: none; color: white"
          ><v-icon>mdi-account-circle</v-icon>
        </RouterLink>
      </v-app-bar>
    </v-row>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      left
      height="auto"
      width="256"
      class="mt-14"
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <RouterLink
            v-if="authStore.isLoggedIn"
            to="/user/profile"
            class="white--text"
            style="text-decoration: none"
          >
            <v-btn>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </RouterLink>
          <RouterLink
            v-else
            to="/user/profile"
            class="white--text"
            style="text-decoration: none"
            ><v-btn>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </RouterLink>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-if="authStore.isLoggedIn">{{
            authStore.name
          }}</v-list-item-title>
          <v-list-item-subtitle v-if="authStore.isLoggedIn"
            >Logged In</v-list-item-subtitle
          >
          <v-list-item-subtitle v-else>Not Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item>
          <v-list-item-icon>
            <RouterLink
              to="/"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-home</v-icon>&nbsp;&nbsp;&nbsp;Home
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item  v-if=authStore.isLoggedIn>
          <v-list-item-icon @click="goToControlPage">
              <v-icon>mdi-account-cog</v-icon>&nbsp;&nbsp;&nbsp;Panel de control
          </v-list-item-icon>
        </v-list-item>
        <v-list-item  v-if=!authStore.isLoggedIn>
          <v-list-item-icon>
            <RouterLink
              to="/login"
              style="text-decoration: none"
              class="black--text"
              logIn="false"
            >
              <v-icon>mdi-account-circle</v-icon>&nbsp;&nbsp;&nbsp;Log In
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item v-if=!authStore.isLoggedIn>
          <v-list-item-icon>
            <RouterLink
              to="/signup"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-account-plus</v-icon>&nbsp;&nbsp;&nbsp;Sign Up
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <RouterLink
              to="/about"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-help-box</v-icon>&nbsp;&nbsp;&nbsp;About Us
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <RouterLink
              to="/contact"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-phone</v-icon>&nbsp;&nbsp;&nbsp;Contacto
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <RouterLink
              to="/blog"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-text-long</v-icon>&nbsp;&nbsp;&nbsp;Blog
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <RouterLink
              to="/pricing"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-currency-usd</v-icon>&nbsp;&nbsp;&nbsp;Precios
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <RouterLink
              to="/memberstories"
              style="text-decoration: none"
              class="black--text"
            >
              <v-icon>mdi-message-outline</v-icon>&nbsp;&nbsp;&nbsp;Member
              Stories
            </RouterLink>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    logIn: true,
    items: [
      { title: 'Home', icon: 'mdi-home' },
      { title: 'Log In', icon: 'mdi-account-circle' },
      { title: 'Sign Up', icon: 'mdi-account-plus' },
      { title: 'About', icon: 'mdi-help-box' }
    ],
    authStore: useAuthStore()
  }),
  methods: {
    goToControlPage () {
      if (this.authStore.rol === 'client') {
        this.$router.push('/user')
      } else if (this.authStore.rol === 'senior') {
        this.$router.push('/senior/')
      }
    }
  }
}
</script>

<style scoped></style>
