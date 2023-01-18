const express = require ('express');

const app = express();
const PORT = 3001;

const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`The app is connected at ${PORT}!`);
  });