const Articles=new mongoose.Schema({
    reference:{
        type:String,
    },
    name:{
        type:String,
        
    }, 
     
   colection:{
       type:String,
   },
   type: {
    type:String,
}
,
   mesures:{
    type:String,
 
},
quantity:{
    type:Number,
},
couleur:{
    type:String,
},
   protoypeOuProduit:{
    type:String,
},
marque:{
    type:String,
},

carton:{
    type:Number,
},

commentaire:{
    type:String,
},
articleImage:{
    type:String,
},
   
   })
   
   module.exports=mongoose.model("articles",Articles)