const express = require('express');

const app = express();

app.use('/public', express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  // Send the file of homepage
  res.sendFile(`${__dirname}/views/index.html`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplicação aberta na porta ${PORT}. https://localhost:${PORT}`);
});
