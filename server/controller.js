const axios = require('axios');

let favorites = [];
let characters = [];

axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => characters = response.data.results);

function getCharacters(req, res){
  res.status(200).json(characters)
}

function getFavorites(req, res){
  res.status(200).json(favorites)
}

function addChar(req, res){
  favorites.push(req.body);
  res.status(200).json(favorites);
}

function deleteChar(req, res){
  // console.log(req.params);
  deleteId = req.params.id;
  // console.log(deleteId);
  let index = favorites.findIndex(char => char.id == deleteId);
  favorites.splice(index, 1);
  res.status(200).json(favorites);
}

function updateName(req, res){
  console.log(req.body);
  favorites.forEach(char => char.id == req.params.id && Object.assign(char, req.body))
  // console.log(favorites);
  return res.status(200).json(favorites);
}

module.exports = {
  getCharacters,
  getFavorites,
  addChar,
  deleteChar,
  updateName
}