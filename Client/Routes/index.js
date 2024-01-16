const express=require('express');
const router=express.Router();
const items=require('../Modals/item');

router.post('/add',async(req,res)=>{
    console.log('r u there');
    try{
        console.log(req.body);
        const itemsData = await items.create(req.body);   
        return res.status(200).send({
            data:itemsData,
            message:"item successfully added"
        })
    }catch(err){
        return res.status(500).send({
            data:null,
            message:`error in item creation***,${err}`
        })
    }
})

router.get('/fetch',async(req,res)=>{
    
    try{
        const dataItem=await items.find();
        console.log(dataItem);
        return res.status(200).send({
            data:dataItem,
            message:"successfully item fetched"
        })
    }catch(err){
        return res.status(500).send({
            data:null,
            message:`error in item fetching***,${err}`
        })
    }
})

module.exports=router;