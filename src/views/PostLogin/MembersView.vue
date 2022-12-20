<script setup>
import MembersListComponent from '../../components/PostLogin/MembersListComponent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <v-main>
        <v-container>
            <v-row class="justify-center font-weight-bold">
                <p>Miembros</p>
            </v-row>
            <v-row class="justify-center">
                <RouterLink to="/user/members/newmember" style="text-decoration: none">
                    <v-btn medium color="teal lighten-3" class="white--text font-weight-bold mt-5"
                width="auto"
                elevation="1">
                        add Miembro
                    </v-btn>
                </RouterLink>
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
