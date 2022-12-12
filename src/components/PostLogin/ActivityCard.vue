<script setup>
</script>

<template>
    <v-container>
        <v-row>
            <div>
                {{activity.actividad}} - {{activity.date}}
            </div>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ActivityCard',
    props: ['activity']
}
</script>

<style>

</style>
