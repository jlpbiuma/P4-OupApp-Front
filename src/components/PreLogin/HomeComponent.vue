<template>
    <v-container>
      <v-row class="justify-center">
        <v-img
          src="../../../images/Happy senior couple.webp"
          max-width="100vw"
          max-height="300"
          class="justify-center"
        >
        </v-img>
      </v-row>
      <v-row class="justify-center mt-8">
        <div>
          <p class="text-md-center ml-1">Acceso Senior</p>
          <RouterLink to="/loginsenior"  style="text-decoration: none">
            <v-btn medium color="teal lighten-3" class="white--text">Miembros</v-btn>
          </RouterLink>
        </div>
      </v-row>
      <v-divider class="mt-8"></v-divider>
      <v-row class="justify-center mt-10">
        <v-img src="../../../images/Oupapp-logo.png" max-width="50"></v-img>
      </v-row>
      <p class="body-1 mt-5 text-center font-weight-bold">¿Que ofrecemos?</p>
      <p class="body-2 mt-5 text-center teal--text">
        Nuestro producto es una aplicación de asistencia telemática para
        ciudadanos senior.
      </p>
      <v-row class="justify-center mt-5">
        <RouterLink
              to="/about"
              style="text-decoration: none"
              class="black--text">
        <v-btn small color="indigo darken-4 white--text mx-1">Saber más</v-btn></RouterLink>
        <RouterLink
              to="/signup"
              style="text-decoration: none"
              class="black--text">
        <v-btn small color="blue darken-3 white--text mx-1">Únete</v-btn></RouterLink>
      </v-row>
      <v-divider class="mt-8" />
      <p class="body-1 mt-5 text-center font-weight-bold">¿Por qué nosotros?</p>
      <p class="body-2 mt-5 text-center teal--text">
        Regale a las personas mayores de su vida la posibilidad de entretenerse
        y realizar un sinfín de actividades.
      </p>
      <p class="body-1 mt-10 text-center font-weight-black">Testimonios</p>
      <v-row  class="justify-center mt-1">
        <v-img src="../../../images/Hasbullah-face.png" max-width="80"/>
        </v-row>
        <p class="font-italic mt-5 mx-4 text-center">
          “OupApp me cambió la vida, ahora me siento acompañado todos los días
          gracias a las fotos que me envían mis nietos”
        </p>
        <v-row class="justify-center">
          <p class="body-2  text-center">-</p>
        </v-row>
        <v-row class="justify-center">
          <p class="body-2  text-center ">Hasbulla, 95</p>
        </v-row>
        <v-row class="justify-center mt-7">
        <v-img src="../../../images/Javi-face.png" max-width="80" />
    </v-row>
        <v-row class="justify-center mt-1">
          <p class="font-italic mt-5 mx-4 text-center">
            “Gracias a OupApp puedo hablar con mis amigos del dominó cada día”
          </p>
        </v-row>
        <v-row class="justify-center">
          <p class="body-2 text-center">-</p>
        </v-row>
        <v-row class="justify-center">
          <p class="body-2 text-center">Javi, 77</p>
        </v-row>
    </v-container>
</template>
<script>
export default {
   name: 'HomeComponent'
}
</script>
