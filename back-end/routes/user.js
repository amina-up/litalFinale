const express=require('express');
const router= express.Router()
const  Users =require('../model/users')
const _=require('lodash')
const bcrypt=require('bcrypt')
mongoose=require("mongoose")
const auth=require('../middelwares/auth')
const admin=require ('../middelwares/admin')
const { route } = require('./logout');



router.get('/profil',auth,async(req,res)=>{
let profil=await Users.findById(req.user._id).select('-password')
res.send(profil)


})
router.post('/' ,async (req,res)=>{
    let user= await Users.findOne({email:req.body.email})
   if( user ){
  return res.status(404).send("cet email existe")
   }

     user=new Users(_.pick(req.body,['name','lastname','email','password']))
     const saltRounds = 10;
user.password= await bcrypt.hash(user.password,saltRounds)
        await user.save();
        user.generateTokens()

       res.send(_.pick(user,['name','lastname','email',"role"]))
   
})
router.get('/' ,async (req,res)=>{
let user=await Users.find()
  
            res.json(user)
           

       
    })
    router.get('/:id' ,async (req,res)=>{

        try {
                let user=await Users.findById(req.params.id)

                res.send(user)

        } catch (error) {
                res.send("user not found")
        }
})
router.delete('/:id' ,async(req,res)=>{
let deletedUser=await Users.findByIdAndRemove(req.params.id)
  
        res.json(deletedUser)
        console.log(req.cookies.token)
   
})
router.put('/:id',async(req,res)=>{


try {
        let user = await Users.findById(req.params.id);
        if (!user)
          return res
            .status(404)
            .send({ msg: "The User with the given ID was not found." });
        user = await Users.findByIdAndUpdate(req.params.id, req.body, {
          new: true
        });
        res.json(user);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
    

})

module.exports = router