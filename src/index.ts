const express = require('express');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

let imgSrc = `../images/img/encenadaport.jpg`;
//Display full image
 app.get('/api/images',(req,res)=>{
	res.sendFile(path.resolve(__dirname,imgSrc));
 })

//dispaly resized image
 app.get('/api/images/:w/:h',async(req,res)=>{
	const w = parseInt(req.params.w);
	const h = parseInt(req.params.h);
    
     if(w<1 ||h<1){
         res.send("please Enter positive integers");
     }
    else{
    let resizedImg = `../images/resized/${req.query.name}_${w}x${h}.jpeg`;
    await sharp(imgSrc).resize(w,h)
	.toFile(resizedImg);
    res.sendFile(path.resolve(__dirname,resizedImg));
    }
})
app.listen(port,()=>{
	console.log(`listening in port : ${port}`);
})
module.exports = app