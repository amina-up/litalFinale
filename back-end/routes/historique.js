const express = require("express");
const router = express.Router();
const authentification = require("../middelwares/auth");
const Historique=require("../model/historique")


router.post("/",async (req, res) => {
    const {reference,nameuser,action,articleImage} = req.body;
    try {
      historique= new Historique({
      reference,
      nameuser,
      articleImage,
      action
      });
      await historique.save();
      res.json(historique);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },)  
router.get("/",async (req, res) => {
    try {
      const historiques= await Historique.find()
      res.json(historiques);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
},)
router.delete("/:id",async (req, res) => {
    try {
      await Historique.findByIdAndDelete(req.params.id);
      res.json("Hitorique deleted");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
},)

router.delete("/",async (req, res) => {
  try {
    await Historique.remove();
    res.json("Hitorique deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}


)


  module.exports = router;