const mongoose = require('mongoose')
require('./config/db');
const express = require('express');
const router = require('./routes/index');
const exphbs = require('express-handlebars')
const path = require ('path')
const cookieParser =require('cookie-parser');
const session = require('express-session')
const app =express();
const MongoStore =require('connect-mongodb-session')(session);/*SE LE PASA VARIABLES EN SESSION AL PAQUETE CONNECT*/
const store = new MongoStore({
    uri: process.env.DATABASE,
    collection:'devJobs'
}); 
require('dotenv').config({path:'variables.env'})

app.engine('handlebars',
     exphbs.engine({
    defaultLayout:'layout'
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use 

app.use(cookieParser());
/**SE INTENTA APLICAR SESSION CON MONGO */

app.use(
    session({
        secret: process.env.SECRETO,
        key: process.env.KEY,
        resave: false,
        saveUninitialized: false,
        store: store,
         
    })
);



app.use('/',router())

PORT = process.env.PUERTO
app.listen(PORT,(req,res)=>{
    console.log(`server run in ${PORT}`)
})