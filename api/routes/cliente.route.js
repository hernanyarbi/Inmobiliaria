'use strict'

let express = require('express');
let ClienteCtrlr = require('../controllers/cliente.controller');
let api = express.Router();

api.post('/cliente', ClienteCtrlr.newCliente);
api.get('/cliente', ClienteCtrlr.getClientes);
// api.get('/client/:id', ClienteCtrlr.getCliente);
// api.put('/client/:id', ClienteCtrlr.updateCliente);
// api.delete('/client/:id', ClienteCtrlr.deleteCliente);

module.exports = api;
