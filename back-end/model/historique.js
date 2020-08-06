const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistoriqueSchema=new Schema({
name:{
    type:String
},
action:{
    type:String
},
reference:{
    type:String
},
articleImage:{
    type:String 
},
nameuser:{
    type:String 
},

   date: {
    type: Date,
    default: Date.now
  }
   })

   


   module.exports = Historique= mongoose.model("historique", HistoriqueSchema);