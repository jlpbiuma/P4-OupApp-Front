<script setup>
</script>

<template>
    <v-container>
        <v-card class="mx-auto" max-width="500">
            <v-card class="mx-auto" max-width="450" outlined>
                <v-container>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1">
                                {{ reminder.title }}
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-h5">{{ reminder.description }}</v-list-item-subtitle>
                            <v-col>
                                <v-row class="align-end">
                                    <v-row justify="end">
                                        <div>
                                            <v-btn x-large color="red darken-2" class="white--text"> <v-icon
                                                    size="25px">
                                                    mdi-volume-high
                                                </v-icon>
                                            </v-btn>
                                        </div>
                                    </v-row>
                                    <v-row justify="end">
                                        <div>
                                            <v-btn x-large color="red darken-2" class="white--text"> <v-icon
                                                    size="25px">
                                                    mdi-bell
                                                </v-icon>
                                            </v-btn>
                                        </div>
                                    </v-row>
                                </v-row>
                            </v-col>
                        </v-list-item-content>
                    </v-list-item>
                </v-container>
            </v-card>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'ReminderCardComponent',
    props: ['reminder']
}
</script>
