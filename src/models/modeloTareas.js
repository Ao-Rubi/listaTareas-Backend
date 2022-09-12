import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    tarea: {
        type: String, 
        require: true
    }
});

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;