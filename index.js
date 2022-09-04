import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./src/database"

// Instancia de express
const app = express();

// Tomo un puerto de la pc
app.set("port", process.env.PORT || 4000);

// Configuro para que el backend escuche al puerto
app.listen(app.get("port"), ()=> {
    console.log("Estamos en el puerto " + app.get("port"))
});

//Middleware
app.use(morgan("dev")); // da info en la terminal
app.use(cors()); // Permite recibir peticiones remotas

// Middlewares que sirven para procesar objetos json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Cargar un archivo estatico
app.use(express.static("./public"))

//rutas
// app.get("/", (req, res) =>{
//     res.send("Primera peticion get")
// })

app.get("/prueba", (req, res) =>{
    res.send("Segunda peticion get")
})