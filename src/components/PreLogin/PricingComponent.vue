<template>
  <v-container style="height: ">
    <v-row class="justify-center font-weight-bold mt-5 mb-8">
      <p>Pricing</p>
    </v-row>
    <v-card class="mx-auto" max-width="344" elevation="1">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-center">Nuestros precios</div>
          <v-list-item-title class="text-h5 mb-1 text-center mt-1">
            Planes adaptados a ti
          </v-list-item-title>
          <v-list-item-subtitle class="text-center mt-3"
            >Cada plan tiene un precio diferente, adaptado a tus necesidades y
            capacidad económica.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="justify-center">
        <RouterLink
          to="/signup"
          class="white--text"
          style="text-decoration: none"
        >
          <v-btn rounded color="indigo darken-4 white--text mb-2">
            ÚNETE ahora
          </v-btn></RouterLink
        >
      </v-card-actions>
    </v-card>

    <v-container class="mt-9">
      <v-row class="justify-center mb-1">
        <v-btn class="ma-2" color="primary" @click="expand = !expand">
          Plan A
        </v-btn>
        <v-btn class="ma-2" color="primary" @click="expand2 = !expand2">
          Plan B
        </v-btn>
        <v-btn class="ma-2" color="primary" @click="expand3 = !expand3">
          Plan C
        </v-btn>
      </v-row>
      <v-card
        width="300"
        class="cardContainer mx-auto"
        style="height: auto"
        flat
      >
        <v-expand-transition>
          <v-card v-show="expand" height="200" width="300" class="mx-auto">
            <v-row class="justify-center mt-5">
              <p class="text-center ma-4"><b>PLAN A</b></p></v-row
            >
            <p class="text-center ma-4">
              Este <b>plan</b> te da acceso a añadir <b>1 miembro Senior</b>.
            </p>
            <v-row justify="center">
              <v-btn color="#1A237E" class="white--text mt-5"
                >Acogerme a este Plan</v-btn
              ></v-row
            >
          </v-card>
        </v-expand-transition>
        <v-expand-transition>
          <v-card v-show="expand2" height="200" width="300" class="mx-auto">
            <v-row class="justify-center mt-5">
              <p p class="text-center ma-4"><b>PLAN B</b></p></v-row
            >
            <p class="text-center ma-4">
              Este <b>plan</b> te da acceso a añadir <b>2 miembros Senior</b>.
            </p>
            <v-row justify="center">
              <v-btn color="#1A237E" class="white--text mt-5"
                >Acogerme a este Plan</v-btn
              ></v-row
            >
          </v-card>
        </v-expand-transition>
        <v-expand-transition>
          <v-card v-show="expand3" height="200" width="300" class="mx-auto">
            <v-row class="justify-center mt-5">
              <p p class="text-center ma-4"><b>PLAN C</b></p></v-row
            >
            <p class="text-center ma-4">
              Este <b>plan</b> te da acceso a añadir <b>3 miembros Senior</b>.
            </p>
            <v-row justify="center">
              <v-btn color="#1A237E" class="white--text mt-5"
                >Acogerme a este Plan</v-btn
              ></v-row
            ></v-card
          >
        </v-expand-transition>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    expand: true,
    expand2: false,
    expand3: false
  }),
  name: 'PricingComponent'
}
</script>

<style scoped>
.cardContainer {
  background-color: rgb(255, 254, 251);
}
</style>
