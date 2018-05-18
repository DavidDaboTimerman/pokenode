const Player = require('../models/playerModel');

const getAllPlayer = () => Player.find();

const createPlayer = ({ body: { name } }) => Player.create({ name });

module.exports = {
  getAllPlayer,
  createPlayer,
};
