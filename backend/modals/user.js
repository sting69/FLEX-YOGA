const mongoose = require('mongoose') ;

const userSchema = mongoose.Schema({
    name:{
          type: String,
          required: true
    },
    age:{
          type: Number,
          required: true
    },
    batch:{
      type: String,
      required: true
},

    //we will add more after it 
}) ;

module.exports = mongoose.model("User", userSchema) ;