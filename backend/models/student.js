import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})


const Student = new mongoose.model("user", studentSchema)

export default Student;