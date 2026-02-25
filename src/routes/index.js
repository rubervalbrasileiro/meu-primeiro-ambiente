const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

router.get("/sobre", (req, res) => {
  res.send("Página sobre o projeto 🚀");
});

module.exports = router;