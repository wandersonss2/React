const Modelo = require('../models/Modelo');

class ModeloRepository {
  async create(modeloData) {
    const { name, genero, localizacao, preco } = modeloData;

    const newModelo = new Modelo({
      name: name,
      genero: genero,
      localizacao: localizacao,
      preco: preco
      
    });

  
    await newModelo.save();
    return newModelo;
  }
 
  async findAll(){
    return Modelo.find();
  }
  async findById(id){
    return Modelo.findById(id);
  }
  async updateById(id, modeloData){
    return Modelo.findByIdAndUpdate(id, modeloData, {new: true});
  }
  async deleteById(id){
    return Modelo.findByIdAndDelete(id);
  }
}

module.exports = new ModeloRepository();