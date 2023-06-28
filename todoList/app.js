const app = Vue.createApp({
    data(){
        return {
            todoList : [
                {id: 1, text: "Learn Vue 1", completed: false},
                {id: 2, text: "Learn Vue 2", completed: false},
                {id: 3, text: "Learn Vue 3", completed: false},
                {id: 4, text: "Learn Vue 4", completed: false},
                {id: 5, text: "Learn Vue 5", completed: false},
                {id: 6, text: "Learn Vue 6", completed: false},
                {id: 7, text: "Learn Vue 7", completed: false},
            ],
        };
    },
    methods:{
        addTodo(event){
            this.todoList.push({
                id : new Date().getTime(),
                text : event.target.value,
                completed: false
            });
            event.target.value = "";
        },
        removeItem(todo){
            console.log(todo);
            this.todoList = this.todoList.filter(t => t !== todo )
        }
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter(x => x.completed).length;
        },
        unCompletedItemCount(){
            return this.todoList.filter(x => !x.completed).length;
        }
    }
}).mount('#app')