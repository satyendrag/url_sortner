const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

// db connection
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected Successfully")
}).catch(err => {
    console.log("Error in db connection");    
})

//middleware setup

app.use(express.json());
app.use(express.urlencoded({extended:true}));





app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})







