<template lang="pug">
    div
        h2.align-content-centers.text-black-50 {{ message }}
        button.btn-secondary(v-on:click="onChangeTitleFromHeader") Change title from header
</template>

<script>
export default {
    name: 'base-header',
    props: {
        title: {
            type: String,
            default: 'Some thing'
        }
    },
    data() {
        return {
            message: 'My first Cli-Vue project'
        }
    },
    methods: {
        onChangeTitleFromHeader() {
            this.$emit('changeTitle', {title: 'This is new title'});
        }
    }
}
</script>

<style scoped>

</style>
