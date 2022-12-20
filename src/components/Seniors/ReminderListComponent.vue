<script setup>
import API from '../../services/api.js'
import ReminderCardComponent from './ReminderCardComponent.vue'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
    <v-app>
        <v-main style="height:100vw" display="flex">
            <v-toolbar color="teal darken-2" dark>
                <v-toolbar-title style="font-size: x-large; font-weight: bold;">RECORDATORIOS</v-toolbar-title>
            </v-toolbar>
            <v-row class="scroller px-3 mt-3" style="width:100vw">
                <div v-for="(reminder, index) in reminders" :key="index">
                    <ReminderCardComponent :reminder="reminder"></ReminderCardComponent>
                </div>
            </v-row>
        </v-main>
    <v-footer class="footer">
            <div class="mb-2 justify-start" style="align-self:end">
                    <RouterLink to="/senior/" style="text-decoration: none">
                        <v-btn rounded x-large color="red darken-2" class="white--text" width="100px" height="70px">
                            <v-icon size="40px">
                                mdi-arrow-left-bold-circle
                            </v-icon>
                        </v-btn>
                    </RouterLink>
                </div>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'ReminderListComponent',
    data () {
        return {
            reminders: [],
            authStore: useAuthStore()
        }
    },
    async created () {
        const token = this.authStore.token
        const seniorID = this.authStore.id
        this.reminders = await API.getAllRemindersBySeniorID(token, seniorID)
    }
}
</script>
<style scoped>
.footer{
  background-color:  rgb(255, 252, 244);
}
.v-main{
    background-color:  rgb(255, 252, 244)
}
.v-card-class{
    background-color:  rgb(255, 252, 244)
}
.scroller{
    max-height:670px;
    overflow-y: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width:20px;
}
::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background: #00796B;
    border-radius: 10px;
}

</style>
