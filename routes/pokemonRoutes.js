const express = require('express');
const Pokemon = require('../libs/pokemonLib');
const wrap    = require('../libs/wrap');

const router = express.Router();

router.get('/', wrap(Pokemon.getAllPokemon));
router.post('/', wrap(Pokemon.createPokemon));

module.exports = router;
