<template lang="pug">
    div
        .user
            p {{ user.name }}
            button.delete(v-on:click="handleDelete") Delete
</template>

<script>
    export default {
        name: "user",
        props: {
            user: {
                type: Object,
                default: () => []
            }
        },
        methods: {
            handleDelete() {
                let data = {
                    id: this.user.id
                }
                this.$emit('deleteUserInListUser', data);
            }
        }

    }
</script>

<style scoped>
    .user {
        position: relative;
    }
    .delete {
        position: absolute;
        top: 0px;
        right: 0px;
    }
</style>
