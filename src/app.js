const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.set('views', (`${__dirname}/views`));
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use('/public', express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplicação aberta na porta ${PORT}. https://localhost:${PORT}`);
});
