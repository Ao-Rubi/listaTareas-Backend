import { Router } from "express";
import { borrarElemento, crearElemento, editarElemento, listarElementos, obtenerElemento } from "../controller/listas.controller";
import { check } from "express-validator";
const router = Router();

// Crear ruta de las listas de tareas
// dominio + /apilistas + /listas
router.route("/elementos")
.get(listarElementos)
.post([check("tarea").notEmpty().withMessage("El campo es obligatorio")],crearElemento)

router.route("/elementos/:id")
.get(obtenerElemento)
.put(editarElemento)
.delete(borrarElemento)

export default router;