<script setup>
import API from '../../services/api'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
        <v-container>
            <v-row class="justify-center">
            <v-card class="card-color rounded-lg mt-12" max-width="344" elevation="1" outlined v-if="!deleted">
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            <div v-if="!edit">
                                {{ reminder.initialDate.slice(0, 10) + " - " + reminder.finalDate.slice(0, 10) }}
                            </div>
                            <div v-else>
                                <v-text-field v-model="partialReminder.initialDate" label="Initial Date"></v-text-field>
                                <v-text-field v-model="partialReminder.finalDate" label="Final Date"></v-text-field>
                            </div>
                        </div>
                        <v-list-item-title class="text-h5 mb-1 font-weight-bold">
                            <div v-if="!edit">
                                {{ reminder.title }}
                            </div>
                            <div v-else>
                                <v-text-field v-model="partialReminder.title" label="Title"></v-text-field>
                            </div>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <div v-if="!edit">
                                {{ reminder.description }}
                            </div>
                            <div v-else>
                                <v-text-field v-model="partialReminder.description" label="Description"></v-text-field>
                            </div>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="80" color="teal" class="rounded-circle"></v-list-item-avatar>
                </v-list-item>
                <v-card-actions class="mb-1 mx-1">
                    <div v-if="!edit">
                        <v-btn medium color="teal lighten-3" class="white--text font-weight-bold mr-3"
                width="auto"
                elevation="1" @click="editFormReminder">
                            EDIT
                        </v-btn>
                    </div>
                    <div v-else>
                        <v-btn medium color="teal lighten-3" class="white--text font-weight-bold mr-3"
                width="auto"
                elevation="1" @click="editReminder">
                            SUBMIT
                        </v-btn>
                        <v-btn medium color="teal lighten-3" class="white--text font-weight-bold mr-3"
                width="auto"
                elevation="1" @click="editFormReminder">
                            CLOSE EDIT
                        </v-btn>
                    </div>
                    <v-btn medium color="red lighten-2" class="white--text font-weight-bold "
                width="auto"
                elevation="1" @click="deleteReminder">
                        DELETE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
        </v-container>
</template>

<script>
export default {
    data () {
        return {
            edit: false,
            deleted: false,
            partialReminder: {},
            authStore: useAuthStore()
        }
    },
    name: 'ReminderCard',
    props: ['reminder'],
    methods: {
        async editFormReminder () {
            this.partialReminder = this.reminder
            this.partialReminder.initialDate = this.reminder.initialDate.slice(0, 10)
            this.partialReminder.finalDate = this.reminder.finalDate.slice(0, 10)
            this.edit = !this.edit
        },
        async editReminder () {
            await API.putReminder(this.authStore.token, this.partialReminder, this.reminder._id)
            this.edit = !this.edit
        },
        async deleteReminder () {
            await API.deleteReminder(this.authStore.token, this.reminder._id)
            this.deleted = true
        }
    }
}
</script>

<style scoped>
.card-color {
    background-color:#E0F2F1
}
</style>
