import express from "express";
import morgan from "morgan";
import cors from "cors";

// Inicio express
const app = express();

// Tomo un puerto de la pc
app.set("port", process.env.PORT || 4001);

// Configuro para que el backend escuche al puerto
app.listen(app.get(port), ()=> {
    console.log("Estamos en el puerto " + app.get("port"))
});

