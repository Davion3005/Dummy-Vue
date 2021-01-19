<template lang="pug">
    #app
        img(src="./assets/logo.png" alt="Vue Logo")
        base-header

</template>

<script>

import BaseHeader from "@/components/BaseHeader";

export default {
    name: 'App',
    components: {
        BaseHeader
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
</style>
