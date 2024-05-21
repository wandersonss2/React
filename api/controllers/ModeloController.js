const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const ModeloRepository = require('../repository/ModeloRepository.js');

exports.getAllModelos = async (req, res) => {

  try {
    const token = req.headers.authorization;
  
    if (!token) {
      console.log('Token não recebido');
      return res.status(401).json({ message: 'Token não encontrado/fornecido' });
    }
    const tokenValue = token.split(' ')[1];
  
    jwt.verify(tokenValue, config.secretKey, async (err) => {
      if (err) {
        console.log('Token inválido');
        return res.status(402).json({ message: 'Token inválido' });
      } else {
        try {
          const modelos = await ModeloRepository.findAll();
          return res.status(200).json(modelos);
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      }
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }


};

exports.createModelo = async (req, res) => {

  try {
    const token = req.headers.authorization;
  
    if (!token) {
      console.log('Token não recebido');
      return res.status(401).json({ message: 'Token não encontrado/fornecido' });
    }
    const tokenValue = token.split(' ')[1];
  
    jwt.verify(tokenValue, config.secretKey, async (err) => {
      if (err) {
        console.log('Token inválido');
        return res.status(402).json({ message: 'Token inválido' });
      } else {
        try {
          const newModelo = await ModeloRepository.create(req.body); 
          res.status(201).json(newModelo);
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      }
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.updateModelo = async (req, res) => {
  try {
    const updatedModelo = await ModeloRepository.updateById(req.params.id, req.body); 
    res.status(200).json(updatedModelo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteModelo = async (req, res) => {
  try {
    await ModeloRepository.deleteById(req.params.id); 
    res.status(200).json({ message: 'modelo apagado com sucesso' }); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getModelo = async (req, res) => {
  try {
    const modelo = await ModeloRepository.findById(req.params.id);
    res.status(200).json(modelo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};