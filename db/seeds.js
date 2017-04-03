
const Program = require('./models.js').Program
const Exercise = require('./models.js').Exercise
const seedData = require('./seedData')

Program.remove({}, () => {
  Program.create(seedData, () => {
    process.exit()
  })
})

Exercise.remove({}, () => {
  Program.create(seedData, () => {
    process.exit()
  })
})


//to seed: 'node db/seeds.js' then run 'mongo', 'use memes_db', 'db.memes.find()' to check
