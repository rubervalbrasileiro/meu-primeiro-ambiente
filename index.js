const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor rodando no Codespaces 🚀");
});

app.get("/sobre", (req, res) => {
  res.send("Página sobre o projeto 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});