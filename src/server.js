// Carrega variáveis de ambiente
require("dotenv").config();

// Importa aplicação
const app = require("./src/app");

// Define porta a partir do .env
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

// Inicia servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📦 Ambiente: ${ENV}`);
});