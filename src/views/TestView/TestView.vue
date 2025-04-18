<template src="./TestView.html"></template>
<style src="./TestView.css"></style>
<script>
    import MDB from "../../MDB.js";
    console.log("MDB", MDB);

    export default {
        name: "TestView",
        data() {
            return {
                Res: '',
            }
        },
        methods: {
            getDB() {
                let FRes;
                console.log("FRes", FRes);
                console.log("wwwww", MDB.getDB());
                FRes = MDB.getDB();
                console.log("FRes", FRes);
                this.Res = FRes;
            },
            delDB() { this.Res = MDB.delDB(); },
            starter() { this.Res = MDB.starter(); },
            addElem_counter() { this.Res = MDB.addElem_counter(); },
        }
    }
</script>