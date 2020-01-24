const express = require('express');
const exphbs= require('express-handlebars');
const bodyParser= require('body-parser');
const path = require('path')
// dataBase
const db= require('./config/database')
const app = express();
// handlebars
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
// db test 
db.authenticate()
.then(() =>console.log('database connected....'))
.catch(err =>console.log('error:' + err))



app.get('/',(req,res)=>res.send("INDEX"))
app.use('/gigs',require('./routes/gigs'))
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));