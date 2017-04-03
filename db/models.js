const mongoose = require('./connection.js')

const ProgramSchema = new mongoose.Schema({
    name: String,
    body: String,
    exercise: [ExerciseSchema]
})

const ExerciseSchema = new mongoose.Schema({
    name: String,
    sets: Number,
    reps: Number
})

const Program = mongoose.model("Program", ProgramSchema)
const Exercise= mongoose.model("Exercise", ExerciseSchema)

module.exports = {
  Program
  Exercise
}
