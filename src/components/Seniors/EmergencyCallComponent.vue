<script setup>
</script>

<template>
    <v-container class="mt-7">
        <v-card class="mx-auto" max-width="400" color="red">
            <v-row justify="center pt-7">
                <v-icon size="200px"> mdi-ambulance </v-icon>
            </v-row>
            <v-card-title class="black--text pl-12 pt-12">
                <div class="text-h5 pl-12 pt-12 pb-12">
                    Llamando a 112
                </div>
            </v-card-title>
        </v-card>
        <v-row justify="center pa-12">
            <RouterLink to="/senior/">
                <v-btn x-large color="red darken-2" class="white--text" width="150px"> <v-icon left size="25px">
                        mdi-phone-hangup
                    </v-icon>COLGAR
                </v-btn>
            </RouterLink>
        </v-row>
    </v-container>
</template>

<script>
</script>

<style>

</style>
