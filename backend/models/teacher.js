import mongoose from "mongoose"

const teacherSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})


const Teacher = new mongoose.model("teacher", teacherSchema)

export default Teacher