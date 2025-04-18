<template src="./CountersView.html"></template>
<style src="./CountersView.css"></style>
<script>
import MDB from "../../MDB.js";
console.log("MDB", MDB.getDB());

export default {
    name: 'CountersView',
    data() {
        return {
            cdata: [
                { title: 'Independent (1)', info: 'Its a info text...' },
                { title: 'Independent (1+)', info: 'Its a info text...' },
                { title: 'Monopoly', info: 'Its a info text...' },
            ]
        }
    },
    // components: {
    //     HelloWorld
    // }
}
</script>
