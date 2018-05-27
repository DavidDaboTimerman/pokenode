const express       = require('express');
const bodyParser    = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');
const conversationRoutes = require('./routes/conversationRoutes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pokemon', pokemonRoutes);


app.use('/conversation', conversationRoutes);

app.use('/', (req, res) => {
  res.send('api up');
});

// eslint-disable-next-line no-console
app.listen(4200, () => console.log('Example app listening on port 4200!'));