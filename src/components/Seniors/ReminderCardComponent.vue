<script setup>
</script>

<template>
    <v-container>
            <v-card class="mx-auto" width="340" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="mb-1" style="font-size: x-large; font-weight: bold;">
                                {{ reminder.title }}
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-h6">{{ reminder.description }}</v-list-item-subtitle>
                            <v-list-item-subtitle class="text-h6">{{ reminder.initialDate.slice(0, 10) + " / " + reminder.finalDate.slice(0, 10) }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
            </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'ReminderCardComponent',
    props: ['reminder']
}
</script>
