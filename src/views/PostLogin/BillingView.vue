<script setup>
import { useAuthStore } from '../../stores/authStore.js'
</script>

<template>
    <v-container>
    <v-alert
      dense
      type="info"
      color="#00897B"
    >
     Aquí aparecen los datos de tu historial <strong>facturación</strong>
    </v-alert>
<v-col>
    <v-row justify="center">
        <p class="text-caption mt-14 mr-2">25/11/2022</p>
    <v-alert
      dense
      class="text-body-2"
      type="success"
      color="#00BFA5"
      max-width="300px"
    >
      Pago de <strong>0€</strong> correspondiente al mes de <strong>noviembre</strong> de 2022 <b>ACEPTADO</b>
    </v-alert></v-row>
    <v-row justify="center">
        <p class="text-caption mt-14 mr-2">25/11/2022</p>
    <v-alert
      dense
      class="text-body-2"
      type="success"
      color="#00BFA5"
      max-width="300px"
    >
      Pago de <strong>0€</strong> correspondiente al mes de <strong>octubre</strong> de 2022 <b>ACEPTADO</b>
    </v-alert></v-row>
    <v-row justify="center">
        <p class="text-caption mt-8 mr-2">25/10/2022</p>
    <v-alert
      dense
      border="left"
      class="text-caption"
      type="warning"
      color="#00838F"
      max-width="300px"
    >
     Se ha tramitado el <strong>ALTA</strong> como cliente en nuestro sistema
    </v-alert></v-row>
    <v-row justify="center">
        <p class="text-caption mt-6 mr-2">25/10/2022</p>
    <v-alert
      dense
      outlined
      type="error"
      class="text-caption"
      width="300px"
    >
      Fallo al guardar<strong> Datos de Facturación</strong>
    </v-alert></v-row>
</v-col>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            authStore: useAuthStore()
        }
    }
}
</script>

<style>

</style>
