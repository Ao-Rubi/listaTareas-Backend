import mongoose from "mongoose";

const url = "mongodb://localhost:27017/listaTareas";

mongoose.connect(url);

//Quiero saber si estoy conectado, asi que mando un msj cuando se conecte.
const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("conectado a la base de datos")
})