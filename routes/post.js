const router=require('express').Router();
const verify=require('../verifyToken/verifyToken')

router.get('/post',verify,(req,res)=>{
    res.json({post:{title:"My posts",desc:'login accessed through token'}})
})
module.exports=router;