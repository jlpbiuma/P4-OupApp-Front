<script setup></script>
<template>
  <v-container>
    <v-row justify="center font-weight-bold mt-5">
      <p>Contacto</p>
    </v-row>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" lazy-validation class="justify:center">
        <v-text-field v-model="name" label="Nombre" required></v-text-field>
        <v-text-field
          v-model="apellidos"
          label="Apellidos"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="telephoneRules"
          label="Teléfono"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
    <v-textarea
      autocomplete="Consulta"
      label="Consulta"
    ></v-textarea>
      </v-form>
    </v-row>
    <v-row justify="center" class="mt-12">
      <v-checkbox class="mb-5"></v-checkbox><p class="caption mt-6">Acepto politica de privacidad</p>
      <v-btn color="teal lighten-3 white--text" class="ml-5" @click="consultar"
        >Enviar</v-btn
      >
    </v-row>
    <v-row justify="center">
      <p>Teléfono:<b> 928 00 01 02</b></p>
    </v-row>
    <v-row justify="center">
      <p>Dirección: <b>Mesa y Lopez Nº1</b></p>
    </v-row>
    <v-row justify="center">
      <v-img src="../../../images/mapa.png" max-width="350"/>
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
  }
}
</script>

<style scoped></style>
