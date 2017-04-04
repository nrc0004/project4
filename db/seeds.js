
const Program = require('./models.js').Program
const Exercise = require('./models.js').Exercise
const Blog = require('./models.js').Blog

// const seedData = require('./seedData.json')
//
// Program.remove({}, () => {
//   Program.create(seedData, () => {
//     process.exit()
//   })
// })
//
// Exercise.remove({}, () => {
//   Program.create(seedData, () => {
//     process.exit()
//   })
// })
//
// Blog.remove({}, () => {
//   Blog.create(seedData, () => {
//     process.exit()
//   })
// })

var leg = new Program({"name": "legs", "body": "thing"})
leg.save()

var squat = new Exercise({"name": "squats", "sets": 12, "reps": 3})
squat.save()

var blog1 = new Blog ({"title": "Blog1", "content": "All of the things"})
blog1.save()

//to seed: 'node db/seeds.js' then run 'mongo', 'use memes_db', 'db.memes.find()' to check
