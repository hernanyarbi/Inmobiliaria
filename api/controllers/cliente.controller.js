'use strict'

let Cliente = require("../models/cliente.model");

function newCliente(req, res) {
  let cliente = new Cliente();
  let param = req.body;

  cliente.nombre = param.nombre;
  cliente.apellido = param.apellido;
  cliente.fechaNacimiento = param.fechaNacimiento;
  cliente.dni = param.dni;
  cliente.mail = param.mail;
  cliente.telefono = param.telefono;
  cliente.estado = param.estado;

  cliente.save((err, clienteSave)=>{
    if (err) {
      res.status(500).send({
        msg: 'Error al guardar cliente'
      });
    } else if (!clienteSave) {
      res.status(404).send({
        msg: 'No se pudo guardar el cliente'
      });
    } else {
      res.status(200).send({
        cliente: clienteSave
      });
    }
  });

}

function getClientes(req, res) {
  Cliente.find((err, clientes)=>{
    if (err) {
      res.status(500).send({
        msg: 'Error al obtener los clientes'
      });
    } else if (!clientes) {
      res.status(404).send({
        msg: 'No se pudo obtener los clientes'
      });
    } else {
      res.status(200).send({
        cliente: clientes
      });
    }
  });
}
module.exports = {
  newCliente,
  getClientes,
  // getCliente,
  // updateCliente,
  // deleteCliente
}
