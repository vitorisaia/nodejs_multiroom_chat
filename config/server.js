//********************************************/
//tudo que é config de modulos e etc fica aqui
//********************************************/

//importar o modulo express
var express = require('express')

//importar consign para autoload
var consign = require('consign')

//body-parser para criar os json de request
var bodyParser = require('body-parser')

//validations
var expressValidator = require('express-validator')

//the app is an express app
var app = express()

//view engine that's gonna run
app.set('view engine', 'ejs')

//where are the view files? right inside app folder, views folder
app.set('views', './app/views')

//static files for stuff (express static middleware). I'm telling the app to use it
app.use(express.static('./app/public'))

//body parser, where POST happens the fields come inside a json
app.use(bodyParser.urlencoded({extended: true}))



//bring'em
module.exports = app