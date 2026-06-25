import express from "express";  // Importacion normal de js

const app = express(); // Inicalizacion de variable/Objeto
const PORT = 3001; // Puerto localhost:3000

// Excepcion de typescript para ignorar un parametro _req
app.get('/', (_req, res) =>{
    console.log(`Someone is already here -> ${new Date().toLocaleDateString()}`);
    res.send("Hello es una prueba rapida sobre el uso dets con node")   
});

// Listener levantamiento de app -
app.listen(PORT, ()=>{
    console.log("The Server is running on port: "+ PORT)
});