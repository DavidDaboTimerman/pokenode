const Pokemon = require('../models/pokemonModel');

const getAllPokemon = () => Pokemon.find();

const createPokemon = ({ body: { name } }) => Pokemon.create({ name });

module.exports = {
  getAllPokemon,
  createPokemon,
};
