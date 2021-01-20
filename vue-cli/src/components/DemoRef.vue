<template lang="pug">
    div
        .demo-ref
            h1 Demo Ref
            button.avatar(v-on:click="handleClickInputFile") Change avatar
            input.form-control(ref="fileInputAvatar" type="file" style="display:none;")
</template>

<script>
    export default {
        name: "demo-ref",
        methods: {
            handleClickInputFile() {
                this.$refs.fileInputAvatar.click()
            }
        }
    }
</script>

<style scoped>
    .demo-ref {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid black;
    }
    .avatar {
        color: #fff;
        padding: 12px 15px;
        background-color: #333;
        transition: all .3s ease;
    }
    .avatar:hover {
        color: #333;
        background-color: #fff;
    }
</style>
