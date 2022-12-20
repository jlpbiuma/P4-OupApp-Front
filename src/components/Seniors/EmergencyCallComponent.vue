<script setup>
</script>

<template>
    <v-app>
        <v-main class="conta">
        <v-card class="mx-auto mt-5" max-width="350" color="red" style="height:auto">
            <v-row class="justify-center pt-7 ">
                <v-icon color="white" size="200px" class="mt-16"> mdi-ambulance </v-icon>
            </v-row>
            <v-card-title class="black--text pt-12">
                <div class="colorw text-h4 pl-12 pt-12 pb-12 mt-16">
                    Llamando a 112
                </div>
            </v-card-title>
        </v-card>
    </v-main>
    <v-footer class="footer justify-center">
            <div class="mb-2 justify-center" style="align-self:end">
                <RouterLink to="/senior/" style="text-decoration: none">
                <v-btn rounded x-large color="red darken-2" class="white--text text-h5" width="200px" height="70px"> <v-icon left size="35px" >
                        mdi-phone-hangup
                    </v-icon><p class="ml-3 mt-4">COLGAR</p>
                </v-btn>
            </RouterLink>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
</script>

<style scoped>
.colorw{
    color: white;
}
.conta{
    background-color:  rgb(255, 252, 244)
}
.footer{
  background-color:  rgb(255, 252, 244)
}
</style>
