const { createApp } = Vue

createApp({
  data() {
    return {
        show : false,
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
            this.toggleDone(i)
        },
        addTask(){
            console.log(this.newItem.text.length)
            if(this.newItem.text.length < 5){
                this.show = true;
            } else {
                this.tasks.unshift({...this.newItem});
                this.show = false;
                this.newItem.text = ""
            }
            
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