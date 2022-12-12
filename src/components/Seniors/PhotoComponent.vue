<template>
    <v-container width="400" height="844">
        <v-card class="mx-auto" max-width="400" max-height="844">
            <v-toolbar color="teal darken-2" dark>
                <v-toolbar-title>FOTOS</v-toolbar-title>
            </v-toolbar>
        </v-card>
        <v-card class="mx-auto pt-20" max-width="400">
            <v-carousel> <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"><v-card elevation="2"
                        shaped tile>
                        <b>
                            <p>{{ comments[i] }}</p>
                        </b>
                    </v-card> </v-carousel-item>
            </v-carousel>
            <v-row class="mx-auto pt-6" justify="start">
                <div>
                    <RouterLink to="/senior/">
                        <v-btn x-large color="red darken-2" class="white--text"> <v-icon>
                                mdi-arrow-left-bold-circle
                            </v-icon>
                        </v-btn>
                    </RouterLink>
                </div>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'PhotoComponent',
    data () {
        return {
            items: [{
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            }
            ],
            comments: [
                'Ardilli comiendo almendras',
                'Nubes en el cielo'
            ]
        }
    }
}
</script>
