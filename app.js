// const express = require("express");
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");

// const app = express()

// //Set template engine
// app.set('view engine', 'ejs');

// //Set public folder for static files
// app.use(express.static('public'));

// //Dta from forms
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

// //environment variables
// dotenv.config({path: './env/.env'});

// //set cookies
// app.use(cookieParser());

// //Call router
// app.use('/', require('./routes/router.js'))

// //Para eliminar la cache 
// app.use(function(req, res, next) {
//     if (!req.user)
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     next();
// });


// app.listen(3000, ()=> {
//     console.log("server on port http://localhost:3000")
// });


const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser())

//llamar al router
app.use('/', require('./routes/router'))

//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});


app.listen(3000, ()=>{
    console.log('SERVER UP runnung in http://localhost:3000')
})