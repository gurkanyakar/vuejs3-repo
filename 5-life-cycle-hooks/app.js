const app = Vue.createApp({
  data() {
    return {
      title: "Test Title",
      itemList: []
    };
  },
  beforeCreate() {
    console.log("beforeCreate worked...");
  },
  created() {
    console.log("created worked...");
    setTimeout(() => {
        this.itemList = [1,2,3,4,5];
    }, 2000);

    setTimeout(() => {
        this.title = "its new title";
    }, 4000);
  },
  beforeMount() {
    console.log("beforeMount worked...");
  },
  mounted() {
    console.log("mounted worked...");
  },
  beforeUpdate() {
    console.log("beforeUpdate worked...");
  },
  updated() {
    console.log("updated worked...");
  },
  beforeUnmount() {
    console.log("beforeUnmount worked...");
  },
  unmounted() {
    console.log("unmounted worked...");
  },
});

app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 5000);