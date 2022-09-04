export const crearElemento = (req, res) =>{
    res.send("Crea un elemento en la lista de tareas")
}

export const listarElementos = (req, res) =>{
    res.send("Envia la Lista de tareas")
}

export const obtenerElemento = (req, res) =>{
    res.send("Envio el dato de una tarea")
}

export const editarElemento = (req, res) =>{
    res.send("Envio el dato de una tarea para editar")
}

export const borrarElemento = (req, res) =>{
    res.send("Borro un elemento de la lista de tareas")
}
