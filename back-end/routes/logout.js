const express=require('express');
const router= express.Router()

router.post('/',(req,res)=>{
     res.clearCookie('token').send("ok")

 })
 module.exports = router