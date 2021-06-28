const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./routes/index.route');
const routerAuth = require('./routes/user.route')
require('dotenv').config();
const path = require('path')



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
app.use('/auth', routerAuth)

//SERVE BUILD
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

//LISTENING TO SERVER
app.listen(PORT, () => {
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connected")
})
.catch((err) => console.log("Error detected "+ err))
console.log("App running on port " + PORT)
})


