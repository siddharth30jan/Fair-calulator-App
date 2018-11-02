const express= require('express');
const path=require('path');
const formu=require('./formula')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',express.static(path.join(__dirname,'views')));

app.post('/calc',(req,res)=>{
    let distance=req.body.distance
    let time=req.body.time
    let fair=formu.calcu(distance,time)
    res.send({fair: fair})
})

app.get('/rates',(req,res)=>{
    res.send(formu.rate)
})

app.listen(4320);