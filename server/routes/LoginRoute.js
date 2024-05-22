const express = require('express');
const router = express.Router();


const LoginRoute = require('../models/User');


router.post('/', async function (req, res) {
    try {
        const data = req.body; 

        const newUser = new LoginRoute(data);
        const response = await newUser.save();

        // const payload = {
        //     id : response.id
        // }

        // //generate token
        // const token = generateToken(payload);
        
        console.log("Data Saved");
        // console.log("Token generated is :",token);
        res.status(200).json({ response: response});

    } catch (err) {
        console.log("Error occured");
        res.status(500).json({ error: "Internal Error Occured", err });
    }
})

// router.get('/',function(req,res){
//     res.send("Server is running");
// })


module.exports = router;