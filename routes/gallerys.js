'use strict'

var express = require('express');
var galleryscontroller = require('../controllers/gallerycontroller');
var token = require('../helpers/token');

var application = express.Router();

application.post('/gallery/create', token.validarTokenDeUsuario , galleryscontroller.crearNewFoto);

application.put('/gallery/edit', token.validarTokenDeUsuario , galleryscontroller.modificarFoto);

application.delete('/gallery/delete', token.validarTokenDeUsuario , galleryscontroller.eliminarFoto);

application.get('/gallery/list', token.validarTokenDeUsuario , galleryscontroller.consultarFotosPorUsuario);

module.exports = application;