const express = require('express')
const parser = require("body-parser")
const app = express()

const Program = require('./db/models.js').Program
const Exercise = require('./db/models.js').Exercise
const Blog = require('./db/models.js').Blog


app.set('port', process.env.PORT || 4000)

app.use("/assets", express.static("public"))
app.use(parser.json({extended: true}))

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})

app.get("/", (req, res) => {
  res.send("Hello World!!!");
})

app.get("/api/programs", function(req, res){
  Program.find({}).then(function(programs){
    res.json(programs)
  })
})

app.get("/api/programs/:name", function(req, res){
  Program.findOne({name: req.params.name}).then(function(programs){
    res.json(programs)
  })
})

app.post("/api/programs", function(req, res){
  Program.create(req.body).then(function(program){
    res.json(program)
  })
})

app.delete("/api/programs/:name", function(req, res){
  Program.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  })
})

app.put("/api/programs/:name", function(req, res){
  Program.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(program){
    res.json(program)
  })
})

app.get("/api/exercises", function(req, res){
  Exercise.find({}).then(function(exercises){
    res.json(exercises)
  })
})

app.get("/api/exercises", function(req, res){
  Exercise.findOne({name: req.params.name}).then(function(exercises){
    res.json(exercises)
  })
})

app.post("/api/exercises", function(req, res){
  Exercise.create(req.body).then(function(exercise){
    res.json(exercise)
  })
})

app.delete("/api/exercises/:name", function(req, res){
  Exercise.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  })
})

app.put("/api/exercises/:name", function(req, res){
  Exercise.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(exercise){
    res.json(exercise)
  })
})

app.get("/api/blogs", function(req, res){
  Blog.find({}).then(function(blogs){
    res.json(blogs)
  })
})

app.get("/api/blogs", function(req, res){
  Blog.findOne({title: req.params.name}).then(function(blogs){
    res.json(blogs)
  })
})

app.post("/api/blogs", function(req, res){
  Blog.create(req.body).then(function(blog){
    res.json(blog)
  })
})

app.delete("/api/blogs/:title", function(req, res){
  Blog.findOneAndRemove({name: req.params.title}).then(function(){
    res.json({ success: true })
  })
})

app.put("/api/exercises/:title", function(req, res){
  Blog.findOneAndUpdate({name: req.params.title}, req.body, {new: true}).then(function(blog){
    res.json(blog)
  })
})
