const mongoose = require('mongoose');

const config = require('./config/config.js');


const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado ao banco de dados');
  } catch(error) {
    console.error('conexão com o mongo db ruim', error.message);
    process.exit(1);
  }
}
module.exports = connectDB;