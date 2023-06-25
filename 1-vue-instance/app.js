const app = Vue.createApp({
    data(){
        return {
            title: "Learn Vue.js",
            content: "lorem ipsum dolor sit amet..",
            url: "https://vuejs.org/",
            objectLink: {
                title: "Vue JS object title",
                target: "_blank",
                url: "https://vuejs.org/",
                alt:"helloworld"
            },
            coords:{
                x:0,
                y:0
            }
        };
    },
    methods: {
        changeTitle(title){
            this.title = title;
        },
        updateCoords(event,message){
            //console.log(message, event.x,event.y);
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y
            }
        }
    }
}).mount("#app");