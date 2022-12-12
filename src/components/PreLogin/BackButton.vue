<template>
  <span class="go-back">
    <v-btn icon>
    <v-icon @click="goBack">mdi-chevron-left</v-icon></v-btn>
  </span>
</template>

<script>
export default {
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>
