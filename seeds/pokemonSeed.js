const mongoose = require('../libs/dbConnection')
const PokemonModel = require('../models/pokemonModel');
PokemonModel.collection.drop();

PokemonModel.create([{
  name: 'Snorlax'
},
{
  name: 'Bulbasaur'
},{
  name: 'Charmeleon'
},{
  name: 'Pikachu'
}])
.then(pokemon => {
  console.log(`${pokemon.length} pokemon created`);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});