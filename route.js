const express=require('express');
const router =express.Router();
const shortid = require('shortid');

const Url =require('./url_Schema');

router.post('/url',async function(req,res){
  
  let shortId=shortid();
  if(!req.body.url){return res.status(401).json({"message":"URl does not exist"})}

  await Url.create({
    redirectUrl:req.body.url,
    shortUrl:shortId
  })

  return res.status(201).json({
    "message":"url created"
  })
})

router.get('/:shortId',async function(req,res){
        const found = await Url.findOne({shortUrl:req.params.shortId});
        if(!found){
        res.json({"message":"ID not found"});
        }
        else{ res.redirect(found.redirectUrl);
            found.clicks++;
            await found.save();
         }
})
module.exports=router;