const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');



require('../db/conn');

const  User = require("../model/userSchema");



router.get('/', (req, res) => {

    res.send('hello world from the router js');

})

router.post('/register', async (req, res) => {



    const { name, email, phone, work, password, cpassword } = req.body;



    if(!name || !email || !phone || !work || !password || !cpassword ) {

        return res.status(422).json({ error: "plz filled the field properly" });

    }

// validation

    try {




        const userExist  = await User.findOne({ email:email });

   

        if (userExist) {

            return res.status(422).json({ error: "Email already Exist"});

        } else if (password != cpassword) {

            return res.status(422).json({ error: "password not matching"});



        } else {

            const user = new User({  name, email, phone, work, password, cpassword });  

        //save mongodb

            await user.save();

           

            res.status(201).json({ message: "user registered successfully "});

        }
        
  } catch (err) {
        console.log(err);
    }



});

// login route



router.post('/signin', async (req, res) => {

    //console.log(req.body);

    //res.json({ message: "awesome" });

    try {

        let token;

       

       



// postman api

        const { email, password } = req.body;



        if (!email || !password) {

            return res.status(400).json({ error: "plz filled the data"})

        }

// matching data

        const userLogin = await User.findOne({ email: email });



       // console.log(userLogin);

       if (userLogin) {

             const isMatch = await bcrypt.compare(password, userLogin.password);
             token = await userLogin.generateAuthToken();

             console.log(token);
            
             res.cookie("jwttoken", token, {

                expires:new Date(Date.now() + 25892000000),

                httpOnly:true

             });

            
 if (!isMatch) {
            res.status(400).json({error: "Invalid Credentials" })
        } else { 

            res.json({message: "user Signin successfully" });
        }

    }else {
        res.status(400).json({error: "Invalid Credentials" });
        }

} catch (err) {
            console.log(err);
        }
    });

    module.exports = router;








