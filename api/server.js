const express = require('express');
const connectDB = require('./database');
const userRoutes = require('./routes/UserRoutes'); 
const modeloRoutes = require('./routes/ModeloRoutes'); 
const TodoRoutes = require('./routes/TodoRoutes');
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use('/', userRoutes);

app.use('/modelo', modeloRoutes);

app.use('/todo', TodoRoutes);

app.listen(PORT, () => {
  console.log('Servidor funcionando na porta 3000');
});
