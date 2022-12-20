<template>
  <v-container>
    <v-row class="justify-center font-weight-bold mt-5 mb-4">
      <p>Member Stories</p>
    </v-row>
    <v-row class="justify-center">
      <p class="font-italic text-center">
        "Una review dice más que lo que notros podamos venderte"
      </p>
    </v-row>
    <v-row class="justify-center mb-8">
      <v-icon large center color="#29B6F6"> mdi-twitter </v-icon>
    </v-row>
    <v-card class="mx-auto" color="#00796B" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="text-h7 font-weight-bold">
        "Al principio no me quería seguir liándome con la tecnología, nunca he
        sido de móviles, pero con Oupap es otro mundo, puedo ver crecer a mis
        nietos y a mi familia. Muy agradecida con este gran cambio."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="../../../images/Pino-Senior.png"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Pino @pinito.pino</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">257</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto mt-8" color="#00796B" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="text-h7 font-weight-bold">
        "Mi familia ya se acuerda de mí y todos los días los llamo."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="../../../images/Joseph-senior.png"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Joseph @crimson</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">300</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">10</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto mt-8" color="#00796B" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="text-h7 font-weight-bold">
        "Ahora puedo llamar a mis nietos después de echarme las partidas al
        Fornite en la resi con los colegas."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="../../../images/Pepelu-Senior.png"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Pepelu @erpepe_rehoya</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">70</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">1000</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto mt-8" color="#00796B" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="text-h7 font-weight-bold">
        "Ya no se me olvidan nunca las cosas del hogar y también llamo a mis
        amigas todos los días."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="../../../images/Jenni-Senior.png"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jenifer @jenny_la...</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">89</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">175</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <v-row class="justify-center mt-8 mb-8">
      <v-btn
        medium
        color="teal lighten-3"
        class="white--text font-weight-bold"
        width="200"
        elevation="1"
        >Añadir historia</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default { name: 'MemberStoriesComponent' }
</script>
