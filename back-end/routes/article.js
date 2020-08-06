const express=require('express');
const router= express.Router()
const  Articles =require('../model/articles')
const auth=require('../middelwares/auth')
const admin=require('../middelwares/admin')
const {check,validationResult} = require("express-validator")
const _=require('lodash')

router.post('/' ,(req,res)=>{
   console.log(req.file)

    let article=new Articles({
        reference:req.body.reference,
        name:req.body.name,
        colection:req.body.colection,
        type:req.body.type,
        marque:req.body.marque,
        protoypeOuProduit:req.body.protoypeOuProduit,
        mesures:req.body.mesures,
        couleur:req.body.couleur,
        articleImage:req.body.articleImage,
        carton:req.body.carton,
        quantity:req.body.quantity,
        commentaire:req.body.commentaire
    })
   
         article.save();
       res.json(article)
  
})
router.get('/' ,async (req,res)=>{
let article=await Articles.find()
      
            res.json(article)
       
    })
router.patch('/:id' ,async(req,res)=>{
let deletedArticle= await Articles.findByIdAndUpdate(req.params.id)
  deletedArticle.quantity=0
  await deletedArticle.save();

        res.json(deletedArticle)
   
})
router.put('/:id',async (req, res) => {
  [
      check("reference", "reference is required")
        .not()
        .isEmpty(),
        check("name", "name is required")
        .not()
        .isEmpty(),
      check("colection", "collection is required")
        .not()
        .isEmpty(),
        check("marque", "marque is required")
        .not()
        .isEmpty(),
        check("protoypeOuProduit", "protoypeOuProduit is required")
        .not()
        .isEmpty(),
        check("mesures", "mesure is required")
        .not()
        .isEmpty(),
        check("couleur", "couleur is required")
        .not()
        .isEmpty(),
        check("articleImage", "image is required")
        .not()
        .isEmpty(),
        check("localisation", "localisation is required")
        .not()
        .isEmpty(),
        check("carton", "carton is required")
        .not()
        .isEmpty(),
        check("quantity", "quantity is required")
        .not()
        .isEmpty(),
    ]
const errors = validationResult(req);
if (!errors.isEmpty())
  return res.status(400).json({ errors: errors.array() });
try {
 
 
  let article = await Articles.findById(req.params.id);
  if (!article)
    return res
      .status(404)
      .send({ msg: "The Article with the given ID was not found." });
  article = await Articles.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(article);
} catch (error) {
  console.error(error.message);
  res.status(500).send("server error");
}
})
module.exports = router