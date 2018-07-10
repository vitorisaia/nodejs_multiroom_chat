//global entry point

//import server configurations (server.js file)
var app = require('./config/server')

//set listening port
app.listen(80, function() {
    console.log('Servidor online')
})