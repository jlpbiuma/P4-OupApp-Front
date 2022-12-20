<script setup></script>
<template>
  <v-main>
    <v-row class="justify-center font-weight-bold">
      <p>My Plan</p>
    </v-row>
    <v-row class="justify-center mb-1">
      <v-btn class="ma-2 white--text font-weight-bold" color="primary" elevation="1" @click="expand = !expand">
        Plan A
      </v-btn>
      <v-btn class="ma-2 white--text font-weight-bold" color="primary" elevation="1" @click="expand2 = !expand2">
        Plan B
      </v-btn>
      <v-btn class="ma-2 white--text font-weight-bold" color="primary" elevation="1" @click="expand3 = !expand3">
        Plan C
      </v-btn>
    </v-row>
    <v-card style="height: auto" width="300" class="mx-auto cardContainer" flat>
      <v-expand-transition>
        <v-card
          v-show="expand"
          height="200"
          width="300"
          class="mx-auto"
        >
          <v-row class="justify-center mt-5">
          <p class="text-center ma-4"><b>PLAN A</b></p>
          </v-row>
          <p class="text-center ma-4">
            Este es tu <b>plan OupApp.</b> Ahora mismo, tienes acceso a la
            creación de <b>1 miembro Senior</b> que podrá utilizar la App.
          </p>
        </v-card>
      </v-expand-transition>
      <v-expand-transition>
        <v-card
          v-show="expand2"
          height="200"
          width="300"
          class="mx-auto"
        >
        <v-row class="justify-center mt-5">
          <p class="text-center ma-4"><b>PLAN B</b></p>
          </v-row>
          <p class="text-center ma-4">
            Este <b>plan</b> te da acceso a añadir <b>2 miembros Senior</b>.
          </p>
          <v-row class="justify-center">
            <v-btn color="#1A237E" class="mt-5 white--text"
              >Acogerme a este Plan</v-btn
            ></v-row
          >
        </v-card>
      </v-expand-transition>
      <v-expand-transition>
        <v-card
          v-show="expand3"
          height="200"
          width="300"
          class="mx-auto"
        >
        <v-row class="justify-center mt-5">
          <p class="text-center ma-4"><b>PLAN C</b></p>
          </v-row>
          <p class="text-center ma-4">
            Este <b>plan</b> te da acceso a añadir <b>3 miembros Senior</b>.
          </p>
          <v-row class="justify-center">
            <v-btn color="#1A237E" class="white--text mt-5"
              >Acogerme a este Plan</v-btn
            ></v-row
          ></v-card
        >
      </v-expand-transition>
    </v-card>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    expand: true,
    expand2: false,
    expand3: false
  })
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.cardContainer{
  background-color: rgb(255, 254, 251);
}
</style>
