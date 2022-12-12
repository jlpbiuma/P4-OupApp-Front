<script setup></script>
<template>
  <v-container>
    <v-row justify="center font-weight-bold mt-5 mb-8">
      <p>Pricing</p>
    </v-row>
    <v-card class="mx-auto" max-width="344" outlineds>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline">Nuestros precios</div>
          <v-list-item-title class="text-h5 mb-1">
            Planes adaptados a ti
          </v-list-item-title>
          <v-list-item-subtitle
            >Cada plan tiene un precio diferente, adaptado a tus necesidades y
            capacidad económica.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn rounded color="indigo darken-4 white--text" > ÚNETE ahora </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto mt-8" max-width="344" height="250px">
      <v-card-text>
        <div>Oupap</div>
        <p class="text-h4 text--primary">Nuestros Planes</p>
        <div class="text--primary">
          Mira las diferentes ventajas que ofrecemos.<br />
          Escoge tu plan adaptado a ti.
        </div>
      </v-card-text>
      <v-row class="ml-3">
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true">
          Plan A
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pt-5">
            <p class="text-h4 text--primary">Plan A</p>
            <p>
              Con este plan puedes añadir <b>1 Miembro Senior</b>  que disfrutará de las ventajas de <b>Oup</b>app.
            </p>
          </v-card-text>
          <v-card-actions class="pb-0 pt-0">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>

      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal1 = true">
          Plan B
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal1"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">Plan B</p>
            <p>
              Con este plan puedes añadir <b>2 Miembros Senior</b>  que disfrutarán de las ventajas de <b>Oup</b>app.
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal1 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>

      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal2 = true">
          Plan C
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal2"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">Plan C</p>
            <p>
              Con este plan puedes añadir <b>3 Miembros Senior</b>  que disfrutarán de las ventajas de <b>Oup</b>app.
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal2 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
    reveal1: false,
    reveal2: false
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
</style>
