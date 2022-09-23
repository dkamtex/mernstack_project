const mongoose = require("mongoose");



const DB = process.env.DATABASE;



mongoose.connect(DB, {

    useNewUrlParser: true,

    //useCreateIndex: true,

    useUnifiedTopology:true,

    //useFindAndModify: false

}).then(() => {

   console.log('mongoose :: connection successful');



}).catch((error)=> console.log('no connection'));