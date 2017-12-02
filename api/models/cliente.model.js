'use strict'
 let mongoose = require('mongoose');
 let Schema = mongoose.Schema;

 let ClienteSchema = Schema({
   nombre : String,
   apellido : String,
   fechaNacimiento : Date,
   dni : Number,
   mail : String,
   telefono : String,
   estado : String
 });

 module.exports = mongoose.model('Cliente', ClienteSchema);
