const mongoose = require('mongoose');

const modeloSchema = new mongoose.Schema({
  name: {type: String, require: true},
  genero: {type: String},
  localizacao: String,
  preco: Number
});

module.exports = mongoose.model('Modelo', modeloSchema)