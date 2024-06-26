const { createApp } = Vue

createApp({
  data() {
    return {
        newItem : {
            text : "",
            done : false,
        },
        tasks : [
            { text: "Fare la spesa", done: false },
            { text: "Portare fuori il cane", done: true },
            { text: "Studiare JavaScript", done: false },
            { text: "Fare esercizio fisico", done: true }
        ],
    }
    },
    methods: {
        removeTodo(i){
            this.tasks.splice(i,1)
        },
        addTask(){
            this.tasks.unshift(this.newItem);
            // this.newItem.text = ""
        },
        toggleDone(){
            if (this.tasks.done === true){
                this.tasks.done = false
            } else {
                this.tasks.done = true
            }
        },
    }
}).mount('#app')