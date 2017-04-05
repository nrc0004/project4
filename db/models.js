const mongoose = require('./connection.js')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ExerciseSchema = new mongoose.Schema({
  name: String,
  sets: Number,
  reps: Number
})

const ProgramSchema = new mongoose.Schema({
    name: String,
    body: String,
    exercises: [ExerciseSchema]
})

const BlogSchema = new mongoose.Schema ({
    title: String,
    content: String
})

const Program = mongoose.model("Program", ProgramSchema)
const Exercise = mongoose.model("Exercise", ExerciseSchema)
const Blog = mongoose.model("Blog", BlogSchema)

module.exports = {
  Program,
  Exercise,
  Blog
}
