const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    // increaseCounter(){
    //     this.counter +=1;
    // },
    // decreaseCounter(){
    //     this.counter >= 1 ? this.counter-=1: this.counter =0;
    // }
    // getCounterResult(){
    //     console.log("counter 1 work");
    //     return this.counter > 5 ? "bigger than 5" : "less than 5";
    // },
    // getCounterResult2(){
    //     console.log("counter 2 work");
    //     return this.counter2 > 5 ? "bigger than 5" : "less than 5";
    // }
  },
  computed: {
    getCounterResult() {
      console.log("counter 1 work");
      return this.counter > 5 ? "bigger than 5" : "less than 5";
    },
    getCounterResult2() {
      console.log("counter 2 work");
      return this.counter2 > 5 ? "bigger than 5" : "less than 5";
    },
  },
  watch: { //works when value changed
    counter(newValue,oldValue){
      console.log(oldValue,"=>",newValue)
    },
    getCounterResult(newValue,oldValue) {
      console.log(oldValue,"=>",newValue)
    }
  }
}).mount("#app");
