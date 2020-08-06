const express=require('express');
const router= express.Router()
const  Users =require('../model/users')
const _=require('lodash')
const bcrypt=require('bcrypt')
mongoose=require("mongoose")
const authentification=require ("../middelwares/auth")



router.post('/' ,async (req,res)=>{
    let user= await Users.findOne({email:req.body.email})
   if( !user ){
  return res.status(404).send("email ou password sont incorrects")
   }

     
const checkPassword= await bcrypt.compare(req.body.password,user.password)
  if( !checkPassword){
    return res.status(404).send("email ou password sont incorrects")
  
  }
try{
 let token=  user.generateTokens()
  res.cookie('token',token ,{expires: new Date(Date.now() + 9000000),httpOnly: true
 }).send(_.pick(user,['name','lastname','email','role']))
 
console.log(res.cookie.token)



}
catch(e){
  console.log(e)}

  
  router.get("/current", authentification, async (req, res) => {
    try {
      const user = await Users.findOne({ _id: req.user._id });
      res.cookie('token',token ,{httpOnly: true})
      res.json(user)
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });


})


module.exports = router