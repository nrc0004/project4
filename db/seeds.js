
const Program = require('./models.js').Program
const Exercise = require('./models.js').Exercise
const Blog = require('./models.js').Blog
const programSeedData = require('./programSeedData.json')
const blogSeedData = require('./blogSeedData.json')

Program.remove({}, () => {
  Program.create(programSeedData, () => {

  })
})


Blog.remove({}, () => {
  Blog.create(blogSeedData, () => {

  })
})

// var leg = new Program({"name": "legs", "body": "thing"})
// leg.save()
//
// var squat = new Exercise({"name": "squats", "sets": 12, "reps": 3})
// squat.save()
//
//
//
// var blog1 = new Blog ({"title": "Blog1", "content": "All of the things"})
// blog1.save()
//
// leg.exercise.push(squat)
// leg.save()

//to seed: 'node db/seeds.js' then run 'mongo', 'use memes_db', 'db.memes.find()' to check
