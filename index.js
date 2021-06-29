const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./routes/index.route');
require('dotenv').config();



//CONNECTION TO DATABASE
const URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

//APP
const app = express();

//MIDDLEWARES
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//ROUTER
app.use('/', router)


//LISTENING TO SERVER
app.listen(PORT, () => {
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connected")
})
.catch((err) => console.log("Error detected "+ err))
console.log("App running on port " + PORT)
})


