import { Router } from "express";
import { borrarElemento, crearElemento, editarElemento, listarElementos, obtenerElemento } from "../controller/listas.controller";

const router = Router();

// Crear ruta de las listas de tareas
// dominio + /apilistas + /listas
router.route("/elementos").get(listarElementos).post(crearElemento)

router.route("/elementos/:id").get(obtenerElemento).put(editarElemento).delete(borrarElemento)

export default router;