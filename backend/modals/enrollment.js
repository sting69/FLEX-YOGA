const mongoose = require('mongoose') ;

const enrollSchema = mongoose.Schema({
//     userId:{
//         type: String,
//         required: true
//     },
//     eId:{
//           type: String,
//           required: true
//     },
    paymentStatus:{
          type: String,
          required: true
    },
    batchTime:{
          type: Number,
          required: true
    },
    month:{
        type: Number,
        required: true
  },
    //we will add more after it 
}) ;

module.exports = mongoose.model("Enrollment", enrollSchema) ;