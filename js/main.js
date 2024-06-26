const { createApp } = Vue

createApp({
  data() {
    return {
        tasks : [
            { text: "Fare la spesa", done: false },
            { text: "Portare fuori il cane", done: true },
            { text: "Studiare JavaScript", done: false },
            { text: "Fare esercizio fisico", done: true }
        ],
    }
    },
    
}).mount('#app')