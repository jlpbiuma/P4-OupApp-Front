<template>
 <v-container>
    <v-row class="justify-center font-weight-bold mt-5"><p>About Us</p></v-row
    >
    <v-row class="mx-4 justify-center" ><p>¿Por qué <b>Oup</b>App?</p>
      <p class="text-center"><b>Oup</b>App nace de la idea de prestar <b>asistencia telemática</b> a las personas senior mediante una aplicación con una <b>interfaz adaptada</b> a sus necesidades.
        <br>
        <b>Oup</b>App  debe su nombre a la palabra Oupa (“abuelo” en Afrikáans) unida a App, significando que OupApp es "la App del abuelo".</p></v-row
    >
    <v-row class="mt-10 justify-center font-weight-bold"><p>Conoce al equipo</p></v-row>
    <v-row class="mt-5" justify="center">
      <v-card class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-avatar  size="80" color="#00897B"><img type="avatar" src="../../../images/Jose-Luis.png"
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h7 mb-1">
              Jose Luis Pordomingo Brito
            </v-list-item-title>
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                href="https://github.com/jlpbiuma"
                height="20px"
              >
                Github profile
              </v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
    <v-row class="mt-5 justify-center">
      <v-card class="mx-auto" max-width="344" >
        <v-list-item three-line>
          <v-list-item-avatar size="80" color="#00897B"
            ><img type="avatar" src="../../../images/Vanesa.png"
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h7 mb-1">
              Vanesa Rodríguez Pérez
            </v-list-item-title>
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                href="https://github.com/VanesaMRP"
                height="20px"
              >
                Github profile
              </v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
    <v-row class="mt-5 justify-center">
      <v-card class="mx-auto" max-width="344" >
        <v-list-item three-line>
          <v-list-item-avatar size="80" color="#00897B"
            ><img type="avatar" src="../../../images/Joseph.png"
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h7 mb-1">
              Joseph Vento Pérez
            </v-list-item-title>
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                href="https://github.com/itsJosephV"
                height="20px"
              >
                Github profile
              </v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
    <v-row class="mt-5 justify-center" >
      <v-card class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-avatar size="80" color="#00897B"
            ><img type="avatar" src="../../../images/Jeni.png"
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h7 mb-1">
              Jenifer Cabrera Betancor
            </v-list-item-title>
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                href="https://github.com/JeniferCB"
                height="20px"
              >
                Github profile
              </v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
    <v-row class="mt-16 justify-center" ><RouterLink
        to="/memberstories"
        style="text-decoration: none"
        class="black--text"
      >
        <v-btn medium color="teal lighten-3" class="white--text font-weight-bold"
                width="200"
                elevation="1">Member Stories</v-btn></RouterLink
      ></v-row
    >
    <v-row class="mt-8 mb-8 justify-center">
      <RouterLink to="/blog" style="text-decoration: none" class="black--text">
        <v-btn medium color="teal lighten-3" class="white--text font-weight-bold"
                width="200"
                elevation="1">Blog</v-btn></RouterLink
      ></v-row
    >
  </v-container>
</template>
<script>
export default { name: 'AboutComponent' }
</script>
