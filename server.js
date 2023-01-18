const express = require ('express');
const path = require('path');

const app = express();
const PORT = 3001;

const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`The app is connected at ${PORT}!`);
  });