const asyncHandler = require("express-async-handler");
const User = require('../modals/user')
//0.
//GET - api/user/ravi
const ravi = asyncHandler(async (req, res) => {
    res.status(200).json({message:"hello ritik how are you"});
  });

//1. creating user
//POST - api/user/create

const createUser = asyncHandler(async (req, res) =>{
    const {name, age, batch} = req.body ;
    const newUser = await User.create({
      name,
      age,
      batch,
    }) ;
    if(newUser){
      res.status(200).json({message: "frontend is sending user value successfully"}) ;
    }else{
      res.status(401) ;
      throw new Error('Not a valid values') ;
    }
    
}) ;

const getUser = asyncHandler(async (req, res) =>{
  const users = await User.find() ;
  // console.log(users);
  if(users){
    res.status(200).json(users) ;
  }
  else{
    res.status(401) ;
      throw new Error('error exist') ;
  }
  
}) ;

module.exports = {ravi, createUser, getUser}