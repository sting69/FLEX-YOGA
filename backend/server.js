const express = require('express') ;
const dotenv = require("dotenv").config() ;
const connectDB = require('../backend/config/dbConnect')
const cors = require('cors') ;
const bodyParser = require('body-parser');

const app = express() ;

connectDB() ;
app.use(cors()) ; 
app.use(bodyParser.json()) ;
app.use(express.json()) ;

app.use('/api', require('../backend/router/operationRouter'));


app.listen(process.env.PORT, (req, res)=>{
    console.log('port is running on port 5000');
})