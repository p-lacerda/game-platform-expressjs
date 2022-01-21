const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplicação aberta na porta ${PORT}. https://localhost:${PORT}`)
})