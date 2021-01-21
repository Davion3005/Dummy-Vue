<template lang="pug">
    .comp-tabs
        .tabs-title
            h2 {{ title }}
            i.icon.ion-md-heart
        .tabs-content
            slot
</template>

<script>
export default {
    name: "tab",
    props: {
        title: {
            type: String,
            default: '',
        }
    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<style scoped>
    .tabs-title {
        border: 2px solid #333;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
    }
</style>
