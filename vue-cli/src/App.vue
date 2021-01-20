<template lang="pug">
    #app
        img(src="./assets/logo.png" alt="Vue Logo")
        div
            h2 {{ title }}
            button.btn.btn-secondary(v-on:click="onChangeTitle") Change title
            base-header(:title="title" v-on:changeTitle="onChangeTitle")
            list-user(:listUser="listUser" v-on:deleteUserInApp="onDeleteUser")
            base-footer(:title="title")
            demo-ref
            demo-slot
                .app-slot Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</template>

<script>

import BaseHeader from "@/components/BaseHeader";
import ListUser from "@/components/ListUser";
import BaseFooter from "@/components/BaseFooter";
import DemoRef from "@/components/DemoRef";
import DemoSlot from "@/components/DemoSlot";

export default {
    name: 'App',
    components: {
        BaseHeader,
        ListUser,
        BaseFooter,
        DemoRef,
        DemoSlot,
    },
    data() {
        return {
            title: 'This is an title from App Component',
            listUser: [
                {id: 100, name: 'Nguyen Van A', email: 'aeddbc@gmail.com', age: 18, active: true},
                {id: 101, name: 'Nguyen Thi B', email: '123danhbc@gmail.com', age: 19, active: false},
                {id: 102, name: 'Tran Van C', email: 'adfbc123@gmail.com', age: 14, active: true},
                {id: 103, name: 'Do Van D', email: 'nguyendanhbc@gmail.com', age: 22, active: false},
                {id: 104, name: 'Tran E', email: 'seaadf23@gmail.com', age: 18, active: true},
                {id: 105, name: 'Bui Van F', email: 'riot@gmail.com', age: 18, active: true},
            ],
        }
    },
    methods: {
        onChangeTitle(data) {
            this.title = data.title ?? '';
        },
        onDeleteUser(data) {
            let index;
            this.listUser.forEach((user, idx) => {
                if (user.id === data.id) {
                    index = idx;
                }
            });
            this.listUser.splice(index, 1);
        }
    }
}
</script>

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    .container {
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 15px;
        min-height: 3000px;
    }
</style>
