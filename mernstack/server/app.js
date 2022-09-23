const dotenv = require('dotenv');

const mongoose = require('mongoose');

const express = require('express');

const app = express();



dotenv.config({ path: './config.env' });



require("./db/conn");

//const User = require('./model/userSchema');



app.use(express.json());



// link router file

app.use(require('./router/auth'));



const PORT = process.env.PORT;

// middleware



const middleware = (req, res, next) => {

    console.log("hello my middleware");

    next();

}



//middleware();





app.get('/', (req, res) => {

    res.send("hello world from the server");



});



app.get('/about', middleware, (req, res) => {

    console.log("hello my about");

    res.send("hello world from the about server");

   



});



app.get('/contact', (req, res) => {

    res.send("hello world from the contact server");



});



app.get('/signin', (req, res) => {

    res.send("hello  signin world from the server");



});



app.get('/signup', (req, res) => {

    res.send("hello signup world from the  server");



});



app.listen(PORT, () => {

    console.log('server is running at --> ' + "localhost:"+PORT);

});