const express=require('express');
const port=8000;
const app=express();
const Database=require('./config/mongoose');
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use('/',require('./Routes'));


app.listen(port,()=>{
    Database();
    console.log('server is running on',port);
})

