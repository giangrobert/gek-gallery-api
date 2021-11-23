'use strict'

var moongose = require('mongoose');
var application = require('./application');

moongose.connect('mongodb+srv://gianmamani:mamani@cluster0.0knqd.mongodb.net/dbappflutter', (err, res) =>{
    if(err){
        console.log('Se ha presentado un error al conectarse a la BBDD');
    }
    else{
        console.log('Se ha conectado con la BBDD correctamente');

        application.listen(8282, function(){
            console.log("El servidor web se ha iniciado correctamente");
        });
    }
});