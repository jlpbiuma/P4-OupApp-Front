<script setup>
import MembersListActivityComponent from '../../components/PostLogin/MembersListActivityComponent.vue'
</script>

<template>
  <v-main>
    <v-row class="justify-center font-weight-bold">
            <p>Actividad de miembros</p>
        </v-row>

          <MembersListActivityComponent></MembersListActivityComponent>
</v-main>
</template>

<script>
export default {
    name: 'MembersActivityView',
    components: {
        MembersListActivityComponent
    }
}
</script>

<style></style>
