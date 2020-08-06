const mongoose=require('mongoose');
const jwt=require("jsonwebtoken");

  

const Users = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },  email: {
       type:String,
        required:true
   },
   password:{
       type:String,
       required:true
   },
   role:{
    type:String,
    default:"Moderateur"
   
},
   
   
   })
Users.methods.generateTokens=function(){

    const token=jwt.sign({_id:this._id,role:this.role},"privateKey")
     return token

}
module.exports = mongoose.model("users", Users )

/*
async function createUser(name,lastname,email,password,role){
    const user=users({
        name,lastname,email,password,role
    })
    let res=await user.save();
    console.log(res)
       }
       //createUser('ahmed',"ahmed","boh@gmail.com","0000","user")
*/
      