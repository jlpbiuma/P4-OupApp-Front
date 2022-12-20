<template>
  <v-container>
    <v-row class="justify-center font-weight-bold mt-5">
      <p>Contacto</p>
    </v-row>
    <v-row class="justify-center">
      <v-form ref="form" lazy-validation class="justify-center">
        <v-text-field label="Nombre" required></v-text-field>
        <v-text-field label="Apellidos" required></v-text-field>
        <v-text-field label="Teléfono" required></v-text-field>
        <v-text-field label="E-mail" required></v-text-field>
        <v-textarea autocomplete="Consulta" label="Consulta"></v-textarea>
      </v-form>
    </v-row>
    <v-row class="justify-center">
      <v-checkbox></v-checkbox>
      <p class="justify-center caption mt-6">
        Acepto politica de privacidad
      </p></v-row
    >
    <v-row class="justify-center mt-3">
      <v-btn color="teal lighten-3 white--text" class="mb-10">Enviar</v-btn>
    </v-row>
    <v-row class="justify-center">
      <p>Teléfono:<b> 928 00 01 02</b></p>
    </v-row>
    <v-row class="justify-center">
      <p>Dirección: <b>Mesa y Lopez Nº1</b></p>
    </v-row>
    <v-row class="justify-center">
      <v-img src="../../../images/mapa.png" max-width="350" class="mb-5" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'El E-mail debe ser válido'
      ],
      show1: false,
      show2: true,
      show3: false,
      show4: false
    }
  },
  name: 'ContactComponent'
}
</script>
