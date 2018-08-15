let favorites = [];

module.exports = {

  getFavorites(req, res){
    res.status(200).json(favorites)
  },
  
  addChar(req, res){
    favorites.push(req.body);
    res.status(200).json(favorites);
  },

  deleteChar(req, res){
    // console.log(req.params);
    deleteId = req.params.id;
    // console.log(deleteId);
    let index = favorites.findIndex(char => char.id == deleteId);
    favorites.splice(index, 1);
    res.status(200).json(favorites);
  },

  updateName(req, res){
    console.log(req.body);
    favorites.forEach(char => char.id == req.params.id && Object.assign(char, req.body))
    // console.log(favorites);
    return res.status(200).json(favorites);
  }
}