<template src="./HomeView.html"></template>
<style src="./HomeView.css"></style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
    name: 'HomeView',
    data() {
        return {
            areaData: [
                {
                    title: "Helpers",
                    elements: [
                        { title: "Counters", rlink: "/counters" },
                        { title: "Tablets", rlink: "/tablets" },
                    ]
                },
                {
                    title: "GBase",
                    elements: []
                },
                {
                    title: "Rules",
                    elements: [
                        { title: "Rules", rlink: "/rules" },
                    ]
                },
            ],
        }
    }
    // components: {
    //     HelloWorld
    // }
}
</script>
