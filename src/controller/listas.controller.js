import Tarea from "../models/modeloTareas"

export const crearElemento = async (req, res) =>{

    try {
        console.log(req.body)
        // validacion
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

export const editarElemento = (req, res) =>{
    res.send("Envio el dato de una tarea para editar")
}

export const borrarElemento = (req, res) =>{
    res.send("Borro un elemento de la lista de tareas")
}
