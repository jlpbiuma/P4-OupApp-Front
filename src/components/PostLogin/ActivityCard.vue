<script setup>
</script>

<template>
    <div class="d-flex justify-center">
      <div width="280" outlined class="rounded-lg">
        <div>{{activity.actividad}}</div>
        <div class="d-flex justify-center mb-3 teal--text">
            <small class="mt-n1">{{activity.date}}</small>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ActivityCard',
    props: ['activity']
}
</script>

<style scoped lang="scss">
.rounded-lg {

    border-color: teal;

}
</style>
