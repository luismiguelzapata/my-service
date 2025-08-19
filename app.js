const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World desde Backstage + GitHub Actions 🚀');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
