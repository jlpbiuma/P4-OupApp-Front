<template>
    <v-container>
        <v-col>
            <v-row class="d-flex flex-column pt-16">
                <v-row class="justify-center">
                <div>
                    <router-link to="/senior/calllist/" style="text-decoration: none">
                        <v-btn block rounded x-large color="indigo darken-4" class="white--text" width="340px" height="100px"> <v-icon left size="30px"> mdi-phone
                            </v-icon>LLAMADAS</v-btn>
                    </router-link>
                </div>
            </v-row>
                <v-row class="justify-center pt-12 pb-12">
                    <div>
                        <router-link to="/senior/camera/" style="text-decoration: none">
                            <v-btn rounded x-large color="teal darken-2" class="white--text" width="340px" height="100px"> <v-icon left size="25px"> mdi-camera
                                </v-icon>HACER FOTO</v-btn>
                        </router-link>
                    </div>
                </v-row>
                <v-row class="justify-center pb-12">
                    <div>
                        <router-link to="/senior/album/" style="text-decoration: none">
                            <v-btn rounded x-large color="orange darken-2" class="white--text" width="340px" height="100px"> <v-icon left size="25px"> mdi-image
                                </v-icon>VER FOTO</v-btn>
                        </router-link>
                    </div>
                </v-row>
                <v-row class="justify-center pb-12">
                    <div>
                        <router-link to="/senior/reminders/" style="text-decoration: none">
                            <v-btn rounded x-large color="brown darken-2" class="white--text" width="340px" height="100px"> <v-icon left size="25px"> mdi-bell-ring
                                </v-icon>RECORDATORIOS</v-btn>
                        </router-link>
                    </div>
                </v-row>
                <v-row class="justify-center">
                    <div>
                        <router-link to="/senior/emergencies/" style="text-decoration: none">
                            <v-btn rounded x-large color="red darken-2" class="white--text" width="200px" height="100px"> <v-icon left size="25px"> mdi-ambulance
                                </v-icon>112</v-btn>
                        </router-link>
                    </div>
                </v-row>
            </v-row>
        </v-col>
    </v-container>

</template>

<script>
export default { name: 'HomeSeniorComponent' }
</script>

<style scoped>
.v-btn{
    font-size: x-large;
    font-weight: bold;
}
</style>
