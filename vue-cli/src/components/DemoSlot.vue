<template lang="pug">
    div.demo-slot
        h2 This is a Vue slot
        slot
        tab( :title="title" )
        ul.tabs-header
            li(v-for="(item, index) in tabsHeaders" :key="index") {{ item.text }}
</template>

<script>
import Tab from "@/components/Tab";

export default {
    name: "demo-slot",
    components: {
        Tab,
    },
    data() {
        return {
            title: 'Tab title',
            tabsHeaders: [
                { text: 'Tab1' },
                { text: 'Tab2' },
                { text: 'Tab3' },
            ]
        }
    }

}
</script>

<style scoped>
    .demo-slot {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #333333;
    }
    .tabs-header {
        border: 2px solid darkblue;
        margin: 2px;
        padding: 2px;
        display: flex;
        list-style-type: none;
    }
    .tabs-header li {
        padding: 8px 15px;
        background-color: #ccc;
        transition: all 0.3s;
    }
    .tabs-header li:hover {
        background-color: gray;
        color: white;
    }
</style>
