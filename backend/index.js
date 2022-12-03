// import lahat ng install na packages
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');



const app =express();

app.use(cors());
app.use(bodyparser.json());


app.listen(4000,()=>{
    console.log("server is running")
})





