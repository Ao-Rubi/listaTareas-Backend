import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    nombre: {
        type: String, 
        require: true,
        minLength: 2,
        maxLength: 20,
    },

    apellido: {
        type: String, 
        require: true,
        minLength: 2,
        maxLength: 15,
    },

    DNI: {
        type: Number, 
        require: true,
        min: 10000000,
        max: 99999999,
        unique: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    }
});

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;