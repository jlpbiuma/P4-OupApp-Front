<template>
    <v-container>
        <v-col>
            <v-row class="d-flex flex-column ma=n5 pt-7">
                <v-row justify="center">
                <div>
                    <router-link to="/senior/calllist/">
                        <v-btn x-large color="indigo darken-4" class="white--text" width="200px"> <v-icon left size="30px"> mdi-phone
                            </v-icon>LLAMADAS</v-btn>
                    </router-link>
                </div>
            </v-row>
                <v-row justify="center pt-2">
                    <div>
                        <router-link to="/senior/camera/">
                            <v-btn x-large color="teal darken-2" class="white--text" width="200px"> <v-icon left size="25px"> mdi-camera
                                </v-icon>HACER FOTO</v-btn>
                        </router-link>
                    </div>
                </v-row>
                <v-row justify="center pt-2">
                    <div>
                        <router-link to="/senior/album/">
                            <v-btn x-large color="orange darken-2" class="white--text" width="200px"> <v-icon left size="25px"> mdi-image
                                </v-icon>VER FOTO</v-btn>
                        </router-link>
                    </div>
                </v-row>
                <v-row justify="center pt-2">
                    <div>
                        <router-link to="/senior/reminders/">
                            <v-btn x-large color="brown darken-2" class="white--text" width="200px"> <v-icon left size="25px"> mdi-bell-ring
                                </v-icon>RECORDATORIOS</v-btn>
                        </router-link>
                    </div>
                </v-row>
                <v-row justify="center pt-2">
                    <div>
                        <router-link to="/senior/emergencies/">
                            <v-btn x-large color="red darken-2" class="white--text" width="100px"> <v-icon left size="25px"> mdi-ambulance
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
