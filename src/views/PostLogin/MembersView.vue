<script setup>
import MembersListComponent from '../../components/PostLogin/MembersListComponent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <v-main>
        <v-container>
            <v-row justify="center font-weight-bold">
                <p>Miembros</p>
            </v-row>
            <v-row>
                <v-flex class="sticky bottom">
                    <RouterLink to="/user/members/newmember" class="text-decoration-none"><v-btn class="mt-5">add
                            Miembro</v-btn></RouterLink>
                </v-flex>
            </v-row>
            <MembersListComponent></MembersListComponent>
        </v-container>
    </v-main>
</template>

<script>
</script>

<style scoped lang="scss">
.sticky {
    width: 100%;
    position: sticky;
    min-height: 60px;
    text-align: center;

    &.bottom {
        bottom: 0px;
    }
}
</style>
