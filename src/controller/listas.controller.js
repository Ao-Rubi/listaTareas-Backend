import { validationResult } from "express-validator"
import Tarea from "../models/modeloTareas"


export const crearElemento = async (req, res) =>{

    try {
        console.log(req.body)
        // validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                    // errors: errors.array(), //Devuelve lista de errores
                    errors: errors.mapped(), //Devuelve el error que ocurrio
                }
            )
        }

        // Creo objt para base de dato

        const tareaNueva = new Tarea({
            tarea: req.body.tarea,
        })
        // Guardar en la base de datos
        await tareaNueva.save()
        // Enviar respuesta frontend
        res.status(201).json({
            mensaje: "Tarea creada correctamente"
        })


        // si falla tambien enviar error
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al crear la tarea"
        })
    }
}

export const listarElementos = async(req, res) =>{
    try {
        // Buscar la coccion de productos en la base de datos
        const listaTareas = await Tarea.find();
        // Enviar respuesta al front
        res.status(201).json(listaTareas);

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al listar las tareas"
        })
    }
}

export const obtenerElemento = async (req, res) =>{
    try {
        console.log(req.params.id)
        // Buscar la coccion de productos en la base de datos
        const tareaBuscada = await Tarea.findById(req.params.id);
        // Enviar respuesta al front
        res.status(201).json(tareaBuscada);

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al listar la tarea"
        })
    }
}

export const editarElemento = async (req, res) =>{
    try {
        //Validacion
        //Buscar la tarea por el id y luego modificar el mismo
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "Tarea editada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al editar la tarea"
        })
    }
}

export const borrarElemento = async (req, res) =>{
    try {
        //Buscar una tarea en la coleccion de la base de datos por su id, y luego borrar.
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "La tarea fue eliminada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "Error al borrar la tarea"
        })
    }
}
