const mongoose=require('mongoose');
const express=require('express')
const app =express()
const user=require('./routes/user');
const cookieParser = require('cookie-parser');
const auth=require('./routes/auth');

const article=require('./routes/article')
const historique=require("./routes/historique")
const logout=require('./routes/logout')
const session=require("express-session")
const connectDB = require('./config/db');
const path = require("path");
const multer = require("multer");
const router = express.Router();
const admin=require("./middelwares/admin")
const authentif=require("./middelwares/auth")

//app.use(cors());
app.use(express.static('./uploads'))
app.use(cookieParser());
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Credentials", true);
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
 
   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
   next();
 });
const port =process.env.port ||4000

 connectDB();
app.use(express.json())

const storage = multer.diskStorage({
   destination: "./uploads",
   filename: function (req, file, cb) {
     cb(null, file.originalname);
   },
 });
 

 // Init Upload
 const upload = multer({
   storage: storage,
   limits: { fileSize: 3000000 },
   
 }).single("articleImage");
 
 app.post("/image", (req, res) => {
   upload(req, res, (err) => {
     console.log("immage", req.file);
     if (err) {
       res.send({ msg: err });
     } else {
       if (req.file == undefined) {
         res.send({ msg: "Error: No File Selected!" });
       } else {
         if (req.file) res.send(req.file.filename);
         else res.send("file undifind");
       }
     }
   });
 });
 
  

app.use("/lital/users",user)
app.use("/lital/login",auth)
app.use("/lital/articles",article)
app.use("/lital/historique",historique)

app.use("/lital/logout",logout)





   // create user
  
/*
   async function createArticle(reference,nom,type,collection,marque,protoypeOuProduit,mesures,couleur,photo,localisation,carton,quantité,commentaire,action,user){
      
    const article=articles({
        reference,nom,type,collection,marque,protoypeOuProduit,mesures,couleur,photo,localisation,carton,quantité,commentaire,action,user  })
    let res=await article.save();
    console.log(res)
       }

       async function getArtilee(){
       
        let res=await articles.find().populate('user','name -_id');
        console.log(res)
           }

          // createUser('ahmed',"ahmed","boh@gmail.com","0000","user")
         // createArticle("rt3","s1","sac","colljfjection","marque","prod","mesures","rouge","https://www.modress.com/ori-sac-cabas-classe-vieux-rose-7889.jpg","localisation","carton","quantité","commentaire","action","5f024f416147761b32f97fe2")
         //getArtilee()
         */
         app.listen(port,()=>console.log("connecter sur http://localhost:"+port+"/"));
