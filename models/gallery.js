'use strict'

var moongose = require('mongoose');

var Schema = moongose.Schema;


var imageSchema = Schema({
    title: String,
    description:String,
    img: String,
    propietario : {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios'
    }  
});

module.exports = moongose.model('images', imageSchema);