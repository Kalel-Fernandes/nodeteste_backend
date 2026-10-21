require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/usuarios', userRoutes);

const port = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco!');
    app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`));
  })
  .catch(err => console.error('Erro ao conectar no banco:', err));