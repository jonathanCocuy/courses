const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// Debo crear primero el evento para luego ejecutar los emits 

// Escucha el evento 
customEmitter.on("response", (data, dataII) => {
  console.log(data, dataII)
});

// Emite un evento cada vez que se llama
customEmitter.emit("response", "Beauty", "Honey"); // Se llama una vez
customEmitter.emit("response", 30); // Vuelve a llamarse
customEmitter.emit("response", {name: "Jonathan"}) // Vuelve a llamarse una vez más

