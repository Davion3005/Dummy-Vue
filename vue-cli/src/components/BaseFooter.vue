<template lang="pug">
    div
        h2 Page footer
        h4 {{ title }}
</template>

<script>
    export default {
        name: "BaseFooter",
        props: {
            title: {
                type:  String,
                default: 'If props do not exist, this line would be appeared'
            },
        }
    }
</script>

<style scoped>

</style>
