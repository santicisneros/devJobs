const mongoose = require('mongoose')
require('./config/db');
const express = require('express');
const router = require('./routes/index');
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require ('path')
const cookieParser =require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const bodyParser =require('body-parser');
require('dotenv').config({path:'variables.env'})
const app =express();

//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.engine('handlebars',
     exphbs.engine({
      handlebars: allowInsecurePrototypeAccess(handlebars),
    defaultLayout:'layout',
    helpers:require('./helpers/handlebars')
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use 

app.use(cookieParser());
/**SE INTENTA APLICAR SESSION CON MONGO */

app.use(session({
    secret: process.env.SECRETO,
    resave: false,
    key: process.env.KEY,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE,
      ttl: 60 * 60 * 24 // Tiempo de vida de la sesión en segundos (en este ejemplo, 24 horas)
    })
  }));
  



app.use('/',router())

PORT = process.env.PUERTO
app.listen(PORT,(req,res)=>{
    console.log(`server run in ${PORT}`)
})