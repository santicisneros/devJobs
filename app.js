
const express = require('express');
const router = require('./routes/index');
const exphbs = require('express-handlebars')
const path = require ('path')
const app =express();

app.engine('handlebars',
     exphbs.engine({
    defaultLayout:'layout'
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',router())


app.listen(1000,(req,res)=>{
    console.log('puerto corriendo en 10000')
})