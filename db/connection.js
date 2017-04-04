const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/programs_db", (err) => {
  if(err){
    console.log(err)
  } else{
    console.log("make some programs")
  }
})

module.exports = mongoose
