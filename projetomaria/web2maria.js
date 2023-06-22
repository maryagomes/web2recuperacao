const express= require('express');
const app=express();

app.use(express.static('projetomaria'));
app.listen(3000,()=>{
    console.log("servidor iniciado na porta 3000")
});