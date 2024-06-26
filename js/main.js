const { createApp } = Vue

createApp({
  data() {
    return {
        logoImg : "img/boolean.png",
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
            console.log(this.newItem)
            this.tasks.unshift({...this.newItem});
            // this.newItem.text = ""
        },
        toggleDone(i){
            console.log("hai cliccato")
            console.log(this.tasks[i].done)
            if (this.tasks[i].done === true){
                this.tasks[i].done = false
            } else {
                this.tasks[i].done = true
            }
        },
    }
}).mount('#app')