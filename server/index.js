const express = require('express');
const bodyParser = require('body-parser');
const database = require('./db');

const app = express();
app.use(bodyParser.json());
require('dotenv').config(); 


app.get('/',function(req,res){
    res.send("Server is running");
})

const RegisterRoute = require('./routes/RegisterRoute');
app.use('/register', RegisterRoute);

const LoginRoute = require('./routes/LoginRoute');
app.use('/login', LoginRoute);


const PORT = process.env.PORT || 3000; 

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})