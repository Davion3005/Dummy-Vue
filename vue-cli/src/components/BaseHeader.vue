<template lang="pug">
    p.align-content-centers.text-black-50 {{ message }}
</template>

<script>
export default {
    name: 'base-header',
    data() {
        return {
            message: 'My first Cli-Vue project'
        }
    }
}
</script>

<style scoped>

</style>
