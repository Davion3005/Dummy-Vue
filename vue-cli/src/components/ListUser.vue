<template lang="pug">
    .list-user
        user.user(
            v-for="user in listUser"
            :key="user.id"
            :user="user"
            v-on:deleteUserInListUser="onDeleteUser"
        )
</template>

<script>

    import User from "@/components/User";
    export default {
        name: "list-user",
        components: {
            User
        },
        props: {
            listUser: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onDeleteUser(data) {
                this.$emit('deleteUserInApp', data)
            }
        }
    }
</script>

<style scoped>
    .list-user {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-user .user {
        margin-bottom: 30px;
        border: 1px solid #2c3e50;
        width: calc(33.3333% - 20px);
    }
</style>
